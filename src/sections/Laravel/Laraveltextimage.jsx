import React from "react";
import "./Laraveltextimage.css";
import img from '../../assets/Laravel-images/10001.svg'

function LaravelTextImage() {
  return (
    <section className="laravel-text-image">

      {/* TOP TEXT */}
      <div className="laravel-text">

        <h2>
          <span>Projects You Will Build</span>
        </h2>

      </div>


      {/* BOTTOM IMAGE */}
      <div className="laravel-image">

        <img
          src={img}
          alt="Laravel Development"
        />

      </div>

    </section>
  );
}

export default LaravelTextImage;