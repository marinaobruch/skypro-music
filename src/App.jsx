import { useState } from "react";
import { AppRoutes } from "./routes";
import "./App.styles";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser(localStorage.setItem("user", "token"));

  return (
    <div className="App">
      <div>
        <AppRoutes
          user={user}
          setUser={setUser}
          onAuthButtonClick={handleLogin}
        />
      </div>
    </div>
  );
}

export default App;
