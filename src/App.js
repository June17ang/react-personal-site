import logo from "./logo.svg";
import "./App.css";

import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import Contactme from "./components/Contactme";

function App() {
  return (
    <div>
      <Homepage />
      <Portfolio />
      <Contactme />
    </div>
  );
}

export default App;
