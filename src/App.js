import "./App.css";
import Header from "./components/Header/Header";
import colors from "./utils/colors.json";

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors["main-background"] }}>
      <div className="menu-container">
        <div className="menu-vertical">
          <a>TRAMPOS </a> ⏺
          <a>EU </a> ⏺
          <a>CONTATO</a>
        </div>
      </div>

      <Header />
    </div>
  );
}

export default App;
