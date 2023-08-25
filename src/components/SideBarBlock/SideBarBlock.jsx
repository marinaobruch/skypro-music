import React from "react";
import * as S from "./SideBarBlock.styles.js";
import SideBarBlockItem from "../SideBarBlockItem/SideBarBlockItem";

export default function SideBarBlock({ loading }) {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <SideBarBlockItem
          loading={loading}
          playlistLink="#"
          playlistName="./img/playlist01.png"
          playlistAlt="day's playlist"
        />

        <SideBarBlockItem
          loading={loading}
          playlistLink="#"
          playlistName="./img/playlist02.png"
          playlistAlt="100 hits playlist"
        />

        <SideBarBlockItem
          loading={loading}
          playlistLink="#"
          playlistName="./img/playlist03.png"
          playlistAlt="indi playlist"
        />
      </S.SidebarList>
    </S.SidebarBlock>
  );
}
