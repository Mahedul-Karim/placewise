"use client";
import Link from "next/link";
import React from "react";
type Props = {
  to: string;
  label: string;
  icon: string;
  active: boolean;
};
const NavLinks: React.FC<Props> = ({ to, label, icon, active }) => {
  return (
    <Link
      href={to}
      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 hover:bg-primary hover:text-white ${
        active ? "bg-primary text-white" : ""
      }`}
    >
      <span dangerouslySetInnerHTML={{ __html: icon }} className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );
};

export default NavLinks;
