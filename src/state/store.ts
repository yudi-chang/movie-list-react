import { configureStore } from '@reduxjs/toolkit';
import movie from './movie/movieSlice';

export const store = configureStore({
  reducer: {
    movie,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
