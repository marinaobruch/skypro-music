import * as S from "./RegPage.styles";

export const RegPage = () => {
  return (
    <S.RegisterWrap>
      <S.RegisterContainer>
        <S.RegisterModalBlock>
          <S.RegisterModalForm>
            <S.RegisterLogo>
              <S.RegisterLogoImg
                src="../img/logo_modal.png"
                alt="logo"
              />
            </S.RegisterLogo>
            <S.RegisterModalInput
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.RegisterModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.RegisterModalInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.RegisterBtnSingup>Зарегистрироваться</S.RegisterBtnSingup>
          </S.RegisterModalForm>
        </S.RegisterModalBlock>
      </S.RegisterContainer>
    </S.RegisterWrap>
  );
};
