import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {


  
  return (
    <footer className="text-white pt-5">
      <div className="container foot text-center text-md-start">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4 text-center">
            <h5 className="fw-bold mb-3">LOCATION</h5>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-md-4 mb-4 text-center">
            <h5 className="fw-bold mb-3 text-uppercase">
              Around the Web
            </h5>
            <div className="d-flex socila justify-content-center gap-3">
              <a
                href="#"
                className="text-white border rounded-circle d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-facebook fs-6 text-white"></i>
              </a>
              <a
                href="#"
                className="text-white border rounded-circle d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-twitter fs-6 text-white"></i>
              </a>
              <a
                href="#"
                className="text-white border rounded-circle d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-linkedin fs-6 text-white"></i>
              </a>
              <a
                href="#"
                className="text-white border rounded-circle d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-globe fs-6 text-white"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4 text-center">
            <h5 className="fw-bold mb-3">ABOUT FREELANCER</h5>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>

        </div>
      </div>

      <div className="text-center py-3" style={{ backgroundColor: "#1A252F" }}>
        <p className="mb-0">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
