import React from "react";

type Props = {
  center?: boolean;
  children: React.ReactNode;
  styles?:string;
};

const Heading: React.FC<Props> = ({ center = false, children,styles }) => {
  return (
    <h3
      className={`${center ? "text-center" : ""} text-[25px] sm:text-[30px] font-[600] ${styles}`}
    >
      {children}
    </h3>
  );
};

export default Heading;
