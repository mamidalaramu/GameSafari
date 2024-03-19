import { useContext, useState } from "react";
import logo from "../assets/Images/logo.png";
import searchIcon from "../assets/Images/search_img.svg";
import { HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Hooks/ThemeContext";
import PropTypes from "prop-types";

function Header({ onSearch }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [searchInput, setSearchInput] = useState("");

  const handleClick = () => {
    onSearch(searchInput);
    setSearchInput("");
  };

  return (
    <div className="flex items-center py-6 px-10">
      <div className="pr-4">
        <img src={logo} alt="logo" width={60} height={60} />
      </div>
      <div className="flex items-center">
        <h2 className=" text-white font-bold ">GAME-SAFARI</h2>
      </div>
      <div className="flex p-2 mx-3 md:mx-5 w-full md:w-[78%] bg-slate-100 items-center rounded-full ">
        <input
          className="px-2 bg-transparent outline-none text-black w-full focus:outline-none placeholder-gray-500 dark:placeholder-gray-300"
          placeholder="Search games"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <img
          className="w-8 h-6 cursor-pointer rounded-r-md p-2"
          src={searchIcon}
          alt="search-icon"
          onClick={handleClick}
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

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
