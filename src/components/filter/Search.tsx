import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="bg-grey px-5 py-3 rounded-full border-[1px] border-solid border-border flex items-center justify-between">
      <input
        type="text"
        className="bg-transparent focus:outline-none w-full"
        placeholder="Enter place name"
      />
      <button className="block">
        <CiSearch size={20} />
      </button>
    </div>
  );
};

export default Search;
