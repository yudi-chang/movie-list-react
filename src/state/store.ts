import { configureStore } from '@reduxjs/toolkit';
import movie from './movie/movieSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      movie
    },
    // devTools: process.env.NODE_ENV !== 'production',
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']




