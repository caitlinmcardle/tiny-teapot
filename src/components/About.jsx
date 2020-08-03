import React from "react";
import Countup from "./Countup";

export default function About() {
  return (
    <main className="main">
      <section className="about-section">
        <section className="about-us">
          <h1>About us</h1>
          <p>
            Tiny Teapot was created during lockdown in the middle of the covid
            19 pandemic in response to the need to help startups and small
            businesses develop a scalable, design-led online presence in a
            quick, cost effective way.
          </p>
          <p>
            Having graduated from Durham University in Computer Science, a ten
            week internship at Morgan Stanley was enough to convince our founder
            that the corporate life was not for her, so she packed her bags and
            moved to Canada to become a ski instructor. Two years later an
            opportunity to teach in Japan meant once again she jumped on a plane
            to the mountains. On her way back to Canada, Covid hit and she
            decided to weather the storm in God's Own Country, Yorkshire, where
            she knew there would at least be a plentiful supply of good quality
            tea. It was during lockdown that Tiny Teapot was established to help
            small business quickly gain the online presence needed to survive
            these times, and as a way of allowing Caitlin to continue to combine
            her love of the mountains and her love of coding.
          </p>
        </section>
        <Countup />
      </section>
    </main>
  );
}
