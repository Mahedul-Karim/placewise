import React from "react";
import Summary from "./main/Summary";
import Button from "@/components/ui/button/ButtonOutline";
import Section from "./main/Section";
import ItineraryDetails from "./main/ItineraryDetails";
import Policy from "./policy/Policy";
import Comments from "./comments/Comments";
import CommentForm from "./comments/CommentForm";
import Sidebar from "./sidebar/Sidebar";
const Main = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.4fr] gap-4">
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
        <Section title="Tour policy">
          <Policy />
        </Section>

        <Comments />
        <Button styles="bg-grey hover:bg-primary mt-3 hover:text-white font-[600]">
          More reviews
        </Button>
        <CommentForm />
      </div>
      <div className="bg-white rounded-2xl px-3 py-5 h-max">
        <Sidebar />
      </div>
    </div>
  );
};

export default Main;
