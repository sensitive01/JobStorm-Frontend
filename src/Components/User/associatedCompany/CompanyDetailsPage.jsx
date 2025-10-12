import React from "react";

const CompanyDetailsPage = () => {
  return (
    <>
      <div>
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
                      <h3 className="mb-4">Company Details</h3>
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
                              <a href="javascript:void(0)">Pages</a>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              {" "}
                              Company Details{" "}
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
            {/* START CANDIDATE-DETAILS */}
            <section className="section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card side-bar">
                      <div className="card-body p-4">
                        <div className="candidate-profile text-center">
                          <img
                            src="assets/images/featured-job/img-01.png"
                            alt=""
                            className="avatar-lg rounded-circle"
                          />
                          <h6 className="fs-18 mb-1 mt-4">
                            JobsStorm Technology Pvt.Ltd
                          </h6>
                          <p className="text-muted mb-4">Since July 2017</p>
                          <ul className="candidate-detail-social-menu list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0)"
                                className="social-link"
                              >
                                <i className="uil uil-twitter-alt" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0)"
                                className="social-link"
                              >
                                <i className="uil uil-whatsapp" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0)"
                                className="social-link"
                              >
                                <i className="uil uil-phone-alt" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*end candidate-profile*/}
                      <div className="candidate-profile-overview  card-body border-top p-4">
                        <h6 className="fs-17 fw-medium mb-3">
                          Profile Overview
                        </h6>
                        <ul className="list-unstyled mb-0">
                          <li>
                            <div className="d-flex">
                              <label className="text-dark">Owner Name</label>
                              <div>
                                <p className="text-muted mb-0">
                                  Charles Dickens
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex">
                              <label className="text-dark">Employees</label>
                              <div>
                                <p className="text-muted mb-0">1500 - 1850</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex">
                              <label className="text-dark">Location</label>
                              <div>
                                <p className="text-muted mb-0">New York</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex">
                              <label className="text-dark">Website</label>
                              <div>
                                <p className="text-muted text-break mb-0">
                                  www.Jobcytecnologypvt.ltd.com
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex">
                              <label className="text-dark">Established</label>
                              <div>
                                <p className="text-muted mb-0">July 10 2017</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="mt-3">
                          <a
                            href="javascript:void(0)"
                            className="btn btn-danger btn-hover w-100"
                          >
                            <i className="uil uil-phone" /> Contact
                          </a>
                        </div>
                      </div>
                      {/*candidate-profile-overview*/}
                      <div className="card-body p-4 border-top">
                        <div className="ur-detail-wrap">
                          <div className="ur-detail-wrap-header">
                            <h6 className="fs-17 fw-medium mb-3">
                              Working Days
                            </h6>
                          </div>
                          <div className="ur-detail-wrap-body">
                            <ul className="working-days">
                              <li>
                                Monday<span>9AM - 5PM</span>
                              </li>
                              <li>
                                Tuesday<span>9AM - 5PM</span>
                              </li>
                              <li>
                                Wednesday<span>9AM - 5PM</span>
                              </li>
                              <li>
                                Thursday<span>9AM - 5PM</span>
                              </li>
                              <li>
                                Friday<span>9AM - 5PM</span>
                              </li>
                              <li>
                                Saturday<span>9AM - 5PM</span>
                              </li>
                              <li>
                                Sunday<span className="text-danger">Close</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*end card-body*/}
                      <div className="card-body p-4 border-top">
                        <h6 className="fs-17 fw-medium mb-4">
                          Company Location
                        </h6>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1628067715234!5m2!1sen!2sin"
                          style={{ width: "100%" }}
                          height={250}
                          allowFullScreen=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end col*/}
                  <div className="col-lg-8">
                    <div className="card ms-lg-4 mt-4 mt-lg-0">
                      <div className="card-body p-4">
                        <div className="mb-5">
                          <h6 className="fs-17 fw-medium mb-4">
                            About Company
                          </h6>
                          <p className="text-muted">
                            {" "}
                            Objectively pursue diverse catalysts for change for
                            interoperable meta-services. Distinctively
                            re-engineer revolutionary meta-services and premium
                            architectures. Intrinsically incubate intuitive
                            opportunities and real-time potentialities.
                            Appropriately communicate one-to-one technology.
                          </p>
                          <p className="text-muted">
                            Intrinsically incubate intuitive opportunities and
                            real-time potentialities Appropriately communicate
                            one-to-one technology.
                          </p>
                          <p className="text-muted">
                            {" "}
                            Exercitation photo booth stumptown tote bag Banksy,
                            elit small batch freegan sed. Craft beer elit seitan
                            exercitation, photo booth et 8-bit kale chips
                            proident chillwave deep v laborum. Aliquip veniam
                            delectus, Marfa eiusmod Pinterest in do umami
                            readymade swag.
                          </p>
                        </div>
                        <div className="candidate-portfolio mb-5">
                          <h6 className="fs-17 fw-medium mb-4">Gallery</h6>
                          <div className="row g-3">
                            <div className="col-lg-6">
                              <div className="candidate-portfolio-box card border-0">
                                <img
                                  src="assets/images/blog/img-01.jpg"
                                  alt=""
                                  className="img-fluid"
                                />
                                <div className="bg-overlay" />
                                <div className="zoom-icon">
                                  <a
                                    href="assets/images/blog/img-01.jpg"
                                    className="image-popup text-white"
                                    data-title="Project Leader"
                                    data-description="There are many variations of passages of available, but the majority alteration in some form."
                                  >
                                    <i className="uil uil-search-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* end col */}
                            <div className="col-lg-6">
                              <div className="candidate-portfolio-box card border-0">
                                <img
                                  src="assets/images/blog/img-03.jpg"
                                  alt=""
                                  className="img-fluid"
                                />
                                <div className="bg-overlay" />
                                <div className="zoom-icon">
                                  <a
                                    href="assets/images/blog/img-03.jpg"
                                    className="image-popup text-white"
                                    data-title="Project Leader"
                                    data-description="There are many variations of passages of available, but the majority alteration in some form."
                                  >
                                    <i className="uil uil-search-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* end col */}
                            <div className="col-lg-12">
                              <div className="candidate-portfolio-box card border-0">
                                <img
                                  src="assets/images/blog/img-12.jpg"
                                  alt=""
                                  className="img-fluid"
                                />
                                <div className="bg-overlay" />
                                <div className="zoom-icon">
                                  <a
                                    href="assets/images/blog/img-12.jpg"
                                    className="image-popup text-white"
                                    data-title="Project Leader"
                                    data-description="There are many variations of passages of available, but the majority alteration in some form."
                                  >
                                    <i className="uil uil-search-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* end col */}
                          </div>
                          {/* end row */}
                        </div>
                        {/* end portfolio */}
                        <div>
                          <h6 className="fs-17 fw-medium mb-4">
                            Current Opening
                          </h6>
                          <div className="job-box bookmark-post card mt-4">
                            <div className="p-4">
                              <div className="row">
                                <div className="col-lg-2">
                                  <img
                                    src="assets/images/featured-job/img-01.png"
                                    alt=""
                                    className="img-fluid rounded-3"
                                  />
                                </div>
                                <div className="col-lg-10">
                                  <div className="mt-3 mt-lg-0">
                                    <h5 className="fs-16 fw-medium mb-1">
                                      <a
                                        href="job-details.html"
                                        className="text-dark"
                                      >
                                        Magento Developer
                                      </a>{" "}
                                      <small className="text-muted fw-normal">
                                        (0-2 Yrs Exp.)
                                      </small>
                                    </h5>
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0">
                                          JobsStorm Technology Pvt.Ltd
                                        </p>
                                      </li>
                                      <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0">
                                          <i className="mdi mdi-map-marker" />{" "}
                                          California
                                        </p>
                                      </li>
                                      <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0">
                                          <i className="uil uil-wallet" /> $250
                                          - $800 / month
                                        </p>
                                      </li>
                                    </ul>
                                    <div className="mt-2">
                                      <span className="badge bg-success-subtle text-success mt-1">
                                        Full Time
                                      </span>
                                      <span className="badge bg-warning-subtle text-warning mt-1">
                                        Urgent
                                      </span>
                                      <span className="badge bg-info-subtle text-info mt-1">
                                        Private
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/*end col*/}
                              </div>
                              {/*end row*/}
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </div>
                            <div className="p-3 bg-light">
                              <div className="row justify-content-between">
                                <div className="col-md-8">
                                  <div>
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item fw-medium">
                                        <i className="uil uil-tag" /> Keywords :
                                      </li>
                                      <li className="list-inline-item">
                                        <a
                                          href="javascript:void(0)"
                                          className="primary-link text-muted"
                                        >
                                          Ui designer
                                        </a>
                                        ,
                                      </li>
                                      <li className="list-inline-item">
                                        <a
                                          href="javascript:void(0)"
                                          className="primary-link text-muted"
                                        >
                                          developer
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/*end col*/}
                                {/*end col*/}
                                <div className="col-md-4">
                                  <div className="text-md-end">
                                    <a
                                      href="#applyNow"
                                      data-bs-toggle="modal"
                                      className="primary-link"
                                    >
                                      Apply Now{" "}
                                      <i className="mdi mdi-chevron-double-right" />
                                    </a>
                                  </div>
                                </div>
                                {/*end col*/}
                              </div>
                              {/*end row*/}
                            </div>
                          </div>
                          {/*end job-box*/}
                          <div className="job-box card mt-4">
                            <div className="p-4">
                              <div className="row">
                                <div className="col-lg-2">
                                  <img
                                    src="assets/images/featured-job/img-02.png"
                                    alt=""
                                    className="img-fluid rounded-3"
                                  />
                                </div>
                                {/*end col*/}
                                <div className="col-lg-10">
                                  <div className="mt-3 mt-lg-0">
                                    <h5 className="fs-16 fw-medium mb-1">
                                      <a
                                        href="job-details.html"
                                        className="text-dark"
                                      >
                                        Marketing Director
                                      </a>{" "}
                                      <small className="text-muted fw-normal">
                                        (2-4 Yrs Exp.)
                                      </small>
                                    </h5>
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0">
                                          JobsStorm Technology Pvt.Ltd
                                        </p>
                                      </li>
                                      <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0">
                                          <i className="mdi mdi-map-marker" />{" "}
                                          New York
                                        </p>
                                      </li>
                                      <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0">
                                          <i className="uil uil-wallet" /> $250
                                          - $800 / month
                                        </p>
                                      </li>
                                    </ul>
                                    <div className="mt-2">
                                      <span className="badge bg-danger-subtle text-danger mt-1">
                                        Part Time
                                      </span>
                                      <span className="badge bg-info-subtle text-info mt-1">
                                        Private
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/*end col*/}
                              </div>
                              {/*end row*/}
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </div>
                            <div className="p-3 bg-light">
                              <div className="row justify-content-between">
                                <div className="col-md-8">
                                  <div>
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item fw-medium">
                                        <i className="uil uil-tag" /> Keywords :
                                      </li>
                                      <li className="list-inline-item">
                                        <a
                                          href="javascript:void(0)"
                                          className="primary-link text-muted"
                                        >
                                          Marketing
                                        </a>
                                        ,
                                      </li>
                                      <li className="list-inline-item">
                                        <a
                                          href="javascript:void(0)"
                                          className="primary-link text-muted"
                                        >
                                          business
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/*end col*/}
                                <div className="col-md-4">
                                  <div className="text-md-end">
                                    <a
                                      href="#applyNow"
                                      data-bs-toggle="modal"
                                      className="primary-link"
                                    >
                                      Apply Now{" "}
                                      <i className="mdi mdi-chevron-double-right" />
                                    </a>
                                  </div>
                                </div>
                                {/*end col*/}
                              </div>
                              {/*end row*/}
                            </div>
                          </div>
                          {/*end job-box*/}
                          <div className="job-box bookmark-post card mt-4">
                            <div className="p-4">
                              <div className="row">
                                <div className="col-lg-2">
                                  <img
                                    src="assets/images/featured-job/img-05.png"
                                    alt=""
                                    className="img-fluid rounded-3"
                                  />
                                </div>
                                {/*end col*/}
                                <div className="col-lg-10">
                                  <div className="mt-3 mt-lg-0">
                                    <h5 className="fs-16 fw-medium  mb-1">
                                      <a
                                        href="job-details.html"
                                        className="text-dark"
                                      >
                                        Product Designer
                                      </a>{" "}
                                      <small className="text-muted fw-normal">
                                        (0-5 Yrs Exp.)
                                      </small>
                                    </h5>
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0">
                                          JobsStorm Technology Pvt.Ltd
                                        </p>
                                      </li>
                                      <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0">
                                          <i className="mdi mdi-map-marker" />{" "}
                                          California
                                        </p>
                                      </li>
                                      <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0">
                                          <i className="uil uil-wallet" /> $250
                                          - $800 / month
                                        </p>
                                      </li>
                                    </ul>
                                    <div className="mt-2">
                                      <span className="badge bg-info-subtle text-info mt-1">
                                        Internship
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/*end col*/}
                              </div>
                              {/*end row*/}
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </div>
                            <div className="p-3 bg-light">
                              <div className="row justify-content-between">
                                <div className="col-md-8">
                                  <div>
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item fw-medium">
                                        <i className="uil uil-tag" /> Keywords :
                                      </li>
                                      <li className="list-inline-item">
                                        <a
                                          href="javascript:void(0)"
                                          className="primary-link text-muted"
                                        >
                                          Ui designer
                                        </a>
                                        ,
                                      </li>
                                      <li className="list-inline-item">
                                        <a
                                          href="javascript:void(0)"
                                          className="primary-link text-muted"
                                        >
                                          developer
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/*end col*/}
                                <div className="col-md-4">
                                  <div className="text-md-end">
                                    <a
                                      href="#applyNow"
                                      data-bs-toggle="modal"
                                      className="primary-link"
                                    >
                                      Apply Now{" "}
                                      <i className="mdi mdi-chevron-double-right" />
                                    </a>
                                  </div>
                                </div>
                                {/*end col*/}
                              </div>
                              {/*end row*/}
                            </div>
                          </div>
                          {/*end job-box*/}
                          <div className="job-box card mt-4">
                            <div className="p-4">
                              <div className="row">
                                <div className="col-lg-2">
                                  <img
                                    src="assets/images/featured-job/img-06.png"
                                    alt=""
                                    className="img-fluid rounded-3"
                                  />
                                </div>
                                {/*end col*/}
                                <div className="col-lg-10">
                                  <div className="mt-3 mt-lg-0">
                                    <h5 className="fs-16 fw-medium mb-1">
                                      <a
                                        href="job-details.html"
                                        className="text-dark"
                                      >
                                        Product Designer
                                      </a>{" "}
                                      <small className="text-muted fw-normal">
                                        (0-5 Yrs Exp.)
                                      </small>
                                    </h5>
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0">
                                          JobsStorm Technology Pvt.Ltd
                                        </p>
                                      </li>
                                      <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0">
                                          <i className="mdi mdi-map-marker" />{" "}
                                          California
                                        </p>
                                      </li>
                                      <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0">
                                          <i className="uil uil-wallet" /> $250
                                          - $800 / month
                                        </p>
                                      </li>
                                    </ul>
                                    <div className="mt-2">
                                      <span className="badge bg-info-subtle text-info mt-1">
                                        Internship
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/*end col*/}
                              </div>
                              {/*end row*/}
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </div>
                            <div className="p-3 bg-light">
                              <div className="row justify-content-between">
                                <div className="col-md-8">
                                  <div>
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item fw-medium">
                                        <i className="uil uil-tag" /> Keywords :
                                      </li>
                                      <li className="list-inline-item">
                                        <a
                                          href="javascript:void(0)"
                                          className="primary-link text-muted"
                                        >
                                          Ui designer
                                        </a>
                                        ,
                                      </li>
                                      <li className="list-inline-item">
                                        <a
                                          href="javascript:void(0)"
                                          className="primary-link text-muted"
                                        >
                                          developer
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/*end col*/}
                                <div className="col-md-4">
                                  <div className="text-md-end">
                                    <a
                                      href="#applyNow"
                                      data-bs-toggle="modal"
                                      className="primary-link"
                                    >
                                      Apply Now{" "}
                                      <i className="mdi mdi-chevron-double-right" />
                                    </a>
                                  </div>
                                </div>
                                {/*end col*/}
                              </div>
                              {/*end row*/}
                            </div>
                          </div>
                          {/*end job-box*/}
                        </div>
                      </div>
                      {/* card body end */}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
            {/* END CANDIDATE-DETAILS */}
            {/* START APPLY MODAL */}
            <div
              className="modal fade"
              id="applyNow"
              tabIndex={-1}
              aria-labelledby="applyNow"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body p-5">
                    <div className="text-center mb-4">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Apply For This Job
                      </h5>
                    </div>
                    <div className="position-absolute end-0 top-0 p-3">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="nameFormControlInput"
                        className="form-label"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nameFormControlInput"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="emailFormControlInput"
                        className="form-label"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="emailFormControlInput"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={4}
                        placeholder="Enter your message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label" htmlFor="inputGroupFile01">
                        Resume Upload
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile01"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Send Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* END APPLY MODAL */}
          </div>
        </div>
        {/* end main content*/}
      </div>
    </>
  );
};

export default CompanyDetailsPage;
