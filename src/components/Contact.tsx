const Contact = () => {
  return (
    <section className="py-20 section-padding">
      <div className="container-narrow text-center">
        <h2 className="text-display text-4xl lg:text-5xl mb-6 text-foreground">
          Let's build the next solution{" "}
          <span className="text-primary italic">together</span>
        </h2>
        
        <p className="text-body-large text-muted-foreground max-w-2xl mx-auto mb-12">
          Whether you're tackling a complex systems challenge, exploring new 
          approaches to human-centered design, or looking for a thought partner 
          in your next big project, I'd love to connect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:hello@example.com"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-body font-medium hover-lift shadow-soft inline-block"
          >
            Send me an email
          </a>
          
          <a 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-8 py-4 rounded-full text-body font-medium hover-lift bg-white/50 backdrop-blur-sm inline-block"
          >
            Connect on LinkedIn
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-body text-muted-foreground">
            Currently available for strategic consulting, system architecture reviews, 
            and collaborative research projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;