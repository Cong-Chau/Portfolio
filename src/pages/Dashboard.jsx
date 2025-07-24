import { useRef, useEffect, useState } from "react";
import Header from "../components/sections/Header";
import HeroSection from "../components/sections/HeroSection";
import SkillSection from "../components/sections/SkillSection";
import IntrodutionSection from "../components/sections/IntrodutionSection";
import ProjectSection from "../components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "../components/sections/Footer";

import { useDarkMode } from "../contexts/DarkModeContext"; // ✔ đúng

function Dashboard() {
  const heroRef = useRef(null);
  const introdutionRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { ref: heroRef, id: "hero" },
    { ref: introdutionRef, id: "introdution" },
    { ref: skillsRef, id: "skills" },
    { ref: projectsRef, id: "projects" },
    { ref: contactRef, id: "contact" },
  ];

  const [activeSection, setActiveSection] = useState("");
  const isManualScrollRef = useRef(false);

  const scrollTo = (ref, sectionName) => {
    if (!ref.current) return;

    isManualScrollRef.current = true;
    setActiveSection(sectionName);
    ref.current.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isManualScrollRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrollRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.85 }
    );

    sectionRefs.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute("id", id);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const { isDarkMode } = useDarkMode();
  return (
    <>
      <div
        className={`hover:cursor-default min-h-screen ${
          isDarkMode
            ? "bg-animated-gradient-dark"
            : "bg-animated-gradient-light"
        }`}
      >
        <Header
          onScrolltoHero={() => scrollTo(heroRef, "hero")}
          onScrolltoIntrodution={() => scrollTo(introdutionRef, "introdution")}
          onScrolltoSkill={() => scrollTo(skillsRef, "skills")}
          onScrolltoProject={() => scrollTo(projectsRef, "projects")}
          onScrolltoContact={() => scrollTo(contactRef, "contact")}
          activeSection={activeSection}
        />
        <main className="pt-14">
          <HeroSection ref={heroRef} />
          <IntrodutionSection ref={introdutionRef} />
          <SkillSection ref={skillsRef} />
          <ProjectSection ref={projectsRef} />
          <ContactSection ref={contactRef} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
