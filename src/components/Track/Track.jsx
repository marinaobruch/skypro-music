import React from "react";
import * as S from "./Track.styles.js";
import { SkeletonPlaylist } from "../SkeletonPlaylist/SkeletonPlaylist";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentTrack } from "../../store/playerSlice.js";

export function Track({ loading, getAllTracksError }) {
  const currentTrack = useSelector((state) => state.audioplayer.track);
  const allMyTracks = useSelector((state) => state.audioplayer.playlist);
  const dispatch = useDispatch();

  const curMyTrack = allMyTracks.findIndex((i) => i == currentTrack);
  console.log(curMyTrack);
  console.log(allMyTracks[curMyTrack]);

  return (
    <S.PlaylistItem>
      {getAllTracksError !== null ? (
        <p>
          Не удалось загрузить плейлист, попробуйте позже: {getAllTracksError}
        </p>
      ) : null}
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
          {allMyTracks.map((track) => (
            <S.PlaylistTrack
              key={track.id}
              onClick={() => dispatch(addCurrentTrack(track))}
            >
              <S.TrackTitle>
                <S.TrackTitleImg>
                  {currentTrack.id === track.id ? (
                    <S.playingdot></S.playingdot>
                  ) : (
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSvg>
                  )}
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
