"use client";
import React, { useState, useRef, useEffect } from "react";

const RangeInput = () => {
  const [minValue, setMinValue] = useState(280);
  const [maxValue, setMaxValue] = useState(6500);
  const rangeRef: any = useRef();

  const rangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((maxValue - minValue) < 1000) {
      if (e.target.classList.contains("min__value")) {
        setMinValue(maxValue - 1000);
      }else{
        setMaxValue(minValue + 1000);
      }
      
    } else {
      if (e.target.classList.contains("min__value")) {
        setMinValue(+e.target.value);

        rangeRef.current.style.left =
          (+e.target.value / +e.target.max) * 100 + "%";
      }
      if (e.target.classList.contains("max__value")) {
        setMaxValue(+e.target.value);
        rangeRef.current.style.right =
          100 - (+e.target.value / +e.target.max) * 100 + "%";
      }
    }
  };

  return (
    <div>
      <h3 className="text-[20px] font-[400] mb-4">Pricing scale</h3>
      <div className="relative w-full h-[10px] bg-border rounded-[15px]">
        <div
          className="absolute left-[28%] right-[37%] h-[10px] bg-primary"
          ref={rangeRef}
        ></div>
      </div>
      <div className="relative">
        <input
          type="range"
          className="min__value"
          min="0"
          max="10000"
          value={minValue}
          onChange={(e) => rangeValue(e)}
        />
        <input
          type="range"
          className="max__value"
          min="0"
          max="10000"
          value={maxValue}
          onChange={(e) => rangeValue(e)}
        />
      </div>
    </div>
  );
};

export default RangeInput;
