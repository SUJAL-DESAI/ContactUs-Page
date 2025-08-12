import React, { useState } from "react";
import "./ContactUs.css";
import Chatbot from "./Chatbot";

export default function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Validation rules
  const isPhoneValid = phone.replace(/\D/g, "").length === 10;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = isPhoneValid && isEmailValid && fullName.trim() !== "" && message.trim() !== "";

  // Handlers
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Form submitted successfully!");
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <header className="header">
        <div className="dot "></div>
        <h1>Contact Us</h1>
      </header>

      {/* Contact Section */}
      <main className="contact-container">
        {/* Contact Form */}
        <section className="contact-form">
          <h2>Contact us</h2>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {!isEmailValid && email && <p className="error">Invalid email address</p>}

          <label>Enter Phone Number</label>
          <div className="phone-input">
            <select>
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          {!isPhoneValid && phone && <p className="error">Phone must be exactly 10 digits</p>}

          <label>Enter Message</label>
          <textarea
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button
            className="send-btn"
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Send Message
          </button>
        </section>

        {/* Contact Info */}
        <section className="contact-info">
          <div className="info-box">
            {/* Call Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="20" height="20" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.21 2.5.59 3.68.09.3.03.63-.24.9l-2.23 2.21z" />
            </svg>
            <p>418 838-6000</p>
          </div>

          <div className="info-box">
            {/* Email Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="20" height="20" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 00-2 2v12c0 1.11.89 2 2 2h16c1.1 0 2-.89 2-2V6c0-1.11-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <p>billetterie.langlicane@ville.levis.qc.ca</p>
          </div>

          <div className="info-box">
            {/* Location Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="20" height="20" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            <p>31 Wolfe Street, Lévis</p>
          </div>
        </section>
      </main>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}
