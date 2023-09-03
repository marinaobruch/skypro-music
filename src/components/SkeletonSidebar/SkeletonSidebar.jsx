import React from "react";
import * as S from "./SkeletonSidebar.styles.js";

export function SkeletonSidebar() {
  return (
    <div className="sidebar_skeleton">
      <S.SkeletonItem></S.SkeletonItem>
    </div>
  );
}
