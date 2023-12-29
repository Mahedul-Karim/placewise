"use client";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

export const useTours = (id?:string) => {
  const options = {
    method: "GET",
  };
  const key = id ? [`placewiseTour-${id}`,id] : ["placewiseTour"]

  const {
    data,
    isPending,
    error
  }:any = useQuery({
    queryKey: key,
    queryFn: () => {
      if(!id){
       return api({ endpoint: "tour", options })
      }else{
       return api({ endpoint: `tour/${id}`, options })
      }
    },
    retry:false
  });


  return {
    data,
    isPending,
    error
  };
};


