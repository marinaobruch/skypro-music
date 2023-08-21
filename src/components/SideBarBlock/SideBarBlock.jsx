import React from "react";
import "./SideBarBlock.css";
import SideBarBlockItem from "../SideBarBlockItem/SideBarBlockItem";

export default function SideBarBlock({ loading }) {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
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
          playlistAlt="day's playlist"
        />

        <SideBarBlockItem
          loading={loading}
          playlistLink="#"
          playlistName="./img/playlist03.png"
          playlistAlt="day's playlist"
        />
      </div>
    </div>
  );
}
