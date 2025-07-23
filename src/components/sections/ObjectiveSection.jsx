import React from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { translations } from "../../utils/translation.js";

function ObjectiveSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center w-full p-8 mt-16 text-white">
        <div>
          <h1 className="font-bold text-3xl">{t.objective}</h1>
        </div>
        <div className="bg-black/20 backdrop-blur-md p-6 rounded-lg mt-8 max-w-2xl mx-auto">
          <p className="text-lg">{t.objectiveText}</p>
        </div>
      </div>
    </>
  );
}

export default ObjectiveSection;
