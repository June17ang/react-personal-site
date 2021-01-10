import logo from "./logo.svg";
import "./App.css";

import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import Contactme from "./components/Contactme";
import ClickToTop from "./components/ClickToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ClickToTop />
      <Homepage />
      <Portfolio />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
