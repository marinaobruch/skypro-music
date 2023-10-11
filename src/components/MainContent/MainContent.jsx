import React from "react";
import * as S from "./MainContent.styles.js";
import { MainPlaylist } from "../MainPlaylist/MainPlaylist";

export function MainContent({ loading, getAllTracksError }) {
  return (
    <S.CenterblockCntent>
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
      <MainPlaylist
        loading={loading}
        getAllTracksError={getAllTracksError}
      />
    </S.CenterblockCntent>
  );
}
