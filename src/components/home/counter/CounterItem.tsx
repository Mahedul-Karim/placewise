import React from "react";

const CounterItem = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-center w-[80px] h-[80px] bg-primary-light rounded-full">
        <img
          src="/icon-complete.webp"
          alt="img"
          className="w-[40px] h-[40px] object-cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-[24px] font-[600]">10.6K</h3>
        <p className="font-[500]">Total tour packages</p>
      </div>
    </div>
  );
};

export default CounterItem;
