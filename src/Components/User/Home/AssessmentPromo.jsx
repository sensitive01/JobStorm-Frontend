import React from "react";
import "./AssessmentPromo.css";
// Ensure the image path is correct relative to this file
import bannerImage from "../../../assets/images/bannerImage.png";

const AssessmentPromo = () => {
  return (
    <section className="section assessment-promo-section">
      <div className="container-medium">
        {/* Directly render the image as the banner content */}
        <div className="promo-img-full-wrapper">
          <img
            src={bannerImage}
            alt="Launching assessments on the app"
            className="img-fluid w-100 rounded-4"
          />
        </div>
      </div>
    </section>
  );
};

export default AssessmentPromo;
