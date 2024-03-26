import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );
      const json = await response.json();
      console.log(json);
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
      console.log(trailer);
    } catch (error) {
      console.error('Error fetching movie videos:', error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

