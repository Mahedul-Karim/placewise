import React from "react";
import Button from "../ui/button/ButtonOutline";
import { FaStar } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
const TourCard = () => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg gap-4">
      <div className="rounded-2xl overflow-hidden relative">
        <img
          src="/featured-package-1.webp"
          alt="featured image"
          className="block w-full h-auto object-cover"
        />
        <div className="absolute top-[10px] left-[10px] flex items-center justify-between w-[90%]">
          <Button styles="bg-green invisible sm:visible">16 places</Button>
          <Button styles="bg-yellow invisible sm:visible">4 activites</Button>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-[600]">Dubai,UAE</h3>
          <p className="flex items-center gap-1">
            <FaStar color="#363aed" size={15} />
            <span className="block">4.8</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-4 pb-4 border-b-[1px] border-dashed border-neutral">
          <div className="flex items-center gap-2">
            <span>
              <CiClock2 color="#363aed" />
            </span>
            <span>4 days 5 night</span>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <LuUsers color="#363aed" />
            </span>
            <span>Capacity 12</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-[20px] font-[600] text-primary">$6220</p>
          <Button outline>Book now</Button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
