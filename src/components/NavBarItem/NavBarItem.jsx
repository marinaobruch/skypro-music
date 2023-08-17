import React from "react";
import "./NavBarItem.css";

export default function NavBarItem({ menuName, menuLink }) {
  return (
    <li className="menu__item">
      <a
        href={menuLink}
        className="menu__link"
      >
        {menuName}
      </a>
    </li>
  );
}
