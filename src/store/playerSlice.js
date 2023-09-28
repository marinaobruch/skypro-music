import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "audioplayer",
  initialState: {
    playing: false,
    track: {},
  },
  reducers: {
    addCurrentTrack(state, action) {
      state.track = action.payload;
    },
  },
});

export const { addCurrentTrack } = playerSlice.actions;

export default playerSlice.reducer;
