import { useContext, useEffect } from "react";
import logo from "../assets/Images/logo1.png";
import { HiMiniMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Hooks/ThemeContext";

function Header() {
  // const [toggle, setToggle] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme: ", theme);
  }, []);

  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="logo" width={60} height={60} />
      <div className="flex p-2 mx-5 w-full bg-slate-100 items-center rounded-full ">
        <HiMiniMagnifyingGlass />
        <input
          type="text"
          placeholder="Search games"
          className="px-2 bg-transparent outline-none text-black w-full"
        />
      </div>
      <div className="">
        {theme == "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-100 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-100 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
