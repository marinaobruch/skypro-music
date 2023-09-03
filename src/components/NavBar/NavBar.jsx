import React, { useState } from "react";
import * as S from "./NavBar.styles.js";
import { NavBarMenu } from "../NavBarMenu/NavBarMenu";

export function NavBar({ setUser }) {
  const [open, setOpen] = useState(false);
  function toggleOlen() {
    setOpen(!open);
  }

  return (
    <S.MainNav>
      <S.Logo>
        <S.LogoImg
          src="./img/logo.png"
          alt="logo"
        />
      </S.Logo>

      <S.Burger onClick={toggleOlen}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.Burger>

      {open ? <NavBarMenu setUser={setUser} /> : null}
    </S.MainNav>
  );
}
