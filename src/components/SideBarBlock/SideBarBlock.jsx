import React from "react";
import "./SideBarBlock.css";
import SideBarBlockItem from "../SideBarBlockItem/SideBarBlockItem";
import SkeletonSidebar from "../SkeletonSidebar/SkeletonSidebar";

export default function SideBarBlock() {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        <SkeletonSidebar />

        <SideBarBlockItem
          playlistLink="#"
          playlistName="./img/playlist01.png"
          playlistAlt="day's playlist"
        />

        <SideBarBlockItem
          playlistLink="#"
          playlistName="./img/playlist02.png"
          playlistAlt="day's playlist"
        />

        <SideBarBlockItem
          playlistLink="#"
          playlistName="./img/playlist03.png"
          playlistAlt="day's playlist"
        />
      </div>
    </div>
  );
}
