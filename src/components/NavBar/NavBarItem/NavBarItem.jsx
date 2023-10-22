import React from "react";
import * as S from "./NavBarItem.styles.js";

export const NavBarItem = ({ menuName, menuLink }) => {
  return (
    <S.MenuItem>
      <S.MenuLink href={menuLink}>{menuName}</S.MenuLink>
    </S.MenuItem>
  );
};
