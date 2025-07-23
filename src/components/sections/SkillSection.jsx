import { Code, Database, Github, Library, PenTool, Star } from "lucide-react";
import SkillCard from "../cards/SkillCard";

function SkillSection() {
  const frontend = ["HTML", "CSS", "JavaScript"];
  const framework = ["React", "Handlebars"];
  const styling = ["Tailwind CSS"];
  const tools = ["GitHub", "Postman"];
  const backend = ["Node.js", "Express", "MySQL", "Java Spring", "SQL Server"];
  const skills = ["Tư duy sáng tạo", "Giải quyết vấn đề", "Tự học"];
  return (
    <div className="flex flex-col items-center justify-center text-center w-full p-8 mt-16">
      <h2 className="font-bold text-3xl">Kỹ Năng</h2>
      <div className="grid grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
        <SkillCard icon={Code} title="Frontend" skills={frontend} />
        <SkillCard icon={Library} title="Framework" skills={framework} />
        <SkillCard icon={PenTool} title="Styling" skills={styling} />
        <SkillCard icon={Github} title="Tools" skills={tools} />
        <SkillCard icon={Database} title="Backend" skills={backend} />
        <SkillCard icon={Star} title="Kỹ Năng Mềm" skills={skills} />
      </div>
    </div>
  );
}

export default SkillSection;
