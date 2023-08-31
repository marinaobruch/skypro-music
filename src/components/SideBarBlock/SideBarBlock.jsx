import React from "react";
import * as S from "./SideBarBlock.styles.js";
import SkeletonSidebar from "../SkeletonSidebar/SkeletonSidebar";

export default function SideBarBlock({ loading, albums }) {
  return (
    <S.SidebarBlock>
      {albums.map((albom) => (
        <S.SidebarList key={albom.id}>
          <S.SidebarItem>
            {loading ? (
              <SkeletonSidebar />
            ) : (
              <S.SidebarLink href={albom.playlistImg}>
                <S.SidebarImgItem
                  src={albom.playlistImg}
                  alt={albom.playlistAlt}
                />
              </S.SidebarLink>
            )}
          </S.SidebarItem>
        </S.SidebarList>
      ))}
    </S.SidebarBlock>
  );
}
