import React from 'react'
import { ReactComponent as SvgVolume } from './../../../assets/images/icon/volume.svg'
import * as S from './TrackBarVolume.styles.js'

export const TrackBarVolume = ({ volume, setVolume }) => {
	return (
		<S.BarVolumeBlock>
			<S.VolumeContent>
				<S.VolumeImg>
					<SvgVolume />
				</S.VolumeImg>
				<S.VolumeProgress>
					<S.VolumeProgressLine
						type='range'
						name='range'
						min={0}
						max={100}
						value={volume}
						onChange={(e) => setVolume(e.target.value)}
					/>
				</S.VolumeProgress>
			</S.VolumeContent>
		</S.BarVolumeBlock>
	)
}
