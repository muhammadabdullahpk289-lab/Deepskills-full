import React from "react";
import "./Mediawhychoose.css";
import img from '../../assets/Media-images/ds-tree.dd6d856656b6e72c.svg'

export default function MediaWhyChoose({ imageUrl = img }) {
  return (
    <div className="mediawhychoose-wrapper">
      <h2 className="mediawhychoose-heading">Why Choose DeepSkills</h2>
      <p className="mediawhychoose-subtext">
        Browse through our curated gallery showcasing student projects,
      </p>

      <div className="mediawhychoose-image">
        <img src={imageUrl} alt="Why choose DeepSkills" />
      </div>
    </div>
  );
}
