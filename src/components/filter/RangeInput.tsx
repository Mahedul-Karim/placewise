//@ts-nocheck
"use client";

import React, { useState, useRef, useEffect } from "react";

const RangeInput = () => {
  const [minValue, setMinValue] = useState(2800);
  const [maxValue, setMaxValue] = useState(6500);
  const rangeRef: any = useRef();
  const inputRef: any = useRef([]);

  const pushRef = (el) => inputRef.current.push(el);

  useEffect(() => {
    inputRef.current.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(inputRef.current[0].value);

        let maxVal = parseInt(inputRef.current[1].value);
        if (maxVal - minVal < 1000) {
          if (e.target.classList.contains("range-min")) {
            inputRef.current[0].value = maxVal - 1000;
          } else {
            inputRef.current[1].value = minVal + 1000;
          }
        } else {
          setMinValue(inputRef.current[0].value);

          setMaxValue(inputRef.current[1].value);

          rangeRef.current.style.left =
            (minVal / inputRef.current[0].max) * 100 + "%";

          rangeRef.current.style.right =
            100 - (maxVal / inputRef.current[1].max) * 100 + "%";
        }
      });
    });
  }, []);

  return (
    <div>
      <h3 className="text-[20px] font-[400] mb-4">Pricing scale</h3>
      <div className="relative w-full h-[10px] bg-border rounded-[15px]">
        <div
          className="absolute left-[28%] right-[37%] h-[10px] bg-primary rounded-[15px]"
          ref={rangeRef}
        ></div>
      </div>
      <div className="relative">
        <input
          type="range"
          className="min__value range__input range-min"
          min="0"
          max="10000"
          defaultValue={"2800"}
          step="100"
          ref={pushRef}
        />
        <input
          type="range"
          className="max__value range__input"
          min="0"
          max="10000"
          defaultValue={"6500"}
          step="100"
          ref={pushRef}
        />
      </div>
    </div>
  );
};

export default RangeInput;
