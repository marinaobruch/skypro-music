import React from "react";
import * as S from "./MainPlaylist.styles.js";
import { useDispatch, useSelector } from "react-redux";
import { SkeletonPlaylist } from "../Skeletons/SkeletonPlaylist/SkeletonPlaylist.jsx";
import { addCurrentTrack } from "../../store/playerSlice.js";
import { Filter } from "../Filter/Filter.jsx";

export function MainPlaylist({ loading, getAllTracksError }) {
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
    <S.ContentPlaylist>
      <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
      <Filter />
      <S.ContentTitle>
        <S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
        <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
        <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
        <S.PlaylistTitleCol4>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.PlaylistTitleSvg>
        </S.PlaylistTitleCol4>
      </S.ContentTitle>

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
    </S.ContentPlaylist>
  );
}
