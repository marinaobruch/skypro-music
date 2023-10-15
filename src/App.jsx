import React, { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { useDispatch } from "react-redux";
import { userLogin } from "./store/userSlice";
import { setAccessToken } from "./store/tokenSlice";

// туду:
// доделать обработку ошибка, когда "падает" сервер - getAllTracksError
// доделать обработку запросов на логин/рег

function App() {
  const [getAllTracksError, setGetAllTracksError] = useState(null);

  const dispatch = useDispatch();

  const cashUser = localStorage.getItem("user");
  const cashEmail = localStorage.getItem("email");
  const cashId = localStorage.getItem("id");
  const cashToken = localStorage.getItem("token");
  const cashRefreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (cashUser) {
      dispatch(
        userLogin({
          email: cashEmail,
          username: cashUser,
          id: cashId,
        })
      );
      dispatch(
        setAccessToken({
          token: cashToken,
          refreshToken: cashRefreshToken,
        })
      );
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div>
          <AppRoutes getAllTracksError={getAllTracksError} />
        </div>
      </div>
    </>
  );
}

export default App;

// m.obr@mail.ru
// m.obr
