import { Movie, MoviesFetchPayload } from '@/types/Movies';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoriteMap = {
  [key: string]: string,
};

type MovieState = {
  favorites: Movie[]
  favoriteIDs: FavoriteMap
}

const initialState: MovieState = {
  favorites: [],
  favoriteIDs: {}
}

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
      state.favoriteIDs[action.payload.imdbID] = '';  // Store IMDb ID as key
    },
    removeFavorite: (state, action: PayloadAction<Movie>) => {
      const index = state.favorites.findIndex(movie => movie.imdbID === action.payload.imdbID);
      if (index !== -1) {
        state.favorites.splice(index, 1);
        delete state.favoriteIDs[action.payload.imdbID];
      }
    },
  },
  // for async fetch movies if put in redux
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(
  //       fetchMoviesAsync.pending, (state) => {
  //         state.isFetching = true;
  //       }
  //     )
  //     .addCase(
  //       fetchMoviesAsync.fulfilled,
  //       (state, action: PayloadAction<Movie[]>) => {
  //         state.isFetching = false;
  //         state.movieList = action.payload;
  //       }
  //     )
  // }
})

// for async fetch movies if put in redux
// export const fetchMoviesAsync = createAsyncThunk(
//   "movie/fetchMoviesAsync",
//   async (payload: MoviesFetchPayload) => {
//     const response = await axios.get("https://jsonmock.hackerrank.com/api/movies/search/", {
//       params: payload,
//     });
//     return response.data.data
//   } 
// )

export const { addFavorite, removeFavorite } = movieSlice.actions;
export default movieSlice.reducer;