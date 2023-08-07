import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import colors from "./utils/colors.json";
import Trampos from "./components/Trampos/Trampos";
import Contato from "./components/Contato/Contato";

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors["main-background"] }}>
      <div className="menu-container">
        <div className="menu-vertical">
          <a>TRAMPOS </a> ⏺
          <a href="#about">EU </a> ⏺
          <a href="#contact">CONTATO</a>
        </div>
      </div>

      <Header />
      <About />
      <Trampos />
      <Contato />
    </div>
  );
}

export default App;
