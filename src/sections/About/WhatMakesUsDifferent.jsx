import "./WhatMakesUsDifferent.css";

import { FaCheckCircle, FaCheck } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "No complicated language",
    active: true,
  },
  {
    id: 2,
    title: "No unnecessary pressure",
    active: false,
  },
  {
    id: 3,
    title: "No complicated language",
    active: true,
  },
];

function WhatMakesUsDifferent() {
  return (
    <section className="differentSection" id="different">

      <div className="differentContainer">

        {/* Heading */}

        <div className="differentHeading">

          <h2>What Makes Us Different</h2>

          <p>We Care About Your Growth</p>

        </div>


        {/* Feature Cards */}

        <div className="differentFeatures">

          {features.map((feature) => (

            <div
              className={`differentCard ${
                feature.active
                  ? "differentCardRed"
                  : "differentCardDark"
              }`}
              key={feature.id}
            >

              <div className="differentIcon">

                {feature.active ? (
                  <FaCheckCircle />
                ) : (
                  <FaCheck />
                )}

              </div>

              <h3>{feature.title}</h3>

            </div>

          ))}

        </div>


        {/* Bottom Ribbon */}

        <div className="differentRibbon">

          <p>
            We focus on understanding, practice, and progress,
            so you feel confident at every step.
          </p>

        </div>

      </div>

    </section>
  );
}

export default WhatMakesUsDifferent;