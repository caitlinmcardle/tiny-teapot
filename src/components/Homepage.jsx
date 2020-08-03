import React from "react";

export default function Homepage() {
  const video = require("../img/video.mp4");
  return (
    <main className="main">
      <div className="video-container">
        <video className="background-video" loop autoPlay>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-content">
          <a className="homepage-link" href="./About.jsx">
            <button className="homepage-button">Start your journey</button>
          </a>
        </div>
      </div>
    </main>
  );
}
