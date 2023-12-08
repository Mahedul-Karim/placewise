import Login from "@/components/auth/login/Login";
import Img from "@/components/util/Img";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full flex-col gap-4">
        <Img src="/logo_white.svg" classes="w-[55px] h-[53px]" />
      <Login />
    </div>
  );
};

export default LoginPage;
