"use client";
import Button from "@/components/ui/button/ButtonOutline";
import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";

const CommentForm = () => {
  const [rating, setRating] = useState(1);
  return (
    <div>
      <h2 className="text-2xl font-[600] pb-2 border-b-[1px] border-dashed border-border mt-4">
        Write a review
      </h2>
      <form className="mt-4">
        <label className="text-xl block mb-1 font-[600]">Rating:</label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((num, ind) =>
            rating >= num ? (
              <FaStar
                color="#363aed"
                size={20}
                key={ind}
                onClick={() => setRating(num)}
                className="cursor-pointer"
              />
            ) : (
              <FaRegStar
                color="#363aed"
                size={20}
                key={ind}
                onClick={() => setRating(num)}
                className="cursor-pointer"
              />
            )
          )}
        </div>
        <div className="mt-2">
          <label className="text-xl block mb-1 font-[600]">Review:</label>
          <textarea
            className="bg-grey border border-border border-solid rounded-2xl py-3 px-5 w-full focus:outline-none"
            rows={5}
          />
        </div>
        <Button styles="bg-primary text-white font-[500]">Submit</Button>
      </form>
    </div>
  );
};

export default CommentForm;
