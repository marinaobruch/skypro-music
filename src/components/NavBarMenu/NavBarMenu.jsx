import { NavLink } from "react-router-dom";
import * as S from "./NavBarMenu.styles.js";
import NavBarItem from "../NavBarItem/NavBarItem";

export default function NavBarMenu({ setUser }) {
  const handleLogout = () => setUser(localStorage.clear());
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
          onClick={handleLogout}
          to="/login"
        >
          <NavBarItem menuName="Выйти" />
        </NavLink>
      </S.MenuList>
    </S.NavMenu>
  );
}
