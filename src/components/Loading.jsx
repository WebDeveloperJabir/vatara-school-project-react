import React, { useEffect } from "react";
import { useState } from "react";

export default function Loading({ trigger }) {
  const [loading, setLoading] = useState(true);
  const [notRemoved, setRemoved] = useState(true);
  useEffect(() => {
    if (!trigger) {
      setLoading(false);
      const timeout = setTimeout(() => {
        setRemoved(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  return notRemoved ? (
    <div className={`loading ${!loading ? "hidden" : ""}`}>
      <div className="loading-place">
        <div className="loader"></div>
      </div>
    </div>
  ) : null;
}
