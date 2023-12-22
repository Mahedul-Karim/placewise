"use client";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";

import { auth } from "@/lib/firebase";
import Input from "../form/Input";
import Button from "@/components/ui/button/ButtonOutline";
import Img from "@/components/util/Img";
import { FaCloudUploadAlt, FaUserCircle } from "react-icons/fa";
import { redirect, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useCtx } from "@/context/ContextProvider";
import Loader from "@/components/ui/Loader";
import { ApiParams } from "@/types";
const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [avatar, setAvatar] = useState<any>();

  const router = useRouter();

  const { setUser, setIsLoggedIn,isLoggedIn } = useCtx();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ({ endpoint, options }: ApiParams) =>
      api({ endpoint, options }),
    onSuccess: (data) => {
      setUser(data.user);
      setIsLoggedIn(true);
    },
    onError: (err) => console.log(err),
  });

  const getAvatar = (e: any) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setAvatar(fileReader.result);
    };

    fileReader.readAsDataURL(e.target.files[0]);
  };

  const createUser = async function () {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email!,
        password!
      );
      const token = await user.user.getIdToken();
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: user.user.email,
          avatar,
        }),
      };
      mutate({ endpoint: "signup", options });
    } catch (err) {
      console.log(err);
    }
  };

  if(isLoggedIn){
    redirect('/')
  }

  return (
    <div className="bg-white px-4 py-6 rounded-md shadow-sm w-full sm:w-[400px] flex flex-col gap-3">
      <div className="flex flex-col 400px:flex-row gap-3">
        <Input
          type="text"
          label="First name"
          value={firstName}
          onChange={(e:any)=>setFirstName(e.target.value)}
        />
        <Input
          type="text"
          label="Last name"
          value={lastName}
          onChange={(e:any)=>setLastName(e.target.value)}
        />
      </div>
      <Input
        type="text"
        label="Email address"
        value={email}
        onChange={(e:any)=>setEmail(e.target.value)}
      />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={(e:any)=>setPassword(e.target.value)}
      />
      <Input type="password" label="Confirm Password" />
      <div className="flex gap-2">
        {avatar ? (
          <Img src={avatar} classes="w-[40px] h-[40px]" rounded />
        ) : (
          <div>
            <FaUserCircle className="w-[35px] h-[35px]" />
          </div>
        )}
        <label
          className="w-[40px] h-[40px] border border-solid border-border flex items-center justify-center cursor-pointer rounded-md"
          htmlFor="image__upload"
        >
          <FaCloudUploadAlt size={25} />
        </label>
        <input
          type="file"
          id="image__upload"
          className="hidden"
          onChange={getAvatar}
        />
      </div>
      <p>
        Already have an account?{" "}
        <span
          className="text-primary font-[600] cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Login
        </span>
      </p>
      <Button styles="bg-primary text-white" onClick={createUser}>
        
        {isPending ? <Loader button/> : 'Signup' }
      </Button>
    </div>
  );
};

export default Signup;
