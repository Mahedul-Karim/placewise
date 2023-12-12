"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Input from "../form/Input";
import Button from "@/components/ui/button/ButtonOutline";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  const signinUser = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        email!,
        password!
      );
      const token = await user.getIdToken();
      const sendToken = await fetch("/api/login", {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
      console.log(sendToken);
    } catch (err) {
      console.log(err);
    }
  };
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
      <p>
        Don&apos;t have an account?{" "}
        <span
          className="text-primary font-[600] cursor-pointer"
          onClick={() => router.push("/signup")}
        >
          Sign up
        </span>
      </p>
      <Button styles="bg-primary text-white" onClick={signinUser}>
        Login
      </Button>
    </div>
  );
};

export default Login;
