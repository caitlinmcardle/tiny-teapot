import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Homepage />
      <About />
    </div>
  );
}

export default App;
