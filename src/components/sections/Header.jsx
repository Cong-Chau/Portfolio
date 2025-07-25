import { ChevronDown, Settings } from "lucide-react";
import { useState, useEffect, useRef, act } from "react";
import { useDarkMode } from "../../contexts/DarkModeContext.jsx";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { translations } from "../../utils/translation.js";

export default function Header({
  onScrolltoHero,
  onScrolltoIntrodution,
  onScrolltoSkill,
  onScrolltoProject,
  onScrolltoContact,
  activeSection,
}) {
  const [isSettingOpen, setIsOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { language, toggleLanguage } = useLanguage();
  const dropdownRef = useRef(null);
  const t = translations[language];

  const toggleSetting = () => {
    setIsOpen(!isSettingOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isSettingOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSettingOpen]);

  return (
    <div className="z-50 fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md text-white p-2 md:p-4 flex items-center justify-between min-h-14">
      <div>
        <a
          onClick={() => {
            onScrolltoHero();
            window.location.reload();
          }}
          className="pl-2 md:pl-0 font-bold text-xl md:text-2xl hover:cursor-pointer"
        >
          {t.name}
        </a>
      </div>
      <nav className="flex items-center space-x-2 md:space-x-4 mr-2 md:mr-8">
        <a
          onClick={onScrolltoHero}
          className={`hidden md:block hover:cursor-pointer hover:scale-105 hover:bg-black/10 transition-transform duration-300 px-3 py-1 rounded-2xl ${
            activeSection === "hero" ? "border-b-2 border-yellow-400" : ""
          }`}
        >
          {t.home}
        </a>
        <a
          onClick={onScrolltoIntrodution}
          className={`hidden md:block hover:cursor-pointer hover:scale-105 hover:bg-black/10 transition-transform duration-300  px-3 py-1 rounded-2xl ${
            activeSection === "introdution"
              ? "border-b-2 border-yellow-400"
              : ""
          }`}
        >
          {t.about}
        </a>
        <a
          onClick={onScrolltoSkill}
          className={`hidden md:block hover:cursor-pointer hover:scale-105 hover:bg-black/10 transition-transform duration-300  px-3 py-1 rounded-2xl ${
            activeSection === "skills" ? "border-b-2 border-yellow-400" : ""
          }`}
        >
          {t.skills}
        </a>
        <a
          onClick={onScrolltoProject}
          className={`hidden md:block hover:cursor-pointer hover:scale-105 hover:bg-black/10 transition-transform duration-300  px-3 py-1 rounded-2xl ${
            activeSection === "projects" ? "border-b-2 border-yellow-400" : ""
          }`}
        >
          {t.projects}
        </a>
        <a
          onClick={onScrolltoContact}
          className={`hidden md:block hover:cursor-pointer hover:scale-105 hover:bg-black/10 transition-transform duration-300  px-3 py-1 rounded-2xl ${
            activeSection === "contact" ? "border-b-2 border-yellow-400" : ""
          }`}
        >
          {t.contact}
        </a>
        <div className="relative" ref={dropdownRef}>
          <button
            className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 p-2 rounded-full hover:bg-black/10 flex flex-row items-center justify-center"
            aria-label="Settings"
            onMouseDown={toggleSetting}
          >
            <Settings className="w-4 h-4 md:w-5 md:h-5" />
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          {isSettingOpen && (
            <div className="absolute right-0 mt-2 md:mt-4 w-44 md:w-48 bg-black/30 backdrop-blur-md text-white p-3 md:p-4 rounded-xl shadow-xl space-y-3 md:space-y-4 z-50">
              {/* dark mode toggle */}
              <div className="flex items-center justify-between text-sm">
                <span>{t.theme}</span>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`hover:cursor-pointer relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                    isDarkMode
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                      isDarkMode ? "translate-x-9" : "translate-x-1"
                    }`}
                  >
                    <span className="text-xs font-bold text-gray-800">
                      {isDarkMode ? "D" : "L"}
                    </span>
                  </div>
                </button>
              </div>
              {/* language toggle */}
              <div className="flex items-center justify-between text-sm">
                <span>{t.language}</span>
                <button
                  onClick={toggleLanguage}
                  className={`hover:cursor-pointer relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                    language === "en"
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                      language === "en" ? "translate-x-9" : "translate-x-1"
                    }`}
                  >
                    <span className="text-xs font-bold text-gray-800">
                      {language === "en" ? "En" : "Vi"}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
