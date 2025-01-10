import React from "react";
import "../styles/Resources.css";
import LearnConnectGrow from "../components/LearnConnectGrow";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="resources">
      <div className="landing-section">
        <div className="overlay">
          <h1>Learning Materials</h1>
        </div>
      </div>
      <LearnConnectGrow />
      <Footer />
    </div>
  );
};

export default Services;
