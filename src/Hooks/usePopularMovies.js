import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = useSelector(store => store.movies.popularMovies);
  const getPopularMoviees = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !PopularMovies && getPopularMoviees();
  }, []);
};

export default usePopularMovies;
