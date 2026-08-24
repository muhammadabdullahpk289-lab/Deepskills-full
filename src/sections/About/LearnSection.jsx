import "./LearnSection.css";

import whatcard1 from "../../assets/About-images/whatcard1.svg";
import whatcard2 from "../../assets/About-images/whatcard2.svg";
import whatcard3 from "../../assets/About-images/whatcard3.svg";
import whatcard4 from "../../assets/About-images/whatcard4.svg";

const courses = [
  {
    id: "01",
    title: "Graphic Design",
    image: whatcard1,
    alt: "Course module 1",
  },
  {
    id: "02",
    title: "Full Stack Web Development (PHP & Laravel)",
    image: whatcard2,
    alt: "Course module 2",
  },
  {
    id: "03",
    title: "Full Stack Web Development (React)",
    image: whatcard3,
    alt: "Course module 3",
  },
  {
    id: "04",
    title: "WordPress Web Development with Elementor",
    image: whatcard4,
    alt: "Course module 4",
  },
];

function LearnSection() {
  return (
    <section
      className="learnSection"
      id="what-you-learn"
    >
      <div className="learnOverlay"></div>

      <div className="learnContent">

        <div className="learnHeading">
          <h2>What You'll Learn at Deepskills</h2>

          <p className="learnSubtitle">
            Learning That Makes Sense
          </p>
        </div>

        <div className="learnGrid">
          {courses.map((course) => (
            <div className="learnCard" key={course.id}>
              <div className="learnCardGlow"></div>

              <img
                src={course.image}
                alt={course.alt}
                className="learnCardImg"
              />
            </div>
          ))}
        </div>

        <div className="learnRibbon">
          <p>
            Each course focuses on real projects, real skills, and real confidence.
          </p>
        </div>

      </div>
    </section>
  );
}

export default LearnSection;