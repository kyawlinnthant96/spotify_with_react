import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import playerReducer from "../redux/features/playerSlice";
import { shazamCoreApi } from "../redux/services/shazamCore";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
