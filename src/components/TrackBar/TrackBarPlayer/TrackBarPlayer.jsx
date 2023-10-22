import { useSelector } from "react-redux";
import * as S from "./TrackBarPlayer.styles.js";

export const TrackBarPlayer = () => {
  const currentTrack = useSelector((state) => state.audioplayer.track);

  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImg>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </S.TrackPlaySvg>
        </S.TrackPlayImg>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="#">{currentTrack.name}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="#">
            {currentTrack.author}
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
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
    </S.PlayerTrackPlay>
  );
};
