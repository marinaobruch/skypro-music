import React, { useState } from "react";
import * as S from "./MainPlaylist.styles.js";
import { useDispatch, useSelector } from "react-redux";
import { SkeletonPlaylist } from "../Skeletons/SkeletonPlaylist/SkeletonPlaylist.jsx";
import { addCurrentTrack } from "../../store/playerSlice.js";
import { Filter } from "../Filter/Filter.jsx";
import {
  useSetLikeMutation,
  useSetUnlikeMutation,
} from "../../services/playlists.js";

export function MainPlaylist({ getAllTracksError, tracks, isLoading, title }) {
  const dispatch = useDispatch();

  const [setLike] = useSetLikeMutation();
  const [setUnlike] = useSetUnlikeMutation();
  const currentTrack = useSelector((state) => state.audioplayer.track);
  const isPlaying = useSelector((state) => state.audioplayer.playing);
  const userId = Number(useSelector((state) => state.user.id));

  const [isFavourite, setFavourite] = useState(false);

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

  const toggleStarred = (track) => {
    if (!track.stared_user.some((user) => user.id === userId)) {
      console.log("like");
      setLike(track);
    } else {
      console.log("dislike");
      setUnlike(track);
    }
  };

  return (
    <S.ContentPlaylist>
      <S.MainCenterblockH2>{title}</S.MainCenterblockH2>
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
        {isLoading ? (
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
            {tracks.map((track) => (
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

                <S.TrackTimeText
                  onClick={(e) => {
                    toggleStarred(track);
                    e.stopPropagation();
                  }}
                >
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
