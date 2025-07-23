import ProjectCard from "../cards/ProjectCard";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { translations } from "../../utils/translation.js";

function ProjectSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center w-full p-8 mt-16 mb-16">
        <h1 className="font-bold text-3xl text-white">{t.projectsHighlight}</h1>
        <div className="grid grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
          <ProjectCard
            title={t.project1.title}
            completeTime={t.project1.completeTime}
            description={t.project1.description}
            contribution={t.project1.contribution}
            skills={t.project1.skills}
            link="github.com/Cong-Chau/Restaurant"
          />
          <ProjectCard
            title={t.project2.title}
            completeTime={t.project2.completeTime}
            description={t.project2.description}
            contribution={t.project2.contribution}
            skills={t.project2.skills}
            link="github.com/Cong-Chau/GeneratedVideo"
          />
          <ProjectCard
            title={t.project3.title}
            completeTime={t.project3.completeTime}
            description={t.project3.description}
            contribution={t.project3.contribution}
            skills={t.project3.skills}
            link="github.com/Cong-Chau/AgentManager"
          />
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
