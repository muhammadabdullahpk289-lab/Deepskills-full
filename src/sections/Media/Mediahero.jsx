import React from "react";
import "./Mediahero.css";

export default function MediaHero() {
  return (
    <div className="mediahero-wrapper">
      <div className="mediahero-topbar"></div>

      <h1 className="mediahero-heading">DeepSkills Media</h1>
      <p className="mediahero-subtext">
        Welcome to the DeepSkill Media Page! Here, you can explore our latest
        updates, student projects, and tutorials in web development. Stay
        inspired and learn from our community through images, videos, and
        news updates.
      </p>
    </div>
  );
}