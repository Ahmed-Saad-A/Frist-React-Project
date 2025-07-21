import React from "react";
import "./Home.css";
let avataar = "/images/avataaars.webp";

const Home = () => {
  return (
    <section className="bg-main p-5">
      <main className="d-flex flex-column justify-content-center align-items-center pt-5 mt-5">
        <div className="image">
          <img className="w-100S" src={avataar} alt="Avatar" />
        </div>
        <h1 className="text-white text-uppercase">Start Framework</h1>

        <div className="decor d-flex justify-content-center align-items-center">
          <div className="bg-white me-3 line"></div>
          <i className="bi bi-star-fill text-white"></i>
          <div className="bg-white ms-3 line"></div>
        </div>
        <p className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </main>
    </section>
  );
};

export default Home;
