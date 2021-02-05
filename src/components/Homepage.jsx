import React from "react";

export default function Homepage() {
  const video = require("../img/video.mp4");
  const logo = require("../img/tiny_teapot_3.png")
  return (
    <main className="main">
      <div id="logo">
        <img id="logo" src={logo} alt="logo" />

      </div>
      <div className="video-container">
        <video className="background-video" loop autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-content">
          <a className="homepage-link" href="#about-section">
            <button className="homepage-button">
              Create something beautiful
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
