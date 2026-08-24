import React from "react";
import "./Reactdoubt.css";
import img1 from '../../assets/React-images/instant-banner.bc2b0ff3e1043e5c.svg'

export default function Reactdoubt({ imageUrl = img1 }) {
  return (
    <div className="reactdoubt-wrapper">
      <div className="reactdoubt-header">
        <h2 className="reactdoubt-heading">
          Instant <span className="reactdoubt-highlight">Doubt Solving</span>
        </h2>
      </div>

      <div className="reactdoubt-image">
        <img src={imageUrl} alt="Instant doubt solving" />
      </div>
    </div>
  );
}