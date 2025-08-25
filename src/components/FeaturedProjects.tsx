const projects = [
  {
    name: "Cashmere",
    subtitle: "Next-Generation Retail Platform",
    year: "2024",
    category: "Retail Technology",
    status: "Live",
    description: "Elegant point-of-sale system that transforms retail transactions into seamless experiences. Built with modern UX principles and real-time processing capabilities for enterprise retail environments.",
    highlights: [
      "40% faster transaction processing",
      "Real-time inventory synchronization",
      "AI-powered sales analytics",
      "Seamless multi-location management"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
    metrics: "Processing 50K+ daily transactions",
    demoUrl: "#",
    caseStudyUrl: "#",
    accent: "156 35% 45%",
    borderColor: "hsl(156 35% 45%)"
  },
  {
    name: "VibeVault",
    subtitle: "AI-Powered Music Discovery",
    year: "2024", 
    category: "Music Technology",
    status: "Beta",
    description: "Music discovery platform that creates personal soundscapes through AI-driven recommendations and social listening experiences. Connecting music lovers through intelligent curation.",
    highlights: [
      "2M+ songs analyzed and categorized",
      "Personalized mood-based playlists",
      "Social listening experiences",
      "Real-time collaborative queues"
    ],
    technologies: ["Python", "TensorFlow", "React", "GraphQL", "MongoDB"],
    metrics: "95% user satisfaction rate",
    demoUrl: "#",
    caseStudyUrl: "#",
    accent: "205 40% 50%",
    borderColor: "hsl(205 40% 50%)"
  },
  {
    name: "HRMNY",
    subtitle: "People-First HR Platform",
    year: "2023",
    category: "Enterprise Solutions",
    status: "Live",
    description: "Human resources management platform that puts people first, featuring intelligent analytics and empathetic workforce solutions. Designed for modern, distributed teams.",
    highlights: [
      "£583M in operational savings quantified",
      "360° employee wellness tracking",
      "Predictive turnover analytics",
      "Bias-free performance reviews"
    ],
    technologies: ["Vue.js", "Django", "PostgreSQL", "Elasticsearch", "Docker"],
    metrics: "Used by 500+ companies globally",
    demoUrl: "#",
    caseStudyUrl: "#",
    accent: "25 45% 55%",
    borderColor: "hsl(25 45% 55%)"
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
        
        {/* Professional Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="group relative bg-card rounded-lg shadow-soft border border-border/50 overflow-hidden hover-lift transition-smooth"
            >
              {/* Colored Top Border */}
              <div 
                className="h-1 w-full"
                style={{ backgroundColor: project.borderColor }}
              />
              
              {/* Card Content */}
              <div className="p-6">
                {/* Header with Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                      {project.category}
                    </span>
                    <span 
                      className="px-2 py-1 rounded-full text-xs font-medium bg-opacity-10"
                      style={{ 
                        backgroundColor: `${project.borderColor}20`,
                        color: project.borderColor 
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                
                {/* Project Title */}
                <div className="mb-4">
                  <h3 className="text-heading text-xl font-semibold mb-1 text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-body text-muted-foreground mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Highlights Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                    HIGHLIGHTS
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: project.borderColor }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="mb-6">
                  <p className="text-xs font-medium text-muted-foreground">
                    {project.metrics}
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <button 
                    className="w-full py-2.5 px-4 rounded-md font-medium text-sm transition-colors"
                    style={{ 
                      backgroundColor: project.borderColor,
                      color: 'white'
                    }}
                  >
                    Launch App
                  </button>
                  <button className="w-full py-2 px-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;