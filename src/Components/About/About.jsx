import React from "react";
import './About.css'

const About = () => {
  return (
    <section className="bg-main py-5 about">
      <header>
        <h1 className="text-white text-center text-uppercase pt-5 mt-5">
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
                customization. التلاجة فيها مية الا انا جعان اوي
                <img src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="code symbol" className="about-image" />
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="item">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization. افتح يا عم انا عمدة
                <img src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="about-image" />
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
