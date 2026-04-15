import React, { useEffect, useState } from "react";
import { useBasket } from "../stores/basketParse";
import { Minus, Plus, X } from "lucide-react";
import axios from "axios";

const Basket = () => {
  const { cart, removeFromCart, updateQuantity, addToBasket } = useBasket();
  const [formData, setFormdata] = useState([]);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const filteredProducts = formData.filter(
    (prod)=> !cart.some((item)=> item.id === prod.id)
  )

  const discount = 0;

  const total = subtotal - discount;

  
  const renderData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res.data);
      setFormdata(res.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    renderData();
  }, []);
  return (
    <>
      <div className="w-full h-full flex md:flex-row flex-col mt-4 gap-7 p-12">
        <div className="flex-2 border w-full h-full rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="w-full flex justify-between p-2 text-white bg-zinc-500">
                <th className="w-full flex-2">products</th>
                <th className="w-full flex-1">Price</th>
                <th className="w-full flex-1">Quantity</th>
                <th className="w-full flex-1">Total</th>
              </tr>
            </thead>

            <tbody className="text-zinc-400">
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="w-full flex justify-between  p-2 items-center border-b border-zinc-300"
                >
                  <td
                    onClick={() => {
                      removeFromCart(item.id);
                    }}
                    className="mx-1 cursor-pointer"
                  >
                    <X />
                  </td>
                  <td className="flex items-center  mx-1">
                    <img
                      className="size-7 bg-zinc-400"
                      src={item.images?.[0] || "Not image Found"}
                      alt=""
                    />
                  </td>
                  <td className="w-full flex-2 text-xs md:text-[16px] lg:text-[18px]">
                    {item.title}
                  </td>
                  <td className="w-full flex justify-center items-center flex-1">
                    ${item.price}
                  </td>
                  <td className="w-full flex justify-center items-center flex-1">
                    <div className="w-25 h-10 border rounded-2xl flex items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center ">
                        <Minus
                          onClick={() => updateQuantity(item.id, "dec")}
                          className="size-5"
                        />
                      </div>
                      <div className="w-full h-full flex items-center justify-center text-lg text-black">
                        {item.quantity}
                      </div>
                      <div className="w-full h-full flex items-center justify-center">
                        <Plus
                          onClick={() => updateQuantity(item.id, "inc")}
                          className="size-5"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="w-full flex justify-center items-center flex-1">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex-1 border w-full h-full rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="w-full flex justify-between p-2 text-white bg-zinc-500">
              <tr>
                <th className="w-full flex-2">Cart Total </th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex justify-between py-4 px-2">
                <td>SUBTOTAL</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr className="flex justify-between py-4 px-2">
                <td>DISCOUNT</td>
                <td>-</td>
              </tr>

              <tr className="flex justify-between py-4 px-2 font-bold text-black">
                <td>TOTAL</td>
                <td>${total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full p-12 flex flex-col justify-center items-center">
        <div className="w-full">
          <h2 className="text-[32px] font-bold my-4">You May Also Like</h2>
        </div>
        <div className=" md:flex-row flex-col md:w-full w-100 h-full flex gap-5 ">
          {filteredProducts.slice(0,4).map((item, index) => (
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
    </>
  );
};

export default Basket;
