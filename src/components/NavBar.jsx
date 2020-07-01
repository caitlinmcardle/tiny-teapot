import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link className="nav-link" key="home" to="/">
            Home
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
