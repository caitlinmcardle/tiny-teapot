import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  const logo = require("../img/logo-final.png");
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link className="nav-link" key="home" to="/">
            <img alt="logo" src={logo} width="80" height="80" />
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" key="about" to="/about">
            About
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" key="services" to="/services">
            Services
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" key="portfolio" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" key="contact" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
