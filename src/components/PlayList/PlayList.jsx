import React from "react";
import * as S from "./PlayList.styles.js";
import { Track } from "../Track/Track";

export function PlayList({ loading, getAllTracksError }) {
  return (
    <S.ContentPlaylist>
      <Track
        loading={loading}
        getAllTracksError={getAllTracksError}
      />
    </S.ContentPlaylist>
  );
}
