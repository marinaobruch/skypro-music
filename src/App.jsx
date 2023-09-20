import React, { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";
import { TrackBar } from "./components/TrackBar/TrackBar";
import { getAllTracks } from "./api";
import { UserContext } from "./contexts/user";

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved || null;
  });

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user, setUser]);

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

  const switchUser = () => {
    setUser(null);
    setUser(localStorage.clear(), user === null);
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div>
          <UserContext.Provider value={{ userName: user, switchUser }}>
            <AppRoutes
              loading={loading}
              allTracks={allTracks}
              setCurrentTrack={setCurrentTrack}
              user={user}
              setUser={setUser}
              getAllTracksError={getAllTracksError}
            />
          </UserContext.Provider>
        </div>
      </div>
      {currentTrack ? (
        <TrackBar
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          user={user}
        />
      ) : null}
    </>
  );
}

export default App;
