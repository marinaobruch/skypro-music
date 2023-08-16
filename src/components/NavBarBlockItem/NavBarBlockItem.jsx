import React from "react";
import "./NavBarBlockItem.css";

export default function NavBarBlockItem({
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
