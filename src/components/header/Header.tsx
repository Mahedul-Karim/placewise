"use client";
import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import Img from "../util/Img";
import Nav from "./nav/Nav";
import UserNav from "./nav/UserNav";
import DotMenu from "../util/DotMenu";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (window.scrollY >= 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <div
      className={`py-2 border-border border-b-[1px] border-solid ${
        sticky ? "fixed-nav shadow-md" : ""
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Img src="/logo_white.svg" classes="w-[55px] h-[53px]" />
          <Nav />
          <UserNav classes="hidden sm:flex"/>
          <div className="flex flex-col items-end gap-2 sm:hidden w-10 h-10 cursor-pointer relative" onClick={()=>setActive(prev=>!prev)}>
            <span className="bg-[#000000] w-full h-1 inline-block rounded-2xl"></span>
            <span className="bg-[#000000] w-[80%] h-1 inline-block rounded-2xl"></span>
            <span className="bg-[#000000] w-[60%] h-1 inline-block rounded-2xl"></span>
            <DotMenu active={active}><UserNav classes="flex"/></DotMenu>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
