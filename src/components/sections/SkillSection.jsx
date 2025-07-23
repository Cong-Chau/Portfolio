import { Code, Database, Github, Library, PenTool, Star } from "lucide-react";
import SkillCard from "../cards/SkillCard";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { translations } from "../../utils/translation.js";

function SkillSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const frontend = ["HTML", "CSS", "JavaScript"];
  const framework = ["React", "Handlebars"];
  const styling = ["Tailwind CSS"];
  const tools = ["GitHub", "Postman"];
  const backend = ["Node.js", "Express", "MySQL", "Java Spring", "SQL Server"];
  const skills = [t.creativeThinking, t.problemSolving, t.selfLearning];
  return (
    <div className="flex flex-col items-center justify-center text-center w-full p-8 mt-16">
      <h2 className="font-bold text-3xl text-white">{t.skills}</h2>
      <div className="grid grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
        <SkillCard icon={Code} title={t.frontendSkills} skills={frontend} />
        <SkillCard icon={Library} title={t.frameworks} skills={framework} />
        <SkillCard icon={PenTool} title={t.styling} skills={styling} />
        <SkillCard icon={Github} title={t.tools} skills={tools} />
        <SkillCard icon={Database} title={t.backendSkills} skills={backend} />
        <SkillCard icon={Star} title={t.softSkills} skills={skills} />
      </div>
    </div>
  );
}

export default SkillSection;
