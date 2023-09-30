import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "audioplayer",
  initialState: {
    playing: false,
    playlist: [{}],
    track: {},
    currentTrackIndex: 0,
  },

  reducers: {
    addAllTracks(state, action) {
      state.playlist = action.payload;
    },
    addCurrentTrack(state, action) {
      state.track = action.payload;
    },
    nextTrack(state, action) {
      //   const curPlaylist = state.playlist;
      //   const curTrack = state.track;
      //   const newTrackInd = curPlaylist.findIndex((i) => i == curTrack);
      //   console.log(newTrackInd);
    },
  },
});

export const { addAllTracks, addCurrentTrack, nextTrack } = playerSlice.actions;

export default playerSlice.reducer;

// (state.currentTrackIndex = state.playlist.findIndex(
//     (i) => i == state.track
//   ))

// const curMyTrack = allMyTracks.findIndex((i) => i == currentTrack);
