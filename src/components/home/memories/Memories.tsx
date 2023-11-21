import React from "react";
import Container from "../../ui/Container";
import Img from "../../util/Img";
import Heading from "../../ui/Heading";

const Memories = () => {
  return (
    <Container styles="py-4 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <div className="grid md:place-items-center">
            <img
              src="/memory-slider-img-3.webp"
              alt="img"
              className="object-fill block w-full md:w-[526px] h-[270px] md:h-[794px] rounded-md"
            />
          </div>
        </div>
        <div className="self-center">
          <Heading styles="leading-2 mb-4">
            Make Lasting Memories
            <br /> Around the World Tour
          </Heading>
          <p className="mb-4">
            We also believe in providing our travelers with unique and authentic
            experiences that you won&apos;t find in guidebooks or on standard
            tours.
          </p>

          <span className="inline-block px-3 py-2 bg-primary rounded-lg text-white font-[600] mb-4">
            01
          </span>
          <h4 className="text-[25px] font-[600] mb-4">
            Find Trips That Fit Your Flexible Lifestyle
          </h4>
          <p className="mb-4">
            That&apos;s why we offer a range of tours that are designed to fit
            your flexible lifestyle.
          </p>
          <span className="inline-block px-3 py-2 bg-green rounded-lg text-white font-[600] mb-4">
            02
          </span>
          <h4 className="text-[25px] font-[600] mb-4">
            Expert-Guided Travel with Placewise
          </h4>
          <p className="mb-4">
            we believe that travel should be a source of joy and inspiration,
            not stress & worry
          </p>
          <span className="inline-block px-3 py-2 bg-yellow rounded-lg text-white font-[600] mb-4">
            03
          </span>
          <h4 className="text-[25px] font-[600] mb-4">
            Discover the True Cost of Your Trip
          </h4>
          <p className="mb-4">
            We believe that transparency is key to building trust with our
            travelers.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Memories;
