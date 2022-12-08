import React from "react";
import "../components/ImageSlider";
import ImageSlider from "../components/ImageSlider";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import Whylearn from "../components/WhyLearn";
import WhoAreWe from "../components/WhoAreWe";
import Header from "./Header";
import Navbar from "./Navbar";
import Sponsors from "../components/Sponsors";
function LandingPage() {
  return (
    <div>
      <Navbar />
      <Header/>
      <ImageSlider />
      <WhoAreWe />
      <Whylearn />
      <Sponsors />
      <MapSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
