import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { ThemeContext } from "./Hooks/ThemeContext";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme == "dark" ? "bg-[#151515]" : "bg-[#F6F5F5]"
        } min-h-[100vh]`}
      >
        <Header onSearch={handleSearch} />
        <Home searchTerm={searchTerm} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
