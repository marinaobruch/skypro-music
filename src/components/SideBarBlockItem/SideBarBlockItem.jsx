import React from "react";
import "./SideBarBlockItem.css";

export default function SideBarBlockItem({
  playlistLink,
  playlistName,
  playlistAlt,
}) {
  return (
    <div className="sidebar__item">
      <a
        className="sidebar__link"
        href={playlistLink}
      >
        <img
          className="sidebar__img"
          src={playlistName}
          alt={playlistAlt}
        />
      </a>
    </div>
  );
}
