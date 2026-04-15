import React, { useState } from "react";
import Comment from "./Comment";

const Reviews = ({item}) => {
  const [active, setActive] = useState("reviews");
  return (
    <div div className={`${active ==='description'?"bg-white h-20":"bg-[#F8F8F8] h-full"} w-full  p-6`}>
      <div className="flex w-full gap-3">
        <button className={`${active ==='description' ? 'font-semibold':"font-normal"}`}
          onClick={() => {
            setActive("description");
          }}
        >
          Description
        </button>

        <button
          onClick={() => {
            setActive("reviews");
          }}
          className={`border-l  px-3 ${active==="reviews" ? 'font-semibold':"font-normal"}`}
        >
          Reviews
        </button>
      </div>

      <div className="w-full h-full ">
        {
            active === 'description' ? <div className="w-full h-20"></div> :  <Comment item={item.reviews}/>
        }
        
      </div>
    </div>
  );
};

export default Reviews;
