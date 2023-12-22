"use client";
import React from "react";
type Props = {
  type: string;
  label: string;
  value?: string | number | null;
  onChange?: any;
};
const Input: React.FC<Props> = ({ type, label, value, onChange }) => {
  return (
    <div className="flex flex-col relative w-full">
      <input
        type={type}
        className={`focus:outline-none peer w-full bg-transparent relative z-[2] border border-solid px-3 py-2 rounded-md focus:border-primary border-border`}
        value={value!}
        onChange={onChange}
      />
      <label
        className={`absolute bg-white peer-focus:-translate-y-[18px] peer-focus:px-2 peer-focus:text-[12px] transition-all duration-300  left-[10px] peer-focus:text-primary top-[10px] peer-focus:!z-[3] ${
          value ? "-translate-y-[18px] text-[12px] !z-[3] px-2" : "text-[14px] z-[1]"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
