import React from "react";
import "./LaravelRoadmap.css";

import img from "../../assets/Laravel-images/laravel-map.f6bb925f5355f533.svg";

export default function LaravelRoadmap({ imageUrl = img }) {
  return (
    <section className="laravelroadmap-wrapper">

      <h2 className="laravelroadmap-heading">
        Course <span className="laravelroadmap-highlight">Roadmap</span>
      </h2>

      <div className="laravelroadmap-image">
        <img
          src={imageUrl}
          alt="Course roadmap"
        />
      </div>

    </section>
  );
}