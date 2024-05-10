import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth,faTruck } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        We Are Professional Logistics & cargo Agency
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Air Freight"
          description="Our aim is to optimize and improve your supply chain so that we can give you the best service.
          "
          icon={faTruckMedical}
        />

        <InformationCard
          title="Road Freight"
          description="Our aim is to optimize and improve your supply chain so that we can give you the best service.

          "
          icon={faTruck}
        />

        <InformationCard
          title="Ocean Freight"
          description="Our aim is to optimize and improve your supply chain so that we can give you the best service.

          "
          icon={faTruck}
        />

<InformationCard
          title="Rail Freight"
          description="Our aim is to optimize and improve your supply chain so that we can give you the best service.

          "
          icon={faTruck}
        />

<InformationCard
          title="Project Cargo"
          description="Our aim is to optimize and improve your supply chain so that we can give you the best service.

          "
          icon={faTruck}
        />

<InformationCard
          title="Warehousing"
          description="Our aim is to optimize and improve your supply chain so that we can give you the best service.

          "
          icon={faTruck}
        />
      </div>
    </div>
  );
}

export default Info;
