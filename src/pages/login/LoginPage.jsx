import { Link, NavLink } from "react-router-dom";
import * as S from "./LoginPage.styles";
import { fetchLogin } from "../../api";
import { useState } from "react";

export const LoginPage = ({ login, setLogin, user, setUser }) => {
  const [textError, setTestError] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();
    if (!login.email) {
      setTestError("Введите логин");
      return;
    }

    if (!login.password) {
      setTestError("Введите пароль");
      return;
    }

    fetchLogin(login.email, login.password)
      .then((response) => {
        setUser(response.username); // передать в Context: response.username
      })
      .catch((error) => {
        setTestError(error.message);
      });
    setTestError("");
  };

  return (
    <S.LoginWrap>
      <S.LoginContainer>
        <S.LoginModalBlock>
          <S.LoginModalFormLogin action="#">
            <S.LoginModalLogo>
              <S.LoginModalLogoImg
                src="../img/logo_modal.png"
                alt="logo"
              />
            </S.LoginModalLogo>
            <S.LoginModalInput
              type="text"
              name="login"
              placeholder="Почта"
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              value={login.email}
            />
            <S.LoginModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
            <S.LoginError>{textError}</S.LoginError>

            <NavLink to="/">
              <S.LoginBtnEnter onClick={handleAuth}>Войти</S.LoginBtnEnter>
            </NavLink>
            <NavLink to="/register">
              <S.LoginBtnSignup>Зарегистрироваться</S.LoginBtnSignup>
            </NavLink>
          </S.LoginModalFormLogin>
        </S.LoginModalBlock>
      </S.LoginContainer>
    </S.LoginWrap>
  );
};
