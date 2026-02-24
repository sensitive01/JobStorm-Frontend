import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Resources = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="page-content">
          <section className="section pb-4">
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center mt-5">
                  <h1 className="fw-bold mb-3">Resources Hub</h1>
                  <p className="text-muted fs-18">
                    Discover essential tools, templates, and expert guides to
                    accelerate your career growth and help you land your dream
                    job faster.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section pt-4">
            <div className="container">
              <div className="row g-4">
                {/* Resource Category 1 */}
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow-sm border-0 resource-card transition-all">
                    <div className="card-body p-4 text-center">
                      <div className="mb-4 d-inline-block p-3 bg-primary bg-opacity-10 rounded-circle text-primary">
                        <i className="mdi mdi-file-document-outline fs-1"></i>
                      </div>
                      <h4 className="mb-3">Resume Templates & Guides</h4>
                      <p className="text-muted mb-4">
                        Download ATS-friendly resume templates and learn how to
                        write bullet points that actually land interviews.
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-outline-primary w-100"
                      >
                        Explore Templates
                      </a>
                    </div>
                  </div>
                </div>

                {/* Resource Category 2 */}
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow-sm border-0 resource-card transition-all">
                    <div className="card-body p-4 text-center">
                      <div className="mb-4 d-inline-block p-3 bg-success bg-opacity-10 rounded-circle text-success">
                        <i className="mdi mdi-account-voice fs-1"></i>
                      </div>
                      <h4 className="mb-3">Interview Preparation</h4>
                      <p className="text-muted mb-4">
                        Master the STAR method, practice common behavioral
                        questions, and learn how to negotiate your offer.
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-outline-success w-100"
                      >
                        Start Practicing
                      </a>
                    </div>
                  </div>
                </div>

                {/* Resource Category 3 */}
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow-sm border-0 resource-card transition-all">
                    <div className="card-body p-4 text-center">
                      <div className="mb-4 d-inline-block p-3 bg-warning bg-opacity-10 rounded-circle text-warning">
                        <i className="mdi mdi-chart-line fs-1"></i>
                      </div>
                      <h4 className="mb-3">Salary Insights</h4>
                      <p className="text-muted mb-4">
                        Discover true market rates for your role, experience
                        level, and location to ensure you're paid what you're
                        worth.
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-outline-warning w-100"
                      >
                        Check Salaries
                      </a>
                    </div>
                  </div>
                </div>

                {/* Resource Category 4 */}
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow-sm border-0 resource-card transition-all">
                    <div className="card-body p-4 text-center">
                      <div className="mb-4 d-inline-block p-3 bg-info bg-opacity-10 rounded-circle text-info">
                        <i className="mdi mdi-transit-connection-variant fs-1"></i>
                      </div>
                      <h4 className="mb-3">Career Pathing</h4>
                      <p className="text-muted mb-4">
                        Unsure what's next? Map out your long-term career
                        trajectory based on your skills and interests.
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-outline-info w-100"
                      >
                        Explore Paths
                      </a>
                    </div>
                  </div>
                </div>

                {/* Resource Category 5 */}
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow-sm border-0 resource-card transition-all">
                    <div className="card-body p-4 text-center">
                      <div className="mb-4 d-inline-block p-3 bg-danger bg-opacity-10 rounded-circle text-danger">
                        <i className="mdi mdi-play-circle-outline fs-1"></i>
                      </div>
                      <h4 className="mb-3">Skill Assessment Tests</h4>
                      <p className="text-muted mb-4">
                        Take industry-standard tests to prove your proficiency
                        to employers and earn verified badges.
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-outline-danger w-100"
                      >
                        Take a Test
                      </a>
                    </div>
                  </div>
                </div>

                {/* Resource Category 6 */}
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow-sm border-0 bg-dark text-white resource-card transition-all">
                    <div className="card-body p-4 text-center d-flex flex-column justify-content-center">
                      <div className="mb-4 d-inline-block p-3 bg-white bg-opacity-10 rounded-circle text-white">
                        <i className="mdi mdi-email-newsletter fs-1"></i>
                      </div>
                      <h4 className="mb-3 text-white">
                        Weekly Career Insights
                      </h4>
                      <p className="text-light opacity-75 mb-4">
                        Join 50,000+ professionals getting the best job hunting
                        tips delivered straight to their inbox.
                      </p>
                      <div className="input-group mt-auto">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email address..."
                        />
                        <button className="btn btn-primary" type="button">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Article Section */}
          <section className="section bg-light mt-5 pb-5">
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <span className="badge bg-primary-subtle text-primary mb-3 p-2">
                    Featured Read
                  </span>
                  <h2 className="fw-bold mb-4">
                    How to bypass the ATS and get your resume read by a human
                  </h2>
                  <p className="text-muted fs-16 mb-4">
                    The Applicant Tracking System (ATS) is the biggest hurdle
                    for modern job seekers. We break down the exact formatting
                    rules, keyword targeting strategies, and submission tactics
                    you need to guarantee your application actually reaches the
                    hiring manager's desk.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-primary px-4 py-2"
                  >
                    Read Full Article{" "}
                    <i className="mdi mdi-arrow-right ms-2"></i>
                  </a>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <div className="position-relative rounded-4 overflow-hidden shadow-lg p-5 bg-white text-center">
                    <i
                      className="mdi mdi-file-search-outline text-primary opacity-25"
                      style={{ fontSize: "120px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Resources;
