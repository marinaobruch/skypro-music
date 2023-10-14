import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SideBarPersonal.styles.js";
import { userLogout } from "../../../store/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

export function SideBarPersonal({ loading }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.username);

  const logoutNew = () => {
    dispatch(userLogout());

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <S.SidebarPersonal>
      {loading ? (
        <S.SidebarPersonalName>Loading</S.SidebarPersonalName>
      ) : (
        <S.SidebarPersonalName>{currentUser}</S.SidebarPersonalName>
      )}
      <S.SidebarIcon onClick={logoutNew}>
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  );
}
