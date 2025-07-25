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
