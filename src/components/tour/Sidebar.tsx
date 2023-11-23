import React from "react";
import Filter from "../filter/Filter";

const Sidebar = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg px-4 py-4 flex flex-col gap-4 h-max pb-[40px]">
      <Filter />
    </div>
  );
};

export default Sidebar;
//bg-white rounded-2xl shadow-lg px-4 py-4 hidden lg:flex flex-col gap-4 h-max pb-[40px]