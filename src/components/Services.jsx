import React from "react";

export default function Services() {
  const webDesImg = require("../img/noun_design_web_design.png");
  const webDevImg = require("../img/noun_design_web_dev.png");
  const bulbImg = require("../img/noun_design_light_bulb.png");
  const maintenanceImg = require("../img/noun_design_maintenance.png");
  return (
    <main className="main">
      <section className="services-section">
        <h1 className="services-header">Services</h1>
        <article className="services-web-design">
          <img src={webDesImg} width="100px" height="100px" />
          <h3>Web Design</h3>
          <p>
            We design beautiful, clean sites that provide a great user
            experience. We can also provide a range of graphic design services.
          </p>
        </article>
        <article className="services-web-dev">
          <img src={webDevImg} width="100px" height="100px" />
          <h3>Web Development</h3>
          <p>
            We use React (created and used by Facebook) to produce fast,
            reliable and scalable websites that are SEO friendly.
          </p>
        </article>
        <article className="services-maintenance">
          <img src={maintenanceImg} width="90px" height="90px" />
          <h3>Maintenance</h3>
          <p>
            We won't just leave you in the dark, when we finish we can show you
            how to make basic updates and changes to your site. We also offer
            maintenance packages so that you don't have to worry.
          </p>
        </article>
        <article className="services-seo">
          <img src={bulbImg} width="90px" height="90px" />
          <h3>SEO</h3>
          <p>
            We can optimize your site to increase traffic from search engines,
            so that your clients are directed away from competitors and towards
            you.
          </p>
        </article>
      </section>
    </main>
  );
}
