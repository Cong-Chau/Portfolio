import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { translations } from "../../utils/translation.js";

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <div className="w-full px-4 py-8 flex flex-col items-center justify-center text-center">
        <p className="font-bold text-yellow-400 text-sm">{t.copyright}</p>
        <span className="text-yellow-400 text-sm">{t.hobbies}</span>
      </div>
    </>
  );
}

export default Footer;
