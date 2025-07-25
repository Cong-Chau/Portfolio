import { Github, Mail, Phone } from "lucide-react";
import { forwardRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { translations } from "../../utils/translation.js";

const ContactSection = forwardRef((props, ref) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      ref={ref}
      className="scroll-mt-14 w-full px-4 py-16 flex flex-col items-center justify-center text-center text-white bg-black/10 backdrop-blur-md"
    >
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
        {t.contactMe}
      </h1>
      <p className="mt-4 max-w-xl text-sm text-white pl-8 pr-8">
        {t.contactDescription}
      </p>
      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        <div className="flex flex-col items-center w-60 bg-black/10 backdrop-blur-md rounded-lg py-6 px-4 shadow-lg hover:scale-105 hover:bg-black/20 transition-colors duration-200">
          <Mail className="w-8 h-8 text-white mb-2" />
          <p className="font-semibold text-white">Email</p>
          <span className="text-sm text-white mt-1">{t.email}</span>
        </div>

        <div className="flex flex-col items-center w-60 bg-black/10 backdrop-blur-md rounded-lg py-6 px-4 shadow-lg hover:scale-105 hover:bg-black/20 transition-colors duration-200">
          <Phone className="w-8 h-8 text-white mb-2" />
          <p className="font-semibold text-white">{t.phoneTitle}</p>
          <span className="text-sm text-white mt-1">{t.phone}</span>
        </div>

        <div className="flex flex-col items-center w-60 bg-black/10 backdrop-blur-md rounded-lg py-6 px-4 shadow-lg hover:scale-105 hover:bg-black/20 transition-colors duration-200">
          <Github className="w-8 h-8 text-white mb-2" />
          <p className="font-semibold text-white">Github</p>
          <span className="text-sm text-white mt-1">{t.github}</span>
        </div>
      </div>
    </div>
  );
});

export default ContactSection;
