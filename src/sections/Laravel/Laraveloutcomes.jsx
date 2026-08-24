import React from "react";
import "./Laraveloutcomes.css";
import img1 from '../../assets/Laravel-images/10004.svg'
import img2 from '../../assets/Laravel-images/10005.svg'
import img3 from '../../assets/Laravel-images/100022.svg'
import img4 from '../../assets/Laravel-images/100066.svg'
import img5 from '../../assets/Laravel-images/10007.svg'
import img6 from '../../assets/Laravel-images/10008.svg'
import img7 from '../../assets/Laravel-images/10009.svg'
import img8 from '../../assets/Laravel-images/10010.svg'


const outcomes = [
  {
    image: img1,
    text: "Develop fully functional dynamic web applications independently",
  },
  {
    image: img2,
    text: "Build responsive, professional-grade user interfaces",
  },
  {
    image: img3,
    text: "Design secure backend systems using PHP & Laravel",
  },
  {
    image: img4,
    text: "Implement authentication and role-based access systems",
  },
  {
    image: img5,
    text: "Perform CRUD operations and manage real-world databases",
  },
  {
    image: img6,
    text: "Deploy live projects using hosting platforms and GitHub and create portfolio to apply for jobs",
  },
  {
    image: img7,
    text: "Qualify for roles such as Trainee Developer, Junior PHP Developer, Laravel Developer, or Backend Developer",
  },
  {
    image: img8,
    text: "Start freelancing and handle client-based web development projects",
  },
];

export default function LaravelOutcomes({ images = [img1,img2,img3,img4,img5,img6,img7,img8] }) {
  return (
    <div className="lo2-wrapper">
      <h2 className="lo2-heading">Learning Outcomes</h2>

      <div className="lo2-grid">
        {outcomes.map((item, i) => (
          <div className="lo2-card" key={i}>
            <div className="lo2-image">
              {images[i] ? (
                <img src={images[i]} alt={item.text} />
              ) : (
                <div className="lo2-image-placeholder"></div>
              )}
            </div>
            <div className="lo2-text">{item.text}</div>
            <div className="lo2-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
