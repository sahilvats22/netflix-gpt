import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptclicked: false,
    moviesResults: null,
    movieNames: null,
  },
  reducers: {
    setGPTClicked: (state) => {
      state.gptclicked = !state.gptclicked;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.moviesResults = movieResults;
    },
  },
});

export const { setGPTClicked, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
