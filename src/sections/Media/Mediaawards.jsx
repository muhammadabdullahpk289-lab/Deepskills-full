import React from "react";
import "./Mediaawards.css";
import img from '../../assets/Media-images/awards.c2ac1af8ab93f8e1.svg'

const awards = [
  {
    image: img,
    title: "UX DESIGN",
    desc: "Exceptional user interface during Hackathon.",
  },
  {
    image: img,
    title: "TOP DEVELOPER 2023",
    desc: "Recognizing outstanding coding skills and project contributions.",
  },
  {
    image: img,
    title: "INNOVATION AWARD",
    desc: "For creating the best solution during the challenge.",
  },
  {
    image: img,
    title: "BEST MENTOR 2023",
    desc: "Recognized for outstanding student guidance and support.",
  },
];

const loopAwards = [...awards, ...awards];

export default function MediaAwards() {
  return (
    <div className="mediaawards-wrapper">
      <div className="mediaawards-header">
        <h2 className="mediaawards-heading">Awards</h2>
        <p className="mediaawards-subtext">
          Browse through our curated gallery showcasing student projects,
          coding workshops, and DeepSkill events.
        </p>
      </div>

      <div className="mediaawards-track-outer">
        <div className="mediaawards-track">
          {loopAwards.map((award, i) => (
            <div className="mediaawards-card" key={i}>
              <div className="mediaawards-image">
                {award.image ? (
                  <img src={award.image} alt={award.title} />
                ) : (
                  <div className="mediaawards-image-placeholder"></div>
                )}
              </div>
              <div className="mediaawards-text">
                <h3>{award.title}</h3>
                <p>{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
