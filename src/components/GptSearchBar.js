import React, { useRef } from "react";
import lang from "../utils/languageContant";
import { useSelector } from "react-redux";
import openai from "../utils/openAI";

const GptSearchBar = () => {
  const langSelector = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result:Gadar, Sholay, Don, Golmaal, Koi mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };
  return (
    <div className="pt-[10%]">
      <form
        className="w-3/4 lg:w-1/2 mx-auto rounded-lg shadow-md grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-10 p-4 bg-gray-700 rounded-l-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder={lang[langSelector]?.gptSearchPlaceholder}
        />
        <button
          className="col-span-2 py-2 bg-red-700 text-white rounded-r-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={handleGPTSearchClick}
        >
          {lang[langSelector]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;