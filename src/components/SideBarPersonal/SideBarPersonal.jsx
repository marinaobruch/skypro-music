import React from "react";
import "./SideBarPersonal.css";

export default function SideBarPersonal({ loading }) {
  return (
    <div className="sidebar__personal">
      {loading ? (
        <p className="sidebar__personal-name">User</p>
      ) : (
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
      )}
      <div className="sidebar__icon">
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
}
