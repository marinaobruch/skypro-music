import * as S from "./NavBarMenu.styles.js";
import NavBarItem from "../NavBarItem/NavBarItem";

export default function NavBarMenu() {
  return (
    <S.NavMenu>
      <S.MenuList>
        <NavBarItem
          menuName="Главная"
          menuLink="#"
        />
        <NavBarItem
          menuName="Мой плейлист"
          menuLink="#"
        />
        <NavBarItem
          menuName="Войти"
          menuLink="../signin.html" // add correct way for sing in
        />
      </S.MenuList>
    </S.NavMenu>
  );
}
