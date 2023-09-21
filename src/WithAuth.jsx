import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);

export const WithAuth = ({ children }) => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  // Функция, которая запишет данные при входе
  const login = (authData) => {
    setAuth(authData);
    localStorage.setItem("user", JSON.stringify(authData));
    navigate("/");
  };

  // Функция, которая сотрет даннные при выходе
  const logout = () => {
    setAuth(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  // указываем данные в провайдер
  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// экспортируем контекст
export const useAuth = () => {
  return useContext(AuthContext);
};
