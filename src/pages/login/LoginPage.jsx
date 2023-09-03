import { Link } from "react-router-dom";
import * as S from "./LoginPage.styles";

export const LoginPage = ({ onAuthButtonClick }) => {
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
            />
            <S.LoginModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <Link to="/">
              <S.LoginBtnEnter onClick={onAuthButtonClick}>
                Войти
              </S.LoginBtnEnter>
            </Link>
            <Link to="/register">
              <S.LoginBtnSignup>Зарегистрироваться</S.LoginBtnSignup>
            </Link>
          </S.LoginModalFormLogin>
        </S.LoginModalBlock>
      </S.LoginContainer>
    </S.LoginWrap>
  );
};
