import React from 'react';

function About() {
  return (
    <section className="about common-section">
      <div className="container">
        <div className="title-wrapper">
          <h3 className="title">what we do</h3>
          <p className="subtitle">This is some text inside of a div block.</p>
        </div>
        <div className="cards-wrapper">
          <div className="card">
            <img src="img/card-icon1.svg" alt="icon" />
            <h4>Graphic Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          </div>
          <div className="card">
            <img src="img/card-icon2.svg" alt="icon" />
            <h4>Awesome code</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          </div>
          <div className="card">
            <img src="img/card-icon3.svg" alt="icon" />
            <h4>free template</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
