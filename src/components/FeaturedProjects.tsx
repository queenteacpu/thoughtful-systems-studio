import cashmereImage from "@/assets/cashmere-preview.jpg";
import vibevaultImage from "@/assets/vibevault-preview.jpg";
import hrmnyImage from "@/assets/hrmny-preview.jpg";

const projects = [
  {
    name: "Cashmere",
    description: "Elegant point-of-sale system that transforms retail transactions into seamless experiences. Built with modern UX principles and real-time processing.",
    image: cashmereImage,
    tags: ["React", "Real-time", "UX Design"],
    demoUrl: "#"
  },
  {
    name: "VibeVault",
    description: "Music discovery platform that creates personal soundscapes through AI-driven recommendations and social listening experiences.",
    image: vibevaultImage,
    tags: ["AI/ML", "Social", "Music Tech"],
    demoUrl: "#"
  },
  {
    name: "HRMNY",
    description: "Human resources management platform that puts people first, featuring intelligent analytics and empathetic workforce solutions.",
    image: hrmnyImage,
    tags: ["Analytics", "People Ops", "Enterprise"],
    demoUrl: "#"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 section-padding bg-gradient-subtle">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl lg:text-5xl mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of technology and human needs through 
            thoughtful design and systems architecture.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="group bg-gradient-project rounded-2xl overflow-hidden shadow-soft hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.name} application interface`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-heading text-2xl mb-4 text-foreground">
                  {project.name}
                </h3>
                
                <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-accent/30 text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="text-primary font-medium hover:text-primary/80 transition-gentle group">
                  View Demo
                  <span className="inline-block ml-1 group-hover:translate-x-1 transition-smooth">→</span>
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