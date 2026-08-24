import React from "react";
import "./StartJourney.css";

export default function StartJourney() {
  return (
    <section className="start-journey-section">
      <div className="start-journey-container">

        <div className="start-journey-content">
          <h2>Start Your Journey</h2>

          <p className="journey-main-text">
            Your future skills start with a simple conversation.
          </p>

          <p className="journey-sub-text">
            Reach out today and take the first step toward a smarter,
            <br />
            skill-driven career.
          </p>

          <button className="journey-btn">
            Inquire Now
          </button>
        </div>

      </div>
    </section>
  );
}