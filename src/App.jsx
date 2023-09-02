import { useState } from "react";
import { AppRoutes } from "./routes";
import "./App.styles";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser("taradam");
  const handleLogout = () => setUser(null);

  return (
    <div className="App">
      <div className="App-layout">
        <AppRoutes
          user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}
        />
      </div>
    </div>
  );
}

export default App;
