'use client';
import { useCtx } from "@/context/ContextProvider";
import React from "react";

const UserDetails = () => {
  const { user } = useCtx();
  return (
    <div className="text-center mb-6 hidden md:block">
      <h2 className="text-2xl font-[500]">{`${user?.firstName} ${user?.lastName}`}</h2>
      <p>{user?.email}</p>
    </div>
  );
};

export default UserDetails;
