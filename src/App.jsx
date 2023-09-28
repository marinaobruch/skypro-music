import React, { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { TrackBar } from "./components/TrackBar/TrackBar";
import { getAllTracks } from "./api";
import { WithAuth } from "./WithAuth";
import { useSelector } from "react-redux";

function App() {
  const [loading, setLoading] = useState(false);

  const [allTracks, setAllTracks] = useState([]);
  const [getAllTracksError, setGetAllTracksError] = useState(null);

  const currentTrack = useSelector((state) => state.audioplayer.track);

  useEffect(() => {
    setLoading(true);
    setGetAllTracksError(null);
    getAllTracks()
      .then((allTracks) => setAllTracks(allTracks))
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
              allTracks={allTracks}
              getAllTracksError={getAllTracksError}
            />
          </div>
        </div>
        {currentTrack ? <TrackBar /> : null}
      </WithAuth>
    </>
  );
}

export default App;
