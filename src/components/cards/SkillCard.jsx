// components/SkillCard.jsx
import React from "react";

function SkillCard({ icon: Icon, title, skills }) {
  return (
    <div className="flex flex-col bg-black/10 backdrop-blur-md text-white p-6 rounded-xl shadow-lg w-full max-w-sm">
      <div className="flex items-center space-x-2 mb-3">
        <Icon className="h-6 w-6 text-yellow-400" />
        <span className="text-lg font-semibold">{title}</span>
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
    </div>
  );
}

export default SkillCard;
