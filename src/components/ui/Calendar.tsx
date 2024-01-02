"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decenmber",
];

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());

  const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDayOfMonth = new Date(
    currYear,
    currMonth,
    lastDateOfMonth
  ).getDay();
  const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

  let dateTag = "";

  const nextMonth = () => {
    if (currMonth === 11) {
      setDate((prev) => new Date(currYear + 1, 0, 1));
      setCurrYear((prev) => new Date(currYear+1,0,1).getFullYear());
      setCurrMonth((_) => date.getMonth());
    } else {
      setDate(new Date());
      setCurrMonth((prev) => prev + 1);
    }
  };

  const prevMonth = () => {
    if (currMonth === 0) {
        setDate((prev) => new Date(currYear - 1, 11, 1));
        setCurrYear((prev) => new Date(currYear-1,11,1).getFullYear());
        setCurrMonth((_) => new Date(currYear-1,11,1).getMonth());
      } else {
        setDate(new Date());
        setCurrMonth((prev) => prev - 1);
      }
  };
  
  for (let i = firstDayOfMonth; i > 0; i--) {
    dateTag += `<div>
        <button
        type="button"
          class="mb-4 transition-all duration-300 w-7 h-7 rounded-full text-[16px] disabled:text-border disabled:hover:bg-white hover:bg-primary hover:text-white"
          disabled
        >
          ${lastDateOfLastMonth - i + 1}
        </button>
      </div>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    dateTag += `<div>
    <button
    type="button"
      class="mb-4 transition-all duration-300 w-7 h-7 rounded-full text-[16px] disabled:text-border disabled:hover:bg-white hover:bg-primary hover:text-white"
    >
      ${i}
    </button>
  </div>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    dateTag += `<div>
    <button
      class="mb-4 transition-all duration-300 w-7 h-7 rounded-full text-[16px] disabled:text-border disabled:hover:bg-white hover:bg-primary hover:text-white"
      disabled
      type="button"
    >
      ${i - lastDayOfMonth + 1}
    </button>
  </div>`;
  }

  return (
    <div className="w-full lg:max-w-[450px] px-3 py-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="text-xl font-[600]">
          {MONTHS[currMonth]},{currYear}
        </div>
        <div className="flex items-center gap-3">
          <button
            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-primary hover:text-white disabled:hover:bg-grey disabled:text-border transition-all duration-300 disabled:bg-grey disabled:hover:text-border"
            disabled={currMonth === new Date().getMonth() && currYear === new Date().getFullYear()}
            onClick={prevMonth}
            type="button"
          >
            {" "}
            <FaChevronLeft />{" "}
          </button>
          <button
            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            onClick={nextMonth}
            type="button"
          >
            {" "}
            <FaChevronRight />{" "}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 mt-5 place-content-center">
        {DAYS.map((day, i) => (
          <div key={i} className="font-[500]">
            {day}
          </div>
        ))}
      </div>
      <div
        className="grid grid-cols-7"
        dangerouslySetInnerHTML={{ __html: dateTag }}
      ></div>
    </div>
  );
};

export default Calendar;
