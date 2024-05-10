import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        SGH Transports is a premier transport company dedicated to providing exceptional logistics solutions tailored to meet your business needs. With a focus on reliability, efficiency, and safety, we strive to deliver excellence in every shipment. Our experienced team ensures smooth and timely transportation of goods across various destinations, utilizing the latest technology and best practices in the industry. Whether you require freight forwarding, warehousing, distribution, or custom logistics solutions, SGH Transports is your trusted partner for seamless transportation services.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Solutions and specialize"
          description="Our aim is to optimize and improve your supply chain so that we can give you the best service

          "
        />

        <SolutionStep
          title="Multiple Warehouses"
          description="We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind of problem from our end."
        />

        <SolutionStep
          title="Tracking made easy"
          description="Soon, feature will be added to track your shipment easily.

          "
        />
      </div>
    </div>
  );
}

export default About;
