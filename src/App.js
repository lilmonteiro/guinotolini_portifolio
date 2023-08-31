import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import colors from "./utils/colors.json";
import Contato from "./components/Contato/Contato";
import Thumb from "./components/Thumb/Thumb";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Thumb />
      <Contato />
    </div>
  );
}

export default App;
