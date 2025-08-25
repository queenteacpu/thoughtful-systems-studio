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
        
        {/* Clean Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="group relative bg-card rounded-lg shadow-soft border border-border/50 overflow-hidden hover-lift transition-smooth flex flex-col"
            >
              {/* Colored Top Border */}
              <div 
                className="h-1 w-full"
                style={{ backgroundColor: project.borderColor }}
              />
              
              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Project Title */}
                <div className="mb-6">
                  <h3 className="text-heading text-2xl font-semibold mb-2 text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-body text-muted-foreground mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* Action Button */}
                <button 
                  className="w-full py-3 px-6 rounded-md font-medium text-sm transition-smooth hover:opacity-90"
                  style={{ 
                    backgroundColor: project.borderColor,
                    color: 'white'
                  }}
                >
                  View Project
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