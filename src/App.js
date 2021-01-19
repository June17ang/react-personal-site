import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
