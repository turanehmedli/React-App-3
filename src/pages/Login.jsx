import { Eye, EyeClosed } from "lucide-react";
import NavBar from "../components/common/NavBar";
import { NavLink } from "react-router";
import { useState } from "react";

const Login = () => {
  const [active , setActive] = useState(false)
  return (
    <div className="w-full h-screen justify-center items-center flex flex-col">
      

      <div className=" w-full flex h-full justify-center items-center p-7">
        <div className="w-[1200px] border border-zinc-300 h-fit flex rounded-lg overflow-hidden">
          <div className="w-full h-full px-10 py-7">

            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl lg:text-[36px]">Login</h2>
              <p className="text-zinc-300 lg:text-[16px] text-sm">
                Do not have an account,{" "}
                <NavLink className={"text-black decoration-1 underline font-semibold cursor-pointer"} to="/register">
                  create a new one.
                </NavLink>
              </p>
            </div>

            <div className="w-full h-full flex flex-col mt-5 gap-1">
              <h2>Enter Your Email Or Phone</h2>
              <input type="text" className="w-full h-10 px-5 border rounded-full border-zinc-300 mb-5" placeholder="michael.joe@xmail.com " />

              <h2>Enter Your Password</h2>
              <div className="relative w-full h-10 flex items-center justify-center">
                <input type={active? "text": "password"} className="w-full h-full px-5 border rounded-full border-zinc-300 " placeholder="****" />
                <div onClick={()=>{
                  setActive(prev=> !prev)
                }} className="absolute right-3 top-2 text-zinc-400 cursor-pointer">{active? <EyeClosed/> :<Eye/> }</div>
              </div>

              <button className="w-full h-10 mt-5 border rounded-full bg-black text-white cursor-pointer">Login</button>

              <NavLink className={"text-center mt-5 text-sm underline cursor-pointer"} to='/forgotPassword'>Forgot Your Password</NavLink>
            </div>

            

          </div>
          <div className="w-full  bg-gray-500 ">
            <img className="w-full object-cover h-full" src="/public/productsImg.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
