import React, { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { getAllTracks } from "./api";
import { WithAuth } from "./WithAuth";
import { useDispatch } from "react-redux";
import { addAllTracks } from "./store/playerSlice";

function App() {
  const [loading, setLoading] = useState(false);
  const [getAllTracksError, setGetAllTracksError] = useState(null);
  console.log(getAllTracksError);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setGetAllTracksError(null);
    getAllTracks()
      .then((allTracks) => dispatch(addAllTracks(allTracks)))
      .catch((error) => {
        setGetAllTracksError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <WithAuth>
        <div className="App">
          <div>
            <AppRoutes
              loading={loading}
              getAllTracksError={getAllTracksError}
            />
          </div>
        </div>
      </WithAuth>
    </>
  );
}

export default App;

// m.obr@mail.ru
// m.obr
