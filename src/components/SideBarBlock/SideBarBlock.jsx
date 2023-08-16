import React from "react";
import "./SideBarBlock.css";
import NavBarBlockItem from "../NavBarBlockItem/NavBarBlockItem";

export default function SideBarBlock() {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        <NavBarBlockItem
          playlistLink="#"
          playlistName="./img/playlist01.png"
          playlistAlt="day's playlist"
        />

        <NavBarBlockItem
          playlistLink="#"
          playlistName="./img/playlist02.png"
          playlistAlt="day's playlist"
        />

        <NavBarBlockItem
          playlistLink="#"
          playlistName="./img/playlist03.png"
          playlistAlt="day's playlist"
        />
      </div>
    </div>
  );
}
