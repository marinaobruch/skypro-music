import React, { useState } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./pages/main/MainPage.styles";

function App() {
  const [getAllTracksError, setGetAllTracksError] = useState(null);

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
