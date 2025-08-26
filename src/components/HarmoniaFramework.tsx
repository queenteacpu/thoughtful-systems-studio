const HarmoniaFramework = () => {
  const principles = [
    {
      title: "Human-Centred Design",
      description: "Every system begins with deep understanding of human needs, behaviours, and aspirations. We prioritise empathy-driven research and inclusive design practices.",
      methods: ["Ethnographic research", "Journey mapping", "Accessibility auditing", "Co-design workshops"],
      application: "Used in Karishma to understand Gen Z financial anxieties and emotional triggers around money management."
    },
    {
      title: "Systems Thinking",
      description: "Viewing challenges through interconnected relationships and emergent properties. We map system dynamics to identify leverage points for meaningful change.",
      methods: ["Stakeholder mapping", "Systems dynamics", "Impact assessment", "Feedback loop analysis"],
      application: "Applied in HRMNY to understand complex NHS workflows and identify intervention points for maximum efficiency gains."
    },
    {
      title: "Adaptive Architecture",
      description: "Building flexible structures that evolve with changing requirements and contexts. We design for resilience and continuous improvement.",
      methods: ["Modular design systems", "Progressive enhancement", "A/B testing frameworks", "Continuous user feedback"],
      application: "Implemented in VibeVault's mood detection algorithms to adapt to individual user emotional patterns over time."
    },
    {
      title: "Empathetic Technology",
      description: "Technology that responds to and enhances human emotional and cognitive experiences. We bridge the gap between human intuition and digital capability.",
      methods: ["Emotional journey mapping", "Micro-interaction design", "Contextual computing", "Ethical AI principles"],
      application: "Explored across all projects to ensure technology feels natural and supportive rather than intrusive or demanding."
    }
  ];

  const methodology = [
    { phase: "Discover", focus: "Deep human insight gathering", tools: "Interviews, observation, system mapping" },
    { phase: "Define", focus: "Problem framing and opportunity identification", tools: "Synthesis, personas, system models" },
    { phase: "Design", focus: "Solution ideation and prototyping", tools: "Co-creation, rapid prototyping, testing" },
    { phase: "Deliver", focus: "Implementation and continuous improvement", tools: "Agile delivery, metrics, iteration" }
  ];

  return (
    <section className="py-24 section-padding bg-gradient-subtle texture-overlay section-connector">
      <div className="container-wide">
        <div className="text-center mb-20">
          <h2 className="text-display text-4xl lg:text-5xl mb-6 gradient-text">
            The Harmonia Framework
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto mb-8">
            A conceptual approach to building systems that harmonise human needs 
            with technological capabilities, creating solutions that feel natural 
            and purposeful.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>
        
        {/* Enhanced Core Principles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {principles.map((principle, index) => (
            <div 
              key={principle.title}
              className="p-8 glass-card rounded-2xl shadow-elegant interactive-card border border-border/20 stagger-animation ambient-glow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-heading text-xl mb-3 text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-body text-muted-foreground leading-relaxed mb-4">
                    {principle.description}
                  </p>
                  
                  {/* Methods */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-foreground mb-2">Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {principle.methods.map((method, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Application */}
                  <div className="border-l-2 border-accent pl-4">
                    <p className="text-sm text-muted-foreground italic">
                      {principle.application}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Process */}
        <div className="mb-16">
          <h3 className="text-heading text-2xl mb-8 text-center text-foreground">Design Process</h3>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {methodology.map((phase, index) => (
                <div key={phase.phase} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center text-primary font-semibold text-lg mx-auto mb-4 relative z-10">
                    {index + 1}
                  </div>
                  <h4 className="text-heading text-lg mb-2 text-foreground">{phase.phase}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{phase.focus}</p>
                  <p className="text-xs text-muted-foreground">{phase.tools}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-body font-medium hover-lift shadow-soft transition-smooth">
            Explore Framework Applications
          </button>
        </div>
      </div>
    </section>
  );
};

export default HarmoniaFramework;