const projects = [
  {
    name: "Cashmere",
    year: "2024",
    category: "Retail Technology",
    description: "Elegant point-of-sale system that transforms retail transactions into seamless experiences. Built with modern UX principles and real-time processing capabilities.",
    focus: "Real-time Architecture",
    tags: ["React", "Real-time", "UX Design", "Systems"],
    demoUrl: "#",
    accent: "156 35% 45%"
  },
  {
    name: "VibeVault",
    year: "2024", 
    category: "Music Technology",
    description: "Music discovery platform that creates personal soundscapes through AI-driven recommendations and social listening experiences.",
    focus: "AI-Driven Discovery",
    tags: ["AI/ML", "Social", "Music Tech", "Algorithms"],
    demoUrl: "#",
    accent: "205 40% 50%"
  },
  {
    name: "HRMNY",
    year: "2023",
    category: "Enterprise Solutions",
    description: "Human resources management platform that puts people first, featuring intelligent analytics and empathetic workforce solutions.",
    focus: "People-Centric Design",
    tags: ["Analytics", "People Ops", "Enterprise", "Ethics"],
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
                
                {/* Focus Area */}
                <div className="mb-6">
                  <span className="text-sm font-medium text-foreground">
                    {project.focus}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-accent/30 hover:text-accent-foreground transition-gentle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <button className="group/btn text-primary font-medium hover:text-primary/80 transition-gentle flex items-center">
                  <span>Explore Project</span>
                  <svg 
                    className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-smooth" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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