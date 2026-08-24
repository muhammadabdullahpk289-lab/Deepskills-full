import React from "react";
import "./Whatyou.css";

const cards = [
  {
    title: "Adobe Illustrator",
    badge: "Ai",
    items: [
      "Vector graphics fundamentals",
      "Logo design & brand identity creation",
      "Typography & text manipulation",
      "Character & vector illustration",
      "Stationery & print design",
    ],
  },

  {
    title: "Adobe Photoshop",
    badge: "Ps",
    items: [
      "Photo editing & manipulation",
      "Color correction & adjustment layers",
      "Social media post design",
      "Product mockups & presentations",
      "Branding & marketing creatives",
    ],
  },

  {
    title: "UI/UX Design Basics",

    badge: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="14" cy="8" r="1" fill="currentColor" />
        <circle cx="16" cy="13" r="1" fill="currentColor" />

        <path d="M12 21a2 2 0 002-2c0-1-1-2-1-2a2 2 0 012-2h1a4 4 0 004-4 9 9 0 10-8 10z" />
      </svg>
    ),

    items: [
      "User-centered design principles",
      "Wireframing & prototyping",
      "Web & mobile app interface design",
      "Design systems & typography",
    ],
  },

  {
    title: "Freelancing & Portfolio Development",

    badge: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />

        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      </svg>
    ),

    items: [
      "Freelance platform setup (Fiverr, Upwork, etc.)",
      "Writing winning proposals",
      "Client communication & project handling",
      "Building a professional design portfolio",
    ],
  },
];

export default function WhatYoullLearn() {

  /* =========================================
        CURSOR MOVE
  ========================================= */

  const handleMouseMove = (e) => {

    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    /* Card Tilt */

    const rotateX =
      ((y - centerY) / centerY) * -6;

    const rotateY =
      ((x - centerX) / centerX) * 6;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-5px)
    `;

    /* Cursor Position */

    card.style.setProperty(
      "--mouse-x",
      `${x}px`
    );

    card.style.setProperty(
      "--mouse-y",
      `${y}px`
    );
  };


  /* =========================================
        CURSOR LEAVE
  ========================================= */

  const handleMouseLeave = (e) => {

    const card = e.currentTarget;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  };


  return (
    <section className="wyl-wrapper">

      <h2 className="wyl-heading">
        What You'll Learn
      </h2>


      <div className="wyl-grid">

        {cards.map((card, i) => (

          <div
            className="wyl-card"
            key={i}

            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >

            {/* Glow */}

            <div className="wyl-glow"></div>


            {/* Header */}

            <div className="wyl-card-header">

              <h3 className="wyl-card-title">
                {card.title}
              </h3>

              <div className="wyl-badge">
                {card.badge}
              </div>

            </div>


            {/* Divider */}

            <div className="wyl-divider"></div>


            {/* List */}

            <ul className="wyl-list">

              {card.items.map((item, j) => (

                <li key={j}>

                  <span className="wyl-dot"></span>

                  <span>
                    {item}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

    </section>
  );
}