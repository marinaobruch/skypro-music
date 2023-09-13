import React from "react";
import * as S from "./Track.styles.js";
import { SkeletonPlaylist } from "../SkeletonPlaylist/SkeletonPlaylist";

export function Track({ loading, tracks, setCurrentTrack }) {
  return (
    <S.PlaylistItem>
      {tracks.map((track) => (
        <S.PlaylistTrack
          key={track.user.id}
          onClick={() => setCurrentTrack(track)}
          // onClick={() => console.log("1")}
        >
          {loading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>

                <div className="track__title-text">
                  <S.TrackTitleLink href="http://">
                    {track.user.track}{" "}
                    <S.TrackTitleSpan>{track.user.modify}</S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                <S.TrackAuthorLink
                  className="track__author-link"
                  href="http://"
                >
                  {track.user.artist}
                </S.TrackAuthorLink>
              </S.TrackAuthor>

              <S.TrackAlbom>
                <S.TrackAlbomLink href="http://">
                  {track.user.album}
                </S.TrackAlbomLink>
              </S.TrackAlbom>

              <S.TrackTimeText>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <span className="track__time-text">{track.user.time}</span>
              </S.TrackTimeText>
            </>
          )}
        </S.PlaylistTrack>
      ))}
    </S.PlaylistItem>
  );
}
