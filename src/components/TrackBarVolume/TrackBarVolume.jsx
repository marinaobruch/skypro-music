import React from "react";
import * as S from "./TrackBarVolume.styles.js";

export default function TrackBarVolume() {
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
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  );
}
