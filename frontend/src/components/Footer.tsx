const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigation = [
    { name: "Projects", href: "#featured-projects" },
    { name: "Framework", href: "#harmonia-framework" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" }
  ];
  
  const social = [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "GitHub", href: "https://github.com" },
    { name: "Medium", href: "https://medium.com/@queenteanasima" },
    { name: "Email", href: "mailto:hello@example.com" }
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="section-padding container-wide">
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-heading text-2xl mb-4 text-foreground">
                Solutions Architect & Systems Thinker
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                Designing human-centered systems that bridge technology 
                and human experience through thoughtful architecture.
              </p>
            </div>
            
            {/* Navigation */}
            <div className="md:col-span-1">
              <h4 className="text-heading text-lg mb-4 text-foreground">
                Navigation
              </h4>
              <nav className="space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-body text-muted-foreground hover:text-primary transition-gentle"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Connect */}
            <div className="md:col-span-1">
              <h4 className="text-heading text-lg mb-4 text-foreground">
                Connect
              </h4>
              <nav className="space-y-3">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.name !== "Email" ? "_blank" : undefined}
                    rel={item.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="block text-body text-muted-foreground hover:text-primary transition-gentle"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        <div className="py-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-body text-muted-foreground">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <p className="text-body text-muted-foreground">
              Built with intention and care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;