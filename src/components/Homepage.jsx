import React from "react";

export default function Homepage() {
  const video = require("../img/video.mp4");
  return (
    <main className="main">
      <video id="background-video" loop autoPlay>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}
