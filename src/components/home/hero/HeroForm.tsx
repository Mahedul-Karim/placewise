import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
const HeroForm = () => {
  return (
    <form className="bg-white p-4 grid grid-cols-1 lg:grid-cols-[1fr_1fr_120px] shadow-lg leading-tight rounded-md gap-4 mt-6">
      <div className="flex flex-col">
        <h3 className="text-[14px] font-[400]">Location</h3>
        <div className="py-2 border-b-[1px] border-solid border-border text-[16px] font-[600] flex items-center gap-2 overflow-hidden">
          <span>
            <IoLocationOutline color="#363aed" size={25} />
          </span>
          <input
            type="text"
            readOnly
            className="focus:outline-none placeholder:font-[300]"
            placeholder="Where are you going?"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[14px] font-[400]">From-To</h3>
        <div className="py-2 border-b-[1px] border-solid border-border text-[16px] font-[600] flex items-center gap-2">
          <span>
            <FaCalendarDays color="#363aed" size={25} />
          </span>
          <div>11/14/2023</div>
          <span>-</span>
          <div>11/15/2023</div>
        </div>
      </div>
      <button className="flex items-center gap-3 px-4 py-2 bg-primary justify-center text-white rounded-md">
        Search
      </button>
    </form>
  );
};

export default HeroForm;
