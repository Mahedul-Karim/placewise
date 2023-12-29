"use client";
import React from "react";
import Container from "../ui/Container";
import Gallery from "../tour/details/gallery/Gallery";
import Main from "../tour/details/Main";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useTours } from "../hooks/useTours";
import Loader from "../ui/Loader";

type Props = {
  tourId: string;
};

const TourDetails: React.FC<Props> = ({ tourId }) => {
  
  const {data,error,isPending} = useTours(tourId)

if(isPending){
  return <div className="h-[60vh] flex items-center justify-center"><Loader /></div> 
}
  return (
    <Container styles="py-10">
      <Gallery images={data?.tour?.images}/>
      <Main tour={data?.tour}/>
    </Container>
  );
};

export default TourDetails;
