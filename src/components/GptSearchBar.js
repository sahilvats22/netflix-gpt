import React, { useRef } from "react";
import lang from "../utils/languageContant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { options } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langSelector = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result:Gadar, Sholay, Don, Golmaal, Koi mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResults.choices[0]?.message.content.split(",");
    console.log(gptMovies);
    const promiseArray = gptMovies.map((movie) =>
      searchMovieTMDB(movie.trim())
    );
    const tmdbresults = await Promise.all(promiseArray);
    console.log(tmdbresults);

    // Dispatch the action to update Redux store with movie results
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbresults })
    );
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