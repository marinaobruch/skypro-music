import React from "react";
import "./PlayList.css";
import Track from "../Track/Track";

export default function PlayList({ loading }) {
  return (
    <div className="content__playlist playlist">
      <Track loading={loading} />
    </div>
  );
}
