const ResearchShowcase = () => {
  const research = [
    {
      title: "Emotional Intelligence in System Design",
      type: "Research Paper",
      description: "Exploring how emotional intelligence principles can be integrated into technical system architecture to create more intuitive and responsive user experiences.",
      year: "2024",
      status: "Published"
    },
    {
      title: "The Psychology of Digital Workflows",
      type: "Case Study",
      description: "A deep dive into how cognitive load and decision fatigue affect user productivity in enterprise software environments.",
      year: "2023",
      status: "Featured"
    },
    {
      title: "Adaptive Systems Theory",
      type: "Conceptual Framework",
      description: "A novel approach to building systems that learn and evolve based on user behavior patterns and organizational changes.",
      year: "2024",
      status: "In Progress"
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
                  </div>
                  
                  <h3 className="text-heading text-2xl mb-4 text-foreground">
                    {item.title}
                  </h3>
                  
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="lg:w-32 flex lg:flex-col gap-3">
                  <button className="flex-1 lg:flex-none text-primary font-medium hover:text-primary/80 transition-gentle text-sm">
                    Read More →
                  </button>
                  <button className="flex-1 lg:flex-none text-muted-foreground hover:text-foreground transition-gentle text-sm">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-body text-muted-foreground mb-6">
            Interested in collaborating on research or discussing these topics?
          </p>
          <button className="border border-primary text-primary px-8 py-4 rounded-full text-body font-medium hover-lift bg-white/50 backdrop-blur-sm">
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResearchShowcase;