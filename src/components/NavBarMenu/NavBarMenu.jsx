import { NavLink } from "react-router-dom";
import * as S from "./NavBarMenu.styles.js";
import { NavBarItem } from "../NavBarItem/NavBarItem";

export function NavBarMenu({ user, setUser }) {
  const handleLogout = () => {
    setUser(localStorage.clear(), user === null);
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
          onClick={handleLogout}
          to="/login"
        >
          <NavBarItem menuName="Выйти" />
        </NavLink>
      </S.MenuList>
    </S.NavMenu>
  );
}
