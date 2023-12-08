'use client';
import Img from "@/components/util/Img";
import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { useRouter } from "next/navigation";
type Props = {
  classes?: string;
};
const Sidebar: React.FC<Props> = ({ classes }) => {
  const router = useRouter();
  return (
    <aside
      className={`bg-white p-10 border-r border-solid border-border ${classes}`}
    >
      <Img src="/logo_white.svg" classes="w-[77px] h-[75px] mx-auto cursor-pointer" onClick={()=>router.push('/')}/>
      <Nav />
    </aside>
  );
};

export default Sidebar;
