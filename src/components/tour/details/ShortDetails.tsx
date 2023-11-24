import React from "react";
import { FaStar } from "react-icons/fa6";
type Props = {
  label: string;
  value: string | number;
};

const ShortDetails: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="flex items-center gap-1">
      {label === 'rating' ? <FaStar color="#363aed" size={15}/> : label}:<span className="text-primary">{value}</span>
    </div>
  );
};

export default ShortDetails;
