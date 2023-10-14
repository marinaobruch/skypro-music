import React, { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { getAllTracks } from "./api";
import { useDispatch } from "react-redux";
import { addAllTracks } from "./store/playerSlice";
import { userLogin } from "./store/userSlice";

function App() {
  const [loading, setLoading] = useState(false);
  const [getAllTracksError, setGetAllTracksError] = useState(null);

  const dispatch = useDispatch();

  const cashUser = localStorage.getItem("user");
  const cashEmail = localStorage.getItem("email");
  const cashId = localStorage.getItem("id");
  const cashToken = localStorage.getItem("token");

  useEffect(() => {
    if (cashUser) {
      dispatch(
        userLogin({
          email: cashEmail,
          username: cashUser,
          id: cashId,
          token: cashToken,
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
