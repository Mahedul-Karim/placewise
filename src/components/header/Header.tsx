"use client";
import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import Img from "../util/Img";
import Nav from "./nav/Nav";
import UserNav from "./nav/UserNav";

const Header = () => {
  const [sticky, setSticky] = useState(false);
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
          <UserNav />
        </div>
      </Container>
    </div>
  );
};

export default Header;
