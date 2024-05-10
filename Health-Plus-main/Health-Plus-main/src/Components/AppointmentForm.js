import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [CustomerName, setCustomerName] = useState("");
  const [CustomerNumber, setCustomerNumber] = useState("");
  const [CustomerGender, setCustomerGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!CustomerName.trim()) {
      errors.CustomerName = "Customer name is required";
    } else if (CustomerName.trim().length < 8) {
      errors.CustomerName = "Customer name must be at least 8 characters";
    }

    if (!CustomerNumber.trim()) {
      errors.CustomerNumber = "Customer phone number is required";
    } else if (CustomerNumber.trim().length !== 10) {
      errors.CustomerNumber = "Customer phone number must be of 10 digits";
    }

    if (CustomerGender === "default") {
      errors.CustomerGender = "Please select Customer gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setCustomerName("");
    setCustomerNumber("");
    setCustomerGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("You will soon hear from us", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          SGH GROUP<span className="legal-siteSign"></span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Customer Full Name:
            <input
              type="text"
              value={CustomerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
            {formErrors.CustomerName && <p className="error-message">{formErrors.CustomerName}</p>}
          </label>

          <br />
          <label>
            Customer Phone Number:
            <input
              type="text"
              value={CustomerNumber}
              onChange={(e) => setCustomerNumber(e.target.value)}
              required
            />
            {formErrors.CustomerNumber && <p className="error-message">{formErrors.CustomerNumber}</p>}
          </label>

          <br />
          <label>
            Approximate travel distance
            <select
              value={CustomerGender}
              onChange={(e) => setCustomerGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">0-10 km</option>
              <option value="female">10-50 km</option>
              <option value="female">50-100 km</option>
              <option value="female">100-200 km</option>
              <option value="female">Greater than 200</option>
            </select>
            {formErrors.CustomerGender && <p className="error-message">{formErrors.CustomerGender}</p>}
          </label>

          <br />
          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br />
          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Two wheeler</option>
              <option value="video">Car</option>
              <option value="video">Truck</option>
              <option value="video">Cargo</option>

            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Get a quote
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>You will soon be contacted by our team and will get to hear from us.</p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2024 SGH Transports. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
