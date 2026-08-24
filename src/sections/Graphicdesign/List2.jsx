import React from "react";
import "./List2.css";
import img from "../../assets/Graphicdesign-images/graphics-instant-banner.4309d852a374978f.svg";

export default function List2() {
  return (
    <section className="list2-wrapper">
      <div className="list2-header">
        <h2 className="list2-heading">
          Instant <span className="list2-highlight">Doubt Solving</span>
        </h2>
      </div>

      <div className="list2-image">
        <img src={img} alt="Instant Doubt Solving" />
      </div>
    </section>
  );
}