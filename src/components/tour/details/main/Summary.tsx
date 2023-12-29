import React from "react";
import ShortDetails from "./ShortDetails";

type Props={
  id:string;
  placesCovered:number;
  startPoint:string;
  endPoint:string;
  duration:string;
  rating:number;
}

const Summary:React.FC<Props> = ({id,placesCovered,startPoint,endPoint,rating,duration}) => {
  const SHORT_DETAILS = [
    {
      label: "ID",
      value: id && id,
    },
    {
      label: "Place Covered",
      value: placesCovered && placesCovered,
    },
    {
      label: "Start Point",
      value: startPoint && startPoint,
    },
    {
      label: "Duration",
      value: duration && duration,
    },
    {
      label: "Endpoint",
      value:  endPoint && endPoint,
    },
    {
      label: "rating",
      value: rating && rating,
    },
  ];
  return (
    
      <div className="grid grid-cols-1 400px:grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
        {SHORT_DETAILS.map((detail) => (
          <ShortDetails
            label={detail.label}
            value={detail.value}
            key={detail.label}
          />
        ))}
      </div>
   
  );
};

export default Summary;
