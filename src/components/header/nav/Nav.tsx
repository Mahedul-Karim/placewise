import Link from "next/link";
import React from "react";
import { navData } from "@/components/util/data";

const Nav = () => {
  return (
    <nav className="hidden self-stretch sm:flex justify-center items-center">
      <ul className="flex items-center gap-5 text-[17px]">
        {navData.map((nd) => (
          <li key={nd.label}>
            <Link href={nd.to} className="text-neutral font-[500]">
              {nd.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
