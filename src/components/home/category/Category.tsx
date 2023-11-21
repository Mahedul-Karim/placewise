import React from "react";
import Container from "../../ui/Container";
import CategoryCard from "./CategoryCard";
import Heading from "../../ui/Heading";

const Category = () => {
  return (
    <Container styles="py-4 sm:py-20">
      <Heading center styles="mb-6">
        Discover the categories of tours
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </Container>
  );
};

export default Category;
