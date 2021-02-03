import React from "react";

export default function Contact() {
  return (
    <section id="contact-section">
      <h1>Get in touch</h1>
      <p className="contact-p">Email: caitlin@tinyteapotdesign.com</p>
      <p className="contact-p">LinkedIn</p>
      <h2>Send us a message</h2>
      <form>
        <p className="contact-p">
          <label for="name">Name: </label>
          <input id="name" type="text" />
        </p>
        <p className="contact-p">
          <label for="email">Email: </label>
          <input id="email" type="text" />
        </p>
        <p className="contact-p">
          <label for="message">Message: </label>
          <input id="message" type="text" />
        </p>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
