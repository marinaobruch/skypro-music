import React from "react";
import * as S from "./TrackBarVolume.styles.js";

export const TrackBarVolume = ({ volume, setVolume }) => {
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImg>
          <S.VolumeSvg alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </S.VolumeSvg>
        </S.VolumeImg>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            type="range"
            name="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  );
};
