import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { handleScrollToSection } from "@/utils/scrollUtils";

const ResearchShowcase = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const research = [
    {
      title: "Emotional Intelligence in System Design",
      type: "Research Paper",
      description: "Exploring how emotional intelligence principles can be integrated into technical system architecture to create more intuitive and responsive user experiences.",
      year: "2024",
      status: "Published",
      pdfUrl: "https://drive.google.com/file/d/1YHOXyGXVoW_PVgXU1v_s-CSTLG3vOnCe/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1YHOXyGXVoW_PVgXU1v_s-CSTLG3vOnCe"
    },
    {
      title: "The Psychology of Digital Workflows",
      type: "Case Study",
      description: "A deep dive into how cognitive load and decision fatigue affect user productivity in enterprise software environments.",
      year: "2023",
      status: "Featured",
      pdfUrl: "https://drive.google.com/file/d/11oyytS2CG6sSSIkijuc1XsG31n1UAAGL/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=11oyytS2CG6sSSIkijuc1XsG31n1UAAGL"
    },
    {
      title: "Adaptive Systems Theory",
      type: "Conceptual Framework",
      description: "A novel approach to building systems that learn and evolve based on user behavior patterns and organizational changes.",
      year: "2024",
      status: "In Progress",
      pdfUrl: "https://drive.google.com/file/d/1DZcN09-S5rnYV_tL8zJnJB4C7EOSyeJD/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1DZcN09-S5rnYV_tL8zJnJB4C7EOSyeJD"
    }
  ];

  return (
    <section className="py-20 section-padding bg-gradient-subtle texture-overlay">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl lg:text-5xl mb-6 gradient-text">
            Research & Emotional Intelligence
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Bridging academic research with practical application, exploring how 
            emotional intelligence and human psychology inform better system design.
          </p>
        </div>
        
        <div className="space-y-8">
          {research.map((item, index) => (
            <div 
              key={item.title}
              className="group glass-card rounded-2xl p-8 shadow-elegant interactive-card stagger-animation ambient-glow gradient-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-accent/30 text-accent-foreground rounded-full text-sm font-medium">
                      {item.type}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.year}
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {item.status}
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium flex items-center gap-1">
                      📄 PDF Available
                    </span>
                  </div>
                  
                  <h3 className="text-heading text-2xl mb-4 text-foreground">
                    {item.title}
                  </h3>
                  
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="lg:w-32 flex lg:flex-col gap-3">
                  <Dialog open={selectedArticle === index} onOpenChange={(open) => setSelectedArticle(open ? index : null)}>
                    <DialogTrigger asChild>
                      <button className="flex-1 lg:flex-none text-primary font-medium hover:text-primary/80 transition-gentle text-sm">
                        View Research →
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-semibold mb-4">
                          {item.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="relative w-full" style={{ paddingTop: "75%", boxShadow: "0 2px 8px rgba(63,69,81,0.16)", borderRadius: "8px", overflow: "hidden" }}>
                          <iframe 
                            loading="lazy" 
                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                            src={item.pdfUrl} 
                            allowFullScreen
                          />
                        </div>
                        <div className="flex justify-center gap-4">
                          <a 
                            href={item.downloadUrl} 
                            target="_blank" 
                            rel="noopener"
                            className="text-primary hover:text-primary/80 transition-gentle font-medium"
                          >
                            📄 Download PDF
                          </a>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-body text-muted-foreground mb-6">
            Interested in collaborating on research or discussing these topics?
          </p>
          <button 
            onClick={handleScrollToSection('contact')}
            className="border border-primary text-primary px-8 py-4 rounded-full text-body font-medium hover-lift bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-smooth cursor-pointer"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResearchShowcase;