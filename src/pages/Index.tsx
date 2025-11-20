import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechJourney from "@/components/TechJourney";
import Experience from "@/components/Experience";
import SkillsConstellation from "@/components/SkillsConstellation";
import CodingShowcase from "@/components/CodingShowcase";
import PersonalityBadges from "@/components/PersonalityBadges";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen transition-colors duration-500">
      <ThemeSwitcher />
      <Hero />
      <About />
      <Skills />
      <TechJourney />
      <SkillsConstellation />
      <CodingShowcase />
      <Experience />
      <PersonalityBadges />
      <Education />
      <Awards />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
