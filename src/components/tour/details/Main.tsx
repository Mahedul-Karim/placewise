import React from "react";
import Summary from "./Summary";
import Button from "@/components/ui/button/ButtonOutline";
import Section from "./Section";
import ItineraryDetails from "./ItineraryDetails";

const Main = () => {
  return (
    <div className="grid grid-cols-[1fr_0.6fr] gap-4">
      <div className="bg-white rounded-2xl px-3 py-5">
        <Section title="Dubai,UAE">
          <Summary />
        </Section>
        <Section title="Overview">
          <p className="mt-4">
            Dubai is a popular tourist destination located in the United Arab
            Emirates (UAE). It is known for its luxurious shopping, stunning
            beaches, impressive architecture, and vibrant nightlife. The city
            has become a hub for international travel and offers a wide range of
            attractions and activities for tourists.
          </p>
          <Button styles="px-0 text-primary font-[600]">
            Read more &rarr;
          </Button>
        </Section>
        <Section title="Itinerary">
          <ItineraryDetails />
          <ItineraryDetails />
          <ItineraryDetails />
        </Section>
      </div>
      <div className="bg-white rounded-2xl px-3 py-5"></div>
    </div>
  );
};

export default Main;
