import logo from "./logo.svg";
import "./App.css";

import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import Contactme from "./components/Contactme";
import ClickToTop from "./components/ClickToTop";

function App() {
  return (
    <div>
      <ClickToTop />
      <Homepage />
      <Portfolio />
      <Contactme />
    </div>
  );
}

export default App;
