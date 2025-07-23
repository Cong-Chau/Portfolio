import React from "react";
import Header from "../components/sections/Header";
import HeroSection from "../components/sections/HeroSection";
import SkillSection from "../components/sections/SkillSection";
import ObjectiveSection from "../components/sections/ObjectiveSection";
import ProjectSection from "../components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "../components/sections/Footer";

function Dashboard() {
  return (
    <>
      <div className="min-h-screen text-white bg-gray-800">
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
