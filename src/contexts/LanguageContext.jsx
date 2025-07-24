"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const getDefaultLanguage = () => {
    return (
      sessionStorage.getItem("language") ||
      (navigator.language.startsWith("vi") ? "vi" : "en")
    );
  };

  const [language, setLanguage] = useState(getDefaultLanguage());

  const toggleLanguage = () => {
    const newLang = language === "vi" ? "en" : "vi";
    setLanguage(newLang);
    sessionStorage.setItem("language", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
