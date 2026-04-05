import { ArrowBigRight, ChevronRight, Search } from "lucide-react";
import Products from "./Products";
import NavBar from "../components/common/NavBar";

const Homepage = () => {
  return (
    <div className="xl:w-360 w-full h-full flex flex-col justify-center items-center">
      
      <div className="xl:w-280.5 w-full h-full p-5">
        <NavBar/>
        <div className="w-full flex flex-col">
          <h2 className="text-[36px] font-bold">Our Collection Of Products</h2>
          <div className="relative w-full h-14 border rounded-full overflow-hidden my-9">
            <input
              type="search"
              className="w-full px-4 h-full outline-none"
              placeholder="Search An Item"
              name="search"
            />
            <div className="text-white absolute top-1 rounded-full right-1 size-12 flex justify-center items-center bg-[#a6a6a6] ">
              <Search/>
            </div>
          </div>
          <h3 className="font-bold mb-1">Showing 1–12 of 24 item(s)</h3>

          <p className="text-zinc-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="w-full grid grid-cols-3 gap-8 mt-6">
            <Products/>
        </div>

        <div className="w-full flex h-full justify-center items-center flex-col">

          <div className="w-124.5 flex flex-col justify-center mt-16">
            <div className="w-full h-full font-semibold text-md flex justify-center items-center my-10">
              <h2>Showing 1–12 of 24 item(s)</h2>
            </div>

            <div className="w-full border">

            </div>

            <div className="w-full h-full flex justify-center items-center my-10">
              <button className="w-45 flex gap-2 bg-black rounded-full text-white py-4 justify-center items-center font-bold text-lg">
              Load More <ChevronRight />{" "}
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
