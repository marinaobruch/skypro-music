import { useDispatch, useSelector } from 'react-redux'
import {
	nextTrack,
	previousTrack,
	shuffledHandlePlaylist,
	togglePlayer,
} from '../../../redux/store/playerSlice.js'
import { ReactComponent as SvgNext } from './../../../assets/images/icon/next.svg'
import { ReactComponent as SvgPlay } from './../../../assets/images/icon/play.svg'
import { ReactComponent as SvgPrev } from './../../../assets/images/icon/prev.svg'
import { ReactComponent as SvgRepeatAct } from './../../../assets/images/icon/repeat-active.svg'
import { ReactComponent as SvgRepeat } from './../../../assets/images/icon/repeat.svg'
import { ReactComponent as SvgShuffleAct } from './../../../assets/images/icon/shuffle-active.svg'
import { ReactComponent as SvgShuffle } from './../../../assets/images/icon/shuffle.svg'
import { ReactComponent as SvgStop } from './../../../assets/images/icon/stop.svg'
import * as S from './TrackBarPanel.styles.js'

export const TrackBarPanel = ({ repeat, handleRepeat }) => {
	const dispatch = useDispatch()

	const isPlaying = useSelector((state) => state.audioplayer.playing)
	const isShuffled = useSelector((state) => state.audioplayer.shuffled)

	return (
		<S.Controls>
			<S.BtnPrev>
				<S.BtnPrevSvg onClick={() => dispatch(previousTrack())}>
					<SvgPrev />
				</S.BtnPrevSvg>
			</S.BtnPrev>

			<S.BtnPlay onClick={() => dispatch(togglePlayer())}>
				<S.BtnPlaySvg alt='play'>
					{isPlaying ? <SvgStop /> : <SvgPlay />}
				</S.BtnPlaySvg>
			</S.BtnPlay>
			<S.BtnNext>
				<S.BtnNextSvg onClick={() => dispatch(nextTrack())}>
					<SvgNext />
				</S.BtnNextSvg>
			</S.BtnNext>
			<S.BtnRepeat onClick={handleRepeat}>
				{repeat ? <SvgRepeatAct /> : <SvgRepeat />}
			</S.BtnRepeat>
			<S.BtnShuffle
				onClick={() => dispatch(shuffledHandlePlaylist(!isShuffled))}
			>
				{isShuffled ? <SvgShuffleAct /> : <SvgShuffle />}
			</S.BtnShuffle>
		</S.Controls>
	)
}
