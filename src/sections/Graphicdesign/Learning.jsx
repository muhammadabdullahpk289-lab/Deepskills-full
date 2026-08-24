import React from "react";
import "./Learning.css";
import cd1 from '../../assets/Graphicdesign-images/100023.svg'
import cd2 from '../../assets/Graphicdesign-images/100013.svg'
import cd3 from '../../assets/Graphicdesign-images/100012.svg'
import cd4 from '../../assets/Graphicdesign-images/10002.svg'
import cd5 from '../../assets/Graphicdesign-images/10003.svg'
import cd6 from '../../assets/Graphicdesign-images/10004.svg'
import cd7 from '../../assets/Graphicdesign-images/100022.svg'


const outcomes = [
  {
    image: cd1,
    text: "Design professional logos and brand identities independently",
  },
  {
    image: cd2,
    text: "Create high-quality social media and marketing creatives",
  },
  {
    image: cd3,
    text: "Perform advanced photo editing and manipulation",
  },
  {
    image: cd4,
    text: "Design complete website and mobile app interfaces",
  },
  {
    image: cd5,
    text: "Build a strong, portfolio-ready project collection",
  },
  {
    image: cd6,
    text: "Qualify for roles such as Graphic, Visual, UI or Social Media Designer",
  },
  {
    image: cd7,
    text: "Start freelancing and handle real client projects confidently",
  },
];

export default function LearningOutcomes({ images = [cd1,cd2,cd3,cd4,cd5,cd6,cd7] }) {
  return (
    <div className="lo-wrapper">
      <h2 className="lo-heading">Learning outcomes</h2>

      <div className="lo-grid">
        {outcomes.map((item, i) => (
          <div className="lo-card" key={i}>
            <div className="lo-image">
              {images[i] ? (
                <img src={images[i]} alt={item.text} />
              ) : (
                <div className="lo-image-placeholder"></div>
              )}
            </div>
            <div className="lo-text">{item.text}</div>
            <div className="lo-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
}