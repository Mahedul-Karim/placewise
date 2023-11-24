import React from "react";

const ItineraryDetails = () => {
  return (
    <div
      className="grid grid-cols-[0.4fr_1fr] !mt-[30px] px-3 relative line"
      
    >
      <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center relative after:absolute after:scale-[1.18] after:w-full after:h-full after:border-dashed after:border-primary after:border after:rounded-full">
        <p className="text-white text-lg text-center">
          Day
          <br />1
        </p>
      </div>
      <div className="bg-white rounded-2xl px-4 py-5 shadow-lg">
        <h2 className="text-xl font-[500] mb-1">Burj,Khalifa</h2>
        <p className="text-[16px] pb-2 border-b border-dashed border-border">
          Dubai
        </p>
        <div className="grid grid-cols-2 gap-3 py-5 border-b border-dashed border-border">
          <div className="w-full">
            <img
              src="/tour-details-img-1.webp"
              alt="tour"
              className="block w-full !h-[150px] object-cover rounded-2xl"
            />
          </div>
          <div>
            <h3 className="font-[600]">
              Discover the tallest building in the world
            </h3>
            <p>
              Burj Khalifa is a spectacular skyscraper located in Dubai, United
              Arab Emirates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;
