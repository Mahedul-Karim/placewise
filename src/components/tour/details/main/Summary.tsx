import React from "react";
import ShortDetails from "./ShortDetails";

const Summary = () => {
  const SHORT_DETAILS = [
    {
      label: "ID",
      value: 123,
    },
    {
      label: "Place Covered",
      value: 123,
    },
    {
      label: "Start Point",
      value: 123,
    },
    {
      label: "Duration",
      value: 123,
    },
    {
      label: "Endpoint",
      value: 123,
    },
    {
      label: "rating",
      value: 123,
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
