import React from "react";

const BlogsPage = () => {
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
                        Sign Up and get access to all the features of Jobcy
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
                      <h3 className="mb-4">Blog</h3>
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
                              <a href="javascript:void(0)">Blog</a>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              {" "}
                              Blog{" "}
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
            {/* START BLOG-PAGE */}
            <section className="section">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="mb-4">
                      <h4>Latest &amp; Trending Blog Post</h4>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-7">
                    <div className="post-preview overflow-hidden rounded-3 mb-3 mb-lg-0">
                      <a href="blog-details.html">
                        <img
                          src="assets/images/blog/img-04.jpg"
                          alt="Blog"
                          className="img-fluid blog-img"
                        />
                      </a>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-5">
                    {/* Post*/}
                    <article className="post position-relative">
                      <div className="post ms-lg-4">
                        <p className="text-muted mb-2">
                          <b>Product</b> - Aug 01, 2021
                        </p>
                        <h5 className="mb-3">
                          <a href="blog-details.html" className="primary-link">
                            Do traditional landing pages work for Saas startups?
                          </a>
                        </h5>
                        <p className="text-muted">
                          Objectively pursue diverse catalysts for change for
                          interoperable meta-services. Distinctively re-engineer
                          revolutionary meta-services and premium architectures.
                          Intrinsically incubate intuitive opportunities and
                          real-time potentialities. Appropriately communicate
                          one-to-one technology.
                        </p>
                        <div className="d-flex align-items-center mt-4">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/user/img-01.jpg"
                              alt=""
                              className="avatar-sm rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <a href="blog-author.html" className="primary-link">
                              <h6 className="fs-16 mb-0">James Lemire </h6>
                            </a>
                            <p className="text-muted mb-0">Product Manager</p>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* Post end*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row mt-5">
                  <div className="col-lg-12">
                    <div>
                      <h4>All Blog Post</h4>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-6">
                    <article className="post position-relative mt-4">
                      <div className="post-preview overflow-hidden mb-3 rounded-3">
                        <a href="blog-details.html">
                          <img
                            src="assets/images/blog/img-06.jpg"
                            alt=""
                            className="img-fluid blog-img"
                          />
                        </a>
                      </div>
                      <p className="text-muted mb-2">
                        <b>Fashion</b> - July 29, 2021
                      </p>
                      <h5 className="mb-3">
                        <a href="blog-details.html" className="primary-link">
                          A day in the of a professional fashion designer
                        </a>
                      </h5>
                      <p className="text-muted">
                        Objectively pursue diverse catalysts for change for
                        interoperable meta-services. Distinctively re-engineer
                        revolutionary meta-services and premium architectures.
                        Intrinsically incubate intuitive opportunities and
                        real-time potentialities. Appropriately communicate
                        one-to-one technology.
                      </p>
                      <div className="d-flex align-items-center mt-4">
                        <div className="flex-shrink-0">
                          <img
                            src="assets/images/user/img-02.jpg"
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="blog-author.html" className="primary-link">
                            <h6 className="fs-16 mb-0">Rebecca Swartz</h6>
                          </a>
                          <p className="text-muted mb-0">Fashion Designer</p>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-6">
                    <article className="post position-relative mt-lg-4 mt-5">
                      <div className="post-preview overflow-hidden mb-3 rounded-3">
                        <a href="blog-details.html">
                          <img
                            src="assets/images/blog/img-05.jpg"
                            alt=""
                            className="img-fluid blog-img"
                          />
                        </a>
                      </div>
                      <p className="text-muted mb-2">
                        <b>Business</b> - July 25, 2021
                      </p>
                      <h5 className="mb-3">
                        <a href="blog-details.html" className="primary-link">
                          Stack designer Olivia Murphy offers freelancing advice
                        </a>
                      </h5>
                      <p className="text-muted">
                        Objectively pursue diverse catalysts for change for
                        interoperable meta-services. Distinctively re-engineer
                        revolutionary meta-services and premium architectures.
                        Intrinsically incubate intuitive opportunities and
                        real-time potentialities. Appropriately communicate
                        one-to-one technology.
                      </p>
                      <div className="d-flex align-items-center mt-4">
                        <div className="flex-shrink-0">
                          <img
                            src="assets/images/user/img-03.jpg"
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="blog-author.html" className="primary-link">
                            <h6 className="fs-16 mb-0">Olivia Murphy</h6>
                          </a>
                          <p className="text-muted mb-0">Product Leader</p>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row">
                  <div className="col-lg-6">
                    <article className="post position-relative mt-5">
                      <div className="post-preview overflow-hidden mb-3 rounded-3">
                        <a href="blog-details.html">
                          <img
                            src="assets/images/blog/img-07.jpg"
                            alt=""
                            className="img-fluid blog-img"
                          />
                        </a>
                      </div>
                      <p className="text-muted mb-2">
                        <b>Business</b> - July 25, 2021
                      </p>
                      <h5 className="mb-3">
                        <a href="blog-details.html" className="primary-link">
                          Manage white space in responsive layouts ?
                        </a>
                      </h5>
                      <p className="text-muted">
                        Objectively pursue diverse catalysts for change for
                        interoperable meta-services. Distinctively re-engineer
                        revolutionary meta-services and premium architectures.
                        Intrinsically incubate intuitive opportunities and
                        real-time potentialities. Appropriately communicate
                        one-to-one technology.
                      </p>
                      <div className="d-flex align-items-center mt-4">
                        <div className="flex-shrink-0">
                          <img
                            src="assets/images/user/img-03.jpg"
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="blog-author.html" className="primary-link">
                            <h6 className="fs-16 mb-0">Olivia Murphy</h6>
                          </a>
                          <p className="text-muted mb-0">Product Leader</p>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-6">
                    <article className="post position-relative mt-5">
                      <div className="post-preview overflow-hidden mb-3 rounded-3">
                        <a href="blog-details.html">
                          <img
                            src="assets/images/blog/img-08.jpg"
                            alt=""
                            className="img-fluid blog-img"
                          />
                        </a>
                      </div>
                      <p className="text-muted mb-2">
                        <b>Development</b> - July 29, 2021
                      </p>
                      <h5 className="mb-3">
                        <a href="blog-details.html" className="primary-link">
                          How to get creative in your work ?
                        </a>
                      </h5>
                      <p className="text-muted">
                        Objectively pursue diverse catalysts for change for
                        interoperable meta-services. Distinctively re-engineer
                        revolutionary meta-services and premium architectures.
                        Intrinsically incubate intuitive opportunities and
                        real-time potentialities. Appropriately communicate
                        one-to-one technology.
                      </p>
                      <div className="d-flex align-items-center mt-4">
                        <div className="flex-shrink-0">
                          <img
                            src="assets/images/user/img-02.jpg"
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="blog-author.html" className="primary-link">
                            <h6 className="fs-16 mb-0">Rebecca Swartz</h6>
                          </a>
                          <p className="text-muted mb-0">Fashion Designer</p>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row">
                  <div className="col-lg-6">
                    <article className="post position-relative mt-5">
                      <div className="post-preview overflow-hidden mb-3 rounded-3">
                        <a href="blog-details.html">
                          <img
                            src="assets/images/blog/img-09.jpg"
                            alt=""
                            className="img-fluid blog-img"
                          />
                        </a>
                      </div>
                      <p className="text-muted mb-2">
                        <b>Business</b> - July 25, 2021
                      </p>
                      <h5 className="mb-3">
                        <a href="blog-details.html" className="primary-link">
                          What planning process needs ?
                        </a>
                      </h5>
                      <p className="text-muted">
                        Objectively pursue diverse catalysts for change for
                        interoperable meta-services. Distinctively re-engineer
                        revolutionary meta-services and premium architectures.
                        Intrinsically incubate intuitive opportunities and
                        real-time potentialities. Appropriately communicate
                        one-to-one technology.
                      </p>
                      <div className="d-flex align-items-center mt-4">
                        <div className="flex-shrink-0">
                          <img
                            src="assets/images/user/img-03.jpg"
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="blog-author.html" className="primary-link">
                            <h6 className="fs-16 mb-0">Olivia Murphy</h6>
                          </a>
                          <p className="text-muted mb-0">Product Leader</p>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-6">
                    <article className="post position-relative mt-5">
                      <div className="post-preview overflow-hidden mb-3 rounded-3">
                        <a href="blog-details.html">
                          <img
                            src="assets/images/blog/img-10.jpg"
                            alt=""
                            className="img-fluid blog-img"
                          />
                        </a>
                      </div>
                      <p className="text-muted mb-2">
                        <b>Development</b> - July 29, 2021
                      </p>
                      <h5 className="mb-3">
                        <a href="blog-details.html" className="primary-link">
                          How to become a best sale marketer in a year!
                        </a>
                      </h5>
                      <p className="text-muted">
                        Objectively pursue diverse catalysts for change for
                        interoperable meta-services. Distinctively re-engineer
                        revolutionary meta-services and premium architectures.
                        Intrinsically incubate intuitive opportunities and
                        real-time potentialities. Appropriately communicate
                        one-to-one technology.
                      </p>
                      <div className="d-flex align-items-center mt-4">
                        <div className="flex-shrink-0">
                          <img
                            src="assets/images/user/img-02.jpg"
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="blog-author.html" className="primary-link">
                            <h6 className="fs-16 mb-0">Rebecca Swartz</h6>
                          </a>
                          <p className="text-muted mb-0">Fashion Designer</p>
                        </div>
                      </div>
                    </article>
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
              {/* end container */}
            </section>
            {/* END BLOG-PAGE */}
          </div>
          {/* End Page-content */}
          {/* START SUBSCRIBE */}
          <section className="bg-subscribe">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                  <div className="text-center text-lg-start">
                    <h4 className="text-white">Get New Jobs Notification!</h4>
                    <p className="text-white-50 mb-0">
                      Subscribe &amp; get all related jobs notification.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mt-4 mt-lg-0">
                    <form className="subscribe-form" action="#">
                      <div className="input-group justify-content-center justify-content-lg-end">
                        <input
                          type="text"
                          className="form-control"
                          id="subscribe"
                          placeholder="Enter your email"
                        />
                        <button
                          className="btn btn-primary"
                          type="button"
                          id="subscribebtn"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                    {/*end form*/}
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
            <div className="email-img d-none d-lg-block">
              <img
                src="assets/images/subscribe.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </section>
          {/* END SUBSCRIBE */}
          {/* START FOOTER */}
          <section className="bg-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="footer-item mt-4 mt-lg-0 me-lg-5">
                    <h4 className="text-white mb-4">Jobcy</h4>
                    <p className="text-white-50">
                      It is a long established fact that a reader will be of a
                      page reader will be of at its layout.
                    </p>
                    <p className="text-white mt-3">Follow Us on:</p>
                    <ul className="footer-social-menu list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="uil uil-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="uil uil-linkedin-alt" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="uil uil-google" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="uil uil-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-lg-2 col-6">
                  <div className="footer-item mt-4 mt-lg-0">
                    <p className="fs-16 text-white mb-4">Company</p>
                    <ul className="list-unstyled footer-list mb-0">
                      <li>
                        <a href="about.html">
                          <i className="mdi mdi-chevron-right" /> About Us
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          <i className="mdi mdi-chevron-right" /> Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="services.html">
                          <i className="mdi mdi-chevron-right" /> Services
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          <i className="mdi mdi-chevron-right" /> Blog
                        </a>
                      </li>
                      <li>
                        <a href="team.html">
                          <i className="mdi mdi-chevron-right" /> Team
                        </a>
                      </li>
                      <li>
                        <a href="pricing.html">
                          <i className="mdi mdi-chevron-right" /> Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-lg-2 col-6">
                  <div className="footer-item mt-4 mt-lg-0">
                    <p className="fs-16 text-white mb-4">For Jobs</p>
                    <ul className="list-unstyled footer-list mb-0">
                      <li>
                        <a href="job-categories.html">
                          <i className="mdi mdi-chevron-right" /> Browser
                          Categories
                        </a>
                      </li>
                      <li>
                        <a href="job-list.html">
                          <i className="mdi mdi-chevron-right" /> Browser Jobs
                        </a>
                      </li>
                      <li>
                        <a href="job-details.html">
                          <i className="mdi mdi-chevron-right" /> Job Details
                        </a>
                      </li>
                      <li>
                        <a href="bookmark-jobs.html">
                          <i className="mdi mdi-chevron-right" /> Bookmark Jobs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-lg-2 col-6">
                  <div className="footer-item mt-4 mt-lg-0">
                    <p className="text-white fs-16 mb-4">For Candidates</p>
                    <ul className="list-unstyled footer-list mb-0">
                      <li>
                        <a href="candidate-list.html">
                          <i className="mdi mdi-chevron-right" /> Candidate List
                        </a>
                      </li>
                      <li>
                        <a href="candidate-grid.html">
                          <i className="mdi mdi-chevron-right" /> Candidate Grid
                        </a>
                      </li>
                      <li>
                        <a href="candidate-details.html">
                          <i className="mdi mdi-chevron-right" /> Candidate
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-lg-2 col-6">
                  <div className="footer-item mt-4 mt-lg-0">
                    <p className="fs-16 text-white mb-4">Support</p>
                    <ul className="list-unstyled footer-list mb-0">
                      <li>
                        <a href="contact.html">
                          <i className="mdi mdi-chevron-right" /> Help Center
                        </a>
                      </li>
                      <li>
                        <a href="faqs.html">
                          <i className="mdi mdi-chevron-right" /> FAQ'S
                        </a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">
                          <i className="mdi mdi-chevron-right" /> Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </section>
          {/* END FOOTER */}
          {/* START FOOTER-ALT */}
          <div className="footer-alt">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <p className="text-white-50 text-center mb-0">
                    © Jobcy - Job Listing Page Template by{" "}
                    <a
                      href="https://themeforest.net/search/themesdesign"
                      target="_blank"
                      className="text-reset text-decoration-underline"
                    >
                      Themesdesign
                    </a>
                  </p>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </div>
          {/* END FOOTER */}
          {/* Style switcher */}
          <div
            id="style-switcher"
            onclick="toggleSwitcher()"
            style={{ left: "-165px" }}
          >
            <div>
              <h6>Select your color</h6>
              <ul className="pattern list-unstyled mb-0">
                <li>
                  <a
                    className="color-list color1"
                    href="javascript: void(0);"
                    onclick="setColorGreen()"
                  />
                </li>
                <li>
                  <a
                    className="color-list color2"
                    href="javascript: void(0);"
                    onclick="setColor('blue')"
                  />
                </li>
                <li>
                  <a
                    className="color-list color3"
                    href="javascript: void(0);"
                    onclick="setColor('green')"
                  />
                </li>
              </ul>
              <div className="mt-3">
                <h6>Light/dark Layout</h6>
                <div className="text-center mt-3">
                  {/* light-dark mode */}
                  <a
                    href="javascript: void(0);"
                    id="mode"
                    className="mode-btn text-white rounded-3"
                  >
                    <i className="uil uil-brightness mode-dark mx-auto" />
                    <i className="uil uil-moon mode-light" />
                  </a>
                  {/* END light-dark Mode */}
                </div>
              </div>
            </div>
            <div className="bottom d-none d-md-block">
              <a href="javascript: void(0);" className="settings rounded-end">
                <i className="mdi mdi-cog mdi-spin" />
              </a>
            </div>
          </div>
          {/* end switcher*/}
          {/*start back-to-top*/}
          <button onclick="topFunction()" id="back-to-top">
            <i className="mdi mdi-arrow-up" />
          </button>
          {/*end back-to-top*/}
        </div>
        {/* end main content*/}
      </div>
      {/* END layout-wrapper */}
      {/* JAVASCRIPT */}
      {/* Choice Js */}
      {/* Switcher Js */}
    </>
  );
};

export default BlogsPage;
