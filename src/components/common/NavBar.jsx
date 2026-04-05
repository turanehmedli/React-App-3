import { Lock, PersonStanding, User, ChevronDown, Moon, Sun } from "lucide-react";
import logo from "../../assets/logo-70.svg";
import { useTheme } from "../../stores/themeStore";

const NavBar = () => {
    const {isDarkModeOn, toggleDarkMode} = useTheme()
  return (
    <div className="w-full p-3 flex justify-between items-center">
      <img src={logo} alt="" />
      <div className="flex gap-10 cursor-pointer font-bold">
        <p>Home</p>
        <p>Category</p>
        <div className="flex items-center gap-1">
          <p>Contact Us </p> <ChevronDown />
        </div>
        <p>Blog</p>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className={`flex w-15 h-7 border px-1 items-center border-zinc-400 rounded-full cursor-pointer`}
          >
            <div
              className={`flex justify-center items-center size-5 rounded-full transform translate-all duration-300 ${isDarkModeOn ? "bg-zinc-300 " : "bg-stone-900"} ${isDarkModeOn ? "translate-x-8 rotate-90" : "translate-x-0"}`}
            >
              {isDarkModeOn ? (
                <Sun className="size-3 text-black" />
              ) : (
                <Moon className="size-3 text-white" />
              )}
            </div>
          </button>
        </div>
        <div>
          <User fill="black" />
        </div>
        <button>
          <Lock />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
