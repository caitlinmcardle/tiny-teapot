import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Countup from "./components/Countup";
import How from "./components/How";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Founder from "./components/Founder";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Homepage />
      <About />
      <Founder/>
      <Countup />
      <How />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
