import React from "react";

const SavedCandidate = () => {
  return (
    <>
      {/*start page Loader */}
      {/* <div id="preloader">
        <div id="status">
          <ul>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div> */}
      {/*end page Loader */}
      {/* Begin page */}
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
                      <h3 className="mb-4">Bookmarks Jobs</h3>
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
                              <a href="javascript:void(0)">Profile</a>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              {" "}
                              Bookmarks Jobs{" "}
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
            {/* START BOOKMARKS */}
            <section className="section">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div>
                      <h6 className="fs-16 mb-0"> Bookmarks Jobs </h6>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4">
                    <div className="candidate-list-widgets">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="selection-widget mt-3 mt-lg-0">
                            <select
                              className="form-select"
                              data-trigger=""
                              name="choices-single-filter-orderby"
                              id="choices-single-filter-orderby"
                              aria-label="Default select example"
                            >
                              <option value="df">Default</option>
                              <option value="ne">Newest</option>
                              <option value="od">Oldest</option>
                              <option value="rd">Random</option>
                            </select>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6">
                          <div className="selection-widget mt-3 mt-lg-0">
                            <select
                              className="form-select"
                              data-trigger=""
                              name="choices-candidate-page"
                              id="choices-candidate-page"
                              aria-label="Default select example"
                            >
                              <option value="df">All</option>
                              <option value="ne">Last 2 Month</option>
                              <option value="ne">Last 6 Month</option>
                              <option value="ne">Last 12 Month</option>
                              <option value="ne">Last 2 Year</option>
                            </select>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end candidate-list-widgets*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="job-box card mt-4">
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-lg-1">
                            <a href="company-details.html">
                              <img
                                src="assets/images/featured-job/img-01.png"
                                alt=""
                                className="img-fluid rounded-3"
                              />
                            </a>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-9">
                            <div className="mt-3 mt-lg-0">
                              <h5 className="fs-17 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Business Associate
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
                                    California
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted fs-14 mb-0">
                                    <i className="uil uil-wallet" /> $250 - $800
                                    / month
                                  </p>
                                </li>
                              </ul>
                              <div className="mt-2">
                                <span className="badge bg-danger-subtle text-danger mt-1">
                                  Part Time
                                </span>
                                <span className="badge bg-warning-subtle text-warning mt-1">
                                  Urgent
                                </span>
                              </div>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 align-self-center">
                            <ul className="list-inline mt-3 mb-0">
                              <li
                                className="list-inline-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View More"
                              >
                                <a
                                  href="job-details.html"
                                  className="avatar-sm success-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                >
                                  <i className="mdi mdi-eye" />
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteModal"
                                  className="avatar-sm danger-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                >
                                  <i className="uil uil-trash-alt" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box card mt-4">
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-lg-1">
                            <a href="company-details.html">
                              <img
                                src="assets/images/featured-job/img-02.png"
                                alt=""
                                className="img-fluid rounded-3"
                              />
                            </a>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-9">
                            <div className="mt-3 mt-lg-0">
                              <h5 className="fs-17 mb-1">
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
                                    Creative Agency
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted fs-14 mb-0">
                                    <i className="mdi mdi-map-marker" /> New
                                    York
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted fs-14 mb-0">
                                    <i className="uil uil-wallet" /> $250 - $800
                                    / month
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
                          <div className="col-lg-2 align-self-center">
                            <ul className="list-inline mt-3 mb-0">
                              <li
                                className="list-inline-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View More"
                              >
                                <a
                                  href="job-details.html"
                                  className="avatar-sm success-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                >
                                  <i className="mdi mdi-eye" />
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteModal"
                                  className="avatar-sm danger-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                >
                                  <i className="uil uil-trash-alt" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box card mt-4">
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-lg-1">
                            <a href="company-details.html">
                              <img
                                src="assets/images/featured-job/img-03.png"
                                alt=""
                                className="img-fluid rounded-3"
                              />
                            </a>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-9">
                            <div className="mt-3 mt-lg-0">
                              <h5 className="fs-17 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  HTML Developer
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
                                    California
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted fs-14 mb-0">
                                    <i className="uil uil-wallet" /> $250 - $800
                                    / month
                                  </p>
                                </li>
                              </ul>
                              <div className="mt-2">
                                <span className="badge bg-success-subtle text-success mt-1">
                                  Freelance
                                </span>
                                <span className="badge bg-primary-subtle text-primary mt-1">
                                  Internship
                                </span>
                              </div>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 align-self-center">
                            <ul className="list-inline mt-3 mb-0">
                              <li
                                className="list-inline-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View More"
                              >
                                <a
                                  href="job-details.html"
                                  className="avatar-sm success-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                >
                                  <i className="mdi mdi-eye" />
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteModal"
                                  className="avatar-sm danger-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                >
                                  <i className="uil uil-trash-alt" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box card mt-4">
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-lg-1">
                            <a href="company-details.html">
                              <img
                                src="assets/images/featured-job/img-04.png"
                                alt=""
                                className="img-fluid rounded-3"
                              />
                            </a>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-9">
                            <div className="mt-3 mt-lg-0">
                              <h5 className="fs-17 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Product Sales Specialist
                                </a>{" "}
                                <small className="text-muted fw-normal">
                                  (5+ Yrs Exp.)
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
                                    <i className="uil uil-wallet" /> $250 - $800
                                    / month
                                  </p>
                                </li>
                              </ul>
                              <div className="mt-2">
                                <span className="badge bg-success-subtle text-success mt-1">
                                  Full Time
                                </span>
                                <span className="badge bg-info-subtle text-info mt-1">
                                  Private
                                </span>
                              </div>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 align-self-center">
                            <ul className="list-inline mt-3 mb-0">
                              <li
                                className="list-inline-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View More"
                              >
                                <a
                                  href="job-details.html"
                                  className="avatar-sm success-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                >
                                  <i className="mdi mdi-eye" />
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteModal"
                                  className="avatar-sm danger-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                >
                                  <i className="uil uil-trash-alt" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box card mt-4">
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-lg-1">
                            <a href="company-details.html">
                              <img
                                src="assets/images/featured-job/img-05.png"
                                alt=""
                                className="img-fluid rounded-3"
                              />
                            </a>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-9">
                            <div className="mt-3 mt-lg-0">
                              <h5 className="fs-17 mb-1">
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
                                    Creative Agency
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
                                    <i className="uil uil-wallet" /> $250 - $800
                                    / month
                                  </p>
                                </li>
                              </ul>
                              <div className="mt-2">
                                <span className="badge bg-primary-subtle text-primary mt-1">
                                  Internship
                                </span>
                              </div>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 align-self-center">
                            <ul className="list-inline mt-3 mb-0">
                              <li className="list-inline-item">
                                <a
                                  href="job-details.html"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View More"
                                  className="avatar-sm success-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                >
                                  <i className="mdi mdi-eye" />
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteModal"
                                  className="avatar-sm danger-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                >
                                  <i className="uil uil-trash-alt" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box card mt-4">
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-lg-1">
                            <a href="company-details.html">
                              <img
                                src="assets/images/featured-job/img-06.png"
                                alt=""
                                className="img-fluid rounded-3"
                              />
                            </a>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-9">
                            <div className="mt-3 mt-lg-0">
                              <h5 className="fs-17 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Project Manager
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
                                    <i className="uil uil-wallet" /> $250 - $800
                                    / month
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
                          <div className="col-lg-2 align-self-center">
                            <ul className="list-inline mt-3 mb-0">
                              <li
                                className="list-inline-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View More"
                              >
                                <a
                                  href="job-details.html"
                                  className="avatar-sm success-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                >
                                  <i className="mdi mdi-eye" />
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteModal"
                                  className="avatar-sm danger-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                >
                                  <i className="uil uil-trash-alt" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row">
                  <div className="col-lg-12 mt-4 pt-2">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination job-pagination mb-0 justify-content-center">
                        <li className="page-item disabled">
                          <a
                            className="page-link"
                            href="javascript:void(0)"
                            tabIndex={-1}
                          >
                            <i className="mdi mdi-chevron-double-left fs-15" />
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="javascript:void(0)">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="javascript:void(0)">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="javascript:void(0)">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="javascript:void(0)">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="javascript:void(0)">
                            <i className="mdi mdi-chevron-double-right fs-15" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
            {/* START BOOKMARKS */}
            {/* DELETE Modal */}
            <div
              className="modal fade"
              id="deleteModal"
              tabIndex={-1}
              aria-labelledby="deleteModal"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Delete Jobs ?
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div>
                      <h6 className="text-danger">
                        <i className="uil uil-exclamation-triangle" />
                        Warning: Are you sure you want to delete job Post ?
                      </h6>
                      <p className="text-muted">
                        {" "}
                        Your jobs post will be permenently removed and you won't
                        be able to see them again, including the once you're
                        shared with your friends.
                      </p>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" className="btn btn-danger btn-sm">
                      Yes, delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* END DELETE MODAL */}
          </div>


  
        </div>
      </div>

    </>
  );
};

export default SavedCandidate;
