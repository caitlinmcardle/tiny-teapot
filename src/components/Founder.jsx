import React from "react";

export default function Founder() {
  return (
<section id="founder-section">
    <h1 id="founder-h1">Founder</h1>
    <section  id="founder-content">
        <section id="girl">
            <img id="girl-img" src={require('../img/noun_girl.png')} alt="girl" />
        </section>
        <section id="founder-list">        
            <p className="founder-p">Name: Caitlin McArdle</p>
            <p className="founder-p">Age: 24</p>
            <p className="founder-p">Hometown: Ripon, England</p>
            <p className="founder-p">Education: Computer Science BSc (Hons) from Durham University</p>
            <p className="founder-p">Likes: Tea, cake, mountains </p>
            <p className="founder-p">Dislikes: Mess and being late</p>
        </section>        
    </section>   
    
    </section>
  )}