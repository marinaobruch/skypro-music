import React from "react";
import "./NavBar.css";
import NavBarItem from "../NavBarItem/NavBarItem";

export default function NavBar() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img
          className="logo__image"
          src="./img/logo.png"
          alt="logo"
        />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <NavBarItem
            menuName="Главная"
            menuLink="#"
          />
          <NavBarItem
            menuName="Мой плейлист"
            menuLink="#"
          />
          <NavBarItem
            menuName="Войти"
            menuLink="../signin.html" // add correct way for sing in
          />
        </ul>
      </div>
    </nav>
  );
}
