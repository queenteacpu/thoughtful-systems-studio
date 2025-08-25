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
      <FeaturedProjects />
      <HarmoniaFramework />
      <ResearchShowcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
