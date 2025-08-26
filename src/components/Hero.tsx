
import heroImage from "@/assets/hero-abstract.jpg";
import ImageGenerator from "./ImageGenerator";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Image Generator Component */}
      <ImageGenerator />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Abstract geometric and organic composition representing human-system intersection" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center section-padding container-narrow">
        <h1 className="text-display text-5xl sm:text-6xl lg:text-7xl mb-6 text-foreground">
          I design and deliver{" "}
          <span className="text-primary italic">human-centered systems</span>{" "}
          that tackle complex problems
        </h1>
        
        <p className="text-body-large text-muted-foreground max-w-2xl mx-auto mb-8">
          Bridging technology and human experience through thoughtful architecture, 
          systems thinking, and a deep understanding of what people truly need.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-body font-medium btn-glow shadow-soft">
            Explore My Work
          </button>
          <button className="border border-primary text-primary px-8 py-4 rounded-full text-body font-medium hover-lift bg-white/50 backdrop-blur-sm subtle-border">
            Connect With Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
