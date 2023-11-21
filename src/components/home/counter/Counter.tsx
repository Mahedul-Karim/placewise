import React from "react";
import Container from "../../ui/Container";
import Button from "../../ui/button/ButtonOutline";
import CounterItem from "./CounterItem";

const Counter = () => {
  return (
    <div className="bg-white">

    <Container styles="py-4 sm:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <CounterItem />
        <CounterItem />
        <CounterItem />
        <CounterItem />
      </div>
    </Container>
    </div>
  );
};

export default Counter;
