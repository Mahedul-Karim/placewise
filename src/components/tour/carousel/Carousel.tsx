"use client";

import { sliderFunction } from "@/components/util/SliderFunction";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
type Props = {
  images: {
    id: string;
    tourName: string;
    publicId: string;
    url: string;
  }[];
  open: boolean;
  setOpen: (bol: boolean) => void;
};

const Carousel: React.FC<Props> = ({ images, open, setOpen }) => {
  const imageContainer = useRef<any>();
  
  let count = 0;

  const nextSlide = () => {
    const images = imageContainer.current.childNodes;
    if (count === images.length) {
      count = 1;
    } else {
      count++;
    }

    sliderFunction(images, count);
  };

  const prevSlide = () => {
    const images = imageContainer.current.childNodes;

    if (count === 0) {
      count = images.length - 1;
    } else {
      count--;
    }
    sliderFunction(images, count);
  };

  const carouselElement = (
    <div
      className={`fixed w-full h-full left-0 top-0 bg-[#000000]/[0.5] backdrop-blur-[2px] z-[99999] flex items-center justify-center flex-col transition-all  ${
        open
          ? "translate-y-0 opacity-1 visible"
          : "translate-y-[50px] opacity-0 invisible"
      }`}
    >
      <Button
        classes="absolute top-[20px] right-[20px] z-[99999]"
        onClick={() => setOpen(false)}
      >
        <RxCross1 />
      </Button>
      <div
        className="relative w-full h-full flex items-center justify-center shrink-0 translate-x-[5%] image-slider"
        ref={imageContainer}
      >
        {images?.slice(0,5)?.map((image, i) => (
          <img
            src={image.url}
            alt="featured image"
            className={`block max-w-[250px] max-h-[150px] 400px:max-w-[280px] 400px:max-h-[140px] sm:max-h-[250px] md:max-h-[350px] object-cover sm:max-w-[350px] md:max-w-[450px] absolute shadow-md transition-all duration-300 image carousel-item-${
              i + 1
            }`}
            key={i}
          />
        ))}
      </div>
      <div className="absolute bottom-[30%] sm:bottom-[20%] lg:bottom-[10%] right-[50%] flex items-center gap-2 translate-x-[50%]">
        <Button onClick={prevSlide}>
          <FaChevronLeft />
        </Button>
        <Button onClick={nextSlide}>
          <FaChevronRight />
        </Button>
      </div>
    </div>
  );

  return createPortal(carouselElement, document.body);
};

export function Button({
  children,
  classes,
  onClick,
}: {
  children: React.ReactNode;
  classes?: string;
  onClick?: any;
}) {
  return (
    <button
      className={`${classes} bg-white rounded-md flex items-center justify-center p-2 w-10 h-10`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Carousel;
