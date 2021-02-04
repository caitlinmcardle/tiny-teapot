import React from "react";

export default function Contact() {
  return (
    <section id="contact-section">
      <h1>Get in touch</h1>
      <p className="email-p"><img id="email-img" src={require('../img/noun_email.png')} alt="email" /> caitlin@tinyteapotdesign.com</p>
      <h2>Send us a message</h2>
      <form>
        <p className="table-row">
          <label for="name"></label>
          <input id="name" type="text" placeholder="Name" />
        </p>
        <p className="table-row">
          <label for="email"></label>
          <input id="email" type="text" placeholder="Email" />
        </p>
        <p className="table-row">
          <label for="message"></label>
          <input id="message" type="text" placeholder="Message"/>
        </p>
        <button id="contact-button" type="submit">Send</button>
      </form>
    </section>
  );
}
