import React from "react";

export default function Portfolio() {
  return (
    
      <section id="portfolio-section">
        <h1 id="portfolio-h1">Portfolio</h1>
        <section id="portfolio-content">
        <img className="portfolio-example" src={require('../img/portfolio-example.jpg')} alt="portfolio-example" />
        <img className="portfolio-example" src={require('../img/portfolio-example.jpg')} alt="portfolio-example" />
        <img className="portfolio-example" src={require('../img/portfolio-example.jpg')} alt="portfolio-example" />
        </section>
        
      </section>
    
  );
}


