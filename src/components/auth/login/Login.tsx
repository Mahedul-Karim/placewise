"use client";
import React, { useState } from "react";
import Input from "../form/Input";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="bg-white px-4 py-6 rounded-md shadow-sm w-full sm:w-[400px] flex flex-col gap-3">
      <Input
        type="text"
        label="Email Address"
        value={email}
        onChange={setEmail}
      />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={setPassword}
      />
    </div>
  );
};

export default Login;
