import Image from "next/image";
import React from "react";

type Props = {
  classes?: string;
  src: string;
  rounded?: boolean;
};

const Img: React.FC<Props> = ({ classes, src, rounded = false }) => {
  return (
    <div className={`${classes} relative`}>
      <Image
        src={src}
        fill
        alt="Image"
        className={`object-cover ${rounded ? "rounded-full" : ""}`}
      />
    </div>
  );
};

export default Img;
