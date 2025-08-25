const HarmoniaFramework = () => {
  const principles = [
    {
      title: "Human-Centered Design",
      description: "Every system begins with understanding human needs, behaviors, and aspirations."
    },
    {
      title: "Systems Thinking",
      description: "Viewing challenges through interconnected relationships and emergent properties."
    },
    {
      title: "Adaptive Architecture",
      description: "Building flexible structures that evolve with changing requirements and contexts."
    },
    {
      title: "Empathetic Technology",
      description: "Technology that responds to and enhances human emotional and cognitive experiences."
    }
  ];

  return (
    <section className="py-20 section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl lg:text-5xl mb-6 text-foreground">
            The Harmonia Framework
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            A conceptual approach to building systems that harmonize human needs 
            with technological capabilities, creating solutions that feel natural 
            and purposeful.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {principles.map((principle, index) => (
            <div 
              key={principle.title}
              className="p-8 bg-gradient-project rounded-2xl shadow-soft hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium text-sm flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-heading text-xl mb-3 text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-body font-medium hover-lift shadow-soft">
            Learn More About Harmonia
          </button>
        </div>
      </div>
    </section>
  );
};

export default HarmoniaFramework;