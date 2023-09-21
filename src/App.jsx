import React, { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { TrackBar } from "./components/TrackBar/TrackBar";
import { getAllTracks } from "./api";
import { WithAuth } from "./WithAuth";

function App() {
  const [loading, setLoading] = useState(false);

  const [allTracks, setAllTracks] = useState([]);
  const [getAllTracksError, setGetAllTracksError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

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
              setCurrentTrack={setCurrentTrack}
              getAllTracksError={getAllTracksError}
            />
          </div>
        </div>
        {currentTrack ? (
          <TrackBar
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
        ) : null}
      </WithAuth>
    </>
  );
}

export default App;
