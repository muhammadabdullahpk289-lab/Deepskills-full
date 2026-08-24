import React from "react";
import "./Reactprojects.css";
import imgbtm from '../../assets/React-images/100011.svg'

export default function Reactprojects({ imageUrl = imgbtm }) {
  return (
    <div className="reactprojects-wrapper">
      <h2 className="reactprojects-heading">Projects You'll Build</h2>

      <div className="reactprojects-image">
        <img src={imageUrl} alt="Projects you'll build" />
      </div>
    </div>
  );
}