import React from "react";
import Container from "../../ui/Container";
import { benefitData } from "../../util/data";

const Benefits = () => {
  return (
    <Container styles="py-4 sm:py-20">
      <div className="flex flex-col items-center">
        <h3 className="text-[25px] sm:!text-[35px] font-[600] text-center leading-tight">
          Why Choose Us for Your
          <br /> Next Adventure
        </h3>

        <p className="text-center text-[18px] font-[400] mt-4">
          If you&apos;re looking for an unforgettable travel experience, we
          believe that our
          <br /> tour company is the perfect choice
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:px-10 mt-6">
        {benefitData.map((data) => (
          <div
            className="flex flex-col border-[1px] border-solid border-border p-6 lg:p-8 justify-center items-center rounded-md gap-4 hover:shadow-lg transition-all hover:-translate-y-2"
            key={data.title}
          >
            <div>
              <img src={data.image} alt="home" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-[20px] font-[600] text-center">
                {data.title}
              </h3>
              <p className="text-center text-[18px] font-[400]">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Benefits;
