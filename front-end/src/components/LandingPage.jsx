import React from "react";
import "../components/ImageSlider";
import ImageSlider from "../components/ImageSlider";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import Whylearn from "../components/WhyLearn";

import Navbar from "./Navbar";
function LandingPage() {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Whylearn />
      <MapSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
