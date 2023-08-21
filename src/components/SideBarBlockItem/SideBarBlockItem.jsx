import React from "react";
import * as S from "./SideBarBlockItem.styles.js";
import SkeletonSidebar from "../SkeletonSidebar/SkeletonSidebar";

export default function SideBarBlockItem({
  playlistLink,
  playlistName,
  playlistAlt,
  loading,
}) {
  return (
    <S.SidebarItem>
      {loading ? (
        <SkeletonSidebar />
      ) : (
        <S.SidebarLink href={playlistLink}>
          <S.SidebarImgItem
            src={playlistName}
            alt={playlistAlt}
          />
        </S.SidebarLink>
      )}
    </S.SidebarItem>
  );
}
