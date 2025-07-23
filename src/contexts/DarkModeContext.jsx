import React, { createContext, useContext, useEffect, useState } from "react";

// 1. Tạo context
const DarkModeContext = createContext();

// 2. Provider để bao toàn bộ app
export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 3. Lấy dark mode từ hệ thống
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// 4. Hook để dùng context
export function useDarkMode() {
  return useContext(DarkModeContext);
}
