"use client";
import React from "react";
import { vendorNav } from "@/components/util/data";
import NavLinks from "./NavLinks";
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex flex-col pt-4 border-t border-dashed border-border gap-3 mt-3">
      {vendorNav.map((nav, i) => (
        <NavLinks
          to={nav.to}
          icon={nav.icon}
          label={nav.label}
          key={i}
          active={pathName === nav.to}
        />
      ))}
    </nav>
  );
};

export default Nav;
