import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 md:w-full">
        <img alt="img" src={BG_IMG} className="w-full h-screen object-cover md:w-full" />
      </div>
      <div className="md:p-0 pt-[30%]">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
