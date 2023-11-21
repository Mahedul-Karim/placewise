import React from "react";
import Container from "../ui/Container";
import Sidebar from "../tour/Sidebar";
import MainTour from "../tour/MainTour";
const Tours = () => {
  return (
    <Container styles="py-[30px] lg:py-[60px]">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4">
        <Sidebar />
        <MainTour />
      </div>
    </Container>
  );
};

export default Tours;
