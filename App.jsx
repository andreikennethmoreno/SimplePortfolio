import "../assets/App.css"
import HeroSection from "./src/components/HeroSection";
import NavBar from "./src/components/NavBar";
import AboutSection from "./src/components/AboutSection";
import FooterSection from "./src/components/FooterSection";
import ProjectSection from "./src/components/ProjectSection";
import EducationSection from "./src/components/EducationSection";
import ContactSection from "./src/components/ContactSection";
import SkillsSection from "./src/components/SkillsSection";


function App () {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <SkillsSection/>
      <AboutSection/>
      <ProjectSection />
      <EducationSection/>
      <ContactSection />
      <FooterSection/>

    </>
  )
}

export default App;