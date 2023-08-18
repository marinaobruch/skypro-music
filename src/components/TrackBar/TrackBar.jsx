import React from "react";
import "./TrackBar.css";
import TrackBarPanel from "../TrackBarPanel/TrackBarPanel";
import TrackBarPlayer from "../TrackBarPlayer/TrackBarPlayer";
import TrackBarVolume from "../TrackBarVolume/TrackBarVolume";

export default function TrackBar({ loading }) {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>

        <div className="bar__player-block">
          <div className="bar__player player">
            <TrackBarPanel />
            <TrackBarPlayer loading={loading} />
          </div>
          <TrackBarVolume />
        </div>
      </div>
    </div>
  );
}
