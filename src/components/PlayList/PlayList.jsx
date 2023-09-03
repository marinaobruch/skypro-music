import React from "react";
import * as S from "./PlayList.styles.js";
import { Track } from "../Track/Track";

export function PlayList({ loading }) {
  return (
    <S.ContentPlaylist>
      <Track loading={loading} />
    </S.ContentPlaylist>
  );
}
