import React from "react";
import "./CareerCTA.css";

const CareerCTA = () => {
  return (
    <section className="section career-cta-section">
      <div className="container-medium">
        <div className="cta-banner-wrapper">
          <div className="row align-items-center h-100">
            {/* Left Content */}
            <div className="col-lg-6 col-md-7 ps-lg-5">
              <div className="cta-content py-5">
                <h2 className="cta-title">
                  Ready to build your <br />
                  <span>overseas career!</span>
                </h2>
                <div className="mt-4">
                  <a
                    href="/contact-us"
                    className="btn btn-outline-light-custom"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side (Handled via CSS background image usually, or empty col) */}
            <div className="col-lg-6 col-md-5">
              {/* The background image is applied to the wrapper, so this is just for spacing if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;
