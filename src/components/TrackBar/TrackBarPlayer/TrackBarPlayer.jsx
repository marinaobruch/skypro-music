import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	useGetTrackByIdQuery,
	useSetLikeMutation,
	useSetUnlikeMutation,
} from '../../../redux/services/playlists.js'
import { userLogout } from '../../../redux/store/userSlice.js'
import { ReactComponent as SvgFav } from './../../../assets/images/icon/fav.svg'
import { ReactComponent as SvgLike } from './../../../assets/images/icon/like.svg'

import { ReactComponent as SvgNote } from './../../../assets/images/icon/note.svg'
import * as S from './TrackBarPlayer.styles.js'

export const TrackBarPlayer = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const currentTrack = useSelector((state) => state.audioplayer.track)
	const userId = Number(useSelector((state) => state.user.id))

	const [setLike, {}] = useSetLikeMutation()
	const [setUnlike, {}] = useSetUnlikeMutation()

	const { data } = useGetTrackByIdQuery(Number(currentTrack?.id))
	const isLike = (data?.stared_user ?? []).find(({ id }) => id === userId)

	const logout = () => {
		dispatch(userLogout())
		navigate('/skypro-music/login')
	}

	const toggleStarred = () => {
		if (isLike) {
			console.log('dislike')

			setUnlike(currentTrack)
				.unwrap()
				.catch((error) => {
					console.log(error)
					navigate('/skypro-music/login')
					logout()
				})
		} else {
			console.log('like')

			setLike(currentTrack)
				.unwrap()
				.catch((error) => {
					console.log(error)
					navigate('/skypro-music/login')
					logout()
				})
		}
	}

	return (
		<S.PlayerTrackPlay>
			<S.TrackPlayContain>
				<S.TrackPlayImg>
					<SvgNote />
				</S.TrackPlayImg>
				<S.TrackAuthor>
					<S.TrackAuthorLink href='#'>{currentTrack.name}</S.TrackAuthorLink>
				</S.TrackAuthor>
				<S.TrackPlayAlbum>
					<S.TrackPlayAlbumLink href='#'>
						{currentTrack.author}
					</S.TrackPlayAlbumLink>
				</S.TrackPlayAlbum>
			</S.TrackPlayContain>
			<S.TrackPlayLikeDis>
				<S.TrackPlayLike onClick={() => toggleStarred()}>
					<S.TrackPlayLikeSvg alt='like'>
						{isLike ? <SvgFav /> : <SvgLike />}
					</S.TrackPlayLikeSvg>
				</S.TrackPlayLike>
			</S.TrackPlayLikeDis>
		</S.PlayerTrackPlay>
	)
}
