import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./playerSlice";

export const store = configureStore({
  reducer: {
    audioplayer: audioReducer,
  },
});
