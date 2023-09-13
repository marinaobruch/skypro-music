import React from "react";
import * as S from "./Track.styles.js";
import { SkeletonPlaylist } from "../SkeletonPlaylist/SkeletonPlaylist";

export function Track({ loading, allTracks, setCurrentTrack }) {
  return (
    <S.PlaylistItem>
      {loading ? (
        <>
          <SkeletonPlaylist />
          <SkeletonPlaylist />
          <SkeletonPlaylist />
          <SkeletonPlaylist />
          <SkeletonPlaylist />
          <SkeletonPlaylist />
          <SkeletonPlaylist />
          <SkeletonPlaylist />
          <SkeletonPlaylist />
          <SkeletonPlaylist />
          <SkeletonPlaylist />
          <SkeletonPlaylist />
        </>
      ) : (
        <>
          {allTracks.map((track) => (
            <S.PlaylistTrack
              key={track.id}
              onClick={() => setCurrentTrack(track)}
            >
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>

                <div className="track__title-text">
                  <S.TrackTitleLink href="#">
                    {track.name}
                    <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                <S.TrackAuthorLink
                  className="track__author-link"
                  href="#"
                >
                  {track.author}
                </S.TrackAuthorLink>
              </S.TrackAuthor>

              <S.TrackAlbom>
                <S.TrackAlbomLink href="#">{track.album}</S.TrackAlbomLink>
              </S.TrackAlbom>

              <S.TrackTimeText>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <span className="track__time-text">
                  {track.duration_in_seconds}
                </span>
              </S.TrackTimeText>
            </S.PlaylistTrack>
          ))}
        </>
      )}
    </S.PlaylistItem>
  );
}
