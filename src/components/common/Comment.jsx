import { ChevronRight, Star } from "lucide-react";
import React, { useState } from "react";

const Comment = ({ item }) => {
    const [rating, setRating]=useState(0)
  return (
    <div className="w-full h-full p-5  flex flex-col gap-5 text-black">
      {item?.map((items) => (
        <div
          key={items.id}
          className="w-full h-fit p-2 border border-[#D3D3D3] flex  flex-col gap-3 rounded-[14px] px-5 py-5"
        >
          <div className="w-full flex justify-between items-center">
            <h2 className="text-lg font-semibold">{items.reviewerName}</h2>

            <p>{items.rating}</p>
          </div>
          <h2 className="text-zinc-400">{items.comment}</h2>
        </div>
      ))}

      <div className="w-full h-fit bg-[#F2F2F2] rounded-[14px] p-9">
        <div className="flex w-full flex-col lg:flex-row h-full gap-7">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="youName">Your Name:</label>
            <input
              className="border px-4 py-2 rounded-full border-zinc-400 outline-none"
              type="text"
              placeholder="John Doe"
              name="youName"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email">Your Email:</label>
            <input
              className="border px-4 py-2 rounded-full border-zinc-400 outline-none"
              type="email"
              placeholder="person@gmail.com"
              name="email"
            />
          </div>
        </div>
        <div className="flex w-full h-fit gap-7 mt-6">
          <div className="w-full flex flex-col gap-2">
            <textarea
              className="border px-4 py-2 rounded-2xl max-h-50 border-zinc-400 outline-none"
              type="text"
              placeholder="John Doe"
              name="youName"
            />

            <div className="flex flex-col lg:flex-row w-full my-3 items-center justify-between ">
              <div className="flex gap-3 flex-col lg:flex-row">
                <label>Your Ratings:</label>
                {
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        className="cursor-pointer text-zinc-400"
                        key={star}
                        onClick={() =>  setRating(prev => prev === star ? star -1 : star)}
                        fill={star <= rating ? "yellow" : "gray"}
                      />
                    ))}
                  </div>
                }
              </div>

              <button className="flex border py-2 px-4 rounded-full bg-black text-white font-semibold mt-5">
                Post Reviews <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
