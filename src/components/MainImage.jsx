import React from "react";

export default function MainImage() {
  return (
    <div className="main-image">
      <img
        src="https://sghsc-edu-bd.s3.ap-southeast-1.amazonaws.com/dws/2024/content_image/Content_Big_Festival_18-08-2024-01-03-51_s1.jpg"
        alt="School"
      />
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
