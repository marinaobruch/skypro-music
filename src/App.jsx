import React, { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { useDispatch } from "react-redux";
import { userLogin } from "./store/userSlice";
import { setAccessToken } from "./store/tokenSlice";
import { usePostTokenRefreshMutation } from "./services/playlists";

function App() {
  const [loading, setLoading] = useState(false);
  const [getAllTracksError, setGetAllTracksError] = useState(null);

  const cashUser = localStorage.getItem("user");
  const cashEmail = localStorage.getItem("email");
  const cashId = localStorage.getItem("id");
  const cashToken = localStorage.getItem("token");
  const cashRefreshToken = localStorage.getItem("refreshToken");

  const [postTokenRefresh, {}] = usePostTokenRefreshMutation();
  const refreshToken = localStorage.getItem("refreshToken");

  const dispatch = useDispatch();

  // useEffect(() => {

  //   postTokenRefresh({ refreshToken })
  //     .unwrap()
  //     .then((response) => {
  //       console.log(response);
  //       dispatch(setRefreshToken({ token: response.data }));
  //     });
  // }, []);

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
          <AppRoutes
            loading={loading}
            getAllTracksError={getAllTracksError}
          />
        </div>
      </div>
    </>
  );
}

export default App;

// m.obr@mail.ru
// m.obr
