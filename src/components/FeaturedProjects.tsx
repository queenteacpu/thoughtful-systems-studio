const projects = [
  {
    name: "Karishma",
    year: "2024",
    category: "Fintech UX Design",
    description: "Gen Z-focused budgeting concept exploring Pinterest-style mood boards for financial goals. A design exploration combining emotional wellness with practical money management.",
    highlights: ["Conceptual design system", "User journey mapping", "Emotional design framework", "Interactive prototype"],
    technologies: ["Figma", "Design Systems", "UX Research", "Prototyping"],
    status: "Prototype",
    demoUrl: "#",
    deckUrl: "#",
    useDesignSystem: true
  },
  {
    name: "VibeVault",
    year: "2024", 
    category: "Music Discovery",
    description: "Emotional music discovery platform concept that analyses mood and curates personalised playlists. Exploring the intersection of emotion and music technology.",
    highlights: ["Spotify API integration", "Mood detection research", "Playlist curation algorithm", "Interactive prototype"],
    technologies: ["Spotify API", "Machine Learning", "Audio Processing", "React"],
    status: "Prototype",
    demoUrl: "#",
    deckUrl: "#",
    useDesignSystem: true
  },
  {
    name: "HRMNY",
    year: "2023",
    category: "Social Care AI",
    description: "AI-powered workforce management concept for social care teams. Business case exploring how technology can reduce administrative burden whilst improving client outcomes.",
    highlights: ["£583M potential NHS savings", "40% admin reduction research", "GDPR compliance framework", "Stakeholder engagement"],
    technologies: ["AI/ML Research", "NHS Systems", "Compliance Design", "Service Design"],
    status: "Business Case",
    demoUrl: "#",
    deckUrl: "#",
    useDesignSystem: true
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 section-padding bg-gradient-subtle texture-overlay section-connector">
      <div className="container-wide">
        <div className="section-divider"></div>
        <div className="text-center mb-20">
          <h2 className="text-display text-4xl lg:text-5xl mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of technology and human needs through 
            thoughtful design and systems architecture.
          </p>
        </div>
        
        {/* Enhanced 3D Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <div 
                key={project.name}
                className="group relative stagger-animation"
              >
                {/* Advanced 3D Card with Ambient Effects */}
                <div className="bg-card rounded-lg border border-border shadow-soft h-full overflow-hidden card-3d gradient-border-animated ambient-glow texture-overlay">
                  {/* Animated Gradient Top Border */}
                  <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary animate-pulse"></div>
                
                <div className="p-6">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {project.status}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Project Title */}
                  <h3 className="text-heading text-xl font-semibold mb-2 text-foreground">
                    {project.name}
                  </h3>
                  
                  <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
                    {project.category}
                  </p>
                  
                  {/* Description */}
                  <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Highlights Section */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-foreground mb-3">
                      HIGHLIGHTS
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies Section */}
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-foreground mb-3">
                      TECHNOLOGIES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Buttons */}
                  <div className="space-y-3">
                    <button className="w-full px-4 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 btn-glow">
                      {project.status === 'Business Case' ? 'View Business Case' : 'View Prototype'}
                    </button>
                    <button className="w-full px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-lg hover:bg-muted subtle-border transition-smooth">
                      {project.status === 'Business Case' ? 'View Prototype' : 'View Design Process'}
                    </button>
                  </div>
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