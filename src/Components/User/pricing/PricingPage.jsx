import React from "react";

const PricingPage = () => {
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
        {/* START TOP-BAR */}
        <div className="top-bar">
          <div className="container-fluid custom-container">
            <div className="row g-0 align-items-center">
              <div className="col-md-7">
                <ul className="list-inline mb-0 text-center text-md-start">
                  <li className="list-inline-item">
                    <p className="fs-13 mb-0">
                      {" "}
                      <i className="mdi mdi-map-marker" /> Your Location:{" "}
                      <a href="javascript:void(0)" className="text-dark">
                        New Caledonia
                      </a>
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <ul className="topbar-social-menu list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link">
                          <i className="uil uil-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link">
                          <i className="uil uil-facebook-messenger-alt" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link">
                          <i className="uil uil-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link">
                          <i className="uil uil-envelope" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link">
                          <i className="uil uil-twitter-alt" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*end col*/}
              <div className="col-md-5">
                <ul className="list-inline mb-0 text-center text-md-end">
                  <li className="list-inline-item py-2 me-2 align-middle">
                    <a
                      href="#signupModal"
                      className="text-dark fw-medium fs-13"
                      data-bs-toggle="modal"
                    >
                      <i className="uil uil-lock" />
                      Sign Up
                    </a>
                  </li>
                  <li className="list-inline-item align-middle">
                    <div className="dropdown d-inline-block language-switch">
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          id="header-lang-img"
                          src="assets/images/flags/us.jpg"
                          alt="Header Language"
                          height={16}
                        />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item notify-item language"
                          data-lang="eng"
                        >
                          <img
                            src="assets/images/flags/us.jpg"
                            alt="user-image"
                            className="me-1"
                            height={12}
                          />
                          <span className="align-middle">English</span>
                        </a>
                        {/* item*/}
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item notify-item language"
                          data-lang="sp"
                        >
                          <img
                            src="assets/images/flags/spain.jpg"
                            alt="user-image"
                            className="me-1"
                            height={12}
                          />
                          <span className="align-middle">Spanish</span>
                        </a>
                        {/* item*/}
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item notify-item language"
                          data-lang="gr"
                        >
                          <img
                            src="assets/images/flags/germany.jpg"
                            alt="user-image"
                            className="me-1"
                            height={12}
                          />
                          <span className="align-middle">German</span>
                        </a>
                        {/* item*/}
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item notify-item language"
                          data-lang="it"
                        >
                          <img
                            src="assets/images/flags/italy.jpg"
                            alt="user-image"
                            className="me-1"
                            height={12}
                          />
                          <span className="align-middle">Italian</span>
                        </a>
                        {/* item*/}
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item notify-item language"
                          data-lang="ru"
                        >
                          <img
                            src="assets/images/flags/russia.jpg"
                            alt="user-image"
                            className="me-1"
                            height={12}
                          />
                          <span className="align-middle">Russian</span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </div>
        {/* END TOP-BAR */}
        {/*Navbar Start*/}
        <nav className="navbar navbar-expand-lg fixed-top sticky" id="navbar">
          <div className="container-fluid custom-container">
            <a
              className="navbar-brand text-dark fw-bold me-auto"
              href="index-2.html"
            >
              <img
                src="assets/images/logo-dark.png"
                height={22}
                alt=""
                className="logo-dark"
              />
              <img
                src="assets/images/logo-light.png"
                height={22}
                alt=""
                className="logo-light"
              />
            </a>
            <div>
              <button
                className="navbar-toggler me-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-label="Toggle navigation"
              >
                <i className="mdi mdi-menu" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto navbar-center">
                <li className="nav-item dropdown dropdown-hover">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    id="homedrop"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Home <div className="arrow-down" />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-center"
                    aria-labelledby="homedrop"
                  >
                    <li>
                      <a className="dropdown-item" href="index-2.html">
                        Home 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index-3.html">
                        Home 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index-4.html">
                        Home 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-hover">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    id="jobsdropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Company <div className="arrow-down" />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-center"
                    aria-labelledby="jobsdropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="services.html">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="team.html">
                        Team
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pricing.html">
                        Pricing
                      </a>
                    </li>
                    <a className="dropdown-item" href="privacy-policy.html">
                      Priacy &amp; Policy
                    </a>
                    <li>
                      <a className="dropdown-item" href="faqs.html">
                        Faqs
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-hover">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    id="pagesdoropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                    <div className="arrow-down" />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-center"
                    aria-labelledby="pagesdoropdown"
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <span className="dropdown-header">Jobs</span>
                        <div>
                          <a className="dropdown-item" href="job-list.html">
                            Job List
                          </a>
                          <a className="dropdown-item" href="job-list-2.html">
                            Job List-2
                          </a>
                          <a className="dropdown-item" href="job-grid.html">
                            Job Grid
                          </a>
                          <a className="dropdown-item" href="job-grid-2.html">
                            Job Grid-2
                          </a>
                          <a className="dropdown-item" href="job-details.html">
                            Job Details
                          </a>
                          <a
                            className="dropdown-item"
                            href="job-categories.html"
                          >
                            Jobs Categories
                          </a>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-4">
                        <span className="dropdown-header">
                          Candidates / Companys
                        </span>
                        <div>
                          <a
                            className="dropdown-item"
                            href="candidate-list.html"
                          >
                            Candidate List
                          </a>
                          <a
                            className="dropdown-item"
                            href="candidate-grid.html"
                          >
                            Candidate Grid
                          </a>
                          <a
                            className="dropdown-item"
                            href="candidate-details.html"
                          >
                            Candidate Details
                          </a>
                          <a className="dropdown-item" href="company-list.html">
                            Company List
                          </a>
                          <a
                            className="dropdown-item"
                            href="company-details.html"
                          >
                            Company Details
                          </a>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-4">
                        <span className="dropdown-header">Extra Pages</span>
                        <div>
                          <a className="dropdown-item" href="sign-up.html">
                            Sign Up
                          </a>
                          <a className="dropdown-item" href="sign-in.html">
                            Sign In
                          </a>
                          <a className="dropdown-item" href="sign-out.html">
                            Sign Out
                          </a>
                          <a
                            className="dropdown-item"
                            href="reset-password.html"
                          >
                            Reset Password
                          </a>
                          <a className="dropdown-item" href="coming-soon.html">
                            Coming Soon
                          </a>
                          <a className="dropdown-item" href="404-error.html">
                            404 Error
                          </a>
                          <a className="dropdown-item" href="components.html">
                            Components
                          </a>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                  </div>
                </li>
                {/*end dropdown*/}
                <li className="nav-item dropdown dropdown-hover">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    id="productdropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blog
                    <div className="arrow-down" />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-center"
                    aria-labelledby="productdropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-grid.html">
                        Blog Grid
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-modern.html">
                        Blog Modern
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-masonry.html">
                        Blog Masonry
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-details.html">
                        Blog details
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-author.html">
                        Blog Author
                      </a>
                    </li>
                  </ul>
                </li>
                {/*end dropdown*/}
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
              {/*end navbar-nav*/}
            </div>
            {/*end navabar-collapse*/}
            <ul className="header-menu list-inline d-flex align-items-center mb-0">
              <li className="list-inline-item dropdown me-4">
                <a
                  href="javascript:void(0)"
                  className="header-item noti-icon position-relative"
                  id="notification"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-bell fs-22" />
                  <div className="count position-absolute">3</div>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-sm dropdown-menu-end p-0"
                  aria-labelledby="notification"
                >
                  <div className="notification-header border-bottom bg-light">
                    <h6 className="mb-1"> Notification </h6>
                    <p className="text-muted fs-13 mb-0">
                      You have 4 unread Notification
                    </p>
                  </div>
                  <div className="notification-wrapper dropdown-scroll">
                    <a
                      href="javascript:void(0)"
                      className="text-dark notification-item d-block active"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar-xs bg-primary text-white rounded-circle text-center">
                            <i className="uil uil-user-check" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mt-0 mb-1 fs-14">
                            22 verified registrations
                          </h6>
                          <p className="mb-0 fs-12 text-muted">
                            <i className="mdi mdi-clock-outline" />{" "}
                            <span>3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                    {/*end notification-item*/}
                    <a
                      href="javascript:void(0)"
                      className="text-dark notification-item d-block"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <img
                            src="assets/images/user/img-02.jpg"
                            className="rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mt-0 mb-1 fs-14">James Lemire</h6>
                          <p className="text-muted fs-12 mb-0">
                            <i className="mdi mdi-clock-outline" />{" "}
                            <span>15 min ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                    {/*end notification-item*/}
                    <a
                      href="javascript:void(0)"
                      className="text-dark notification-item d-block"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <img
                            src="assets/images/featured-job/img-04.png"
                            className="rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mt-0 mb-1 fs-14">
                            Applications has been approved
                          </h6>
                          <p className="text-muted mb-0 fs-12">
                            <i className="mdi mdi-clock-outline" />{" "}
                            <span>45 min ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                    {/*end notification-item*/}
                    <a
                      href="javascript:void(0)"
                      className="text-dark notification-item d-block"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <img
                            src="assets/images/user/img-01.jpg"
                            className="rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mt-0 mb-1 fs-14">Kevin Stewart</h6>
                          <p className="text-muted mb-0 fs-12">
                            <i className="mdi mdi-clock-outline" />{" "}
                            <span>1 hour ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                    {/*end notification-item*/}
                    <a
                      href="javascript:void(0)"
                      className="text-dark notification-item d-block"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <img
                            src="assets/images/featured-job/img-01.png"
                            className="rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mt-0 mb-1 fs-15">Creative Agency</h6>
                          <p className="text-muted mb-0 fs-12">
                            <i className="mdi mdi-clock-outline" />{" "}
                            <span>2 hour ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                    {/*end notification-item*/}
                  </div>
                  {/*end notification-wrapper*/}
                  <div className="notification-footer border-top text-center">
                    <a className="primary-link fs-13" href="javascript:void(0)">
                      <i className="mdi mdi-arrow-right-circle me-1" />{" "}
                      <span>View More..</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-inline-item dropdown">
                <a
                  href="javascript:void(0)"
                  className="header-item"
                  id="userdropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/profile.jpg"
                    alt="mdo"
                    width={35}
                    height={35}
                    className="rounded-circle me-1"
                  />{" "}
                  <span className="d-none d-md-inline-block fw-medium">
                    Hi, Jansh
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userdropdown"
                >
                  <li>
                    <a className="dropdown-item" href="manage-jobs.html">
                      Manage Jobs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="bookmark-jobs.html">
                      Bookmarks Jobs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="profile.html">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="sign-out.html">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/*end header-menu*/}
          </div>
          {/*end container*/}
        </nav>
        {/* Navbar End */}
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
                      Start working with Jobcy that can provide everything you
                      need to generate awareness, drive traffic, connect.
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
      {/* Switcher Js */}
      {/* Counter Js */}
      {/* App Js */}
    </>
  );
};

export default PricingPage;
