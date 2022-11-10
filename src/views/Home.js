import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Achievements from "../components/sections/Achievements";
import UpcomingEvents from "../components/sections/UpcomingEvents";
import Cta from "../components/sections/Cta";
import Gallery from "../components/sections/gallery";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <UpcomingEvents topDivider />
      <Achievements topDivider />
      <Gallery topDivider />
      {/* <Cta split /> */}
    </>
  );
};

export default Home;
