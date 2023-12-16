"use client";
import React, { useState } from "react";
import Input from "../form/Input";
import Radio from "../form/Radio";
import Button from "@/components/ui/button/ButtonOutline";
import UserImage from "../../sidebar/UserImage";
import Title from "@/components/ui/Title";
import { useCtx } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import toast from "react-hot-toast";
import Loader from "@/components/ui/Loader";
import { ApiParams } from "@/types";
type Props = {
  classes?: string;
};
const PersonalInfo: React.FC<Props> = ({ classes }) => {
  const { user,setUser } = useCtx();
  const [name, setName] = useState(user?.firstName! + " " + user?.lastName!);

  const router = useRouter();


  const { mutate,isPending } = useMutation({
    mutationFn:({endpoint,options}:ApiParams)=>api({endpoint,options}),
    onSuccess:(data)=>{
      toast.success(data.message);
      setUser(data.user);
      router.push('/vendor')
    },
    onError:(err)=>{
      toast.error(err.message)
    }
  })

  const getToDashboard =async () => {
    if (user?.isVendor) {
      router.push("/vendor");
      return;
    }

    const options={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:user?.id})
    }
    mutate({endpoint:'vendor',options})
  };

  return (
    <section className={`${classes} px-6 py-4`}>
      <Title>Details</Title>
      <UserImage classes="w-24 h-24 md:hidden flex items-center justify-center" />
      <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
        <Input
          label="Full name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="E-mail"
          type="text"
          disabled
          value={user?.email as string}
        />
      </div>
      <Input label="Phone(Optional)" type="number" classes="mb-4" value={""} />
      <div className="mb-4">
        <h3 className="font-[500]">Gender :</h3>
        <div className="flex items-center gap-2 mt-2">
          <Radio name="gender" id="maleRadio" label="Male" />
          <Radio name="gender" id="femaleRadio" label="Female" />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-[500]">Bio :</h3>
        <textarea
          className="border border-solid border-border py-2 rounded-2xl px-6 focus:outline-none w-full"
          rows={5}
        />
      </div>
      <div className="flex 400px:items-center gap-2 flex-col 400px:flex-row">
        <Button styles="bg-primary text-white font-[600]">Save Changes</Button>
        <Button outline onClick={getToDashboard}>
          {user?.isVendor ? "Dashboard" : "Become a vendor"}
        </Button>
      </div>
      {isPending && <div className="fixed inset-0 bg-neutral/[0.1] z-[999] w-screen h-screen flex items-center justify-center">
        <Loader />
      </div>}
    </section>
  );
};

export default PersonalInfo;
