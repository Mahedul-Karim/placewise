"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import Img from "../util/Img";
import Nav from "./nav/Nav";
import UserNav from "./nav/UserNav";
import DotMenu from "../util/DotMenu";

const Header = () => {
  
  const [active, setActive] = useState(false);
  

  return (
    <div
      className={`py-2 absolute top-0 left-0 w-full z-1 bg-white/[0.4] backdrop-blur-[2px] !z-[15]`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Img
            src="/logo_white.svg"
            classes="w-[55px] h-[53px] cursor-pointer"
          />
          <Nav classes="hidden sm:flex" />
          <UserNav classes="hidden sm:flex" />
          <div
            className="flex flex-col items-end gap-2 sm:hidden w-10 h-10 cursor-pointer relative"
            onClick={() => setActive((prev) => !prev)}
          >
            <span className="bg-[#000000] w-full h-1 inline-block rounded-2xl"></span>
            <span className="bg-[#000000] w-[80%] h-1 inline-block rounded-2xl"></span>
            <span className="bg-[#000000] w-[60%] h-1 inline-block rounded-2xl"></span>
            <DotMenu active={active}>
              <Nav classes="sm:hidden flex" col />
              <UserNav classes="flex sm:hidden" />
            </DotMenu>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
