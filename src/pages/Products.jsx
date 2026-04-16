import { ChevronRight, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Products = () => {
  const navigator = useNavigate();

  const [formData, setFormdata] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 10;

  const renderData = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );

      setFormdata(prev => [...prev, ...res.data.products]);
      setTotal(res.data.total);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    renderData();
  }, [skip]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {formData.map(item => (
          <div
            key={item.id}
            onClick={() => navigator(`/details/${item.id}`)}
            className="p-1 w-full h-full rounded-lg cursor-pointer"
          >
            <img
              className="mb-3 bg-[#a6a6a6] rounded-lg"
              src={item.images?.[0]}
              alt=""
            />

            <h2 className="text-[22px] font-medium">{item.title}</h2>

            <div className="w-full flex justify-between items-center mt-2">
              <p className="font-bold text-[14px]">{item.price}$</p>

              <button
                onClick={(e) => e.stopPropagation()}
                className="size-7 flex border rounded-full justify-center items-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-[500px] flex flex-col justify-center mt-16">

          
          <div className="w-full font-semibold text-md flex justify-center items-center my-6">
            <h2>
              Showing {formData.length} of {total} products
            </h2>
          </div>

          <div className="w-full border"></div>

          
          <div className="w-full flex justify-center items-center my-10">
            <button
              onClick={() => setSkip(prev => prev + limit)}
              className="w-52 flex gap-2 bg-black rounded-full text-white py-4 justify-center items-center font-bold text-lg"
            >
              Load More
              <ChevronRight />
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Products;