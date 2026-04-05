import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "../components/common/NavBar";
import { Box, ChevronRight, Heart, Minus, Plus, Star, Truck } from "lucide-react";

const ProductsDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [active, setActive] = useState(false);
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount((prev) => (prev === productData.stock ? prev : prev + 1));
  };

  const minus = () => {
    setCount((prev) => (prev === 1 ? prev : prev - 1));
  };

  const fetchProductsId = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (res.ok) {
      const data = await res.json();
      setProductData(data);
      console.log(data);
    }
  };

  useEffect(() => {
    fetchProductsId();
  }, []);
  return (
    <div className="xl:w-[1240px] w-full h-screen flex flex-col justify-center items-center p-5">
      <NavBar />
      <div className="w-full h-full mt-10 p-4 flex flex-col">
        <div className="flex ">
          <p className="flex">
            <span className="text-zinc-400 flex">
              Product Listing <ChevronRight />
            </span>
            Dummy Product Page
          </p>
        </div>

        <div className="w-full h-full md:flex-row flex-col flex justify-between gap-5 items-center my-5">
          <div className="w-100 h-full flex gap-5 md:flex-col flex-row">
            {productData.images
              ?.slice(1)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="w-full h-full object-cover cursor-pointer bg-[#a6a6a6] rounded-md"
                ></img>
              )) || "img Not found"}
          </div>

          <div className="w-full h-full bg-[#a6a6a6] rounded-md">
            <img
              className="object-cover w-full h-full"
              src={productData.images?.[0] || "No Image found"}
              alt=""
            />
          </div>

          <div className="w-full h-full">
            <div className="w-full flex items-center justify-between">
              <h2 className="font-bold text-[26px]">{productData.title}</h2>

              <Heart
                onClick={() => setActive((prev) => !prev)}
                className={`size-10 cursor-pointer`}
                fill={active ? "red" : "white"}
              />
            </div>
            <div className="w-full flex items-center  gap-2 border-zinc-300 border-b pb-10">
              <p className="text-[28px]">${productData.price}</p> |
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    className="cursor-pointer text-zinc-400"
                    key={star}
                    onClick={() => setRating(star)}
                    fill={star <= rating ? "yellow" : "gray"}
                  />
                ))}
              </div>
            </div>

            <div className="text-zinc-400 mt-10">{productData.description}</div>

            <div className="w-full flex flex-col my-10">
              <div className="w-full flex gap-3 my-4">
                <div className="flex gap border gap-5 py-2 px-4 rounded-full items-center cursor-pointer">
                  <Minus onClick={minus} />
                  <p className="text-2xl">{count}</p>
                  <Plus onClick={plus} />
                </div>
                <div className="w-full py-2 hover:bg-black hover:text-white border transition-all duration-300 flex justify-center items-center rounded-full text-xl cursor-pointer">
                  Add to Cart
                </div>
              </div>
              <button className="w-full border rounded-full py-2 text-xl font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                Buy Now
              </button>

              <div className="flex flex-col gap-5 mt-10 text-zinc-400">
                <div className="flex gap-2  items-center">
                  <p><Truck className="size-8 "/></p> Free worldwide shipping on all orders over $100
                </div>

                <div className="flex gap-2  items-center">
                  <p><Box className="size-8 "/></p>Delivers in: 3-7 Working Days Shipping & Return
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
