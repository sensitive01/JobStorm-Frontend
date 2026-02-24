import React from "react";

const AssociatedCompanyList = () => {
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
            {/* START SHAPE */}
            <div
              className="position-relative"
              style={{ zIndex: 1, marginTop: "80px" }}
            >
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
            {/* START COMPANY-LIST */}
            <section className="section">
              <div className="container">
                <div className="row align-items-center mb-4">
                  <div className="col-lg-8">
                    <div className="mb-3 mb-lg-0">
                      <h6 className="fs-16 mb-0">
                        {" "}
                        Showing 1 – 8 of 11 results{" "}
                      </h6>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4">
                    <div className="candidate-list-widgets">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="selection-widget">
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
                        <div className="col-lg-6">
                          <div className="selection-widget mt-2 mt-lg-0">
                            <select
                              className="form-select"
                              data-trigger=""
                              name="choices-candidate-page"
                              id="choices-candidate-page"
                              aria-label="Default select example"
                            >
                              <option value="df">All</option>
                              <option value="ne">8 per Page</option>
                              <option value="ne">12 per Page</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end candidate-list-widgets*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center mb-4">
                      <div className="card-body px-4 py-5">
                        <div className="featured-label">
                          <span className="featured">
                            4.9 <i className="mdi mdi-star-outline" />
                          </span>
                        </div>
                        <img
                          src="assets/images/featured-job/img-01.png"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                        <div className="mt-4">
                          <a
                            href="company-details.html"
                            className="primary-link"
                          >
                            <h6 className="fs-18 mb-2">JobsStorm Consulting</h6>
                          </a>
                          <p className="text-muted mb-4">New York</p>
                          <a
                            href="company-details.html"
                            className="btn btn-primary"
                          >
                            52 Opening Jobs
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center mb-4">
                      <div className="card-body px-4 py-5">
                        <img
                          src="assets/images/featured-job/img-02.png"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                        <div className="mt-4">
                          <a
                            href="company-details.html"
                            className="primary-link"
                          >
                            <h6 className="fs-18 mb-2">Creative Agency</h6>
                          </a>
                          <p className="text-muted mb-4">UK</p>
                          <a
                            href="company-details.html"
                            className="btn btn-primary"
                          >
                            11 Opening Jobs
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center mb-4">
                      <div className="card-body px-4 py-5">
                        <img
                          src="assets/images/featured-job/img-03.png"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                        <div className="mt-4">
                          <a
                            href="company-details.html"
                            className="primary-link"
                          >
                            <h6 className="fs-18 mb-2">DootTech Solution</h6>
                          </a>
                          <p className="text-muted mb-4">London</p>
                          <a
                            href="company-details.html"
                            className="btn btn-primary"
                          >
                            09 Opening Jobs
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center mb-4">
                      <div className="card-body px-4 py-5">
                        <img
                          src="assets/images/featured-job/img-07.png"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                        <div className="mt-4">
                          <a
                            href="company-details.html"
                            className="primary-link"
                          >
                            <h6 className="fs-18 mb-2">
                              Apple School &amp; College
                            </h6>
                          </a>
                          <p className="text-muted mb-4">Canada</p>
                          <a
                            href="company-details.html"
                            className="btn btn-primary"
                          >
                            27 Opening Jobs
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center mb-4">
                      <div className="card-body px-4 py-5">
                        <div className="featured-label">
                          <span className="featured">
                            4.8 <i className="mdi mdi-star-outline" />
                          </span>
                        </div>
                        <img
                          src="assets/images/featured-job/img-05.png"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                        <div className="mt-4">
                          <a
                            href="company-details.html"
                            className="primary-link"
                          >
                            <h6 className="fs-18 mb-2">Hunter Hospital</h6>
                          </a>
                          <p className="text-muted mb-4">America</p>
                          <a
                            href="company-details.html"
                            className="btn btn-primary"
                          >
                            07 Opening Jobs
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center mb-4">
                      <div className="card-body px-4 py-5">
                        <img
                          src="assets/images/featured-job/img-06.png"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                        <div className="mt-4">
                          <a
                            href="company-details.html"
                            className="primary-link"
                          >
                            <h6 className="fs-18 mb-2">Jshop Agency</h6>
                          </a>
                          <p className="text-muted mb-4">California</p>
                          <a
                            href="company-details.html"
                            className="btn btn-primary"
                          >
                            20 Opening Jobs
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center mb-4">
                      <div className="card-body px-4 py-5">
                        <img
                          src="assets/images/featured-job/img-08.png"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                        <div className="mt-4">
                          <a
                            href="company-details.html"
                            className="primary-link"
                          >
                            <h6 className="fs-18 mb-2">Adobe Agency</h6>
                          </a>
                          <p className="text-muted mb-4">New York</p>
                          <a
                            href="company-details.html"
                            className="btn btn-primary"
                          >
                            27 Opening Jobs
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center mb-4">
                      <div className="card-body px-4 py-5">
                        <img
                          src="assets/images/featured-job/img-09.png"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                        <div className="mt-4">
                          <a
                            href="company-details.html"
                            className="primary-link"
                          >
                            <h6 className="fs-18 mb-2">Creative Agency</h6>
                          </a>
                          <p className="text-muted mb-4">Uk</p>
                          <a
                            href="company-details.html"
                            className="btn btn-primary"
                          >
                            35 Opening Jobs
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center mb-4">
                      <div className="card-body px-4 py-5">
                        <div className="featured-label">
                          <span className="featured">
                            3.0 <i className="mdi mdi-star-outline" />
                          </span>
                        </div>
                        <img
                          src="assets/images/featured-job/img-10.png"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                        <div className="mt-4">
                          <a
                            href="company-details.html"
                            className="primary-link"
                          >
                            <h6 className="fs-18 mb-2">Kshop Agency</h6>
                          </a>
                          <p className="text-muted mb-4">America</p>
                          <a
                            href="company-details.html"
                            className="btn btn-primary"
                          >
                            14 Opening Jobs
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row">
                  <div className="col-lg-12 mt-5">
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
                {/* end row */}
              </div>
              {/*end container*/}
            </section>
            {/* END COMPANY-LIST */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AssociatedCompanyList;
