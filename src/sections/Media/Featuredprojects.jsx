import React from "react";
import "./Featuredprojects.css";
import img from '../../assets/Media-images/feature-card.adf039ec5051334c.svg'

const projects = [
  { image: img, title: "Food Delivery Platform Redesign" },
  { image: img, title: "Real Estate App UI/UX" },
  { image: img, title: "E-commerce Website Development" },
  { image: img, title: "Portfolio Branding Project" },
  { image: img, title: "Social Media Marketing Campaign" },
  { image: img, title: "Fitness Tracking Mobile App" },
  { image: img, title: "Corporate Website Redesign" },
  { image: img, title: "Student Coding Workshop" },
];

export default function FeaturedProjects() {
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
    <div className="featuredprojects-wrapper">
      <h2 className="featuredprojects-heading">Featured Projects &amp; Moments</h2>
      <p className="featuredprojects-subtext">
        Browse through our curated gallery showcasing student projects,
        coding workshops, and DeepSkill events.
      </p>

      <div className="featuredprojects-grid">
        {projects.map((project, i) => (
          <div className="featuredprojects-item" key={i}>
            <div
              className="featuredprojects-image"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="featuredprojects-image-placeholder"></div>
              )}
            </div>
            <div className="featuredprojects-caption">{project.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}