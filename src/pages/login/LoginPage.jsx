import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginPage.styles";
import { fetchLogin, fetchReg } from "../../api";
import { useEffect, useState } from "react";

export const LoginPage = ({ isLoginMode = false, user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [textError, setTextError] = useState(null);
  const navigate = useNavigate();

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setTextError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  const getAuth = async () => {
    fetchLogin({ email: email, password: password })
      .then((response) => {
        setUser(response.username); // передать в Context: response.username
      })
      .catch((error) => {
        setTextError(error.message);
      });

    if (user) {
      navigate("/");
      setTextError("");
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!email) {
      setTextError("Введите логин");
      return;
    }
    if (!password) {
      setTextError("Введите пароль");
      return;
    }

    getAuth();
  };

  // marinka1996@mail.ru

  const getReg = async () => {
    fetchReg({
      username: username,
      email: email,
      password: password,
    }).then((obj) => {
      if (obj.status === 400) {
        const errorMail = obj.data.email;
        const errorUser = obj.data.username;
        const ErrorPassword = obj.data.password;

        setTextError(errorMail + errorUser + ErrorPassword);
      }
      setUser(obj.data.username);
    });
  };

  const handleRegister = async () => {
    if (!email) {
      setTextError("Введите почту");
      return;
    }
    if (!username) {
      setTextError("Введите логин");
      return;
    }
    if (!password) {
      setTextError("Введите пароль");
      return;
    }
    if (!repeatPassword) {
      setTextError("Повторите пароль");
      return;
    }
    if (password !== repeatPassword) {
      setTextError("Повторите корректный пароль");
      return;
    }
    getReg();
  };

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to={"/login"}>
          <S.LoginModalLogo>
            <S.LoginModalLogoImg
              src="../img/logo_modal.png"
              alt="logo"
            />
          </S.LoginModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            <S.LoginError>{textError}</S.LoginError>
            <S.Buttons>
              <S.PrimaryButton onClick={handleAuth}>Войти</S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Логин"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            <S.LoginError>{textError}</S.LoginError>
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
};
