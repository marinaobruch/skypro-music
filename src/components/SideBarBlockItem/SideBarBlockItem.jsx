import React from "react";
import "./SideBarBlockItem.css";
import SkeletonSidebar from "../SkeletonSidebar/SkeletonSidebar";

export default function SideBarBlockItem({
  playlistLink,
  playlistName,
  playlistAlt,
  loading,
}) {
  return (
    <div className="sidebar__item">
      {loading ? (
        <SkeletonSidebar />
      ) : (
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
      )}
    </div>
  );
}
