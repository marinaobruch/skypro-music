import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    username: null,
    token: null,
    id: null,
  },

  reducers: {
    userLogin: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },

    userLogout: (state) => {
      state.id = null;
      state.email = null;
      state.username = null;
      state.token = null;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
