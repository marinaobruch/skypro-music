import React from 'react'
import * as S from './SkeletonTrack.styles.js'

export const SkeletonTrack = () => {
	return (
		<S.TrackPlayContainSkeleton>
			<S.TrackPlayImgSkeleton></S.TrackPlayImgSkeleton>

			<S.TrackPlayAuthorSkeleton></S.TrackPlayAuthorSkeleton>

			<S.TrackPlayAlbomSkeleton></S.TrackPlayAlbomSkeleton>
		</S.TrackPlayContainSkeleton>
	)
}
