import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SideBarPersonal.styles.js";
import { userLogout } from "../../../redux/store/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

export function SideBarPersonal({ loading }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.username);

  const logout = () => {
    dispatch(userLogout());
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
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
