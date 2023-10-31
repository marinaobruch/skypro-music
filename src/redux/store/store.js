import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./playerSlice";
import userReducer from "./userSlice";
import tokenReducer from "./tokenSlice";

import { playlistApi } from "../services/playlists";

export default configureStore({
  reducer: {
    audioplayer: audioReducer,
    user: userReducer,
    token: tokenReducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistApi.middleware),
});
