import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "audioplayer",
  initialState: {
    playing: false,
    track: null,
    playlist: [{}],
    playlistInit: [{}],
    playlistFavorite: [{}],
    shuffledPlaylist: [{}],
    shuffled: false,
    isSorted: false,
    searchTrackList: [],
  },

  reducers: {
    addAllTracks(state, action) {
      state.playlist = action.payload;
    },

    addAllTracksInit(state, action) {
      state.playlistInit = action.payload;
    },

    addMyTracks(state, action) {
      state.playlistFavorite = action.payload;
    },
    addCurrentTrack(state, action) {
      state.track = action.payload.track;
      state.playlist = action.payload.tracks;
    },
    togglePlayer(state, action) {
      if (state.playing === action.payload) {
        return;
      }
      state.playing = !state.playing;
    },
    nextTrack(state) {
      const curTrack = state.track;
      const curPlaylist = state.shuffled
        ? state.shuffledPlaylist
        : state.playlist;

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
      const curPlaylist = state.shuffled
        ? state.shuffledPlaylist
        : state.playlist;

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
        const newShuffledArray = state.playlist.map((track) => track);
        state.shuffledPlaylist = newShuffledArray.sort(
          () => Math.random() - 0.5
        );
      }
    },

    handlerSearchTrack: (store, action) => {
      const listForSearch = [...store.playlistInit];

      const result = listForSearch.filter(
        (track) =>
          track?.name.toLowerCase().startsWith(action.payload.toLowerCase()) ||
          track?.author
            .toLowerCase()
            .startsWith(action.payload.toLowerCase()) ||
          track?.name.toLowerCase().startsWith(action.payload.toLowerCase())
      );

      store.searchTrackList = result;
    },
  },
});

export const {
  addAllTracks,
  addAllTracksInit,
  addMyTracks,
  addCurrentTrack,
  nextTrack,
  previousTrack,
  togglePlayer,
  shuffledHandlePlaylist,
} = playerSlice.actions;

export default playerSlice.reducer;
