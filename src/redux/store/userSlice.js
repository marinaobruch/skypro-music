import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    fullUser: null,
    id: null,
    email: null,
    username: null,
  },

  reducers: {
    userLogin: (state, action) => {
      state.fullUser = action.payload.fullUser;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
    },

    userLogout: (state) => {
      fullUser: null, (state.id = null);
      state.email = null;
      state.username = null;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
