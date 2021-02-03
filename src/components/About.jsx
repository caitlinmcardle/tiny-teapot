import React from "react";

export default function About() {
  return (
    <section id="about-section">
      <section className="about-us">
        <h1>About us</h1>

        <section id="about-icons">
        <section>
          <img id="palette-img" src={require('../img/noun_pallete.png')} alt="palette" />
          <p>We love to create beautiful, clean websites for unique businesses</p>
          </section>

          <section>
          <img id="mountain-img" src={require('../img/noun_mountain.png')} alt="mountain" />
          <p>Based in Calgary, Alberta</p>
          </section>

          <section>
          <img id="handshake-img" src={require('../img/noun_handshake.png')} alt="handshake" />
          <p>
            We offer a friendly and straight forward design process with no confusing tech language</p>
          </section>

        </section>     
          
            
          
         
          
        
        <h2 id="what-h2">What We Do</h2>
        <section id="what-we-do">
        <section id="web-design">
        <img id="design-img" src={require('../img/noun_design_maintenance.png')} alt="web design" />
        <p>Website Design and Development</p>
        </section>
        <section id="responsive-design">
        <img id="responsive-img" src={require('../img/noun_design_responsive.png')} alt="responsive design" />
        <p>Responsive Web Design</p>
        </section>
        <section id="seo">
        <img id="seo-img" src={require('../img/noun_design_light_bulb.png')} alt="seo" />
        <p>Search Engine Optimisation</p>
        </section>
        </section>

        
        
       
        
        
      
          
          
        
      </section>
    </section>
  );
}
