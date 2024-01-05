"use client";

import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
type Props = {
  images?: {
    id: string;
    tourName: string;
    publicId: string;
    url: string;
  }[];
};

const Carousel: React.FC<Props> = ({ images }) => {
  const image = [
    {
      url: "http://res.cloudinary.com/dleogo48u/image/upload/v1703249147/avatars/hgnvoclhxbvkduzm6hnn.webp",
      num: 1,
    },

    {
      url: "http://res.cloudinary.com/dleogo48u/image/upload/v1703249145/avatars/nmetlpqnvw1js737ardl.webp",
      num: 2,
    },
    {
      url: "http://res.cloudinary.com/dleogo48u/image/upload/v1703249146/avatars/foy2txonmltozfw7evnb.webp",
      num: 3,
    },
    {
      url: "http://res.cloudinary.com/dleogo48u/image/upload/v1703249148/avatars/xdbwhatgzp20rzuxrves.webp",
      num: 4,
    },
    {
      url: "http://res.cloudinary.com/dleogo48u/image/upload/v1703249149/avatars/mq1fj4x2ecfcumhrfc0a.webp",
      num: 5,
    },
  ];

  let count = 0;

  const nextSlide = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const images = document.querySelectorAll(".image");
    if (count === images.length) {
      count = 1;
    } else {
      count++;
    }

    images.forEach((el, ind) => {
      let offSet: number = ind - count;
      if (offSet < 0) {
        offSet += images.length;
      }

      for (let i = 0; i < images.length; i++) {
        el.classList.remove(`carousel-item-${i + 1}`);
        el.classList.add(`carousel-item-${offSet + 1}`);
      }
    });
  };

  return (
    <div className="fixed w-full h-full left-0 top-0 bg-[#000000] backdrop-blur-[2px] z-[99999] flex items-center justify-center flex-col">
        <button className="absolute top-[20px] right-[20px] bg-white rounded-md flex items-center justify-center p-2 w-10 h-10">
          <RxCross1 />
        </button>
      <div className="relative w-full h-full flex items-center justify-center shrink-0 translate-x-[5%] image-slider">
        {image?.map((image, i) => (
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
      <button className="bg-white" onClick={nextSlide}>
        Click me
      </button>
    </div>
  );
};

export default Carousel;
