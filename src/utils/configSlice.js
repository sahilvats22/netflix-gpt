import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
      return state;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
