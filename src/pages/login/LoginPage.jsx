import { Link } from "react-router-dom";
import * as S from "./LoginPage.styles";

export const LoginPage = ({ onAuthButtonClick }) => {
  return (
    <S.LoginBclock>
      <S.LoginBclock_Header>Страница логина</S.LoginBclock_Header>

      <S.LoginBclock_Buttons>
        <Link to="/">
          <S.LoginButton onClick={onAuthButtonClick}>Войти</S.LoginButton>
        </Link>

        <Link to="/register">
          <S.RegButton>Зарегистрироваться</S.RegButton>
        </Link>
      </S.LoginBclock_Buttons>
    </S.LoginBclock>
  );
};
