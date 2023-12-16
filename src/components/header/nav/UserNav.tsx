"use client";
import Img from "@/components/util/Img";
import { useCtx } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
type Props = {
  classes: string;
};
const UserNav: React.FC<Props> = ({ classes }) => {
  const router = useRouter();

  const { user } = useCtx();

  return (
    <div className={`${classes} items-center gap-3`}>
      <div>
        <button className="flex items-center justify-center w-[40px] h-[40px] bg-primary-light rounded-full">
          <AiOutlineGlobal size={20} color="#243757" />
        </button>
      </div>

      {user ? (
        <Img src={user.avatar} classes="w-[40px] h-[40px] cursor-pointer" rounded onClick={()=>{router.push('/user')}}/>
      ) : (
        <button onClick={() => router.push("/login")}>
          <FaUserCircle className="w-[35px] h-[35px]" color={"#363aed"} />
        </button>
      )}
    </div>
  );
};

export default UserNav;
