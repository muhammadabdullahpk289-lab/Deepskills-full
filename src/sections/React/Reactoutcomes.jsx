import React from "react";
import "./Reactoutcomes.css";
import img from '../../assets/React-images/10002.svg'

export default function Reactoutcomes({ imageUrl = img }) {
  return (
    <div className="reactoutcomes-wrapper">
      <h2 className="reactoutcomes-heading">Career Outcomes</h2>
      <p className="reactoutcomes-subheading">
        By the end of this program, you'll be able to:
      </p>

      <div className="reactoutcomes-image">
        <img src={imageUrl} alt="Career outcomes" />
      </div>

      <p className="reactoutcomes-footer">
        This course is structured to help students develop job-ready skills and a
        strong portfolio, not just theoretical knowledge.
      </p>
    </div>
  );
}