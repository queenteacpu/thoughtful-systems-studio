import React, { useState } from 'react';
import { toast } from "sonner";

interface GenerateImageParams {
  positivePrompt: string;
  model?: string;
  numberResults?: number;
  outputFormat?: string;
  CFGScale?: number;
  scheduler?: string;
  strength?: number;
  promptWeighting?: "compel" | "sdEmbeds";
  seed?: number | null;
  lora?: string[];
}

interface GeneratedImage {
  imageURL: string;
  positivePrompt: string;
  seed: number;
  NSFWContent: boolean;
}

class RunwareService {
  private ws: WebSocket | null = null;
  private apiKey: string | null = null;
  private connectionSessionUUID: string | null = null;
  private messageCallbacks: Map<string, (data: any) => void> = new Map();
  private isAuthenticated: boolean = false;
  private connectionPromise: Promise<void> | null = null;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.connectionPromise = this.connect();
  }

  private connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket("wss://ws-api.runware.ai/v1");
      
      this.ws.onopen = () => {
        console.log("WebSocket connected");
        this.authenticate().then(resolve).catch(reject);
      };

      this.ws.onmessage = (event) => {
        console.log("WebSocket message received:", event.data);
        const response = JSON.parse(event.data);
        
        if (response.error || response.errors) {
          console.error("WebSocket error response:", response);
          const errorMessage = response.errorMessage || response.errors?.[0]?.message || "An error occurred";
          toast.error(errorMessage);
          return;
        }

        if (response.data) {
          response.data.forEach((item: any) => {
            if (item.taskType === "authentication") {
              console.log("Authentication successful, session UUID:", item.connectionSessionUUID);
              this.connectionSessionUUID = item.connectionSessionUUID;
              this.isAuthenticated = true;
            } else {
              const callback = this.messageCallbacks.get(item.taskUUID);
              if (callback) {
                callback(item);
                this.messageCallbacks.delete(item.taskUUID);
              }
            }
          });
        }
      };

      this.ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        toast.error("Connection error. Please try again.");
        reject(error);
      };

      this.ws.onclose = () => {
        console.log("WebSocket closed, attempting to reconnect...");
        this.isAuthenticated = false;
        setTimeout(() => {
          this.connectionPromise = this.connect();
        }, 1000);
      };
    });
  }

  private authenticate(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        reject(new Error("WebSocket not ready for authentication"));
        return;
      }
      
      const authMessage = [{
        taskType: "authentication",
        apiKey: this.apiKey,
        ...(this.connectionSessionUUID && { connectionSessionUUID: this.connectionSessionUUID }),
      }];
      
      console.log("Sending authentication message");
      
      const authCallback = (event: MessageEvent) => {
        const response = JSON.parse(event.data);
        if (response.data?.[0]?.taskType === "authentication") {
          this.ws?.removeEventListener("message", authCallback);
          resolve();
        }
      };
      
      this.ws.addEventListener("message", authCallback);
      this.ws.send(JSON.stringify(authMessage));
    });
  }

  async generateImage(params: GenerateImageParams): Promise<GeneratedImage> {
    await this.connectionPromise;

    if (!this.ws || this.ws.readyState !== WebSocket.OPEN || !this.isAuthenticated) {
      this.connectionPromise = this.connect();
      await this.connectionPromise;
    }

    const taskUUID = crypto.randomUUID();
    
    return new Promise((resolve, reject) => {
      const message = [{
        taskType: "imageInference",
        taskUUID,
        model: params.model || "runware:100@1",
        width: 1024,
        height: 768,
        numberResults: params.numberResults || 1,
        outputFormat: params.outputFormat || "WEBP",
        steps: 4,
        CFGScale: params.CFGScale || 1,
        scheduler: params.scheduler || "FlowMatchEulerDiscreteScheduler",
        strength: params.strength || 0.8,
        lora: params.lora || [],
        ...params,
      }];

      if (!params.seed) {
        delete message[0].seed;
      }

      if (message[0].model === "runware:100@1") {
        delete message[0].promptWeighting;
      }

      console.log("Sending image generation message:", message);

      this.messageCallbacks.set(taskUUID, (data) => {
        if (data.error) {
          reject(new Error(data.errorMessage));
        } else {
          resolve(data);
        }
      });

      this.ws.send(JSON.stringify(message));
    });
  }
}

const ImageGenerator: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateHeroImage = async () => {
    if (!apiKey.trim()) {
      toast.error("Please enter your Runware API key");
      return;
    }

    setIsGenerating(true);
    
    try {
      const runwareService = new RunwareService(apiKey);
      
      const prompt = `Abstract sophisticated composition representing human-system intersection. Geometric foundation with technical grids, architectural blueprints, and systematic wireframe structures. Organic flowing curves representing human intuition overlaying the geometric base. Network nodes connected by natural pathways. Data visualization patterns that flow like water through structured frameworks. Clean lines morphing into organic forms at intersection points. Minimal color palette with soft blues, warm grays, and sage greens. High detail, elegant, editorial design aesthetic. Professional architectural visualization style.`;
      
      console.log("Generating hero image with prompt:", prompt);
      
      const result = await runwareService.generateImage({
        positivePrompt: prompt,
        model: "runware:100@1",
        numberResults: 1,
        outputFormat: "WEBP",
        CFGScale: 7,
        strength: 0.9
      });

      console.log("Generated image result:", result);

      // Download and replace the hero image
      const response = await fetch(result.imageURL);
      const blob = await response.blob();
      
      // Create a temporary URL and download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'hero-abstract.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success("Hero image generated! Please save it as 'hero-abstract.jpg' in src/assets/");
      
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error(`Failed to generate image: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-soft border subtle-border">
      <div className="space-y-3">
        <h3 className="text-body font-medium">Generate Hero Image</h3>
        <input
          type="password"
          placeholder="Enter Runware API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded text-sm"
        />
        <button
          onClick={generateHeroImage}
          disabled={isGenerating}
          className="w-full bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium disabled:opacity-50"
        >
          {isGenerating ? "Generating..." : "Generate New Hero Image"}
        </button>
        <p className="text-xs text-muted-foreground">
          Get your API key from{" "}
          <a href="https://runware.ai/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            runware.ai
          </a>
        </p>
      </div>
    </div>
  );
};

export default ImageGenerator;
