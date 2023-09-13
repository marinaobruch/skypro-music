import { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { TrackBar } from "./components/TrackBar/TrackBar";
import { getAllTracks } from "./api";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = () => {
    setUser(localStorage.setItem("user", "token"), user === "taradam");
  };

  const [allTracks, setAllTracks] = useState([]);
  const [getAllTracksError, setGetAllTracksError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    getAllTracks()
      .then((allTracks) => setAllTracks(allTracks))
      .catch((error) => {
        setGetAllTracksError(error.message);
      });
  }, []);

  // getAllTracks().then((allTracks) => console.log(allTracks));

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div>
          <AppRoutes
            allTracks={allTracks}
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
