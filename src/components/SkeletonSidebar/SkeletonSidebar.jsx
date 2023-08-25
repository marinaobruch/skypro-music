import React from "react";
import * as S from "./SkeletonSidebar.styles.js";

export default function SkeletonSidebar() {
  return (
    <div className="sidebar_skeleton">
      <S.SkeletonItem></S.SkeletonItem>
    </div>
  );
}
