import "./Mission.css";
import missionBg from "../../assets/About-images/mission-bg.png";
import missionCard1 from "../../assets/About-images/mission-card1.png";
import missionCard2 from "../../assets/About-images/mission-card2.png";

const missionCards = [
  {
    id: 1,
    image: missionCard1,
    alt: "Mission Steps 01 and 02",
  },
  {
    id: 2,
    image: missionCard2,
    alt: "Mission Steps 03 and 04",
  },
];

function Mission() {
  return (
    <section
      id="mission"
      className="missionSection"
      style={{
        backgroundImage: `url(${missionBg})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="missionContainer">

        {/* Heading */}

        <div className="missionHeading">

          <h2>OUR MISSION</h2>

          <p>Making Learning Skills Simple and Powerful</p>

        </div>

        {/* Mission Image Cards */}

        <div className="missionCardsWrap">

          <div className="missionCardsRow">

            {missionCards.map((item) => (

              <div className="missionImageCard" key={item.id}>

                <img
                  src={item.image}
                  alt={item.alt}
                  className="missionImage"
                />

              </div>

            ))}

          </div>

        </div>

        {/* Button */}

        <div className="missionButtonWrap">

          <button
            type="button"
            className="missionButton"
            tabIndex="0"
          >
            <span>Inquire Now</span>
          </button>

        </div>

      </div>
    </section>
  );
}

export default Mission;