import { categoryData } from "@/components/util/data";
import React from "react";

const Details = () => {
  return (
    <>
      <div>
        <label className="font-[500]">Category :</label>
        <select className="py-2 px-6 rounded-2xl w-full border border-solid border-border focus:outline-none" name="category">
          <option className="appearance-none p-10">Select category</option>
          {categoryData.map((cat, i) => (
            <option key={i}>{cat.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="font-[500]">Description :</label>
        <textarea
          className="border border-solid border-border py-2 rounded-2xl px-6 focus:outline-none w-full"
          rows={5}
          name="description"
        />
      </div>
    </>
  );
};

export default Details;
