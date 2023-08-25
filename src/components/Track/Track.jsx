import React from "react";
import * as S from "./Track.styles.js";
import SkeletonPlaylist from "../SkeletonPlaylist/SkeletonPlaylist";
import { tracksArray } from "../Imports/TracksImport";

export default function Track({ loading }) {
  return (
    <S.PlaylistItem>
      {tracksArray.map((option) => (
        <S.PlaylistTrack key={option.user.id}>
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
                    {option.user.track}{" "}
                    <S.TrackTitleSpan>{option.user.modify}</S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                <S.TrackAuthorLink
                  className="track__author-link"
                  href="http://"
                >
                  {option.user.artist}
                </S.TrackAuthorLink>
              </S.TrackAuthor>

              <S.TrackAlbom>
                <S.TrackAlbomLink href="http://">
                  {option.user.album}
                </S.TrackAlbomLink>
              </S.TrackAlbom>

              <S.TrackTimeText>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <span className="track__time-text">{option.user.time}</span>
              </S.TrackTimeText>
            </>
          )}
        </S.PlaylistTrack>
      ))}
    </S.PlaylistItem>
  );
}
