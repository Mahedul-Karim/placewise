import React from "react";
import Container from "../../ui/Container";
import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <Container>
      <div id="hero__bg" className="relative z-[10]">
        <div className="py-[60px] lg:pt-[230px] lg:pb-[100px] sm:mx-10">
          <h1 className="text-[40px] sm:text-[56px] text-neutral font-[600] leading-tight">
            Explore the World
            <br /> with <span className="text-primary">Placewise</span>
          </h1>
          <p className="mt-4 text-[18px] font-[400]">
            Welcome to Placewise, your one-stop-shop for adventure,
            <br /> culture, and unforgettable experiences!
          </p>
          <HeroForm />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
