import React, { useEffect, useState } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken } from "./redux/store/tokenSlice";

function App() {
  const [getAllTracksError, setGetAllTracksError] = useState(null);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (token) {
      dispatch(setAccessToken({ token }));
      dispatch(setRefreshToken({ refreshToken }));
    }
  });

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
