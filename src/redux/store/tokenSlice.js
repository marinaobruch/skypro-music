import { createSlice } from "@reduxjs/toolkit";

// function getAuthFromLocalStorage() {
//   try {
//     return JSON.parse(localStorage.getItem(AUTH_KEY));
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

const initialState = {
  accessToken: null,
  refreshToken: null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { setAccessToken } = tokenSlice.actions;

export default tokenSlice.reducer;
