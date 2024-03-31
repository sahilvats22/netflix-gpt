import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const NowPlaying = useSelector(store => store.movies.nowPlayingMovies);
  const getNowPlayingMoviees = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !NowPlaying && getNowPlayingMoviees();
  }, []);
};

export default useNowPlayingMovies;
