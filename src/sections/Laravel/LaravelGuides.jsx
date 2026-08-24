import React from "react";
import "./LaravelGuides.css";

const guides = [
  {
    title: "Why Project Based Learning Works Better",
    meta: "Laravel · 2 min read",
  },
  {
    title: "Laravel Skills Every Backend Developer Should Know",
    meta: "Laravel · 3 min read",
  },
  {
    title: "How to Choose Between React and Laravel",
    meta: "Laravel · 2 min read",
  },
];

export default function LaravelGuides() {
  return (
    <div className="lg-wrapper">
      <div className="lg-label">FROM THE BLOG</div>

      <h2 className="lg-heading">Related Guides</h2>

      <div className="lg-grid">
        {guides.map((g, i) => (
          <div className="lg-card" key={i}>
            <h3 className="lg-title">{g.title}</h3>

            <div className="lg-meta">{g.meta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}