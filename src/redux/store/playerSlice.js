import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "audioplayer",
  initialState: {
    playing: false,
    playlist: [{}],
    playlistFavorite: [{}],
    track: null,
    shuffled: false,
    shuffledPlaylist: [{}],
    currentPage: "",
    currentPlaylist: [],
  },

  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    addAllTracks(state, action) {
      state.playlist = action.payload;
    },
    addMyTracks(state, action) {
      state.playlistFavorite = action.payload;
    },
    addCurrentTrack(state, action) {
      if (state.currentPage === "Main") {
        state.currentPlaylist = state.playlist;
      }
      if (state.currentPage === "Favorites") {
        state.currentPlaylist = state.playlistFavorite;
      }

      let currentTrackIndex = null;
      const setStateCurrentPlaylist = state.currentPlaylist;

      currentTrackIndex = setStateCurrentPlaylist.findIndex(
        (track) => track.id === action.payload.id
      );

      state.track = setStateCurrentPlaylist[currentTrackIndex];
    },
    togglePlayer(state, action) {
      if (state.playing === action.payload) {
        return;
      }
      state.playing = !state.playing;
    },
    nextTrack(state) {
      const curTrack = state.track;
      const curPlaylist = state.currentPlaylist;

      const currentTrackIdInList = curPlaylist.findIndex(
        (track) => track.id == curTrack.id
      );

      if (currentTrackIdInList >= curPlaylist.length - 1) {
        state.track = curPlaylist[0];
      } else {
        state.track = curPlaylist[currentTrackIdInList + 1];
      }
    },
    previousTrack(state) {
      const curTrack = state.track;
      const curPlaylist = state.currentPlaylist;

      const currentTrackIdInList = curPlaylist.findIndex(
        (track) => track.id == curTrack.id
      );

      if (currentTrackIdInList === 0) {
        state.track = curPlaylist[0];
      } else {
        state.track = curPlaylist[currentTrackIdInList - 1];
      }
    },
    shuffledHandlePlaylist(state, action) {
      state.shuffled = action.payload;
      if (state.shuffled) {
        state.shuffledPlaylist = state.currentPlaylist.sort(
          () => Math.random() - 0.5
        );
      }
      if (!state.shuffled) {
        if (state.currentPage === "Main") {
          state.currentPlaylist = state.playlist;
        }
        if (state.currentPage === "Favorites") {
          state.currentPlaylist = state.playlistFavorite;
        }
      }
    },
  },
});

export const {
  addAllTracks,
  addMyTracks,
  addCurrentTrack,
  nextTrack,
  previousTrack,
  togglePlayer,
  shuffledHandlePlaylist,
  setCurrentPage,
} = playerSlice.actions;

export default playerSlice.reducer;
