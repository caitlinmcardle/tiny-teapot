import React from "react";

export default function NavBar() {
  const logo = require("../img/tiny_teapot_3.png");
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="nav-li">
          <a className="nav-link" href="./Homepage.jsx">
            <img alt="logo" src={logo} width="100" height="100" />
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link" href="#about-section">
            About
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link" href="#how-section">
            How we work
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link" href="#portfolio-section">
            Portfolio
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link" href="#contact-section">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
