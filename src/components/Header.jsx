import React from "react";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";
import ScreenSizeBar from "./ScreenSizeBar";

export default function Header() {
  return (
    <header>
      {/* <ScreenSizeBar /> */}
      <TopHeader />
      <Navbar />
    </header>
  );
}
