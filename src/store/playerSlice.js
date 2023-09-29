import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "audioplayer",
  initialState: {
    playing: false,
    playlist: [{}],
    track: {},
    trackId: 0,
  },
  reducers: {
    addAllTracks(state, action) {
      state.playlist = action.payload;
    },
    addCurrentTrack(state, action) {
      (state.track = action.payload), (state.trackId = action.payload.id);
    },
    nextTrack(state, action) {},
  },
});

export const { addAllTracks, addCurrentTrack, nextTrack } = playerSlice.actions;

export default playerSlice.reducer;
