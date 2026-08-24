import React, { useState } from "react";
import "./Loginpage.css";

export default function Login() {
  const [cnic, setCnic] = useState("");

  const handleCnicChange = (e) => {
    let value = e.target.value;

    // Sirf numbers allow
    value = value.replace(/\D/g, "");

    // Maximum 13 digits
    value = value.slice(0, 13);

    // XXXXX-XXXXXXX-X format
    if (value.length > 5 && value.length <= 12) {
      value =
        value.slice(0, 5) +
        "-" +
        value.slice(5);
    }

    if (value.length > 13) {
      value =
        value.slice(0, 5) +
        "-" +
        value.slice(5, 12) +
        "-" +
        value.slice(12, 13);
    }

    setCnic(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cnic) {
      return;
    }

    // CNIC localStorage mein save
    localStorage.setItem("loginCNIC", cnic);

    console.log("CNIC saved:", cnic);

    // Yahan future mein OTP API connect kar sakte ho
    alert("OTP request sent!");
  };

  return (
    <section className="login-section">

      <div className="login-card">

        {/* Heading */}
        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Enter your CNIC to receive a secure login OTP
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <label htmlFor="cnic">
            CNIC Number
          </label>

          <div className="login-input-wrapper">

            <span className="cnic-icon">
              ▣
            </span>

            <input
              id="cnic"
              type="text"
              value={cnic}
              onChange={handleCnicChange}
              placeholder="XXXXX-XXXXXXX-X"
              autoComplete="off"
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            className="send-otp-btn"
          >
            <span>Send OTP</span>
            <span className="otp-arrow">→</span>
          </button>

        </form>

      </div>

    </section>
  );
}