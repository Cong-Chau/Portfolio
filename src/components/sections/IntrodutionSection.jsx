import { forwardRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { translations } from "../../utils/translation.js";

const IntroductionSection = forwardRef((props, ref) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div ref={ref} className="scroll-mt-14">
      <div className="w-full px-4 py-16 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          {t.introduction}
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
              <svg
                className="w-6 h-6 mr-2 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              {t.aboutMe}
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t.introductionText}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-8 border border-yellow-500/20 shadow-xl">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6 flex items-center justify-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {t.objective}
            </h2>

            <div className="text-center mb-8">
              <p className="text-slate-300 text-xl font-medium">
                {t.objectiveText}
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white text-center mb-6">
                {t.careerRoadmap}
              </h4>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-600/30 hover:border-yellow-400/30 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></div>
                    <h5 className="text-white font-semibold">{t.shortTerm}</h5>
                  </div>
                  <p className="text-slate-400 text-sm">
                    {t.shortTermGoal ||
                      "6-12 tháng: Nâng cao kỹ năng React, học thêm Next.js và TypeScript"}
                  </p>
                </div>

                <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-600/30 hover:border-orange-400/30 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-orange-400 rounded-full mr-3"></div>
                    <h5 className="text-white font-semibold">{t.mediumTerm}</h5>
                  </div>
                  <p className="text-slate-400 text-sm">{t.mediumTermGoal}</p>
                </div>

                <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-600/30 hover:border-red-400/30 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                    <h5 className="text-white font-semibold">{t.longTerm}</h5>
                  </div>
                  <p className="text-slate-400 text-sm">{t.longTermGoal}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default IntroductionSection;
