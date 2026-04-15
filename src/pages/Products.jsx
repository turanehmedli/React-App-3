import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Products = () => {
  const navigator = useNavigate()
  const [formData, setFormdata] = useState([]);
  const renderData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res.data)
      setFormdata(res.data.products)

      console.error(error);
    } catch (error) {
    }
  };
  useEffect(() => {

    renderData();
  }, []);
  return (
    <>
      {formData.map((item, index) => (
        <div onClick={()=>{
          navigator(`/details/${item.id}`)
        }} key={index} className="p-1 w-full h-full rounded-lg cursor-pointer">
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
    </>
  );

};

export default Products;