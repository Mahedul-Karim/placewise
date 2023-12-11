'use client';
import React from "react";
import Input from "../form/Input";
import Button from "@/components/ui/button/ButtonOutline";
import Img from "@/components/util/Img";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Signup = () => {
  const router = useRouter();
  return (
    <div className="bg-white px-4 py-6 rounded-md shadow-sm w-full sm:w-[400px] flex flex-col gap-3">
      <div className="flex flex-col 400px:flex-row gap-3">
        <Input type="text" label="First name" />
        <Input type="text" label="Last name" />
      </div>
      <Input type="text" label="Email address" />
      <Input type="password" label="Password" />
      <Input type="password" label="Confirm Password" />
      <div className="flex gap-2">
        <Img
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1699833600&semt=ais"
          classes="w-[40px] h-[40px]"
          rounded
        />
        <label
          className="w-[40px] h-[40px] border border-solid border-border flex items-center justify-center cursor-pointer rounded-md"
          htmlFor="image__upload"
        >
          <FaCloudUploadAlt size={25} />
        </label>
        <input type="file" id="image__upload" className="hidden" />
      </div>
      <p>
        Already have an account?{" "}
        <span className="text-primary font-[600] cursor-pointer" onClick={()=>router.push('/login')}>Login</span>
      </p>
      <Button styles="bg-primary text-white">Signup</Button>
    </div>
  );
};

export default Signup;
