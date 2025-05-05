import React from "react";

export default function NotMadePage() {
  return (
    <div className="not-made-page error-page">
      <img src="/page-not-constructed.svg" alt="" />
      <h1 style={{ fontFamily: "sans-serif" }}>
        The page is under construction
      </h1>
      <p>This page hasn't made yet.</p>
    </div>
  );
}
