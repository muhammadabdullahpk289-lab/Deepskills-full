import "./WhoFor.css";

import {
  FaCompass,
  FaGlobe,
  FaChartBar,
  FaBook,
} from "react-icons/fa";

const audience = [
  {
    icon: <FaCompass />,
    text: "A student exploring career options",
  },
  {
    icon: <FaGlobe />,
    text: "A beginner who wants to learn from scratch",
  },
  {
    icon: <FaChartBar />,
    text: "A young adult looking for practical skills",
  },
  {
    icon: <FaBook />,
    text: "Someone who wants to work, freelance, or grow online",
  },
];

function WhoFor() {
  return (
    <section className="whoFor" id="who-it-is-for">

      <div className="whoForContainer">

        <div className="whoForHeading">

          <h2>WHO DEEPSKILLS IS FOR ?</h2>

          <p className="whoSubtitle">
            This Place Is for You If You Are:
          </p>

        </div>

        <div className="whoGrid">

          {audience.map((item, index) => (
            <div className="whoItem" key={index}>

              <div className="whoIcon">
                {item.icon}
              </div>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhoFor;