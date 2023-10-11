import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./playerSlice";
import { playlistApi } from "../services/playlists";

export const store = configureStore({
  reducer: {
    audioplayer: audioReducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistApi.middleware),
});
