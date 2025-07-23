"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const getDefaultLanguage = () => {
    // Ưu tiên localStorage, sau đó là ngôn ngữ trình duyệt
    return (
      localStorage.getItem("language") ||
      (navigator.language.startsWith("vi") ? "vi" : "en")
    );
  };

  const [language, setLanguage] = useState(getDefaultLanguage());

  const toggleLanguage = () => {
    const newLang = language === "vi" ? "en" : "vi";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
