import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router className="router">
        <Homepage path="/" />
        <About path="/about" />
        <Services path="/services" />
        <Portfolio path="/portfolio" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}

export default App;
