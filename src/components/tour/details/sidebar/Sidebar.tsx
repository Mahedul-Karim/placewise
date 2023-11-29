import Button from "@/components/ui/button/ButtonOutline";
import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
const Sidebar = () => {
  return (
    <aside>
      <h3 className="text-xl block mb-2 font-[400]">Price</h3>
      <h2 className="text-2xl font-[600] mb-2">$499</h2>
      <form className="flex flex-col gap-3">
        <div className="bg-grey px-5 py-3 rounded-full border-[1px] border-solid border-border flex items-center justify-between">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-full"
            placeholder="Check In - Check Out"
          />
          <button className="block cursor-default" type="button">
            <FaCalendarDays size={20} />
          </button>
        </div>
        <div className="bg-grey px-5 py-3 rounded-full border-[1px] border-solid border-border flex items-center justify-between">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-full"
            placeholder="Guests"
          />
          <button className="block cursor-default" type="button">
            <LuUsers2 size={20} />
          </button>
        </div>
        <Button styles="bg-primary font-[400] text-white">Proceed booking</Button>
      </form>
    </aside>
  );
};

export default Sidebar;
