import React, { useState } from "react";
import "./Portfolio.css";
let img_1 = "/images/imgi_1.webp";
let img_2 = "/images/imgi_2.webp";
let img_3 = "/images/imgi_3.webp";

const Portfolio = () => {
  const [image, setImage] = useState();

  const openImage = (scr) => {
    setImage(scr);
  };

  const closeImage = () => {
    setImage(null);
  };

  return (
    <>
      <section className="bg-secound container py-5 my-5">
        <header>
          <h1 className="text-uppercase text-center Bold text. mt-5">
            portfolio component
          </h1>
          <div className="decor d-flex justify-content-center align-items-center">
            <div className="me-3 line"></div>
            <i className="bi bi-star-fill"></i>
            <div className="ms-3 line"></div>
          </div>
        </header>

        <main>
          <div className="row g-2">
            <div onClick={() => openImage(img_1)} className="col-md-4 p-3">
              <div className="image-container position-relative overflow-hidden">
                <img className="w-100 rounded-3" src={img_1} alt="img_1" />
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center">
                  <i className="bi bi-plus-lg text-white fs-1"></i>
                </div>
              </div>
            </div>
            <div onClick={() => openImage(img_2)} className="col-md-4 p-3">
              <div className="image-container position-relative overflow-hidden">
                <img className="w-100 rounded-3" src={img_2} alt="img_2" />
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center">
                  <i className="bi bi-plus-lg text-white fs-1"></i>
                </div>
              </div>
            </div>
            <div onClick={() => openImage(img_3)} className="col-md-4 p-3">
              <div className="image-container position-relative overflow-hidden">
                <img className="w-100 rounded-3" src={img_3} alt="img_3" />
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center">
                  <i className="bi bi-plus-lg text-white fs-1"></i>
                </div>
              </div>
            </div>
            <div onClick={() => openImage(img_1)} className="col-md-4 p-3">
              <div className="image-container position-relative overflow-hidden">
                <img className="w-100 rounded-3" src={img_1} alt="img_1" />
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center">
                  <i className="bi bi-plus-lg text-white fs-1"></i>
                </div>
              </div>
            </div>
            <div onClick={() => openImage(img_2)} className="col-md-4 p-3">
              <div className="image-container position-relative overflow-hidden">
                <img className="w-100 rounded-3" src={img_2} alt="img_2" />
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center">
                  <i className="bi bi-plus-lg text-white fs-1"></i>
                </div>
              </div>
            </div>
            <div onClick={() => openImage(img_3)} className="col-md-4 p-3">
              <div className="image-container position-relative overflow-hidden">
                <img className="w-100 rounded-3" src={img_3} alt="img_3" />
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center">
                  <i className="bi bi-plus-lg text-white fs-1"></i>
                </div>
              </div>
            </div>
          </div>
        </main>

        {image && (
          <div className="fullscreen-overlay" onClick={closeImage}>
            <img src={image} alt="selected" className="fullscreen-img" />
          </div>
        )}
      </section>
    </>
  );
};

export default Portfolio;
