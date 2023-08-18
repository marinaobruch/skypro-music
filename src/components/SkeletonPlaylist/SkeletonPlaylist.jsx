import React from "react";
import "./SkeletonPlaylist.css";

export default function SkeletonPlaylist() {
  return (
    <div className="playlist__skeleton">
      <div className="skeleton__track"></div>
      <div className="skeleton__track-name"></div>
      <div className="skeleton__author"></div>
      <div className="skeleton__album"></div>
      <div className="skeleton__time"></div>
    </div>
  );
}
