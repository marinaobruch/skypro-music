import { configureStore } from '@reduxjs/toolkit'
import audioReducer from './playerSlice'
import tokenReducer from './tokenSlice'
import userReducer from './userSlice'

import { playlistApi } from '../services/playlists'

export default configureStore({
	reducer: {
		audioplayer: audioReducer,
		user: userReducer,
		token: tokenReducer,
		[playlistApi.reducerPath]: playlistApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(playlistApi.middleware),
})
