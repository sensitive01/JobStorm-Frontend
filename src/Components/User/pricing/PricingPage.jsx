import React from "react";

const PricingPage = () => {
  return (
    <>
      <div>
        {/* START SIGN-UP MODAL */}
        <div
          className="modal fade"
          id="signupModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-5">
                <div className="position-absolute end-0 top-0 p-3">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="auth-content">
                  <div className="w-100">
                    <div className="text-center mb-4">
                      <h5>Sign Up</h5>
                      <p className="text-muted">
                        Sign Up and get access to all the features of JobsStorm
                      </p>
                    </div>
                    <form action="#" className="auth-form">
                      <div className="mb-3">
                        <label htmlFor="usernameInput" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="usernameInput"
                          placeholder="Enter your username"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="passwordInput" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="emailInput"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="passwordInput"
                          placeholder="Password"
                        />
                      </div>
                      <div className="mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            I agree to the{" "}
                            <a
                              href="javascript:void(0)"
                              className="text-primary form-text text-decoration-underline"
                            >
                              Terms and conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary w-100">
                          Sign Up
                        </button>
                      </div>
                    </form>
                    <div className="mt-3 text-center">
                      <p className="mb-0">
                        Already a member ?{" "}
                        <a
                          href="sign-in.html"
                          className="form-text text-primary text-decoration-underline"
                        >
                          {" "}
                          Sign-in{" "}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*end modal-body*/}
            </div>
            {/*end modal-content*/}
          </div>
          {/*end modal-dialog*/}
        </div>
        {/* END SIGN-UP MODAL */}
        <div className="main-content">
          <div className="page-content">
            {/* Start home */}
            <section className="page-title-box">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="text-center text-white">
                      <h3 className="mb-4">Pricing</h3>
                      <div className="page-next">
                        <nav
                          className="d-inline-block"
                          aria-label="breadcrumb text-center"
                        >
                          <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item">
                              <a href="index-2.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="javascript:void(0)">Company</a>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              {" "}
                              Pricing{" "}
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
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
            {/* START PRICING */}
            <section className="section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="text-center">
                      <span className="badge warning-bg-subtle  fs-15 mb-2">
                        Choose Your Plan
                      </span>
                      <h3>Save up to 15%</h3>
                      <p className="text-muted">
                        The faster, most seamless CI &amp; development you'll
                        find anywhere.
                      </p>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row">
                  <div className="col-lg-4 col-md-6 mt-5 pt-2">
                    <div className="pricing-box card bg-light">
                      <div className="card-body p-4 px-lg-5">
                        <div className="pricing-icon bg-light rounded-circle icons-md">
                          <i className="uim uim-telegram-alt" />
                        </div>
                        <div className="pricing-name text-center mt-4 pt-2">
                          <h4 className="fs-18">Starter</h4>
                        </div>
                        <div className="pricing-price text-center mt-4">
                          <h2 className="fw-semibold">
                            $35.99<small className="fs-16">/mo</small>
                          </h2>
                        </div>
                        <ul className="list-unstyled pricing-details text-muted mt-4">
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Unlimited file recovery
                          </li>
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Professional reports
                          </li>
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Sell on marketplaces
                          </li>
                          <li className="pricing-item text-decoration-line-through">
                            <i className="mdi mdi-close-thick bg-soft-muted me-2" />{" "}
                            Unlimited Builds
                          </li>
                          <li className="pricing-item text-decoration-line-through">
                            <i className="mdi mdi-close-thick bg-soft-muted me-2" />{" "}
                            Job displayed for 30 days
                          </li>
                          <li className="pricing-item text-decoration-line-through">
                            <i className="mdi mdi-close-thick bg-soft-muted me-2" />{" "}
                            Premium Support 24/7
                          </li>
                        </ul>
                        <div className="text-center mt-4 mb-2">
                          <a
                            href="javascript:void(0)"
                            className="btn btn-soft-primary rounded-pill"
                          >
                            Purchase Now <i className="uil uil-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end pricing-box*/}
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-6 mt-5 pt-2">
                    <div className="pricing-box card bg-light">
                      <div className="card-body p-4 px-lg-5">
                        <div className="pricing-icon bg-light rounded-circle icons-md">
                          <i className="uim uim-rocket" />
                        </div>
                        <div className="pricing-name text-center mt-4 pt-2">
                          <h4 className="fs-18">Professional</h4>
                        </div>
                        <div className="pricing-price text-center mt-4">
                          <h2 className="fw-semibold">
                            $49.99<small className="fs-16">/mo</small>
                          </h2>
                        </div>
                        <ul className="list-unstyled pricing-details text-muted mt-4">
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Unlimited file recovery
                          </li>
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Professional reports
                          </li>
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Sell on marketplaces
                          </li>
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Unlimited Builds
                          </li>
                          <li className="pricing-item text-decoration-line-through">
                            <i className="mdi mdi-close-thick bg-soft-muted me-2" />{" "}
                            Job displayed for 30 days
                          </li>
                          <li className="pricing-item text-decoration-line-through">
                            <i className="mdi mdi-close-thick bg-soft-muted me-2" />{" "}
                            Premium Support 24/7
                          </li>
                        </ul>
                        <div className="text-center mt-4 mb-2">
                          <a
                            href="javascript:void(0)"
                            className="btn btn-primary rounded-pill"
                          >
                            Purchase Now <i className="uil uil-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end pricing-box*/}
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-6 mt-5 pt-2">
                    <div className="pricing-box card bg-light">
                      <div className="card-body p-4 px-lg-5">
                        <div className="pricing-icon bg-light rounded-circle icons-md">
                          <i className="uim uim-bag" />
                        </div>
                        <div className="pricing-name text-center mt-4 pt-2">
                          <h4 className="fs-18">Enterprice</h4>
                        </div>
                        <div className="pricing-price text-center mt-4">
                          <h2 className="fw-semibold">
                            $59.99<small className="fs-16">/mo</small>
                          </h2>
                        </div>
                        <ul className="list-unstyled pricing-details text-muted mt-4">
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Unlimited file recovery
                          </li>
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Professional reports
                          </li>
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Sell on marketplaces
                          </li>
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Unlimited Builds
                          </li>
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Job displayed for 30 days
                          </li>
                          <li className="pricing-item">
                            <i className="mdi mdi-check-bold success-bg-subtle me-2" />{" "}
                            Premium Support 24/7
                          </li>
                        </ul>
                        <div className="text-center mt-4 mb-2">
                          <a
                            href="javascript:void(0)"
                            className="btn btn-soft-primary rounded-pill"
                          >
                            Purchase Now <i className="uil uil-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end pricing-box*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
            {/* END PRICING */}
            {/*START CTA*/}
            <section className="section bg-light">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="section-title text-center">
                    <h3 className="title mb-4 pb-2">
                      See everything about your employee at one place.
                    </h3>
                    <p className="para-desc text-muted mx-auto">
                      Start working with JobsStorm that can provide everything
                      you need to generate awareness, drive traffic, connect.
                    </p>
                    <div className="mt-4">
                      <a
                        href="contact.html"
                        className="btn btn-primary btn-hover mt-2"
                      >
                        <i className="uil uil-phone me-1" /> Contact
                      </a>
                      <a
                        href="faqs.html"
                        className="btn btn-outline-primary btn-hover ms-sm-1 mt-2"
                      >
                        <i className="uil uil-file-question me-1" /> Faq's
                      </a>
                    </div>
                  </div>
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
            {/*END CTA*/}
            {/* START CTA */}
            <section className="section">
              <div className="container">
                <div className="pricing-counter text-white">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="counter-box mt-3">
                        <div className="counters text-center">
                          <h5 className="counter mb-0">15,000+</h5>
                          <h6 className="fs-16 mt-3">Available Jobs</h6>
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-3 col-md-6">
                      <div className="counter-box mt-3">
                        <div className="counters text-center">
                          <h5 className="counter mb-0">7500+</h5>
                          <h6 className="fs-16 mt-3">Applications</h6>
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-3 col-md-6">
                      <div className="counter-box mt-3">
                        <div className="counters text-center">
                          <h5 className="counter mb-0">8.85K</h5>
                          <h6 className="fs-16 mt-3">Positive Feedback</h6>
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-3 col-md-6">
                      <div className="counter-box mt-3">
                        <div className="counters text-center">
                          <h5 className="counter mb-0">9875</h5>
                          <h6 className="fs-16 mt-3">Members</h6>
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </div>
                {/*end pricing-counter*/}
              </div>
              {/*end container*/}
            </section>
            {/* END CTA */}
          </div>
          {/* End Page-content */}
        </div>
      </div>
    </>
  );
};

export default PricingPage;
