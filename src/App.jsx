import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { ThemeContext } from "./Hooks/ThemeContext";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme == "dark" ? "bg-[#222831]" : "bg-[#F6F5F5]"
        } min-h-[100vh]`}
      >
        {/* h-[100vh] */}
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
