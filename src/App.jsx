import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./pages/dashboard.jsx";
import { DarkModeProvider } from "./contexts/DarkModeContext.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
function App() {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <Dashboard />
      </LanguageProvider>
    </DarkModeProvider>
  );
}

export default App;
