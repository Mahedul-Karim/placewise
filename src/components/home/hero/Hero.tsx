"use client";
import React, { useEffect, useRef } from "react";
import Container from "../../ui/Container";
import { Button } from "@/components/tour/carousel/Carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const heroRef = useRef<any>();
  const IMAGES = [
    {
      url: "http://res.cloudinary.com/dleogo48u/image/upload/v1703584578/avatars/tz1h79ottvdalepzb1im.jpg",
      title: "Swizerland",
      link: "",
    },
    {
      url: "http://res.cloudinary.com/dleogo48u/image/upload/v1703584577/avatars/rdp5dh47oso2b8e57dhz.jpg",
      title: "Swizerland",
      link: "",
    },
    {
      url: "http://res.cloudinary.com/dleogo48u/image/upload/v1703584579/avatars/stfoflk2evkbs4cfasss.jpg",
      title: "Swizerland",
      link: "",
    },
    {
      url: "http://res.cloudinary.com/dleogo48u/image/upload/v1703584580/avatars/ldzhaddnwtb3ilhmfloc.jpg",
      title: "Swizerland",
      link: "",
    },
    {
      url: "http://res.cloudinary.com/dleogo48u/image/upload/v1703584581/avatars/yh92ihkrwh2kfw2opcl8.jpg",
      title: "Swizerland",
      link: "",
    },
    {
      url: "http://res.cloudinary.com/dleogo48u/image/upload/v1703584582/avatars/wkve5kihmzadziewqquu.jpg",
      title: "Swizerland",
      link: "",
    },
  ];

  let timer: any;

  const autoPlay = () => {
    timer = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const clearAutoplay = () => clearInterval(timer);

  const nextSlide = () => {
    heroRef?.current.appendChild(heroRef.current.firstElementChild);
    clearAutoplay();
    autoPlay();
  };
  const prevSlide = () => {
    heroRef.current.prepend(heroRef.current.lastElementChild);
  };
  useEffect(() => {
    autoPlay();
    return () => clearAutoplay();
  }, []);

  return (
    <Container styles="relative">
      <div
        className="slide relative w-full h-[400px] 400px:h-[600px] overflow-x-clip"
        ref={heroRef}
      >
        {IMAGES.map((img, i) => (
          <div
            style={{
              backgroundImage: `url(${img.url})`,
            }}
            key={i}
          >
            <div className="absolute top-[50%] left-[100px] max-w-[300px] text-left content text-white">
              <div className="text-[40px] uppercase font-[600] opacity-0 title">
                {img.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[20px] flex items-center gap-2 -translate-x-[50%] left-[50%]">
        <Button onClick={prevSlide}>
          <FaChevronLeft />
        </Button>
        <Button onClick={nextSlide}>
          <FaChevronRight />
        </Button>
      </div>
    </Container>
  );
};

export default Hero;
