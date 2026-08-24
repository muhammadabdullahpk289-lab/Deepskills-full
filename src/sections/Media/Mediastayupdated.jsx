import React from "react";
import "./Mediastayupdated.css";
import img from '../../assets/Media-images/feature-card.adf039ec5051334c.svg'

const items = [
  { image: img, title: "Web Development Bootcamp 2024" },
  { image: img, title: "Mastering React & Framer Motion" },
  { image: img, title: "UI/UX Design Sprint Highlights" },
  { image: img, title: "Student Showcase Night" },
];

export default function MediaStayUpdated() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = `
      perspective(900px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div className="mediastayupdated-wrapper">
      <h2 className="mediastayupdated-heading">Stay Updated</h2>
      <p className="mediastayupdated-subtext">
        Browse through our curated gallery showcasing student projects,
        coding workshops, and DeepSkill events.
      </p>

      <div className="mediastayupdated-grid">
        {items.map((item, i) => (
          <div className="mediastayupdated-item" key={i}>
            <div
              className="mediastayupdated-image"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.image ? (
                <img src={item.image} alt={item.title} />
              ) : (
                <div className="mediastayupdated-image-placeholder"></div>
              )}
            </div>
            <div className="mediastayupdated-caption">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
