import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchAreas from "@/components/ResearchAreas";
import AiAnalysisSection from "@/components/AiAnalysisSection";
import Contact from "@/components/Contact";
import FooterVideo from "@/components/FooterVideo";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ResearchAreas />
        <AiAnalysisSection />
        <Contact />
        <FooterVideo />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
