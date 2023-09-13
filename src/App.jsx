import { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { tracksArray } from "./components/Imports/TracksImport";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = () => {
    setUser(localStorage.setItem("user", "token"), user === "taradam");
  };

  const [tracks, setTracks] = useState(tracksArray);
  const [getAllTracksError, setGetAllTracksError] = useState(null);

  // useEffect(() => {
  //   getAllTracks()
  //     .then((tracks) => setTracks(tracks))
  //     .catch((error) => {
  //       setGetAllTracksError(error.message);
  //     });
  // }, []);

  const [currentTrack, setCurrentTrack] = useState(null);

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
    </>
  );
}

export default App;
