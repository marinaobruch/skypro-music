import React from "react";
import * as S from "./TrackBarPlayer.styles.js";
import SkeletonTrack from "../SkeletonTrack/SkeletonTrack";

export default function TrackBarPlayer({ loading }) {
  return (
    <S.PlayerTrackPlay>
      {loading ? (
        <SkeletonTrack />
      ) : (
        <S.TrackPlayContain>
          <S.TrackPlayImg>
            <S.TrackPlaySvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackPlaySvg>
          </S.TrackPlayImg>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">Ты та...</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackPlayAlbum>
            <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
          </S.TrackPlayAlbum>
        </S.TrackPlayContain>
      )}
      {loading ? null : (
        <S.TrackPlayLikeDis>
          <S.TrackPlayLike>
            <S.TrackPlayLikeSvg alt="like">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackPlayLikeSvg>
          </S.TrackPlayLike>
          <S.TrackPlayDislike>
            <S.TrackPlayDislikeSvg alt="dislike">
              <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
            </S.TrackPlayDislikeSvg>
          </S.TrackPlayDislike>
        </S.TrackPlayLikeDis>
      )}
    </S.PlayerTrackPlay>
  );
}
