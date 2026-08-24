import React from "react";
import "./LaravelHero.css";

export default function LaravelHero({ imageUrl = null }) {

  // ================================
  // CARD 3D TILT
  // ================================

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
    <div className="laravelhero-wrapper">

      {/* ================================
              LEFT CONTENT
      ================================ */}

      <div className="laravelhero-left">

        <h1 className="laravelhero-title">
          Full Stack Web Development{" "}
          <span className="laravelhero-highlight">
            with PHP & Laravel
          </span>
        </h1>

        <p className="laravelhero-subtitle">
         Build Real-World Skills. Get Job-Ready. Launch Your Career in Web Development.
        </p>

        <div className="laravelhero-divider"></div>

        <p className="laravelhero-paragraph">
       This career-focused Full Stack Web Development program is designed to prepare you for real employment opportunities using PHP, MySQL, and Laravel. You will learn how to build dynamic, secure, and scalable web applications used by companies worldwide.
        </p>

        <p className="laravelhero-paragraph">
         From frontend design to backend logic and database management, this program trains you with practical projects that simulate real industry work environments. Whether you aim for a job, internship, or freelancing career, this course prepares you with hands-on experience and portfolio-ready projects.
        </p>

        <button className="laravelhero-btn-start">
          Start Learning
        </button>

      </div>


      {/* ================================
              RIGHT CARD
      ================================ */}

      <div className="laravelhero-right">

        <div
          className="laravelhero-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >

          {/* CARD TOP */}

          <div className="laravelhero-card-top">
          </div>


          {/* CARD BOTTOM */}

          <div className="laravelhero-card-bottom">

            <div className="laravelhero-outcomes-label">
              COURSE OUTCOMES
            </div>

            <ul className="laravelhero-outcomes-list">

              <li>
                <span className="laravelhero-check">
                  ✓
                </span>

                Photoshop &amp; Illustrator Expert
              </li>

              <li>
                <span className="laravelhero-check">
                  ✓
                </span>

                UI/UX Design Fundamentals
              </li>

              <li>
                <span className="laravelhero-check">
                  ✓
                </span>

                Branding &amp; Identity Design
              </li>

              <li>
                <span className="laravelhero-check">
                  ✓
                </span>

                Social Media Design Specialist
              </li>

            </ul>

            <button className="laravelhero-btn-enroll">
              ENROLL NOW
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}