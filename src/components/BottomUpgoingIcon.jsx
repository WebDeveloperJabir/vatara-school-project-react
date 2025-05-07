import React from "react";
import { useRef, useEffect } from "react";

export default function BottomUpgoingIcon() {
  const scrollIcon = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        scrollIcon.current?.classList.add("visible");
      } else {
        scrollIcon.current?.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bottom-upgoing-icon" ref={scrollIcon} onClick={scrollToTop}>
      <i className="bx bx-up-arrow-alt"></i>
    </div>
  );
}
