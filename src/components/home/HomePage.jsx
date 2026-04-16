import { ChevronRight, Plus, Search } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  const renderData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
      console.log(res.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    renderData();
    console.log(data);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-screen flex flex-col justify-center items-center bg-zinc-500 text-white">
        <h2 className="sm:text-[40px] font-bold text-center">
          Crafting Comfort, Redefining Spaces. <br /> Your Home, Your Signature
          Style!
        </h2>
        <p className="text-sm text-center my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fringilla nunc in molestie <br /> feugiat. Nunc auctor consectetur
          elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur <br />{" "}
          adipiscing elit. Nulla fringilla nunc in molestie feugiat
        </p>

        <div className="border w-[344px] h-[56px]  rounded-full relative">
          <input
            className="w-full h-full outline-none px-6"
            type="search"
            placeholder="Search An Item"
          />

          <div className="right-1 top-1 flex justify-center items-center rounded-full absolute size-11 bg-black ">
            <Search className="" />
          </div>
        </div>
      </div>

      <div className="w-full h-screen p-5 flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center my-3">
          <h2 className="font-bold text-xl">Featured Products</h2>

          <p className="text-md text-zinc-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla <br /> nunc in molestie feugiat. Nunc auctor consectetur
            elit, quis pulvina.
          </p>
        </div>

        <div className="w-full h-fit grid grid-cols-4 gap-5">
          {data.slice(0, 4).map((item, index) => (
            <div
              onClick={() => {
                navigator(`/details/${item.id}`);
              }}
              key={index}
              className="p-1 w-full h-full rounded-lg cursor-pointer"
            >
              <img
                className="mb-3 bg-[#a6a6a6] rounded-lg"
                src={item.images?.[0] || "Image Not Found"}
                alt=""
              />
              <h2 className="text-[22px] font-medium">{item.title}</h2>
              <div className="w-full flex justify-between items-center mt-2">
                <p className="font-bold text-[14px]">{item.price}$</p>
                <button className="size-7 flex border rounded-full justify-center items-center hover:bg-black hover:text-white transition-all duration-300">
                  <Plus className="size-4"></Plus>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-fit p-5 flex flex-col justify-center items-center mt-45">
        <h2 className="text-xl font-bold ">View Our Range Of Categories</h2>
        <p className="text-zinc-400 text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh <br /> euismod tincidunt ut laoreet dolore magna aliquam.
        </p>
      </div>

      <div className="flex w-full h-[513px] gap-4 items-center justify-center px-10">
        <div className="w-full h-full  object-cover flex items-center justify-center bg-zinc-400">
          <img className="" src={data?.[4]?.images?.[0] || "no image data"} alt="" />
        </div>
        <div className="w-full h-[513px] flex flex-col items-center justify-between">
          <div className="w-[392px] h-[240px]  object-cover overflow-hidden bg-zinc-400">
            <img src={data?.[5]?.images?.[0] || "no image"} alt="" />
          </div>
          <div className="w-[392px] h-[240px] object-cover  overflow-hidden bg-zinc-400">
            <img size src={data?.[6]?.images?.[0] || "no image"} alt="" />
          </div>
        </div>

        <div className="w-full h-full  object-cover flex items-center justify-center bg-zinc-400">
          <img src={data?.[7]?.images?.[0] || "no image data"} alt="" />
        </div>
      </div>

      <div className="w-full  mt-10 p-5">
        <div className="w-full flex justify-between items-center">
          <div>
            <h2 className="font-bold text-xl">Most Popular Products</h2>
            <p className="text-zinc-300 my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla nunc in <br /> molestie feugiat. Nunc auctor consectetur
              elit, quis pulvina.
            </p>
          </div>

          <button
            className="border pl-4 pr-1 py-2 bg-black text-white rounded-full flex gap-3"
            onClick={() => {
              navigation("/products");
            }}
          >
            View All <ChevronRight />
          </button>
        </div>

        <div className="grid w-full h-full justify-center items-center grid-cols-4 gap-5">
          {data.slice(8, 16).map((item, index) => (
            <div
              onClick={() => {
                navigator(`/details/${item.id}`);
              }}
              key={index}
              className="p-1 w-full h-full rounded-lg cursor-pointer"
            >
              <img
                className="mb-3 bg-[#a6a6a6] rounded-lg"
                src={item.images?.[0] || "Image Not Found"}
                alt=""
              />
              <h2 className="text-[22px] font-medium">{item.title}</h2>
              <div className="w-full flex justify-between items-center mt-2">
                <p className="font-bold text-[14px]">{item.price}$</p>
                <button className="size-7 flex border rounded-full justify-center items-center hover:bg-black hover:text-white transition-all duration-300">
                  <Plus className="size-4"></Plus>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full py-20 bg-zinc-500 flex  justify-center items-center my-45">
        <div className="w-250 h-full flex justify-center items-center gap-20 md:flex-row flex-col md:justify-center md:items-center px-5">
          <div className="flex md:w-200  flex-col p-5 text-white text-xl">
            <h2 className="mb-5">
              Have a Look at Our Unique <br /> Selling Proportions
            </h2>
            <div>
              <button
                className="pl-4 pr-1 py-2 bg-black text-white rounded-full flex gap-3"
                onClick={() => {
                  navigation("/products");
                }}
              >
                View All <ChevronRight />
              </button>
            </div>
          </div>

          <div className="flex p-5 flex-col text-white">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in <br /> eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum <br /> nulla,
              ut commodo diam libero vitae erat.
            </h2>

            <div className="flex gap-3">
              <div className="flex flex-col">
                <span className="text-[40px]">99%</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                inventore libero esse ipsum fuga ea et quibusdam alias amet
                aliquid?
              </div>

              <div className="flex flex-col">
                <span className="text-[40px]">100%</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                inventore libero esse ipsum fuga ea et quibusdam alias amet
                aliquid?
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  flex p-5 flex-col">
        <div className="w-full flex justify-between items-center">
          <div>
            <h2 className="font-bold text-xl">Latest Ongoings</h2>
            <p className="text-zinc-300 my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla nunc in <br /> molestie feugiat. Nunc auctor consectetur
              elit, quis pulvina.
            </p>
          </div>

          <button
            className="border pl-4 pr-1 py-2 bg-black text-white rounded-full flex gap-3"
            onClick={() => {    
              navigation("/blogs");
            }}
          >
            Read All Blogs <ChevronRight />
          </button>
        </div>

            <div className="w-full text-center text-2xl my-4 font-bold text-red-500">
                Blogs olmadigi ucun ne yazacami bilenmedim
            </div>

      </div>
    </div>
  );
};

export default HomePage;
