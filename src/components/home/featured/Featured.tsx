import React from "react";
import Container from "../../ui/Container";
import Button from "../../ui/button/ButtonOutline";
import TourCard from "../../tour/TourCard";
import Heading from "../../ui/Heading";

const Featured = () => {
  return (
    <Container styles="py-4 sm:py-20">
      <div className="flex flex-col sm:flex-row items-center justify-between !mb-4">
        <Heading styles="mb-4 sm:mb-0">Our Best Packages</Heading>

        <Button outline>See All Packages</Button>
      </div>
      <div className="grid grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-4">
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </div>
    </Container>
  );
};

export default Featured;
