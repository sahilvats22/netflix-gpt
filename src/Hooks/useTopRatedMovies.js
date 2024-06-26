import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const TopRatedMovies = useSelector(store => store.movies.topratedMovies);
  const getTopRatedMoviees = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !TopRatedMovies && getTopRatedMoviees();
  }, []);
};

export default useTopRatedMovies;
