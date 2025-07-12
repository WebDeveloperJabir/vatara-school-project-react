import { useState, useEffect } from "react";

export default function ScreenSizeBar() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function updateSize() {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div id="screenSize">
      {size.width}px &#x2715; {size.height}px
    </div>
  );
}
