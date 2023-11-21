import React from "react";
import Checkbox from "./Checkbox";
import { CiSearch } from "react-icons/ci";
import Search from "./Search";
import CategoryFilter from "./CategoryFilter";
import RangeInput from "./RangeInput";

const Filter = () => {
  return (
    <>
      <h3 className="text-[25px] font-[500] pb-4 border-b-[1px] border-dashed border-border">
        Filter
      </h3>
      <Search />
      <CategoryFilter title="Types of tours" />
      <RangeInput />
      <CategoryFilter title="Types of Places" />
      <CategoryFilter title="Star Category" />
    </>
  );
};

export default Filter;
