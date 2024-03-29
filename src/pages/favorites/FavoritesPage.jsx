import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainPlaylist } from '../../components/MainPlaylist/MainPlaylist.jsx'
import {
	useGetFavTracksQuery,
	useLazyGetFavTracksQuery,
	usePostTokenRefreshMutation,
} from '../../redux/services/playlists.js'
import { addAllTracksInit, addMyTracks } from '../../redux/store/playerSlice.js'
import { setAccessToken } from '../../redux/store/tokenSlice.js'
import * as S from './FavoritesPage.styles.js'

export const FavoritesPage = () => {
	const dispatch = useDispatch()

	const { data, isLoading } = useGetFavTracksQuery()
	const [fetchFavorite] = useLazyGetFavTracksQuery()
	const [postTokenRefresh, {}] = usePostTokenRefreshMutation()

	const favoriteError = null
	const myFavTracks = useSelector((state) => state.audioplayer.playlistFavorite)

	useEffect(() => {
		const refresh = window.localStorage.getItem('refreshToken')

		postTokenRefresh({ refresh })
			.unwrap()
			.then((newToken) => {
				dispatch(setAccessToken({ token: newToken.access }))
				fetchFavorite()
					.unwrap()
					.then((data) => {
						dispatch(addMyTracks(data))
					})
					.catch((error) => {
						console.log(error)
						favoriteError = error
					})
			})
	}, [data])

	dispatch(addAllTracksInit(myFavTracks))

	return (
		<>
			<S.MainCenterblockH2>Мои треки</S.MainCenterblockH2>

			<MainPlaylist
				tracks={myFavTracks}
				getAllTracksError={favoriteError}
				isLoading={isLoading}
			/>
		</>
	)
}
