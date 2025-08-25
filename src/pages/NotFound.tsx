import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center section-padding">
        <h1 className="text-display text-6xl mb-6 text-foreground">404</h1>
        <p className="text-body-large text-muted-foreground mb-8">
          The page you're looking for seems to have wandered off the path.
        </p>
        <a 
          href="/" 
          className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-body font-medium hover-lift shadow-soft inline-block"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
