"use client";
import React from "react";
import Sort from "../filter/Sort";
import TourCard from "./TourCard";
import { useTours } from "../hooks/useTours";
import { Tours } from "@prisma/client";
import Loader from "../ui/Loader";
import toast from "react-hot-toast";
import { SafeTours } from "@/types";

const MainTour = () => {
  const { data, isPending, error } = useTours();

  if(error){
    toast.error(error.message)
  }

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <div>
          <div className="bg-white rounded-2xl shadow-lg px-5 py-4 hidden sm:flex items-center justify-between mb-4">
            <div>
              Showing <span className="font-[600]">{data?.tours?.length}</span>{" "}
              of <span className="font-[600]">{data?.total}</span> results
            </div>
            <Sort />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data?.tours.length > 0 &&
              data.tours.map((item: SafeTours, i: number) => (
                <TourCard key={i} tour={item} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MainTour;
