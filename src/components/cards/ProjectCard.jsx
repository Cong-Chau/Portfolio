import { Github } from "lucide-react";

function ProjectCard({
  title,
  completeTime,
  description,
  contribution,
  skills,
  link,
}) {
  const handleLinkClick = () => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="flex flex-col items-start text-left h-full bg-black/10 backdrop-blur-md text-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <div>
          <h1 className="text-lg font-bold mb-2">{title}</h1>
        </div>
        <div>
          <p className="text-sm text-white/70 flex items-center gap-2 mb-2">
            <span className="text-base">📅</span>
            {completeTime}
          </p>
        </div>
        <div>
          <span className="text-sm text-white/90 mb-2 block">
            {description}
          </span>
        </div>
        <div>
          <span className="text-sm bg-sky-500/10 border-l-4 border-sky-400 text-sky-300 px-3 py-2 rounded mb-4 block">
            <span className="text-sky-400 font-bold">Đóng góp: </span>
            {contribution}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 justify-start">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-white/40 bg-white/10 rounded-full px-3 py-1 text-sm hover:bg-white/20 transition-transform duration-200 hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-4 w-full flex justify-center">
          <button
            className="mt-auto border border-sky-400 text-sky-400 px-4 py-2 rounded-md text-sm font-semibold flex items-center justify-center gap-2 hover:bg-sky-400 hover:text-black transition"
            onClick={handleLinkClick}
          >
            <Github className="w-4 h-4" />
            <span>Xem chi tiết</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
