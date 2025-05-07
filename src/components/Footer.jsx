import React from "react";

let currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="upper-content">
        <div className="left-content">
          <div className="school-logo-place">
            <img src="/images/school-logo.svg" alt="SchoolLogo" width="95px" />
            <p>Vatara Model School</p>
          </div>
          <div className="email-and-phone">
            <div className="email">
              <i className="bx bx-envelope"></i>
              <a
                href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AXH0vVtsGLgxTO7AMr4T3tiwG3p7peLSuuVD1G-qEIj62iTeUNQBYk1BYPXIIenyUIbQ_qFgqx6BJA&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                target="_blank"
              >
                vataraschool1987@gmail.com
              </a>
            </div>
            <div className="phone">
              <i className="bx bx-phone"></i>
              <p>0197493722</p>
            </div>
            <div className="address">
              <i className="bx bx-map"></i>
              <a
                href="https://www.google.com/maps/place/Basundhara+Residential+Area,+Dhaka/@23.8195821,90.4337557,14z/data=!3m1!4b1!4m6!3m5!1s0x3755c62fce7d991f:0xacfaf1ac8e944c05!8m2!3d23.8191441!4d90.4525954!16s%2Fg%2F1yfdrwxvj?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                target="_blank"
              >
                48/25 A.K. Mansur Road,
                <br />
                Bashundhara R/A, Vatara, Dhaka
              </a>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="middle-content">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="https://moedu.portal.gov.bd/" target="_blank">
                Ministry of Education
              </a>
            </li>
            <li>
              <a
                href="https://dhakaeducationboard.gov.bd/site/"
                target="_blank"
              >
                Dhaka Board
              </a>
            </li>
            <li>
              <a
                href="https://www.educationboardresults.gov.bd/"
                target="_blank"
              >
                Education Board Bangladesh
              </a>
            </li>
            <li>
              <a href="https://www.du.ac.bd/" target="_blank">
                Dhaka University
              </a>
            </li>
            <li>
              <a href="https://www.dpe.gov.bd/" target="_blank">
                {" "}
                Primary Education Board
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Secondary_School_Certificate"
                target="_blank"
              >
                SSC
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Secondary_School_Certificate_(Bangladesh)"
                target="_blank"
              >
                SSC Bangladesh
              </a>
            </li>
            <li>
              <a
                href="https://nctbbook.com/ssc-2026-short-syllabus/"
                target="_blank"
              >
                SSC 2026 Short Syllabus
              </a>
            </li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="right-content">
          <p>Made and Maintained by:</p>
          <a href="www.google.com" target="_blank" title="Jabir Ibne Habib">
            <div className="jabir-div">
              <img src="/images/jabir-logo.svg" alt="Jabir Ibne Habib" />
            </div>
          </a>
        </div>
      </div>
      <div className="lower-content">
        <p>
          &#169; 2005 - {currentYear} Vatara Model School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
