import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        SGH Transports is a registered transport company operating in North India, specializing in providing logistics and transportation services for businesses and individuals. Our services include freight forwarding, warehousing, distribution, and custom logistics solutions tailored to meet diverse customer needs. We are committed to delivering reliable, efficient, and secure transportation services to our clients.

        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        At SGH Transports, we prioritize the privacy and security of our customers' information. We collect and use personal data only for the purpose of providing transportation services and ensuring smooth operations. We adhere to strict confidentiality standards and do not share or sell customer information to third parties without consent, except as required by law or for essential service delivery.

        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        By using SGH Transports' services, customers agree to abide by our terms of service. This includes providing accurate shipment details, complying with shipping regulations, and making timely payments for services rendered. SGH Transports reserves the right to refuse service, modify terms, or terminate agreements in case of non-compliance with our policies or unethical behavior.

        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        SGH Transports offers consultation services to assist clients in optimizing their transportation and logistics strategies. Our expert consultants provide valuable insights, recommend efficient solutions, and help streamline operations for improved efficiency and cost-effectiveness. Consultation services are tailored to meet specific business needs and are available upon request
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        Our transportation process at SGH Transports is straightforward and efficient. Customers can request transportation services through our website or contact our customer support team. Once a request is received, we assess the logistics requirements, provide a quote, and schedule the shipment. Our experienced team handles the transportation process, ensuring timely delivery and customer satisfaction.

        </p>
      </div>

      <div className="legal-footer">
        <p>© 2024 SGH Transports. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
