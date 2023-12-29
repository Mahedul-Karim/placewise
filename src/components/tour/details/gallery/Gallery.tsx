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

type Props={
  images:{
    id:string;
    tourName:string;
    url:string;
    publicId:string;
  }[]
}

const Gallery:React.FC<Props> = ({images}) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 sm:auto-rows-[185px] mb-[40px]"
      id="gallery"
    >
      {images?.map((item, index) => (
        <GalleryItem
          src={item.url}
          index={index}
          length={images.length}
          key={index}
          gallery={images}
        />
      ))}
      
    </div>
  );
};

export default Gallery;
