import React from "react";
import "./Footer.css";

const socialLinks = [
  { icon: "ti-brand-facebook", label: "Facebook" },
  { icon: "ti-brand-twitter", label: "Twitter" },
  { icon: "ti-brand-linkedin", label: "LinkedIn" },
  { icon: "ti-globe", label: "Website" },
];

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="footer-noise"></div>

      <div className="footer-main">

        <div className="footer-col">
          <i className="ti ti-map-pin footer-icon" aria-hidden="true"></i>
          <h5 className="footer-col-title">Location</h5>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div className="footer-col">
          <i className="ti ti-world footer-icon" aria-hidden="true"></i>
          <h5 className="footer-col-title">Around the web</h5>
          <div className="social-row">
            {socialLinks.map((s) => (
              
                href="#"
                className="social-btn"
                aria-label={s.label}
                key={s.label}
              >
                <i className={`ti ${s.icon}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <i className="ti ti-user-circle footer-icon" aria-hidden="true"></i>
          <h5 className="footer-col-title">About Freelancer</h5>
          <p classNam