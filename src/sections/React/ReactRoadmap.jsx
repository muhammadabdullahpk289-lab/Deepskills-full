import React from "react";
import "./ReactRoadmap.css";

import img from "../../assets/React-images/mern-map.3ae5a688d83e5b66.svg";

export default function ReactRoadmap({ imageUrl = img }) {
  return (
    <section className="reactroadmap-wrapper">

      <h2 className="reactroadmap-heading">
        Course <span className="reactroadmap-highlight">Roadmap</span>
      </h2>

      <div className="reactroadmap-image">
        <img
          src={imageUrl}
          alt="Course roadmap"
        />
      </div>

    </section>
  );
}