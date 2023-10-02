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
    togglePlayer(state, action) {
      if (state.playing === action.payload) {
        return;
      }
      state.playing = !state.playing;
    },
    nextTrack(state, action) {
      const curPlaylist = state.playlist;
      const curTrack = state.track;
      const currentTrackIdInList = curPlaylist.findIndex(
        (track) => track.id == curTrack.id
      );
      if (currentTrackIdInList >= curPlaylist.length - 1) {
        state.track = state.playlist[0];
      } else {
        state.track = state.playlist[currentTrackIdInList + 1];
      }
    },
    previousTrack(state, action) {
      const curPlaylist = state.playlist;
      const curTrack = state.track;
      const currentTrackIdInList = curPlaylist.findIndex(
        (track) => track.id == curTrack.id
      );
      if (currentTrackIdInList === 0) {
        state.track = state.playlist[0];
      } else {
        state.track = state.playlist[currentTrackIdInList - 1];
      }
    },
  },
});

export const {
  addAllTracks,
  addCurrentTrack,
  nextTrack,
  previousTrack,
  togglePlayer,
} = playerSlice.actions;

export default playerSlice.reducer;
