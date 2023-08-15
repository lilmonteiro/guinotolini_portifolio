import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import colors from "./utils/colors.json";
import Contato from "./components/Contato/Contato";
import jobs from "./utils/jobs.json";
import Job from "./components/Job/Job";

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors["main-background"] }}>
      <Header />
      <About />

      {jobs.map((job, i) => {
        return <Job job={job} key={i} />;
      })}
      
      <Contato />

      <div className="mix"></div>
    </div>
  );
}

export default App;
