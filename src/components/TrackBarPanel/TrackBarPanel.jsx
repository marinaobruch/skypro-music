import React from "react";
import * as S from "./TrackBarPanel.styles.js";
import { useDispatch } from "react-redux";
import { nextTrack } from "../../store/playerSlice.js";

export function TrackBarPanel({
  togglePlayPause,
  isPlaying,
  repeat,
  handleRepeat,
}) {
  const dispatch = useDispatch();

  const handleNext = () => {};
  const handlePrevious = () => {};

  return (
    <S.Controls>
      <S.BtnPrev>
        <S.BtnPrevSvg onClick={handlePrevious}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </S.BtnPrevSvg>
      </S.BtnPrev>

      <S.BtnPlay onClick={togglePlayPause}>
        <S.BtnPlaySvg alt="play">
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
        <S.BtnNextSvg onClick={() => dispatch(nextTrack())}>
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </S.BtnNextSvg>
      </S.BtnNext>
      <S.BtnRepeat onClick={handleRepeat}>
        {repeat ? (
          <S.BtnRepeatActiveSvg alt="repeat">
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          </S.BtnRepeatActiveSvg>
        ) : (
          <S.BtnRepeatSvg alt="repeat">
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          </S.BtnRepeatSvg>
        )}
      </S.BtnRepeat>
      <S.BtnShuffle>
        <S.BtnShuffleSvg onClick={() => alert("Еще не реализовано")}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </S.BtnShuffleSvg>
      </S.BtnShuffle>
    </S.Controls>
  );
}
