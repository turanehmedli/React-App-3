import {
  Lock,
  PersonStanding,
  User,
  ChevronDown,
  Moon,
  Sun,
  Handbag,
  Menu,
} from "lucide-react";
import logo from "../../assets/logo-70.svg";
import { useTheme } from "../../stores/themeStore";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import SelectLanguage from "./SelectLanguage";

const NavBar = () => {
  const [act, setAct] = useState(false);
  const navigate = useNavigate();
  const { isDarkModeOn, toggleDarkMode } = useTheme();
  const [seen, setSeen]=useState(false)


  return (
    <div className="w-full p-3 flex justify-between border-b border-zinc-500 items-center relative">
      <img
        src={logo}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />
      <div className={`sm:flex sm:gap-10 cursor-pointer font-bold items-center ease-in-out duration-300   ${seen ? 'flex gap-1 flex-col absolute left-0 top-16   bg-white z-10  w-full p-5 border border-zinc-300':"hidden"}`}>
        <p className={`${seen? "border-b py-5 px-5 border-zinc-300 ease-in-out duration-300 rounded-2xl w-full hover:bg-zinc-300":""}`}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <div className={`w-full flex gap-1 items-center ${seen? "border-b py-5 px-5 ease-in-out duration-300 rounded-2xl border-zinc-300 w-full hover:bg-zinc-300":""}`}>
          <p >Category</p> {seen ? "" :<ChevronDown />}
        </div>

        <p className={`${seen? "border-b py-5 px-5 border-zinc-300 ease-in-out duration-300 rounded-2xl w-full hover:bg-zinc-300":""}`}>Contact</p>

        <p className={`${seen? "border-b py-5 px-5 border-zinc-300 ease-in-out duration-300 rounded-2xl w-full hover:bg-zinc-300":""}`}>Blog</p>
      </div>

      <SelectLanguage/>

      <div className="flex sm:hidden relative">
        <Menu onClick={()=>{
          setSeen(prev=> !prev)
        }} className="z-20 hover:border-2 size-10 p-1  rounded-lg text-xl "/> 
      </div>

      <div className="sm:flex gap-5 hidden ">
        <div className="sm:flex items-center hidden gap-2">
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
        <div className="flex relative ">
          <User
            onClick={() => {
              setAct((prev) => !prev);
            }}
            fill="black"
          />{" "}
          <ChevronDown
            className={`${act ? "rotate-90 transition-all duration-200" : "rotate-0 transition-all duration-200"}`}
            onClick={() => {
              setAct((prev) => !prev);
            }}
          />
          <div
            className={`bg-white absolute w-40 h-25 p-2 top-7 right-0 shadow-lg shadow-blue-200 rounded-2xl ease-in-out overflow-hidden transform duration-200  ${act ? "opacity-100" : "opacity-0"}`}
          >
            <NavLink
              to="/login"
              className="text-black block w-full border h-10 flex items-center px-3 rounded-2xl hover:shadow-lg"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="text-black block w-full border h-10 flex items-center px-3 rounded-2xl mt-1 hover:shadow-lg"
            >
              Register
            </NavLink>
          </div>
        </div>

        <button>
          <Handbag
            className="cursor-pointer"
            onClick={() => {
              navigate("/basket");
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
