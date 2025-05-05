import React from "react";

export default function () {
  return (
    <div className="top-header">
      <div className="header-left-side-content">
        <div className="logo-place">
          <img src="/school-logo.svg" alt="SchoolLogo" width="95px" />
        </div>
        <div className="school-details">
          <h3>Vatara Model School</h3>
          <h5>ESTD. 1987</h5>
          <h5>48/25 A.K. Mansur Road, Bashundhara R/A, Vatara, Dhaka</h5>
        </div>
      </div>
      <div className="header-right-side-content">
        <div className="g-mail-address">
          <p>
            <a href="https://www.google.co.uk/" target="_blank">
              vataraschool1987@gmail.com
            </a>
          </p>
        </div>
        <div className="phone-number">
          <p>0197493722</p>
        </div>
        <div className="social-media-addresses">
          <div className="social-media-icons">
            <a
              href="https://wa.me/0197493722"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-whatsapp" style={{ color: "#0fe231" }}></i>
            </a>
          </div>
          <div className="social-media-icons">
            <a
              href="https://m.me/VataraModelSchool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-messenger" style={{ color: "#7d10e4" }}></i>
            </a>
          </div>
          <div className="social-media-icons">
            <a
              href="https://twitter.com/VataraModelSchool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-twitter" style={{ color: "#0e95e0" }}></i>
            </a>
          </div>
          <div className="social-media-icons">
            <a
              href="https://www.youtube.com/c/VataraModelSchool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-youtube" style={{ color: "#e00e0e" }}></i>
            </a>
          </div>
          <div className="social-media-icons">
            <a
              href="https://www.instagram.com/VataraModelSchool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="bx bxl-instagram-alt"
                style={{ color: "#8910e0" }}
              ></i>
            </a>
          </div>
          <div className="social-media-icons">
            <a
              href="https://www.facebook.com/VataraModelSchool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="bx bxl-facebook-circle"
                style={{ color: "#047db7" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
