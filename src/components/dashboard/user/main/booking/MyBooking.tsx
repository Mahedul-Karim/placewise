import TourCard from "@/components/tour/TourCard";
import React from "react";
type Props = {
  classes?: string;
};
const MyBooking: React.FC<Props> = ({ classes }) => {
  return (
    <div className={`${classes} px-6 py-4 bg-border`}>
      <div className="grid lg:grid-cols-2 gap-4">
       
      </div>
    </div>
  );
};

export default MyBooking;
