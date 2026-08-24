import React from "react";
import "./LaravelCareer.css";

import leftimg from "../../assets/Laravel-images/10003.svg";
import { FaCheck } from "react-icons/fa";


const careerSteps = [
  "Trainee Web Developer",
  "Junior PHP / Laravel Developer",
  "Mid-Level Developer",
  "Senior Developer",
  "Tech Lead / Software Architect",
];


export default function LaravelCareer() {

  return (
    <section className="laravelcareer-section">

      <h2 className="laravelcareer-heading">
        Career Growth Path
      </h2>


      <div className="laravelcareer-container">

        {/* Left Image */}

        <div className="laravelcareer-left">

          <img
            src={leftimg}
            alt="Laravel Career Growth"
          />

        </div>


        {/* Right Career Steps */}

        <div className="laravelcareer-right">

          {careerSteps.map((step, index) => (

            <div
              className="laravelcareer-card"
              key={index}
            >

              <div className="laravelcareer-check">
                <FaCheck />
              </div>

              <span>{step}</span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}