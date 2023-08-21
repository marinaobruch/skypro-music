import React from "react";
import "./SideBarPersonal.css";

export default function SideBarPersonal({ loading }) {
  return (
    <div className="sidebar__personal">
      {loading ? null : <p className="sidebar__personal-name">Sergey.Ivanov</p>}
      {loading ? null : (
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      )}
    </div>
  );
}
