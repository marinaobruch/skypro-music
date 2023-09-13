import { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { tracksArray } from "./components/Imports/TracksImport";
import { TrackBar } from "./components/TrackBar/TrackBar";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = () => {
    setUser(localStorage.setItem("user", "token"), user === "taradam");
  };

  const [tracks, setTracks] = useState(tracksArray);
  const [getAllTracksError, setGetAllTracksError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  // useEffect(() => {
  //   getAllTracks()
  //     .then((tracks) => setTracks(tracks))
  //     .catch((error) => {
  //       setGetAllTracksError(error.message);
  //     });
  // }, []);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div>
          <AppRoutes
            tracks={tracks}
            setCurrentTrack={setCurrentTrack}
            user={user}
            setUser={setUser}
            onAuthButtonClick={handleLogin}
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
