import React from "react";
import Header from "../components/sections/Header";
import HeroSection from "../components/sections/HeroSection";
import SkillSection from "../components/sections/SkillSection";
import ObjectiveSection from "../components/sections/ObjectiveSection";
import ProjectSection from "../components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "../components/sections/Footer";

import { useDarkMode } from "../contexts/DarkModeContext"; // ✔ đúng

function Dashboard() {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <div
        className={`min-h-screen ${
          isDarkMode
            ? "text-white bg-animated-gradient-dark"
            : "text-gray-700 bg-animated-gradient-light"
        }`}
      >
        <Header />
        <main className="pt-14">
          <HeroSection />
          <ObjectiveSection />
          <SkillSection />
          <ProjectSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
