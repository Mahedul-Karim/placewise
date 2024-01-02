import React from "react";
import Header from "../header/Header";
import Hero from "../home/hero/Hero";
import Benefits from "../home/benefits/Benefits";
import Featured from "../home/featured/Featured";
import Counter from "../home/counter/Counter";
import Category from "../home/category/Category";
import Memories from "../home/memories/Memories";
import Footer from "../footer/Footer";
import Calendar from "../ui/Calendar";

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Featured />
      <Memories />
      <Counter />
      <Category />
    </>
  );
};

export default Home;
