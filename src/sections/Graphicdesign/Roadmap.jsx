import React from "react";
import "./Roadmap.css";
import img from '../../assets/Graphicdesign-images/graphic-map.9dd6c6117aef080e.svg'

export default function Roadmap({ imageUrl = img }) {
  return (
    <div className="roadmap-wrapper">
      <h2 className="roadmap-heading">
        Course <span className="roadmap-highlight">Roadmap</span>
      </h2>

      <div className="roadmap-image">
        <img src={imageUrl} alt="Course roadmap" />
      </div>
    </div>
  );
}