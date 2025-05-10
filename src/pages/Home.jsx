import React from "react";
import MainImage from "../components/MainImage";
import AboutUsSection from "../components/AboutUsSection";
import MainTeachers from "../components/MainTeachers";
import DiscountBar from "../components/DiscountBar";

export default function Home() {
  return (
    <div>
      <DiscountBar />
      <MainImage />
      <MainTeachers />
      <AboutUsSection />
    </div>
  );
}
