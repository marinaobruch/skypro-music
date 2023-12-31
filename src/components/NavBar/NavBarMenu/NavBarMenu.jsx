import { NavLink } from "react-router-dom";
import * as S from "./NavBarMenu.styles.js";
import { NavBarItem } from "../NavBarItem/NavBarItem";
import { userLogout } from "../../../redux/store/userSlice.js";
import { useDispatch } from "react-redux";

export const NavBarMenu = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
    navigate("/login");
  };

  return (
    <S.NavMenu>
      <S.MenuList>
        <NavLink to="/">
          <NavBarItem menuName="Главная" />
        </NavLink>
        <NavLink to="/favorites">
          <NavBarItem menuName="Мой плейлист" />
        </NavLink>
        <NavLink
          onClick={logout}
          to="/login"
        >
          <NavBarItem menuName="Выйти" />
        </NavLink>
      </S.MenuList>
    </S.NavMenu>
  );
};
