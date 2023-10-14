import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./playerSlice";
import userReducer from "./userSlice";
import { playlistApi } from "../services/playlists";

export const store = configureStore({
  reducer: {
    audioplayer: audioReducer,
    user: userReducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistApi.middleware),
});
