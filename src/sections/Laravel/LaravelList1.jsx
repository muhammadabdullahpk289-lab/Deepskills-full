import React from "react";
import "./LaravelList1.css";

import img from "../../assets/Laravel-images/10002.svg";

export default function LaravelList1() {
  return (
    <section className="laravellist1-wrapper">

      <div className="laravellist1-header">

        <h2 className="laravellist1-heading">
          Instant{" "}
          <span className="laravellist1-highlight">
            Doubt Solving
          </span>
        </h2>

      </div>


      <div className="laravellist1-image">

        <img
          src={img}
          alt="Instant Doubt Solving"
        />

      </div>

    </section>
  );
}