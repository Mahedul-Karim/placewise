"use client";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { LuBellRing } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiBookmarkCheck,CiHeart } from "react-icons/ci";
type Props = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const navData = [
  {
    label: "Personal Info",
    Icon: <FaRegUserCircle size={20} />,
  },
  {
    label: "Security",
    Icon: <GoShieldCheck size={20} />,
  },
  {
    label: "Chats",
    Icon: <IoChatbubbleOutline size={20} />,
  },
];

const shopping=[
    {
        label:'My Bookings',
        icon:<CiBookmarkCheck size={20} />
    },
]

const UserNav: React.FC<Props> = ({ active, setActive }) => {
  return (
    <>
    <div className="md:mb-6 md:pl-4">
      <span className="text-xs font-[500] hidden md:inline-block">Account</span>
      <nav className="flex flex-row md:flex-col gap-3 md:mt-2">
        {navData.map((nav, i) => (
          <button
            className={`flex items-center gap-2 ${
              active === i ? "text-primary" : ""
            }`}
            key={i}
            onClick={() => setActive(i)}
          >
            <span>{nav.Icon}</span>
            <span className="font-[500] text-[16px] hidden md:inline-block"> {nav.label}</span>
          </button>
        ))}
      </nav>
    </div>
    <div className="md:mb-6 md:pl-4">
      <span className="text-xs font-[500] hidden md:inline-block">Shopping</span>
      <nav className="flex flex-row md:flex-col gap-3 md:mt-2">
        {shopping.map((nav, i) => (
          <button
            className={`flex items-center gap-2 ${
              active === i+3 ? "text-primary" : ""
            }`}
            key={i+5}
            onClick={() => setActive(i+3)}
          >
            <span>{nav.icon}</span>
            <span className="font-[500] text-[16px] hidden md:inline-block"> {nav.label}</span>
          </button>
        ))}
      </nav>
    </div>
    </>
  );
};

export default UserNav;
