import React from "react";
type Props={
  day:number;
  isLast:boolean;
  src:string;
  title:string;
  description:string;
}
const ItineraryDetails:React.FC<Props> = ({day,isLast,src,title,description}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-[0.4fr_1fr] !mt-[30px] sm:px-3 relative ${isLast ? '' : 'line'} gap-3 md:gap-0`}
      
    >
      <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center relative after:absolute after:scale-[1.18] after:w-full after:h-full after:border-dashed after:border-primary after:border after:rounded-full">
        <p className="text-white text-lg text-center">
          Day
          <br />{day}
        </p>
      </div>
      <div className="bg-white rounded-2xl px-4 py-5 shadow-lg">
       
        <div className="grid grid-cols-1 gap-3 py-5 border-b border-dashed border-border">
          <div className="w-full">
            <img
              src={src}
              alt="tour"
              className="block w-full h-auto object-cover rounded-2xl"
            />
          </div>
          <div>
            <h3 className="font-[600] text-2xl">
              {title}
            </h3>
            <p className="mt-2">
              {description}
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;
