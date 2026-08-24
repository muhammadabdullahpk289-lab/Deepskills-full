import React from "react";
import "./Medialearnvideos.css";
import img from '../../assets/Media-images/feature-card.adf039ec5051334c.svg'
const videos = [
  { image: img, title: "Introduction to JavaScript Basics" },
  { image: img, title: "Advanced CSS Animations Guide" },
  { image: img, title: "React Hooks Deep Dive" },
  { image: img, title: "Building REST APIs with Node.js" },
];

export default function MediaLearnVideos() {
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
    <div className="medialearnvideos-wrapper">
      <h2 className="medialearnvideos-heading">Learn Through Videos</h2>
      <p className="medialearnvideos-subtext">
        Browse through our curated gallery showcasing student projects,
        coding workshops, and DeepSkill events.
      </p>

      <div className="medialearnvideos-grid">
        {videos.map((video, i) => (
          <div className="medialearnvideos-item" key={i}>
            <div
              className="medialearnvideos-image"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {video.image ? (
                <img src={video.image} alt={video.title} />
              ) : (
                <div className="medialearnvideos-image-placeholder"></div>
              )}
            </div>
            <div className="medialearnvideos-caption">{video.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}