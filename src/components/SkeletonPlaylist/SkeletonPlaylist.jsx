import React from "react";
import * as S from "./SkeletonPlaylist.styles.js";

export default function SkeletonPlaylist() {
  return (
    <S.PlaylistSkeleton>
      <S.SkeletonTrack></S.SkeletonTrack>
      <S.SkeletonTrackName></S.SkeletonTrackName>
      <S.SkeletonAuthor></S.SkeletonAuthor>
      <S.SkeletonAlbom></S.SkeletonAlbom>
    </S.PlaylistSkeleton>
  );
}
