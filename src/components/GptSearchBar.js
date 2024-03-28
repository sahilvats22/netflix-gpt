import React from "react";
import lang from "../utils/languageContant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langSelector = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%]">
      <form className="w-3/4 lg:w-1/2 mx-auto rounded-lg shadow-md grid grid-cols-12">
        <input
          type="text"
          className="col-span-10 p-4 bg-gray-700 rounded-l-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder={lang[langSelector]?.gptSearchPlaceholder}
        />
        <button className="col-span-2 py-2 bg-red-700 text-white rounded-r-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
          {lang[langSelector]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
