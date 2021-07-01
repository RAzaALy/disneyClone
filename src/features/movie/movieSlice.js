import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  original: null,
  trending: null,
  new: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
      state.new = action.payload.new;
    },
  },
});
export const { setMovies } = movieSlice.actions;
// export const selectMovies = (state) => {
//   return state.movie.movies;
// };
export const selectRecommend = (state) => state.movie.recommend;
export const selectOriginal = (state) => state.movie.original;
export const selectnew = (state) => state.movie.new;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
