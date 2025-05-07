import React from "react";

export default function MainImage() {
  return (
    <div className="main-image">
      <img src="/images/school-front.jpg" alt="School" />
      <div className="content-buttons">
        <h2>Front Side of School</h2>
        <div className="button-place">
          <a href="">
            <button>Contact Us</button>
          </a>
          <a href="">
            <button style={{ marginLeft: "12px" }}>About Us</button>
          </a>
        </div>
      </div>
    </div>
  );
}
