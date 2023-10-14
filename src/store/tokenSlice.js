import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export const { setAccessToken, setRefreshToken } = tokenSlice.actions;

export default tokenSlice.reducer;
