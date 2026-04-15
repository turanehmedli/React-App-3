import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import NavBar from "../common/NavBar";
import {
  Box,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  Star,
  Truck,
} from "lucide-react";
import axios from "axios";
import Reviews from "../common/Reviews";
import { useBasket } from "../../stores/basketParse";

const ProductsDetail = () => {
  const { addToBasket } = useBasket();
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [active, setActive] = useState(false);
  const [rating, setRating] = useState(Number(productData.rating));
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount((prev) => (prev === productData.stock ? prev : prev + 1));
  };

  const minus = () => {
    setCount((prev) => (prev === 1 ? prev : prev - 1));
  };

  const fetchProductsId = async () => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);

    console.log(res.data);
    setProductData(res.data);
  };

  useEffect(() => {
    fetchProductsId();
  }, []);
  return (
    <div className="xl:w-[1240px] w-full  min-h-screen h-fit flex flex-col justify-center items-center">
      <div className="w-full h-full mt-10 p-4 flex flex-col">
        <div className="flex ">
          <p className="flex">
            <span className="text-zinc-400 flex">
              <NavLink to="/">Product Listing</NavLink> <ChevronRight />
            </span>
            Dummy Product Page
          </p>
        </div>

        <div className="w-full h-full lg:flex-row flex-col flex justify-between gap-5 lg:items-center my-5">
          <div className="lg:w-100 h-fit flex lg:flex-col flex-row gap-5 lg:p-3">
            {productData.images?.map((img,index) => (
                <img
                  key={index}
                  src={img}
                  className="lg:w-full lg:h-full size-57 object-cover cursor-pointer bg-[#a6a6a6] rounded-md"
                ></img>
              )) || "img Not found"}
          </div>

          <div className="w-full  bg-[#a6a6a6] rounded-md">
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
                    onClick={() =>
                      setRating((prev) => (prev === star ? star - 1 : star))
                    }
                    fill={
                      star <= Math.round(productData.rating || 0)
                        ? "yellow"
                        : "gray"
                    }
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
                <button
                  onClick={() =>
                    addToBasket({
                      ...productData,
                      quantity: count,
                    })
                  }
                  className="w-full py-2 hover:bg-black hover:text-white border transition-all duration-300 flex justify-center items-center rounded-full text-xl cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
              <button className="w-full border rounded-full py-2 text-xl font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                Buy Now
              </button>

              <div className="flex flex-col gap-5 mt-10 text-zinc-400">
                <div className="flex gap-2  items-center">
                  <p>
                    <Truck className="size-8 " />
                  </p>{" "}
                  Free worldwide shipping on all orders over $100
                </div>

                <div className="flex gap-2  items-center">
                  <p>
                    <Box className="size-8 " />
                  </p>
                  Delivers in: 3-7 Working Days Shipping & Return
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <Reviews item={productData} />
      </div>
    </div>
  );
};

export default ProductsDetail;
