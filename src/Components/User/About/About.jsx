import React from "react";

const About = () => {
  return (
    <div>
      <div className="main-content">
        <div className="page-content">
          {/* Start home */}
          <section className="page-title-box">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="text-center text-white">
                    <h3 className="mb-4">About Us</h3>
                    <div className="page-next">
                      <nav
                        className="d-inline-block"
                        aria-label="breadcrumb text-center"
                      >
                        <ol className="breadcrumb justify-content-center">
                          <li className="breadcrumb-item">
                            <a href="/">Home</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="javascript:void(0)">Company</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            About Us
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end home */}

          {/* START SHAPE */}
          <div className="position-relative" style={{ zIndex: 1 }}>
            <div className="shape">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path
                  fill=""
                  fillOpacity={1}
                  d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                />
              </svg>
            </div>
          </div>
          {/* END SHAPE */}

          {/* START ABOUT */}
          <section className="section overflow-hidden">
            <div className="container">
              <div className="row align-items-center g-0">
                <div className="col-lg-6">
                  <div className="section-title me-lg-5">
                    <h6 className="sub-title">About Us</h6>
                    <h2 className="title mb-4">
                      Why{" "}
                      <span className="text-warning fw-bold">1,00,000+</span>{" "}
                      People Trust On JobsStorm?
                    </h2>
                    <p className="text-muted">
                      At Jobsstorm, we are committed to helping you unlock your
                      full career potential. As a global career partner, we
                      provide personalized support and resources for job seekers
                      and professionals worldwide.
                    </p>
                    <div className="row mt-4 pt-2">
                      <div className="col-md-6">
                        <ul className="list-unstyled about-list text-muted mb-0 mb-md-3">
                          <li>Global Career Solutions</li>
                          <li>Hiring Assist</li>
                          <li>Temporary Freelance Jobs</li>
                          <li>Featured Job Ads</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-unstyled about-list text-muted">
                          <li>Career Guidance</li>
                          <li>Employee Engagement</li>
                          <li>Talent Acquisition</li>
                          <li>Career Consulting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-3">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-primary btn-hover"
                      >
                        Learn More{" "}
                        <i className="uil uil-angle-right-b align-middle" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-img mt-4 mt-lg-0">
                    <img
                      src="assets/images/about/img-01.jpg"
                      alt=""
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* END ABOUT */}

          {/* COUNTER START */}
          <section className="section bg-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="counter-box mt-3">
                    <div className="counters text-center">
                      <h5 className="counter mb-0">10,000+</h5>
                      <h6 className="fs-16 mt-3">Available Jobs</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter-box mt-3">
                    <div className="counters text-center">
                      <h5 className="counter mb-0">7500+</h5>
                      <h6 className="fs-16 mt-3">Applications</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter-box mt-3">
                    <div className="counters text-center">
                      <h5 className="counter mb-0">8.85K</h5>
                      <h6 className="fs-16 mt-3">Positive Feedback</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter-box mt-3">
                    <div className="counters text-center">
                      <h5 className="counter mb-0">9875</h5>
                      <h6 className="fs-16 mt-3">Members</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* COUNTER END */}

          {/* START feature */}
          <section className="section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="section-title text-center mb-5">
                    <h3 className="title mb-4">Key Features</h3>
                    <p className="para-desc text-muted mx-auto">
                      Start working with JobsStorm that can provide everything
                      you need to generate awareness, drive traffic, connect.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="about-feature p-3 d-flex align-items-center rounded-3">
                    <div className="featrue-icon flex-shrink-0">
                      <i className="uim uim-object-ungroup" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="fs-18 mb-0">Manage Job Ads</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="about-feature p-3 d-flex align-items-center rounded-3">
                    <div className="featrue-icon flex-shrink-0">
                      <i className="uim uim-telegram-alt" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="fs-18 mb-0">Create CV</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="about-feature p-3 d-flex align-items-center rounded-3">
                    <div className="featrue-icon flex-shrink-0">
                      <i className="uim uim-lock-access" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="fs-18 mb-0">Privacy Policy</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="about-feature p-3 d-flex align-items-center rounded-3">
                    <div className="featrue-icon flex-shrink-0">
                      <i className="uim uim-user-md" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="fs-18 mb-0">Recruiter Profiles</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="about-feature p-3 d-flex align-items-center rounded-3">
                    <div className="featrue-icon flex-shrink-0">
                      <i className="uim uim-airplay" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="fs-18 mb-0">Display Jobs</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="about-feature p-3 d-flex align-items-center rounded-3">
                    <div className="featrue-icon flex-shrink-0">
                      <i className="uim uim-rocket" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="fs-18 mb-0">For Agencies</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="about-feature p-3 d-flex align-items-center rounded-3">
                    <div className="featrue-icon flex-shrink-0">
                      <i className="uim uim-history" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="fs-18 mb-0">Quick Support</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="about-feature p-3 d-flex align-items-center rounded-3">
                    <div className="featrue-icon flex-shrink-0">
                      <i className="uim uim-bookmark" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="fs-18 mb-0">Bookmark Jobs</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="about-feature p-3 d-flex align-items-center rounded-3">
                    <div className="featrue-icon flex-shrink-0">
                      <i className="uim uim-graph-bar" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="fs-18 mb-0">Real-time Analytics</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* END feature */}

          {/*START CTA*/}
          <section className="section bg-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="section-title text-center">
                  <h3 className="title mb-4 pb-2">
                    See everything about your employee at one place.
                  </h3>
                  <p className="para-desc text-muted mx-auto">
                    Start working with JobsStorm that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                  <div className="mt-4">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary btn-hover mt-2"
                    >
                      <i className="uil uil-rocket me-1" /> Get Started Now
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-outline-primary btn-hover ms-sm-1 mt-2"
                    >
                      <i className="uil uil-capsule me-1" /> Free Trial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*END CTA*/}

          {/* COMPANY TESTIMONIAL START */}
          <section className="section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="section-title mb-5 mb-lg-0">
                    <h4 className="title mb-4">Company Testimonial</h4>
                    <p className="text-muted">
                      Our task must be to free ourselves by widening our circle
                      of compassion to embrace all living creatures Integer
                      varius lacus non magna tempor congue natuasre the whole
                      its beauty you vestibulum egestas them feel.
                    </p>
                    <ul className="list-unstyled about-list text-muted mt-4">
                      <li>Digital Marketing Solutions for Tomorrow.</li>
                      <li>Our Talented &amp; Experienced Marketing Agency.</li>
                      <li>Create your own skin to match your brand.</li>
                      <li>
                        {" "}
                        It is said that song composers of the past used texts.
                      </li>
                    </ul>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <div>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-outline-primary"
                        >
                          Learn More{" "}
                          <i className="uil uil-angle-right-b ms-1" />
                        </a>
                      </div>
                      <ul className="list-inline about-social-menu mb-0">
                        <li className="list-inline-item">
                          <a
                            href="https://facebook.com/jobsstorm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="uil uil-facebook-f" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="https://x.com/jobsstorm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="uil uil-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="https://linkedin.com/company/jobsstorm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="uil uil-linkedin" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="https://instagram.com/jobsstorm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="uil uil-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-md-3">
                      <div
                        className="about-testimonial-menu nav flex-sm-column flex-row nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <a
                          href="#v-pills-home"
                          className="nav-link active"
                          id="v-pills-home-tab"
                          data-bs-toggle="pill"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                        >
                          <div className="position-relative">
                            <img
                              src="assets/images/about/img-02.jpg"
                              alt=""
                              className="rounded"
                            />
                            <div className="about-testi-bg-overlay">
                              <i className="mdi mdi-plus-circle-outline text-white fs-3" />
                            </div>
                          </div>
                        </a>
                        <a
                          href="#v-pills-profile"
                          className="nav-link"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          <div className="position-relative">
                            <img
                              src="assets/images/about/img-03.jpg"
                              alt=""
                              className="rounded"
                            />
                            <div className="about-testi-bg-overlay">
                              <i className="mdi mdi-plus-circle-outline text-white fs-3" />
                            </div>
                          </div>
                        </a>
                        <a
                          href="#v-pills-messages"
                          className="nav-link"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          <div className="position-relative">
                            <img
                              src="assets/images/about/img-04.jpg"
                              alt=""
                              className="rounded"
                            />
                            <div className="about-testi-bg-overlay">
                              <i className="mdi mdi-plus-circle-outline text-white fs-3" />
                            </div>
                          </div>
                        </a>
                        <a
                          href="#v-pills-settings"
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          <div className="position-relative">
                            <img
                              src="assets/images/about/img-05.jpg"
                              alt=""
                              className="rounded"
                            />
                            <div className="about-testi-bg-overlay">
                              <i className="mdi mdi-plus-circle-outline text-white fs-3" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div
                        className="tab-content about-tab-content h-100"
                        id="v-pills-tabContent"
                      >
                        <div
                          className="tab-pane fade rounded-3 show active"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                          style={{
                            backgroundImage:
                              'url("assets/images/about/img-02.jpg")',
                          }}
                        ></div>
                        <div
                          className="tab-pane fade rounded-3"
                          id="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                          style={{
                            backgroundImage:
                              'url("assets/images/about/img-03.jpg")',
                          }}
                        />
                        <div
                          className="tab-pane fade rounded-3"
                          id="v-pills-messages"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                          style={{
                            backgroundImage:
                              'url("assets/images/about/img-04.jpg")',
                          }}
                        />
                        <div
                          className="tab-pane fade rounded-3"
                          id="v-pills-settings"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                          style={{
                            backgroundImage:
                              'url("assets/images/about/img-05.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* COMPANY TESTIMONIAL END */}
        </div>
      </div>
    </div>
  );
};

export default About;
