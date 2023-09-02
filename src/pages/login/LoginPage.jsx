import { Link } from "react-router-dom";

export const LoginPage = ({ onAuthButtonClick }) => {
  return (
    <div>
      <h1>Страница логина</h1>

      <Link to={"/"}>
        <button onClick={onAuthButtonClick}>Войти</button>
      </Link>

      <Link to="/register">
        <div>Перейти к регистрации</div>
      </Link>
    </div>
  );
};
