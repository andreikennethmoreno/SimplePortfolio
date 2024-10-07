import "../assets/App.css"
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import AboutSection from "./AboutSection";
import FooterSection from "./FooterSection";
import ProjectSection from "./ProjectSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";
import SkillsSection from "./SkillsSection";


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