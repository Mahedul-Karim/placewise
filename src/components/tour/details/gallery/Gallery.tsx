import React from "react";
import GalleryItem from "./GalleryItem";
const GALLERY = [
  {
    img: "/tour-details-img-1.webp",
  },
  {
    img: "/tour-details-img-2.webp",
  },
  {
    img: "/tour-details-img-3.webp",
  },
  {
    img: "/tour-details-img-4.webp",
  },
  {
    img: "/tour-details-img-5.webp",
  },
  {
    img: "/tour-details-img-6.webp",
  },
];
const Gallery = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 sm:auto-rows-[185px] mb-[40px]"
      id="gallery"
    >
      {GALLERY.map((item, index) => (
        <GalleryItem
          src={item.img}
          index={index}
          length={GALLERY.length}
          key={index}
          gallery={GALLERY}
        />
      ))}
      
    </div>
  );
};

export default Gallery;
