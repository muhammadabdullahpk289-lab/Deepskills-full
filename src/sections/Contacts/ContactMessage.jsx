import React, { useState } from "react";
import "./ContactMessage.css";
import img from '../../assets/Contacts-images/form-right.78f9eb6ac8078ac5.svg'

export default function ContactMessage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Input values handle karna
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Local Storage mein save
    localStorage.setItem(
      "contactMessage",
      JSON.stringify(formData)
    );

    // Simple confirmation
    alert("Your message has been saved successfully!");

    // Form clear
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact-message-section">

      <div className="contact-message-container">

        {/* ================= LEFT FORM ================= */}
        <form
          className="contact-message-form"
          onSubmit={handleSubmit}
        >

          <h2>Send a Message:</h2>

          <p className="contact-message-subtitle">
            We're here to help you
          </p>


          {/* Name */}
          <div className="contact-field">
            <label htmlFor="name">Name:</label>

            <input
              id="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>


          {/* Email */}
          <div className="contact-field">
            <label htmlFor="email">Email:</label>

            <input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>


          {/* Phone */}
          <div className="contact-field">
            <label htmlFor="phone">Phone</label>

            <input
              id="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>


          {/* Message */}
          <div className="contact-field contact-message-field">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>


          {/* Submit */}
          <button
            type="submit"
            className="contact-submit-btn"
          >
            Submit
          </button>

        </form>


        {/* ================= RIGHT IMAGE ================= */}
        <div className="contact-message-image">

          <img
            src={img}
            alt="Deep Skills"
          />

        </div>

      </div>

    </section>
  );
}