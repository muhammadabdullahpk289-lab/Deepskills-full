import "./HowWeTeach.css";

import {
  FaBrain,
  FaTools,
  FaRoute,
  FaCheckCircle,
} from "react-icons/fa";

const cards = [
  {
    id: 1,
    icon: <FaBrain />,
    title: "Easy to understand",
  },
  {
    id: 2,
    icon: <FaTools />,
    title: "Practical and hands-on",
  },
  {
    id: 3,
    icon: <FaRoute />,
    title: "Step-by-step",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "Stress-free for beginners",
  },
];

function HowWeTeach() {
  return (
    <section
      id="how-we-teach"
      className="teachSection"
    >
      <div className="teachOverlay">

        {/* Heading */}

        <div className="teachHeading">

          <h2>How We Teach</h2>

          <p className="teachSubHeading">
            Learning That Makes Sense
          </p>

          <div className="teachTag">
            <p>At Deepskills, we believe learning should be</p>
          </div>

        </div>

        {/* Cards */}

        <div className="teachCards">

          {cards.map((card) => (
            <div className="teachCard" key={card.id}>

              <div className="teachCardTop">
                {card.icon}
              </div>

              <div className="teachCardBottom">
                <p>{card.title}</p>
              </div>

            </div>
          ))}

        </div>

        {/* Footer */}

        <p className="teachFooter">
          You don't need to be "good at tech" to start — we help you
          grow from zero to confident.
        </p>

      </div>
    </section>
  );
}

export default HowWeTeach;