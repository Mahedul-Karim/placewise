"use client";
import { useCtx } from "@/context/ContextProvider";
import Image from "next/image";
import React from "react";

const VendorImage = () => {
  const { user } = useCtx();

  return (
    <>
      <div
        className={`border border-solid border-primary rounded-full p-1 bg-white relative flex items-center justify-center w-[70px] h-[70px]`}
      >
        
        <Image
         fill
          src={user?.avatar!}
          alt="image"
          className="rounded-full object-cover !w-[60px] !h-[60px]"
          style={{inset:'auto'}}
        />
      </div>
      <div>
        <h3 className="text-white font-[600]">{user?.firstName+" "+user?.lastName}</h3>
        <p className="text-grey">{user?.email}</p>
      </div>
    </>
  );
};

export default VendorImage;
