import React from "react";
import "./ContactReachOut.css";

import {
  FaBullseye,
  FaLightbulb,
  FaBars,
  FaUsers,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaBullseye />,
    text: "Get clear guidance on career-oriented courses",
  },
  {
    icon: <FaLightbulb />,
    text: "Learn which skills match your goals and interests",
  },
  {
    icon: <FaBars />,
    text: "Understand course structure, duration, and outcomes",
  },
  {
    icon: <FaUsers />,
    text: "Get support from a student-focused learning team",
  },
];

export default function ContactReachOut() {
  return (
    <section className="contactreachout-section">

      <div className="contactreachout-content">

        <h2 className="contactreachout-heading">
          Why Reach Out to
          <br />
          <span>Deepskills?</span>
        </h2>

        <div className="contactreachout-grid">

          {reasons.map((reason, index) => (
            <div
              className="contactreachout-card"
              key={index}
            >

              <div className="contactreachout-icon">
                {reason.icon}
              </div>

              <p className="contactreachout-text">
                {reason.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}