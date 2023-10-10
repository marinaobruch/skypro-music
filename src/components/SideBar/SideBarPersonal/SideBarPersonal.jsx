import React from "react";
import * as S from "./SideBarPersonal.styles.js";
import { useAuth } from "../../../WithAuth.jsx";

export function SideBarPersonal({ loading }) {
  const { auth, logout } = useAuth();
  return (
    <S.SidebarPersonal>
      {loading ? (
        <S.SidebarPersonalName>Loading</S.SidebarPersonalName>
      ) : (
        <S.SidebarPersonalName>{auth}</S.SidebarPersonalName>
      )}
      <S.SidebarIcon onClick={logout}>
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  );
}
