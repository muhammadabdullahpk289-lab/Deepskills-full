import React from "react";
import "./HeroSection.css";

export default function HeroSection({ imageUrl = null }) {

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
    <div className="hero-wrapper">

      {/* ================================
              LEFT CONTENT
      ================================ */}

      <div className="hero-left">

        <h1 className="hero-title">
          Professional{" "}
          <span className="hero-highlight">
            Graphic Designing
          </span>
        </h1>

        <p className="hero-subtitles">
          Design Creative Visuals. Build a Strong Portfolio. Launch Your
          Career in Graphic Design.
        </p>

        <div className="hero-divider"></div>

        <p className="hero-paragraph">
          This career-focused Graphic Designing program is designed to
          prepare you for real employment and freelancing opportunities in
          the creative industry. You will learn how to design professional
          logos, brand identities, social media creatives, UI designs, and
          marketing materials used by modern businesses.
        </p>

        <p className="hero-paragraph">
          From basic design principles to advanced software techniques, this
          course trains you with practical projects that simulate real
          client work. Whether you aim for a job, internship, or freelance
          career, this program prepares you with hands-on experience and a
          strong portfolio.
        </p>

        <button className="hero-btn-start">
          Start Learning
        </button>

      </div>


      {/* ================================
              RIGHT CARD
      ================================ */}

      <div className="hero-right">

        <div
          className="hero-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >

          {/* CARD TOP */}

          <div className="hero-card-top">

          </div>


          {/* CARD BOTTOM */}

          <div className="hero-card-bottom">

            <div className="hero-outcomes-label">
              COURSE OUTCOMES
            </div>


            <ul className="hero-outcomes-list">

              <li>
                <span className="hero-check">
                  ✓
                </span>

                Photoshop &amp; Illustrator Expert
              </li>


              <li>
                <span className="hero-check">
                  ✓
                </span>

                UI/UX Design Fundamentals
              </li>


              <li>
                <span className="hero-check">
                  ✓
                </span>

                Branding &amp; Identity Design
              </li>


              <li>
                <span className="hero-check">
                  ✓
                </span>

                Social Media Design Specialist
              </li>

            </ul>


           
     <button className="hero-btn-enroll">
        ENROLL NOW
     </button>
          </div>

        </div>

      </div>

    </div>
  );
}