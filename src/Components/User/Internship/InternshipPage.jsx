import React from "react";
import "./InternshipPage.css";
import bannerImage from "../../../assets/images/bannerImage.png";

const InternshipPage = () => {
  return (
    <div className="internship-page">
      {/* 1. Hero Section */}
      <section className="internship-hero">
        <div className="container">
          <span className="badge-pill">
            ✨ #Learn by Working on with top giants
          </span>
          <h1>
            Internships That Lead to{" "}
            <span style={{ color: "#4c1d95" }}>Real Careers</span>
          </h1>
          <p className="subtitle">
            Never Miss a Opportunity, Go Global with Jobsstorm
          </p>

          <div className="hero-collage mt-5">
            {/* Image 0 placeholder */}
            <img
              src="https://via.placeholder.com/1000x500"
              alt="Internship Hero Main"
              className="img-fluid rounded-4 shadow-lg w-100"
            />
          </div>
        </div>
      </section>

      {/* 2. Positions Section */}
      <section className="open-positions-section">
        <div className="container">
          <div className="positions-header text-center">
            <div className="tabs">
              <button className="active">Domestic Internship</button>
              <button>International Internship</button>
              <button>Our Internship Process</button>
            </div>
            <h2 className="mt-5 fw-bold">We have 20 open positions now !</h2>
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="sticky-top" style={{ top: "100px" }}>
                <h5 className="mb-3 fw-bold ps-3 border-start border-4 border-primary">
                  All positions (17)
                </h5>
                <ul className="position-filter-list">
                  <li>Engineering (7)</li>
                  <li>Product (3)</li>
                  <li>Design (1)</li>
                  <li>Operation (4)</li>
                  <li>Marketing (2)</li>
                </ul>
                <div className="mt-5 p-4 bg-light rounded-4">
                  <p className="text-muted small mb-3">
                    We are always seeking talented people. In case you cannot
                    find your desired position here, please send us your
                    LinkedIn profile.
                  </p>
                  <button className="btn btn-outline-dark btn-sm rounded-pill w-100">
                    Share your LinkedIn profile
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              {/* Job Items */}
              <div className="job-item">
                <h3>Full-Stack Developers</h3>
                <div className="tags mb-3">
                  <span className="badge-outline">Tartu</span>
                  <span className="badge-outline">Full-time</span>
                  <span className="badge-outline">Dubai</span>
                </div>
                <p className="text-secondary mb-4">
                  Due to growing workload, we are looking for experienced and
                  talented Full-Stack Developers to join our fast-paced
                  Engineering team. You will work closely with Product, Design
                  and Marketing to analyze, develop, debug, test, roll-out and
                  support new and existing product features.
                </p>
                <div className="text-end">
                  <button className="btn btn-black">
                    See positions <i className="mdi mdi-arrow-right"></i>
                  </button>
                </div>
              </div>

              <div className="job-item">
                <h3>Application developer (react native)</h3>
                <div className="tags mb-3">
                  <span className="badge-outline">Tartu</span>
                  <span className="badge-outline">Full-time</span>
                  <span className="badge-outline">Malaysia</span>
                </div>
                <p className="text-secondary mb-4">
                  Due to growing workload, we are looking for experienced and
                  talented Full-Stack Developers to join our fast-paced
                  Engineering team. You will work closely with Product, Design
                  and Marketing to analyze, develop, debug, test, roll-out and
                  support new and existing product features.
                </p>
                <div className="text-end">
                  <button className="btn btn-black">
                    See positions <i className="mdi mdi-arrow-right"></i>
                  </button>
                </div>
              </div>

              <div className="job-item">
                <h3>Application developer (react native)</h3>
                <div className="tags mb-3">
                  <span className="badge-outline">Tartu</span>
                  <span className="badge-outline">Full-time</span>
                  <span className="badge-outline">Singapore</span>
                </div>
                <p className="text-secondary mb-4">
                  Due to growing workload, we are looking for experienced and
                  talented Full-Stack Developers to join our fast-paced
                  Engineering team. You will work closely with Product, Design
                  and Marketing to analyze, develop, debug, test, roll-out and
                  support new and existing product features.
                </p>
                <div className="text-end">
                  <button className="btn btn-black">
                    See positions <i className="mdi mdi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Gallery Section */}
      <section className="gallery-section py-5">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">
            Take a peep at what goes on at Jobsstorm!
          </h2>
          <div className="row g-3">
            <div className="col-md-8">
              {/* Image 2 Placeholder big */}
              <img
                src="https://via.placeholder.com/800x500"
                className="w-100 h-100 object-fit-cover rounded-4"
                alt="Office Life 1"
              />
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column gap-3 h-100">
                {/* Image 2 stack */}
                <img
                  src="https://via.placeholder.com/400x240"
                  className="w-100 h-50 object-fit-cover rounded-4"
                  alt="Office Life 2"
                />
                <img
                  src="https://via.placeholder.com/400x240"
                  className="w-100 h-50 object-fit-cover rounded-4"
                  alt="Office Life 3"
                />
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/400x300"
                className="w-100 h-100 object-fit-cover rounded-4"
                alt="Office Life 4"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/400x300"
                className="w-100 h-100 object-fit-cover rounded-4"
                alt="Office Life 5"
              />
            </div>
            <div className="col-md-4">
              <div className="bg-light h-100 rounded-4 d-flex align-items-center justify-content-center p-4">
                <div className="text-start">
                  <h4>Explore more</h4>
                  <i className="mdi mdi-arrow-right fs-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="testimonial-section bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Don't just take our word for it!</h2>
            <p className="text-secondary">
              See the feedback from your teammates.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm overflow-hidden rounded-4">
                <div className="row g-0">
                  <div className="col-md-5">
                    {/* Testimonial Image 3 Placeholder */}
                    <img
                      src="https://via.placeholder.com/400x500"
                      className="w-100 h-100 object-fit-cover"
                      alt="Testimonial User"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body p-5 d-flex flex-column justify-content-center h-100">
                      <span
                        className="display-1 text-secondary opacity-25"
                        style={{ lineHeight: 0, marginBottom: "30px" }}
                      >
                        ❝
                      </span>
                      <p className="card-text fs-5 mb-4">
                        I joined the internship program through JobsStorm with
                        the aim of gaining real industry exposure. The guidance
                        was very structured and practical, especially in CV
                        optimization and interview preparation. After completing
                        my internship phase, I was successfully placed in a
                        Dubai-based IT role.
                      </p>
                      <div>
                        <h5 className="card-title fw-bold mb-0">
                          Dhanush Mohanraj
                        </h5>
                        <small className="text-muted">Product Designer</small>
                      </div>
                      <div className="mt-3">
                        <button className="btn btn-sm btn-primary">
                          <i className="mdi mdi-linkedin"></i> LinkedIn profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4 px-2">
                <span className="text-muted">1/4 Testimonials</span>
                <button className="btn btn-link text-dark text-decoration-none fw-bold">
                  Next <i className="mdi mdi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Banner Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="d-block w-100">
            {/* The banner from Learning page */}
            <img
              src={bannerImage}
              alt="App Banner"
              className="w-100 rounded-4"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipPage;
