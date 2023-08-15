import "./App.css";
import Content from "./components/Content/Content";
import Filter from "./components/Filter/Filter";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import SideBar from "./components/SideBar/SideBar";
import TrackBar from "./components/TrackBar/TrackBar";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavBar />
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <Content />
          </div>
          <SideBar />
        </main>
        <TrackBar />

        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
