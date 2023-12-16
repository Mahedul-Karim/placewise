"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Input from "../form/Input";
import Button from "@/components/ui/button/ButtonOutline";
import { redirect, useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { useCtx } from "@/context/ContextProvider";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import Loader from "@/components/ui/Loader";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  const { isLoggedIn, setUser, setIsLoggedIn } = useCtx();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ endpoint, options }: ApiParams) =>
      api({ endpoint, options }),
    onSuccess: (data) => {
      setUser(data.user);
      setIsLoggedIn(true);
    },
    onError: (err) => console.log(err),
  });

  const signinUser = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        email!,
        password!
      );

      const token = await user.getIdToken(true);
      const options = {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      mutate({ endpoint: "login", options });
    } catch (err: any) {
      toast.error("Invalid credentials!");
    }
  };

  if (isLoggedIn) {
    redirect("/");
  }

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
        {isPending ? <Loader button /> : "Login"}
      </Button>
    </div>
  );
};

export default Login;
