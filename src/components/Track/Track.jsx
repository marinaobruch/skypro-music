import React from "react";
import * as S from "./Track.styles.js";
import { SkeletonPlaylist } from "../SkeletonPlaylist/SkeletonPlaylist";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentTrack } from "../../store/playerSlice.js";

export function Track({ loading, getAllTracksError }) {
  const currentTrack = useSelector((state) => state.audioplayer.track);
  const allMyTracks = useSelector((state) => state.audioplayer.playlist);
  const isPlaying = useSelector((state) => state.audioplayer.playing);
  const dispatch = useDispatch();

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

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
                    isPlaying ? (
                      <S.playingdot></S.playingdot>
                    ) : (
                      <S.simpledot></S.simpledot>
                    )
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
                  {formatTime(track.duration_in_seconds)}
                </span>
              </S.TrackTimeText>
            </S.PlaylistTrack>
          ))}
        </>
      )}
    </S.PlaylistItem>
  );
}
