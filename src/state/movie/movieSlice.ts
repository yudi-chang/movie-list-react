import type { Movie } from '@/types/Movies';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  }
})

export const { addFavorite, removeFavorite } = movieSlice.actions;
export default movieSlice.reducer;