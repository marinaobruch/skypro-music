import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SideBarPersonal.styles.js";
import { userLogout } from "../../../store/userSlice.js";
import { useDispatch } from "react-redux";

export function SideBarPersonal({ loading }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = localStorage.getItem("user");

  const logout = () => {
    dispatch(userLogout());

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <S.SidebarPersonal>
      {loading ? (
        <S.SidebarPersonalName>Loading</S.SidebarPersonalName>
      ) : (
        <S.SidebarPersonalName>{currentUser}</S.SidebarPersonalName>
      )}
      <S.SidebarIcon onClick={logout}>
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  );
}
