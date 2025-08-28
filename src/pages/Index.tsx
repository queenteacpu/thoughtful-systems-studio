import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import HarmoniaFramework from "@/components/HarmoniaFramework";
import ResearchShowcase from "@/components/ResearchShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="featured-projects">
        <FeaturedProjects />
      </div>
      <div id="harmonia-framework">
        <HarmoniaFramework />
      </div>
      <div id="research">
        <ResearchShowcase />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
