"use client";
import Button from "@/components/ui/button/ButtonOutline";
import { useCtx } from "@/context/ContextProvider";
import { api } from "@/lib/api";
import { ApiParams } from "@/types";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { FaCalendarDays } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";

const Sidebar = ({ price, id }: { price: number; id: string }) => {

  const { user} = useCtx();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ endpoint, options }: ApiParams) =>
      api({ endpoint, options }),
    onSuccess: (data) => {
      toast.success("Redirecting to payment page...");
      window.open(data?.url,'_blank')
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  const formSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!user?.email){
      toast.error('Login first to book a tour!');
      return;
    }
    const options = {
      method: "POST",
      body: JSON.stringify({
        productId: id,
        email:user?.email
      }),
    };

    mutate({ endpoint: "book", options });
  };
  return (
    <aside>
      <h3 className="text-xl block mb-2 font-[400]">Price</h3>
      <h2 className="text-2xl font-[600] mb-2">${price}</h2>
      <form className="flex flex-col gap-3" onSubmit={formSubmit}>
        <div className="bg-grey px-5 py-3 rounded-full border-[1px] border-solid border-border flex items-center justify-between">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-full"
            placeholder="Check In"
          />
          <button className="block cursor-default" type="button">
            <FaCalendarDays size={20} />
          </button>
        </div>
        <div className="bg-grey px-5 py-3 rounded-full border-[1px] border-solid border-border flex items-center justify-between">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-full"
            placeholder="Guests"
          />
          <button className="block cursor-default" type="button">
            <LuUsers2 size={20} />
          </button>
        </div>
        <Button styles="bg-primary font-[400] text-white">
          Proceed booking
        </Button>
      </form>
    </aside>
  );
};

export default Sidebar;
