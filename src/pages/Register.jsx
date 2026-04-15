import { Eye, EyeClosed } from "lucide-react";

import { NavLink } from "react-router";
import { useState } from "react";

const Register = () => {
  const [active, setActive] = useState({
    confirm: false,
    password: false,
  });
  return (
    <div className="w-full h-screen justify-center items-center flex flex-col">
      <div className=" w-full flex h-full justify-center items-center p-7">
        <div className="w-[1200px] border border-zinc-300 h-fit flex rounded-lg overflow-hidden">
          <div className="w-full h-full px-10 py-7">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl lg:text-[36px]">Signup</h2>
              <p className="text-zinc-300 lg:text-[16px] text-sm gap-2 flex">
                Already Have An Account.
                <NavLink
                  className={
                    "text-black decoration-1 underline font-semibold cursor-pointer"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </p>
            </div>

            <div className="w-full h-full  flex-col mt-5 lg:gap-5 gap-1 grid lg:grid-cols-2">
              <div>
                <h2>FullName</h2>
                <input
                  type="text"
                  className="w-full h-10 px-5 border rounded-full border-zinc-300 mb-5"
                  placeholder=""
                />
              </div>

              <div>
                <h2>Email</h2>
                <input
                  type="email"
                  className="w-full h-10 px-5 border rounded-full border-zinc-300 mb-5"
                  placeholder="michael.joe@xmail.com "
                />
              </div>

              <div>
                <h2> Password</h2>
                <div className="relative w-full h-10 flex items-center justify-center">
                  <input
                    type={active.password ? "text" : "password"}
                    className="w-full h-full px-5 border rounded-full border-zinc-300 "
                    placeholder="****"
                  />
                  <div
                    onClick={() => {
                      setActive((prev) => ({
                        ...prev,
                        password: !prev.password,
                      }));
                    }}
                    className="absolute right-3 top-2 text-zinc-400 cursor-pointer"
                  >
                    {active.password ? <EyeClosed /> : <Eye />}
                  </div>
                </div>
              </div>

              <div className="mt-5 lg:mt-0">
                <h2>Confirm Password</h2>
                <div className="relative w-full h-10 flex items-center justify-center ">
                  <input
                    type={active.confirm ? "text" : "password"}
                    className="w-full h-full px-5 border rounded-full border-zinc-300 "
                    placeholder="****"
                  />
                  <div
                    onClick={() => {
                      setActive((prev) => ({
                        ...prev,
                        confirm: !prev.confirm,
                      }));
                    }}
                    className="absolute right-3 top-2 text-zinc-400 cursor-pointer"
                  >
                    {active.confirm ? <EyeClosed /> : <Eye />}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-10 mb-10 mt-5">
              <div className="text-[#666666] flex gap-2 my-2 flex items-center">
                <input className="" type="checkbox" />
                <p className="text-xs md:text-md ">I have read and agreed to the Terms of Service and Privacy Policy</p>
              </div>
              <button className="w-full h-full border rounded-full bg-black text-white cursor-pointer ">
                Create Account
              </button>
            </div>
          </div>
          <div className="w-full  bg-gray-500 ">
            <img
              className="w-full object-cover h-full"
              src="/public/productsImg.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
