import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "audioplayer",
  initialState: {
    playing: false,
    playlist: [{}],
    playlistFavorite: [{}],
    track: {},
    shuffled: false,
    shuffledPlaylist: [{}],
    currentPlaylist: [{}],
    currentPage: "",
  },

  reducers: {
    addAllTracks(state, action) {
      state.playlist = action.payload;
    },
    addMyTracks(state, action) {
      state.playlistFavorite = action.payload;
    },
    addCurrentTrack(state, action) {
      // state.track = action.payload;

      if (state.currentPage === "Main") {
        const newCurrentArrayMain = state.playlist.map((track) => track);
        state.currentPlayList = newCurrentArrayMain;
        console.log("Main");
        return;
      }
      if (state.currentPage === "Favorites") {
        const newCurrentArrayFav = state.playlistFavorite.map((track) => track);
        state.currentPlayList = newCurrentArrayFav;
        console.log("Favorites");
        return;
      }
      console.log("Error");
      // currentTrackIndex = state.currentPlayList.findIndex(
      //   (track) => track.id === action.payload
      // );

      // state.track = state.currentPlayList[currentTrackIndex];
    },
    togglePlayer(state, action) {
      if (state.playing === action.payload) {
        return;
      }
      state.playing = !state.playing;
    },
    nextTrack(state) {
      const curPlaylist = state.shuffled
        ? state.shuffledPlaylist
        : state.playlist;
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
    previousTrack(state) {
      const curPlaylist = state.shuffled
        ? state.shuffledPlaylist
        : state.playlist;
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
    shuffledHandlePlaylist(state) {
      state.shuffled = !state.shuffled;
      const newShuffledArray = state.playlist.map((track) => track);
      state.shuffledPlaylist = newShuffledArray.sort(() => Math.random() - 0.5);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
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
