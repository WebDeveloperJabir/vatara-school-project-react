import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

export default function Loading({ hide }) {
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (hide === "hidden") {
      const timer = setTimeout(() => setRemoved(true), 500);
      return () => clearTimeout(timer);
    } else {
      setRemoved(false);
    }
  }, [hide]);
  if (removed) return null;

  return createPortal(
    <div className={`loading ${hide}`}>
      <div className='loader'></div>
    </div>,
    document.body
  );
}
