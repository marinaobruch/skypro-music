import React from "react";
import "./SideBarBlock.css";

export default function SideBarBlock() {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        <div className="sidebar__item">
          <a
            className="sidebar__link"
            href="#"
          >
            <img
              className="sidebar__img"
              src="./img/playlist01.png"
              alt="day's playlist"
            />
          </a>
        </div>
        <div className="sidebar__item">
          <a
            className="sidebar__link"
            href="#"
          >
            <img
              className="sidebar__img"
              src="./img/playlist02.png"
              alt="day's playlist"
            />
          </a>
        </div>
        <div className="sidebar__item">
          <a
            className="sidebar__link"
            href="#"
          >
            <img
              className="sidebar__img"
              src="./img/playlist03.png"
              alt="day's playlist"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
