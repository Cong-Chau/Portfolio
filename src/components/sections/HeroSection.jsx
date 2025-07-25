import { useRef, forwardRef } from "react";
import { Mail, Phone, Github, MapPin, Download, Map } from "lucide-react";
import chaudeptrai from "../../assets/images/chaudeptrai.png";

import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { translations } from "../../utils/translation.js";

const HeroSection = forwardRef((props, ref) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div ref={ref} className="scroll-mt-14 ">
      <div className="md:min-h-[calc(100vh-56px)] flex flex-col items-center justify-center text-center w-full p-8 bg-black/5 backdrop-blur-md hover:cursor-default">
        <div className="mb-6">
          <img
            src={chaudeptrai}
            alt=" "
            className="rounded-full w-40 h-40 md:w-80 md:h-80 object-cover shadow-lg"
          />
        </div>
        <div>
          <h1 className="font-bold text-3xl md:text-5xl mt-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            {t.name}
          </h1>
        </div>
        <div className="mt-4">
          <span className="text-1xl text-white">{t.title}</span>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8 justify-center md:space-x-24 text-white">
          <div className=" flex items-center space-x-2 text-lg hover:scale-105 transition-transform duration-200 hover:bg-black/10 transition-colors duration-200 px-3 py-1 rounded-2xl">
            <Mail />
            <span>{t.email}</span>
          </div>
          <div className=" flex items-center space-x-2 text-lg hover:scale-105 transition-transform duration-200 hover:bg-black/10 transition-colors duration-200 px-3 py-1 rounded-2xl">
            <Phone />
            <span>{t.phone}</span>
          </div>
          <div className=" flex items-center space-x-2 text-lg hover:scale-105 transition-transform duration-200 hover:bg-black/10 transition-colors duration-200 px-3 py-1 rounded-2xl">
            <Github />
            <span>{t.github}</span>
          </div>
          <div className=" flex items-center space-x-2 text-lg hover:scale-105 transition-transform duration-200 hover:bg-black/10 transition-colors duration-200 px-3 py-1 rounded-2xl">
            <MapPin />
            <span>{t.address}</span>
          </div>
        </div>
        <div className="mt-8">
          <button className="hover:cursor-pointer w-full h-12 flex items-center space-x-2 text-lg px-3 py-1 rounded-2xl border border-3 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors duration-200">
            <Download className="" />
            <span>{t.downloadCV}</span>
          </button>
        </div>
      </div>
    </div>
  );
});
export default HeroSection;
