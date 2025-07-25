import { Github } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { translations } from "../../utils/translation.js";

function ProjectCard({
  title,
  completeTime,
  description,
  contribution,
  skills,
  link,
}) {
  const { language } = useLanguage();
  const t = translations[language];

  const handleLinkClick = () => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="flex flex-col items-start text-left h-full bg-black/10 backdrop-blur-md text-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-lg font-bold mb-2">{title}</h1>

        <p className="text-sm flex items-center gap-2 mb-2">
          <span className="text-base">📅</span>
          {completeTime}
        </p>

        <div className="text-sm flex-grow mb-2">{description}</div>

        {/* Wrapper để cố định dưới cùng */}
        <div className="mt-auto w-full">
          <div className="text-sm bg-sky-500/10 border-l-4 border-yellow-400 text-yellow-400 px-3 py-2 rounded mb-4">
            <span className="font-bold">{t.contribution}</span>
            {contribution}
          </div>

          <div className="flex flex-wrap gap-2 justify-start mb-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-white/40 bg-white/10 rounded-full px-3 py-1 text-sm hover:bg-white/20 transition-transform duration-200 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <button
              className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-md text-sm font-semibold flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-white transition"
              onClick={handleLinkClick}
            >
              <Github className="w-4 h-4" />
              <span>{t.detail}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
