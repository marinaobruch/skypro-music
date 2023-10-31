import React from "react";
import { Link } from "react-router-dom";
import * as S from "./SideBarBlock.styles.js";
import { SkeletonSidebar } from "../../Skeletons/SkeletonSidebar/SkeletonSidebar.jsx";

export const SideBarBlock = ({ loading, albums }) => {
  return (
    <S.SidebarBlock>
      {albums.map((album) => (
        <S.SidebarList key={album.id}>
          <S.SidebarItem>
            {loading ? (
              <SkeletonSidebar />
            ) : (
              <Link to={`category/${album.id}`}>
                <S.SidebarLink href={album.src}>
                  <S.SidebarImgItem
                    src={album.src}
                    alt={album.playlistAlt}
                  />
                </S.SidebarLink>
              </Link>
            )}
          </S.SidebarItem>
        </S.SidebarList>
      ))}
    </S.SidebarBlock>
  );
};
