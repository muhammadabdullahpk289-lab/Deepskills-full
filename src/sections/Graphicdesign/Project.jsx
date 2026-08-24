import React from "react";
import "./Project.css";

const projects = [
  { number: "01", text: "Professional logo & brand identity project" },
  { number: "02", text: "Complete social media campaign design" },
  { number: "03", text: "Product packaging & mockup presentation" },
  { number: "04", text: "5-page website UI design" },
  { number: "05", text: "Mobile app interface design" },
  { number: "06", text: "Portfolio-ready final design project" },
];

export default function ProjectsYouWillBuild() {
  return (
    <div className="pywb-wrapper">
      <h2 className="pywb-heading">Projects You Will Build</h2>

      <div className="pywb-grid">
        {projects.map((p, i) => (
          <div className="pywb-item" key={i}>
            <span className="pywb-number">{p.number}</span>
            <span className="pywb-bar"></span>
            <span className="pywb-text">{p.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}