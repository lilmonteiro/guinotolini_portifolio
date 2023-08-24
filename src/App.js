import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import colors from "./utils/colors.json";
import Contato from "./components/Contato/Contato";
import jobs from "./utils/jobs.json";
import Job from "./components/Job/Job";
import Thumb from "./components/Thumb/Thumb";

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors["main-background"] }}>
      <Header />
      <About />
      <Thumb />
      <Contato />
    </div>
  );
}

export default App;
