import { ChevronDown, Settings } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useDarkMode } from "../../contexts/DarkModeContext.jsx";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { translations } from "../../utils/translation.js";

export default function Header() {
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

    // Add event listener when dropdown is open
    if (isSettingOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSettingOpen]);

  return (
    <div className="z-50 fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md text-white p-4 flex items-center justify-between">
      <div>
        <a href="#" className="font-bold text-2xl">
          {t.name}
        </a>
      </div>
      <nav className="flex space-x-4 mr-8">
        <a
          href="#"
          className="hover:scale-105 hover:bg-black/10 transition-transform duration-300 px-3 py-1 rounded-2xl"
        >
          {t.home}
        </a>
        <a
          href="#"
          className="hover:scale-105 hover:bg-black/10 transition-transform duration-300  px-3 py-1 rounded-2xl"
        >
          {t.about}
        </a>
        <a
          href="#"
          className="hover:scale-105 hover:bg-black/10 transition-transform duration-300  px-3 py-1 rounded-2xl"
        >
          {t.skills}
        </a>
        <a
          href="#"
          className="hover:scale-105 hover:bg-black/10 transition-transform duration-300  px-3 py-1 rounded-2xl"
        >
          {t.projects}
        </a>
        <a
          href="#"
          className="hover:scale-105 hover:bg-black/10 transition-transform duration-300  px-3 py-1 rounded-2xl"
        >
          {t.contact}
        </a>
        <div className="relative" ref={dropdownRef}>
          <button
            className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 p-2 rounded-full hover:bg-black/10 flex flex-row items-center justify-center"
            aria-label="Settings"
            onMouseDown={toggleSetting}
          >
            <Settings className="w-5 h-5" />
            <ChevronDown className="w-5 h-5" />
          </button>
          {isSettingOpen && (
            <div className="absolute right-0 mt-4 w-48 bg-black/30 backdrop-blur-md text-white p-4 rounded-xl shadow-xl space-y-4 z-50">
              {/* dark mode toggle */}
              <div className="flex items-center justify-between text-sm">
                <span>{t.theme}</span>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 ${
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
                  className={`relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 ${
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
