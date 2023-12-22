"use client";
import Container from "@/components/ui/Container";
import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import { useCtx } from "@/context/ContextProvider";
import { redirect } from "next/navigation";

const User = () => {
  const [active, setActive] = useState(0);
  const {user}=useCtx();


  if(!user){
    redirect('/login')
  }
  return (
    <>
      <div className="py-[30px] bg-neutral"></div>
      <div className="pb-[30px] relative z-[1]">
        <div className="absolute h-[130px] w-full bg-neutral top-0 end-0 start-0 -z-[1]" />
        <Container styles="grid grid-cols-1 md:grid-cols-[0.4fr_1fr] gap-4">
          <Sidebar setActive={setActive} active={active} />
          <Main active={active} />
        </Container>
      </div>
    </>
  );
};
//grid-cols-[45px_1fr]
export default User;
