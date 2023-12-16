"use client";
import { useCtx } from "@/context/ContextProvider";
import Image from "next/image";
import React from "react";
type Props = {
  classes?: string;
};
const UserImage: React.FC<Props> = ({ classes }) => {
  const { user } = useCtx();
  return (
    <div
      className={`${classes} border border-solid border-primary rounded-full p-4 mx-auto relative mb-6`}
    >
      <Image
        fill
        src={user?.avatar as string}
        alt="image"
        className="rounded-full object-cover !w-[100px] !h-[100px]"
        style={{inset:'auto'}}
      />
    </div>
  );
};

export default UserImage;
