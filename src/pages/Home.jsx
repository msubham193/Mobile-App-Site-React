import React from "react";
import Layout from "../components/Layout";
import AvailableSection from "../components/sections/AvailableSection";
import FeatureSection from "../components/sections/FeatureSection";
import HeroSection from "../components/sections/HeroSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <AvailableSection />
    </Layout>
  );
};

export default Home;
