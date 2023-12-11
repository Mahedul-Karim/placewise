"use client";
import Img from "@/components/util/Img";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
type Props = {
  classes: string;
};
const UserNav: React.FC<Props> = ({ classes }) => {
  const router = useRouter();
  return (
    <div className={`${classes} items-center gap-3`}>
      <div>
        <button className="flex items-center justify-center w-[40px] h-[40px] bg-primary-light rounded-full">
          <AiOutlineGlobal size={20} color="#243757" />
        </button>
      </div>

      {/* <Img
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1699833600&semt=ais"
        classes="w-[40px] h-[40px]"
        rounded
      /> */}
      <button onClick={() => router.push("/login")}>
        <FaUserCircle className="w-[35px] h-[35px]" color={"#363aed"} />
      </button>
    </div>
  );
};

export default UserNav;
