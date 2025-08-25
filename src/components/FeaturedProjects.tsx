const projects = [
  {
    name: "Karishma",
    year: "2024",
    category: "Fintech UX",
    description: "Gen Z-focused budgeting app with Pinterest-style mood boards for financial goals. Combines emotional design with practical money management.",
    highlights: ["£2.3M pre-seed funding", "12K+ beta users", "Featured in TechCrunch"],
    technologies: ["React", "Emotional Design", "UX Research"],
    status: "Live",
    demoUrl: "#",
    deckUrl: "#",
    accent: "326 78% 66%" // Pink
  },
  {
    name: "VibeVault",
    year: "2024", 
    category: "Music Discovery",
    description: "Emotional music discovery platform that analyses your mood through facial recognition and curates personalised playlists.",
    highlights: ["50M+ songs analysed", "99.2% mood accuracy", "Spotify integration"],
    technologies: ["Spotify API", "Machine Learning", "Audio Processing"],
    status: "Prototype",
    demoUrl: "#",
    deckUrl: "#",
    accent: "186 83% 60%" // Teal
  },
  {
    name: "HRMNY",
    year: "2023",
    category: "Social Care AI",
    description: "AI-powered workforce management for social care teams. Reduces administrative burden whilst improving client outcomes.",
    highlights: ["£583M potential NHS savings", "40% admin reduction", "GDPR compliant"],
    technologies: ["AI/ML", "NHS Systems", "Compliance Design"],
    status: "Business Case",
    demoUrl: "#",
    deckUrl: "#",
    accent: "267 84% 73%" // Purple
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="group relative"
            >
              {/* Main Card */}
              <div className="bg-card rounded-lg border border-border shadow-soft h-full overflow-hidden">
                {/* Coloured Top Border */}
                <div className="h-1 w-full" style={{ backgroundColor: `hsl(${project.accent})` }}></div>
                
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
                          <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" 
                                style={{ backgroundColor: `hsl(${project.accent})` }}></span>
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
                    <button 
                      className="w-full px-4 py-3 text-sm font-medium text-white rounded-lg transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: `hsl(${project.accent})` }}
                    >
                      Launch App
                    </button>
                    <button className="w-full px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-lg hover:bg-muted transition-all duration-200">
                      View {project.status === 'Business Case' ? 'Business Case' : 'Pitch Deck'}
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