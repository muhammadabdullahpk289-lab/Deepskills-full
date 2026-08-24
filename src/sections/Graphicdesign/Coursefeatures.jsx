import React, { useRef } from "react";
import "./Coursefeatures.css";

import backgroundImage from "../../assets/Graphicdesign-images/5eaa6a46-7ca7-4989-be02-4511729a93b3.png";

const features = [
  {
    icon: "👤",
    title: "Anyone",
    subtitle: "Students (IT / Non-IT)",
  },
  {
    icon: "◷",
    title: "10 Weeks",
    subtitle: "Intensive Training",
  },
  {
    icon: "⚑",
    title: "Project-Based",
    subtitle: "Learning Approach",
  },
  {
    icon: "☞",
    title: "Real Client-Based",
    subtitle: "Design Projects",
  },
  {
    icon: "▣",
    title: "Portfolio",
    subtitle: "Professional Showcase Support",
  },
  {
    icon: "⌁",
    title: "Freelancing",
    subtitle: "Proposal Writing Guidance",
  },
  {
    icon: "●",
    title: "UI/UX Basics",
    subtitle: "UI/UX Introduction Included",
  },
  {
    icon: "▣",
    title: "Onsite / Online",
    subtitle: "Onsite & Online Learning Modes",
  },
];

export default function CourseFeatures() {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-5px)
      scale(1.02)
    `;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];

    if (!card) return;

    card.style.transform = `
      perspective(800px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
      scale(1)
    `;
  };

  return (
    <section
      className="course-features"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="course-features-overlay"></div>

      <div className="course-features-content">

        <h2 className="course-features-heading">
          Our Course Features
        </h2>

        <div className="course-features-grid">

          {features.map((feature, index) => (
            <div
              className="course-feature-card"
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >

              <div className="course-feature-glow"></div>

              <div className="course-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.subtitle}</p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}