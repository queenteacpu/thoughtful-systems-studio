const projects = [
  {
    name: "Cashmere",
    year: "2024",
    category: "Retail Innovation",
    description: "Revolutionary point-of-sale system that transforms every transaction into a *seamless digital experience*. Features real-time inventory synchronization, intelligent customer insights, and frictionless payment processing.",
    highlight: "Processing 10K+ transactions daily",
    icon: "⚡",
    demoUrl: "#",
    accent: "156 35% 45%"
  },
  {
    name: "VibeVault",
    year: "2024", 
    category: "AI Music Platform",
    description: "Next-generation music discovery engine that creates *personalized sonic landscapes* through advanced machine learning. Connects listeners with emerging artists through intelligent taste-matching algorithms.",
    highlight: "50M+ songs analyzed",
    icon: "🎵",
    demoUrl: "#",
    accent: "205 40% 50%"
  },
  {
    name: "HRMNY",
    year: "2023",
    category: "Workforce Intelligence",
    description: "Human-centered HR platform that revolutionizes *people operations* through empathetic design and predictive analytics. Reduces employee turnover by 40% through intelligent engagement insights.",
    highlight: "40% turnover reduction",
    icon: "👥",
    demoUrl: "#",
    accent: "25 45% 55%"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 section-padding bg-gradient-subtle">
      <div className="container-wide">
        <div className="text-center mb-20">
          <h2 className="text-display text-4xl lg:text-5xl mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of technology and human needs through 
            thoughtful design and systems architecture.
          </p>
        </div>
        
        {/* Streamlined Vertical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="group relative"
            >
              {/* Project Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium bg-card shadow-soft z-10" 
                   style={{ color: `hsl(${project.accent})` }}>
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Main Card */}
              <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift transition-smooth border border-border/50 h-full">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-heading text-2xl lg:text-3xl mb-2 text-foreground">
                    {project.name}
                  </h3>
                  
                  <div className="w-12 h-0.5 mb-4" 
                       style={{ backgroundColor: `hsl(${project.accent})` }}>
                  </div>
                </div>
                
                {/* Icon & Highlight */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-2xl animate-pulse">
                    {project.icon}
                  </span>
                  <div className="text-right">
                    <div className="text-xs font-medium text-primary animate-fade-in">
                      LIVE PROTOTYPE
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {project.highlight}
                    </div>
                  </div>
                </div>
                
                {/* Description with italic emphasis */}
                <div className="mb-8">
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {project.description.split('*').map((part, i) => 
                      i % 2 === 1 ? <em key={i} className="text-foreground font-medium">{part}</em> : part
                    )}
                  </p>
                </div>
                
                {/* Enhanced CTA */}
                <button className="group/btn w-full bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-xl px-6 py-4 text-primary font-medium hover:from-primary/20 hover:border-primary/40 transition-all duration-300 flex items-center justify-center">
                  <span>Launch Prototype</span>
                  <svg 
                    className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-smooth" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;