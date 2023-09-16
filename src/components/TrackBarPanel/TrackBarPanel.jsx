import React from "react";
import * as S from "./TrackBarPanel.styles.js";

export function TrackBarPanel({ togglePlay, isPlaying, repeat, handleRepeat }) {
  return (
    <S.Controls>
      <S.BtnPrev>
        <S.BtnPrevSvg alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </S.BtnPrevSvg>
      </S.BtnPrev>
      <S.BtnPlay>
        <S.BtnPlaySvg
          alt="play"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="5"
                height="19"
                fill="#D9D9D9"
              />
              <rect
                x="10"
                width="5"
                height="19"
                fill="#D9D9D9"
              />
            </svg>
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          )}
        </S.BtnPlaySvg>
      </S.BtnPlay>
      <S.BtnNext>
        <S.BtnNextSvg alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </S.BtnNextSvg>
      </S.BtnNext>
      <S.BtnRepeat>
        <S.BtnRepeatSvg
          alt="repeat"
          onClick={handleRepeat}
        >
          {repeat ? (
            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          )}
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
