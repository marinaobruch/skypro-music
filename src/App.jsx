import { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { TrackBar } from "./components/TrackBar/TrackBar";
import { getAllTracks } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [allTracks, setAllTracks] = useState([]);
  const [getAllTracksError, setGetAllTracksError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [login, setLogin] = useState({ email: "", password: "" });

  // const handleLogin = () => {
  //   setUser(localStorage.setItem("user", "token"));
  // };

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
      <div className="App">
        <div>
          <AppRoutes
            loading={loading}
            allTracks={allTracks}
            setCurrentTrack={setCurrentTrack}
            user={user}
            setUser={setUser}
            getAllTracksError={getAllTracksError}
            login={login}
            setLogin={setLogin}
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
