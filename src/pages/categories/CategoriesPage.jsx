import { useParams } from 'react-router-dom'
import { ALBUMS } from '../../data.js'

import { useDispatch } from 'react-redux'
import { MainPlaylist } from '../../components/MainPlaylist/MainPlaylist.jsx'
import { useGetSelectionsQuery } from '../../redux/services/playlists.js'
import { addAllTracksInit } from '../../redux/store/playerSlice.js'
import * as S from './CategoriesPage.styles.js'

export const CategoriesPage = () => {
	const params = useParams()
	const dispatch = useDispatch

	const album = ALBUMS.find((album) => album.id === Number(params.id))

	const { data, error, isLoading } = useGetSelectionsQuery(Number(params.id))
	dispatch(addAllTracksInit(data?.items))

	return (
		<>
			<S.MainCenterblockH2>{album.name}</S.MainCenterblockH2>
			<MainPlaylist
				tracks={data?.items}
				getAllTracksError={error}
				isLoading={isLoading}
			/>
		</>
	)
}
