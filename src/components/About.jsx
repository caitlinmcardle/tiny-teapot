import React from "react";
import CountUp from "react-countup";

import { Doughnut } from "react-chartjs-2";

export default function About() {
  const data1 = {
    labels: [],
    datasets: [
      {
        data: [37, 63],
        backgroundColor: ["#ff8484", "#D3D3D3"],
        hoverBackgroundColor: ["#ff8484", "#D3D3D3"],
      },
    ],
  };
  const data2 = {
    labels: [],
    datasets: [
      {
        data: [57, 43],
        backgroundColor: ["#ff8484", "#D3D3D3"],
        hoverBackgroundColor: ["#ff8484", "#D3D3D3"],
      },
    ],
  };
  return (
    <main className="main">
      <section className="about-section">
        <section className="tea-countup-section">
          <CountUp className="tea-countup" end={56} />
          <p className="tea">cups of tea consumed this week</p>
        </section>
        <section className="code-countup-section">
          <CountUp className="code-countup" end={175} />
          <p className="code">lines of code written</p>
        </section>
        <section className="about-us">
          <h1>Who we are</h1>
          <p>
            At Tiny Teapot we want to create beautiful looking websites that are
            easy to interact with and will help your business grow.
          </p>
          <p>
            We understand how important a website is to your business, so we
            won't bombard you with technical language and will work closely with
            you each step of the way. You can provide as much or as little input
            as you would like, and we can cater to businesses of any size and
            budget.
          </p>
          <p>
            We love tea (if you hadn't already guessed) and would be happy to
            put the kettle on and have a chat with you (either remotely or in
            person). Drop us a message here.
          </p>
        </section>

        <h2 className="stats-heading">Why your website is so important</h2>
        <article className="donut-1">
          <Doughnut
            data={data1}
            width={20}
            height={20}
            options={{
              maintainAspectRatio: false,
              legend: { display: false },
            }}
          />
          <p>
            37% of people will stop enaging with a website if the content is
            unattractive
          </p>
        </article>
        <article className="donut-2">
          <Doughnut
            data={data2}
            width={20}
            height={20}
            options={{
              maintainAspectRatio: false,
              legend: { display: false },
            }}
          />
          <p>
            57% of users won't recommend a business with a poorly designed
            mobile website
          </p>
        </article>
      </section>
    </main>
  );
}
