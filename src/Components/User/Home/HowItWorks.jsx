import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="section how-it-works-section">
      <div className="container-medium">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-lg-6">
            <h6 className="sub-title text-purple text-uppercase mb-3">
              How It Works
            </h6>
            <h2 className="title fw-bold mb-4">
              A Step-by-Step <br /> Guide to Jobsstorm
            </h2>
            <p className="description text-muted mb-5">
              Sed placerat convallis aenean fermentum. Aliquet, eget feugiat sed
              consectetur sodales eleifend.
            </p>

            <div className="steps-container">
              {/* Step 1 */}
              <div className="step-item d-flex">
                <div className="step-number text-purple fw-bold me-4">01</div>
                <div className="step-content">
                  <h5 className="step-title text-purple fw-bold">
                    Explore Opportunities
                  </h5>
                  <p className="text-muted">
                    Dapibus sagittis porta lorem nibh consequat nibh diam id
                    pharetra velit urna magna.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-item d-flex mt-4">
                <div className="step-number fw-bold me-4">02</div>
                <div className="step-content">
                  <h5 className="step-title fw-bold">Apply with Ease</h5>
                  <p className="text-muted">
                    Dapibus sagittis porta lorem nibh consequat nibh diam id
                    pharetra velit urna magna.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-item d-flex mt-4">
                <div className="step-number fw-bold me-4">03</div>
                <div className="step-content">
                  <h5 className="step-title fw-bold">Connect and Thrive</h5>
                  <p className="text-muted">
                    Dapibus sagittis porta lorem nibh consequat nibh diam id
                    pharetra velit urna magna.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image Box */}
          <div className="col-lg-6 position-relative">
            <img
              src="/assets/images/generated/job_service_concept_jobstorm.png"
              alt="How Jobsstorm Works"
              className="how-it-works-img img-fluid rounded"
            />

            {/* Experience Badge */}
            <div className="experience-badge">
              <span className="years fw-bold">15+</span>
              <span className="text">
                Years of <br /> Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
