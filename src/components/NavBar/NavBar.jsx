import React, { useState } from "react";
import "./NavBar.css";
import NavBarMenu from "../NavBarMenu/NavBarMenu";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  function toggleOlen() {
    setOpen(!open)
  }

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img
          className="logo__image"
          src="./img/logo.png"
          alt="logo"
        />
      </div>

      <div
      className="nav__burger burger"
      onClick={toggleOlen}
      >
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>

      {open ? <NavBarMenu /> : null}
    </nav>
  );
}
