import React from "react";

const CompanyDetailsPage = () => {
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
                            Jobcy Technology Pvt.Ltd
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
                                          Jobcy Technology Pvt.Ltd
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
                                          Jobcy Technology Pvt.Ltd
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
                                          Jobcy Technology Pvt.Ltd
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
                                          Jobcy Technology Pvt.Ltd
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
      {/* Light Box Js */}
      {/* Masonary Js */}
      {/* Choice Js */}
      {/* Switcher Js */}
    </>
  );
};

export default CompanyDetailsPage;
