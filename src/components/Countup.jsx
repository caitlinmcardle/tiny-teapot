import React from "react";
import CountUp from "react-countup";

export default function Countup() {
  return (
    <section className="countup">
      <section className="tea-countup-section">
        <CountUp className="tea-countup" end={56} />
        <p className="tea">cups of tea consumed this week</p>
      </section>
      <section className="code-countup-section">
        <CountUp className="code-countup" end={175} />
        <p className="code">lines of code written</p>
      </section>
    </section>
  );
}
