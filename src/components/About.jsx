import React from "react";

export default function About() {
  return (
    <section id="about-section">
        <h1 id="about-header">About us</h1>        
        <section id="about-icons">
        <section id="about-palette">
          <img id="palette-img" src={require('../img/noun_pallete.png')} alt="palette" />
          <p className="about-p">We love to create beautiful, clean websites for unique businesses</p>
          </section>
          <section id="about-mountain">
          <img id="mountain-img" src={require('../img/noun_mountain.png')} alt="mountain" />
          <p className="about-p">Based in Calgary, Alberta</p>
          </section>
          <section id="about-handshake">
          <img id="handshake-img" src={require('../img/noun_handshake.png')} alt="handshake" />
          <p className="about-p">
            We offer a friendly and straight forward design process with no confusing tech language</p>
          </section>
        </section>   
          
        <h1 id="what-h2">What We Do</h1>
        <section id="what-we-do">
        <section id="web-design">
        <img id="design-img" src={require('../img/noun_design_maintenance.png')} alt="web design" />
        <p className="about=p">Website Design and Development</p>
        </section>
        <section id="responsive-design">
        <img id="responsive-img" src={require('../img/noun_design_responsive.png')} alt="responsive design" />
        <p className="about=p">Responsive Web Design</p>
        </section>
        <section id="seo">
        <img id="seo-img" src={require('../img/noun_design_light_bulb.png')} alt="seo" />
        <p className="about=p">Search Engine Optimisation</p>
        </section>
        </section>
    </section>
  );
}
