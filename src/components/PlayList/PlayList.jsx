import React from "react";
import * as S from "./PlayList.styles.js";
import { Track } from "../Track/Track";

export function PlayList({ loading, allTracks, setCurrentTrack }) {
  return (
    <S.ContentPlaylist>
      <Track
        loading={loading}
        allTracks={allTracks}
        setCurrentTrack={setCurrentTrack}
      />
    </S.ContentPlaylist>
  );
}
