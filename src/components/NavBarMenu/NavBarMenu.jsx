import "./NavBarMenu.css";
import NavBarItem from "../NavBarItem/NavBarItem";

export default function NavBarMenu() {

  return (
    <div className="nav__menu menu">
    <ul className="menu__list">
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
    </ul>
  </div>
  );
}
