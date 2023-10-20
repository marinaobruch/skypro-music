import { createSlice } from "@reduxjs/toolkit";
const AUTH_KEY = "auth";

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY));
  } catch (error) {
    console.error(error);
    return null;
  }
}

const initialState = {
  id: null,
  email: null,
  username: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: getAuthFromLocalStorage() ?? initialState,

  reducers: {
    userLogin: (state, action) => {
      const payload = action.payload ?? initialState;

      state.id = payload.id;
      state.email = payload.email;
      state.username = payload.username;

      localStorage.setItem(AUTH_KEY, JSON.stringify(state));
    },

    userLogout: (state) => {
      state.id = null;
      state.email = null;
      state.username = null;

      localStorage.removeItem(AUTH_KEY);
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
