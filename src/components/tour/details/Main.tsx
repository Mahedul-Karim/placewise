"use client";
import React from "react";
import Summary from "./main/Summary";
import Button from "@/components/ui/button/ButtonOutline";
import Section from "./main/Section";
import ItineraryDetails from "./main/ItineraryDetails";
import Policy from "./policy/Policy";
import Comments from "./comments/Comments";
import CommentForm from "./comments/CommentForm";
import Sidebar from "./sidebar/Sidebar";
import { SafeTours } from "@/types";
import { api } from "@/lib/api";
import { redirect } from "next/navigation";

type Props = {
  tour: SafeTours;
};

const Main: React.FC<Props> = ({ tour }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.4fr] gap-4">
      <div className="bg-white rounded-2xl px-3 py-5">
        <Section title={tour?.name}>
          <Summary
            id={tour?.id?.substring(0, 10)}
            placesCovered={tour?.placeCovered}
            startPoint={tour?.startPoint}
            endPoint={tour?.endPoint}
            rating={tour?.ratings}
            duration={tour?.duration}
          />
        </Section>
        <Section title="Overview">
          <p className="mt-4">
            {tour?.description.length > 306
              ? tour?.description?.substring(0.306)
              : tour?.description}
          </p>
          {tour?.description.length > 306 && (
            <Button styles="px-0 text-primary font-[600]">
              Read more &rarr;
            </Button>
          )}
        </Section>
        <Section title="Itinerary">
          {tour?.itineary?.map((it, index) => (
            <ItineraryDetails
              day={index + 1}
              isLast={index === tour?.itineary?.length - 1}
              title={it.title}
              description={it.description}
              src={it.image}
              key={index}
            />
          ))}
        </Section>
        <Section title="Tour policy">
          <Policy />
        </Section>

        {tour?.reviews?.length > 0 && (
          <>
            <Comments />
            <Button styles="bg-grey hover:bg-primary mt-3 hover:text-white font-[600]">
              More reviews
            </Button>
          </>
        )}
        <CommentForm />
      </div>
      <div className="bg-white rounded-2xl px-3 py-5 h-max">
        <Sidebar price={tour?.price} id={tour?.id} />
      </div>
    </div>
  );
};

export default Main;
