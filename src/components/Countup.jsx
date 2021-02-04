import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';


export default function Countup() {
  return (
    <section className="countup">
      <section className="tea-countup-section">
        <CountUp className="tea-countup" end={26}>{({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span className="count" ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
        <p className="tea">cups of tea consumed this week</p>
      </section>
      <section className="code-countup-section">
        <CountUp className="code-countup" end={478}>{({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span className="count" ref={countUpRef} />
            </VisibilitySensor>
        )}</CountUp>
        <p className="code">lines of code written</p>
      </section>
    </section>
  );
}
