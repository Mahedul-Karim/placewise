import React from "react";
import Svg from "../util/Svg";

const Checkbox = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <input type="checkbox" className="absolute w-8 h-8 opacity-0" />
        <div className="border-[1px] border-solid border-neutral rounded-full w-5 h-5 cursor-pointer flex items-center justify-center">
          <Svg />
        </div>
        <label className="block h-full">Beach</label>
      </div>
      <span>9999</span>
    </div>
  );
};

export default Checkbox;
