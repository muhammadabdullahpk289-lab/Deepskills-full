import "./CareerPath.css";
import careerImage from "../../assets/Graphicdesign-images/graphic-path.e29c34bd7b6cd210.svg";

function CareerPath() {
  let careers = [
    {
      number: "01",
      title: "Junior Graphic Designer",
    },
    {
      number: "02",
      title: "Graphic Designer",
    },
    {
      number: "03",
      title: "Senior Designer",
    },
    {
      number: "04",
      title: "UI/UX Designer",
    },
    {
      number: "05",
      title: "Creative Lead / Art Director",
    },
  ];

  return (
    <section className="career-section">

      <h2 className="career-heading">
        Career Growth Path
      </h2>

      <div className="career-container">

        {/* LEFT IMAGE */}
        <div className="career-image-box">
          <img
            src={careerImage}
            alt="Career Growth"
            className="career-image"
          />
        </div>

        {/* RIGHT CARDS */}
        <div className="career-cards">

          {careers.map((career) => (
            <div className="career-card" key={career.number}>

              <div className="career-line"></div>

              <div className="career-content">
                <span className="career-number">
                  {career.number}
                </span>

                <h3>{career.title}</h3>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default CareerPath;