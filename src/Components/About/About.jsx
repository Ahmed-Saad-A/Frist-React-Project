import React from "react";
import './About.css'

const About = () => {
  return (
    <section className="bg-main pb-5 about">
      <header>
        <h1 className="text-white text-center text-uppercase">
          About component
        </h1>

        <div className="decor d-flex justify-content-center align-items-center">
          <div className="bg-white me-3 line"></div>
          <i className="bi bi-star-fill text-white"></i>
          <div className="bg-white ms-3 line"></div>
        </div>
      </header>

      <main className="w-75 m-auto fs-6">
        <div className="row">
          <div className="col-md-6">
            <div className="item">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="item">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
