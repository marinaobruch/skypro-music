import { useState } from "react";
import { AppRoutes } from "./routes";
import "./App.styles";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser(localStorage.setItem("user", "token"));
  const handleLogout = () => setUser(localStorage.clear());
  console.log(localStorage);
  console.log(localStorage.getItem("user"));

  return (
    <div className="App">
      <div>
        <AppRoutes
          user={user}
          setUser={setUser}
          onAuthButtonClick={
            localStorage.getItem("user") ? handleLogout : handleLogin
          }
        />
      </div>
    </div>
  );
}

export default App;
