import React from "react";
import * as S from "./TrackBarPanel.styles.js";

export default function TrackBarPanel() {
  return (
    <S.Controls>
      <S.BtnPrev>
        <S.BtnPrevSvg alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </S.BtnPrevSvg>
      </S.BtnPrev>
      <S.BtnPlay>
        <S.BtnPlaySvg alt="play">
          <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
        </S.BtnPlaySvg>
      </S.BtnPlay>
      <S.BtnNext>
        <S.BtnNextSvg alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </S.BtnNextSvg>
      </S.BtnNext>
      <S.BtnRepeat>
        <S.BtnRepeatSvg alt="repeat">
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </S.BtnRepeatSvg>
      </S.BtnRepeat>
      <S.BtnShuffle>
        <S.BtnShuffleSvg alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </S.BtnShuffleSvg>
      </S.BtnShuffle>
    </S.Controls>
  );
}
