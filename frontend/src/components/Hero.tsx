
import heroImage from "@/assets/hero-abstract.jpg";
import { handleScrollToSection } from "@/utils/scrollUtils";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Abstract geometric and organic composition representing human-system intersection" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
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
          <button 
            onClick={handleScrollToSection('featured-projects')}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-body font-medium btn-glow shadow-soft hover:bg-primary/90 transition-smooth cursor-pointer"
          >
            Explore My Work
          </button>
          <button 
            onClick={handleScrollToSection('contact')}
            className="border border-primary text-primary px-8 py-4 rounded-full text-body font-medium hover-lift bg-white/50 backdrop-blur-sm subtle-border hover:bg-white/70 transition-smooth cursor-pointer"
          >
            Connect With Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
