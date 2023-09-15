import { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { TrackBar } from "./components/TrackBar/TrackBar";
import { getAllTracks } from "./api";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [allTracks, setAllTracks] = useState([]);
  const [getAllTracksError, setGetAllTracksError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleLogin = () => {
    setUser(localStorage.setItem("user", "token"), user === "taradam");
  };

  useEffect(() => {
    setGetAllTracksError(null);
    getAllTracks()
      .then((allTracks) => setAllTracks(allTracks))
      .catch((error) => {
        setGetAllTracksError(error.message);
      });
    setLoading(false);
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div>
          <AppRoutes
            loading={loading}
            allTracks={allTracks}
            setCurrentTrack={setCurrentTrack}
            user={user}
            setUser={setUser}
            onAuthButtonClick={handleLogin}
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
    </>
  );
}

export default App;
