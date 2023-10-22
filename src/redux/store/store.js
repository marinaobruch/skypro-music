import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./playerSlice";
import userReducer from "./userSlice";
import tokenReducer from "./tokenSlice";
import setFiltersReducer from "./filterSlice";

import { playlistApi } from "../services/playlists";

export default configureStore({
  reducer: {
    audioplayer: audioReducer,
    user: userReducer,
    token: tokenReducer,
    setFilters: setFiltersReducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistApi.middleware),
});
