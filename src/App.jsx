import "./assets/App.css"
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import ProjectSection from "./components/ProjectSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";


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