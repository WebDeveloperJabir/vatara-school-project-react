import React from "react";
import { useState } from "react";

export default function NotFoundPage() {
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || "/"
  );
  return (
    <div className="not-found-page error-page">
      <img src="/images/error404.svg" alt="" />
      <h1 style={{ fontFamily: "sans-serif" }}>Page not found</h1>
      <p>
        Sorry, we can't find the page you've searched for. Check the URL or
        spelling for mistakes and try again.
      </p>
      <p>If encountering any problems again, please contact to the author.</p>
    </div>
  );
}
