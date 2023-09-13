import React from "react";
import * as S from "./PlayList.styles.js";
import { Track } from "../Track/Track";

export function PlayList({ loading, tracks, setCurrentTrack }) {
  return (
    <S.ContentPlaylist>
      <Track
        loading={loading}
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
      />
    </S.ContentPlaylist>
  );
}
