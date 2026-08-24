import React from "react";
import "./ReactHero.css";

import defaultImage from "../../assets/React-images/10004.svg";

export default function ReactHero({ imageUrl = defaultImage }) {

  let handleMouseMove = (e) => {
    let card = e.currentTarget;

    let rect = card.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let centerX = rect.width / 2;
    let centerY = rect.height / 2;

    let rotateX = ((y - centerY) / centerY) * -8;
    let rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  };

  let handleMouseLeave = (e) => {
    e.currentTarget.style.transform = `
      perspective(900px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div className="reacthero-wrapper">

      {/* =========================
          LEFT CONTENT
      ========================= */}

      <div className="reacthero-left">

        <h1 className="reacthero-title">
          Full Stack{" "}
          <span className="reacthero-highlight">
            Web Development with React (MERN Stack)
          </span>
        </h1>

        <p className="reacthero-subtitle">
          Learn how to Build Modern Web Applications Frontend and Backend
        </p>

        <div className="reacthero-divider"></div>

        <p className="reacthero-paragraph">
          The MERN stack is one of the most in-demand technology stacks
          in today's tech industry. This program is designed to help
          students move beyond basics and gain end-to-end web development
          skills, from creating interactive user interfaces to building
          secure backend APIs and deploying full applications online.
        </p>

        <p className="reacthero-paragraph">
          Whether your goal is employment, freelancing, or launching
          your own product, this course focuses on real-world development
          workflows and outcomes.
        </p>

        <button className="reacthero-btn-start">
          Start Learning
        </button>

      </div>


      {/* =========================
          RIGHT CARD
      ========================= */}

      <div className="reacthero-right">

        <div
          className="reacthero-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >

          {/* =========================
              CARD IMAGE
          ========================= */}

          <div
  className="reacthero-card-top"
  style={{
    backgroundImage: `url(${imageUrl})`,
  }}
>

            

          </div>


          {/* =========================
              CARD BOTTOM
          ========================= */}

          <div className="reacthero-card-bottom">

            <div className="reacthero-outcomes-label">
              COURSE OUTCOMES
            </div>

            <ul className="reacthero-outcomes-list">

              <li>
                <span className="reacthero-check">✓</span>
                React Development
              </li>

              <li>
                <span className="reacthero-check">✓</span>
                JavaScript &amp; ES6+
              </li>

              <li>
                <span className="reacthero-check">✓</span>
                API Integration
              </li>

              <li>
                <span className="reacthero-check">✓</span>
                Real-World React Projects
              </li>

            </ul>

            <button className="reacthero-btn-enroll">
              ENROLL NOW
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}