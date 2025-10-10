import React from "react";

const FaqPage = () => {
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
                      <h3 className="mb-4">FAQ'S</h3>
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
                              FAQ'S{" "}
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
            {/* START FAQ-PAGE */}
            <section className="section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <ul
                      className="faq-menu nav nav-fill nav-pills justify-content-center"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="general-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#generalTab"
                          type="button"
                          role="tab"
                          aria-controls="generalTab"
                          aria-selected="true"
                        >
                          General
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="buying-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#buyingTab"
                          type="button"
                          role="tab"
                          aria-controls="buying"
                          aria-selected="false"
                        >
                          Buying
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="payment-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#paymentTab"
                          type="button"
                          role="tab"
                          aria-controls="payment"
                          aria-selected="false"
                        >
                          Payment
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="support-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#supportTab"
                          type="button"
                          role="tab"
                          aria-controls="support"
                          aria-selected="false"
                        >
                          Support
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row align-items-center mt-5">
                  <div className="col-lg-12">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="generalTab"
                        role="tabpanel"
                        aria-labelledby="general-tab"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div
                              className="accordion accordion-flush faq-box"
                              id="general"
                            >
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="generalOne"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#general-one"
                                    aria-expanded="true"
                                    aria-controls="general-one"
                                  >
                                    Where does it come from ?
                                  </button>
                                </h2>
                                <div
                                  id="general-one"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="generalOne"
                                  data-bs-parent="#general"
                                >
                                  <div className="accordion-body text-muted ">
                                    If several languages coalesce, the grammar
                                    of the resulting language is more simple and
                                    regular than that of the individual
                                    languages. The new common language will be
                                    more simple and regular than the existing
                                    European languages.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="generaltwo"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#general-two"
                                    aria-expanded="false"
                                    aria-controls="general-two"
                                  >
                                    How Jobcy Work ?
                                  </button>
                                </h2>
                                <div
                                  id="general-two"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="generaltwo"
                                  data-bs-parent="#general"
                                >
                                  <div className="accordion-body text-muted ">
                                    To an English person, it will seem like
                                    simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is.
                                    The European languages are members of the
                                    same family. Their separate existence is a
                                    myth.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="generalthree"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#general-three"
                                    aria-expanded="false"
                                    aria-controls="general-three"
                                  >
                                    What is your shipping policy?
                                  </button>
                                </h2>
                                <div
                                  id="general-three"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="generalthree"
                                  data-bs-parent="#general"
                                >
                                  <div className="accordion-body text-muted">
                                    Everyone realizes why a new common language
                                    would be desirable: one could refuse to pay
                                    expensive translators. To achieve this, it
                                    would be necessary to have uniform grammar,
                                    pronunciation and more common words.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                            </div>
                            {/*end accordion*/}
                          </div>
                          {/*end col*/}
                          <div className="col-lg-6">
                            <div
                              className="accordion accordion-flush faq-box"
                              id="generalTwo"
                            >
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="generalfour"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#general-four"
                                    aria-expanded="true"
                                    aria-controls="general-four"
                                  >
                                    Where To Place A FAQ Page
                                  </button>
                                </h2>
                                <div
                                  id="general-four"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="generalfour"
                                  data-bs-parent="#generalTwo"
                                >
                                  <div className="accordion-body text-muted ">
                                    Just as the name suggests, a FAQ page is all
                                    about simple questions and answers. Gather
                                    common questions your customers have asked
                                    from your support team and include them in
                                    the FAQ, Use categories to organize
                                    questions related to specific topics.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="generalfive"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#general-five"
                                    aria-expanded="false"
                                    aria-controls="general-five"
                                  >
                                    Why do we use it ?
                                  </button>
                                </h2>
                                <div
                                  id="general-five"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="generalfive"
                                  data-bs-parent="#generalTwo"
                                >
                                  <div className="accordion-body text-muted ">
                                    It will be as simple as Occidental; in fact,
                                    it will be Occidental. To an English person,
                                    it will seem like simplified English, as a
                                    skeptical Cambridge friend of mine told me
                                    what Occidental.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="generalsix"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#general-six"
                                    aria-expanded="false"
                                    aria-controls="general-six"
                                  >
                                    Where can I get some ?
                                  </button>
                                </h2>
                                <div
                                  id="general-six"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="generalsix"
                                  data-bs-parent="#generalTwo"
                                >
                                  <div className="accordion-body text-muted ">
                                    To an English person, it will seem like
                                    simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is.
                                    The European languages are members of the
                                    same family. Their separate existence is a
                                    myth.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                            </div>
                            {/*end accordion*/}
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      {/*end general-tab*/}
                      <div
                        className="tab-pane fade"
                        id="buyingTab"
                        role="tabpanel"
                        aria-labelledby="buying-tab"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div
                              className="accordion accordion-flush faq-box"
                              id="buying"
                            >
                              <div className="accordion-item mt-4 border-0">
                                <h2 className="accordion-header" id="buyingone">
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#buying-one"
                                    aria-expanded="true"
                                    aria-controls="buying-one"
                                  >
                                    Where does it come from ?
                                  </button>
                                </h2>
                                <div
                                  id="buying-one"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="buyingone"
                                  data-bs-parent="#buying"
                                >
                                  <div className="accordion-body text-muted">
                                    If several languages coalesce, the grammar
                                    of the resulting language is more simple and
                                    regular than that of the individual
                                    languages. The new common language will be
                                    more simple and regular than the existing
                                    European languages.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2 className="accordion-header" id="buyingtwo">
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#buying-two"
                                    aria-expanded="false"
                                    aria-controls="buying-two"
                                  >
                                    How Jobcy Work ?
                                  </button>
                                </h2>
                                <div
                                  id="buying-two"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="buyingtwo"
                                  data-bs-parent="#buying"
                                >
                                  <div className="accordion-body text-muted">
                                    To an English person, it will seem like
                                    simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is.
                                    The European languages are members of the
                                    same family. Their separate existence is a
                                    myth.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="buyingthree"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#buying-three"
                                    aria-expanded="false"
                                    aria-controls="buying-three"
                                  >
                                    What is your shipping policy?
                                  </button>
                                </h2>
                                <div
                                  id="buying-three"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="buyingthree"
                                  data-bs-parent="#buying"
                                >
                                  <div className="accordion-body text-muted ">
                                    Everyone realizes why a new common language
                                    would be desirable: one could refuse to pay
                                    expensive translators. To achieve this, it
                                    would be necessary to have uniform grammar,
                                    pronunciation and more common words.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                            </div>
                            {/*end accordion*/}
                          </div>
                          {/*end col*/}
                          <div className="col-lg-6">
                            <div
                              className="accordion accordion-flush faq-box"
                              id="buyingTwo"
                            >
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="buyingfour"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#buying-four"
                                    aria-expanded="true"
                                    aria-controls="buying-four"
                                  >
                                    Where To Place A FAQ Page
                                  </button>
                                </h2>
                                <div
                                  id="buying-four"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="buyingfour"
                                  data-bs-parent="#buyingTwo"
                                >
                                  <div className="accordion-body text-muted">
                                    Just as the name suggests, a FAQ page is all
                                    about simple questions and answers. Gather
                                    common questions your customers have asked
                                    from your support team and include them in
                                    the FAQ, Use categories to organize
                                    questions related to specific topics.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="buyingfive"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#buying-five"
                                    aria-expanded="false"
                                    aria-controls="buying-five"
                                  >
                                    Why do we use it ?
                                  </button>
                                </h2>
                                <div
                                  id="buying-five"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="buyingfive"
                                  data-bs-parent="#buyingTwo"
                                >
                                  <div className="accordion-body text-muted">
                                    It will be as simple as Occidental; in fact,
                                    it will be Occidental. To an English person,
                                    it will seem like simplified English, as a
                                    skeptical Cambridge friend of mine told me
                                    what Occidental.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2 className="accordion-header" id="buyingsix">
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#buying-six"
                                    aria-expanded="false"
                                    aria-controls="buying-six"
                                  >
                                    Where can I get some ?
                                  </button>
                                </h2>
                                <div
                                  id="buying-six"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="buyingsix"
                                  data-bs-parent="#buyingTwo"
                                >
                                  <div className="accordion-body text-muted">
                                    To an English person, it will seem like
                                    simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is.
                                    The European languages are members of the
                                    same family. Their separate existence is a
                                    myth.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                            </div>
                            {/*end accordion*/}
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      {/*end buying-tab*/}
                      <div
                        className="tab-pane fade"
                        id="paymentTab"
                        role="tabpanel"
                        aria-labelledby="payment-tab"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div
                              className="accordion accordion-flush faq-box"
                              id="payment"
                            >
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="paymentone"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#payment-one"
                                    aria-expanded="true"
                                    aria-controls="payment-one"
                                  >
                                    Where does it come from ?
                                  </button>
                                </h2>
                                <div
                                  id="payment-one"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="paymentone"
                                  data-bs-parent="#payment"
                                >
                                  <div className="accordion-body text-muted">
                                    If several languages coalesce, the grammar
                                    of the resulting language is more simple and
                                    regular than that of the individual
                                    languages. The new common language will be
                                    more simple and regular than the existing
                                    European languages.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="paymenttwo"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#payment-two"
                                    aria-expanded="false"
                                    aria-controls="payment-two"
                                  >
                                    How Jobcy Work ?
                                  </button>
                                </h2>
                                <div
                                  id="payment-two"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="paymenttwo"
                                  data-bs-parent="#payment"
                                >
                                  <div className="accordion-body text-muted">
                                    To an English person, it will seem like
                                    simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is.
                                    The European languages are members of the
                                    same family. Their separate existence is a
                                    myth.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="paymentthree"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#payment-three"
                                    aria-expanded="false"
                                    aria-controls="payment-three"
                                  >
                                    What is your shipping policy?
                                  </button>
                                </h2>
                                <div
                                  id="payment-three"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="paymentthree"
                                  data-bs-parent="#payment"
                                >
                                  <div className="accordion-body text-muted">
                                    Everyone realizes why a new common language
                                    would be desirable: one could refuse to pay
                                    expensive translators. To achieve this, it
                                    would be necessary to have uniform grammar,
                                    pronunciation and more common words.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                            </div>
                            {/*end accordion*/}
                          </div>
                          {/*end col*/}
                          <div className="col-lg-6">
                            <div
                              className="accordion accordion-flush faq-box"
                              id="paymentTwo"
                            >
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="paymentfour"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#payment-four"
                                    aria-expanded="true"
                                    aria-controls="payment-four"
                                  >
                                    Where To Place A FAQ Page
                                  </button>
                                </h2>
                                <div
                                  id="payment-four"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="paymentfour"
                                  data-bs-parent="#paymentTwo"
                                >
                                  <div className="accordion-body text-muted">
                                    Just as the name suggests, a FAQ page is all
                                    about simple questions and answers. Gather
                                    common questions your customers have asked
                                    from your support team and include them in
                                    the FAQ, Use categories to organize
                                    questions related to specific topics.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="paymentfive"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#payment-five"
                                    aria-expanded="false"
                                    aria-controls="payment-five"
                                  >
                                    Why do we use it ?
                                  </button>
                                </h2>
                                <div
                                  id="payment-five"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="paymentfive"
                                  data-bs-parent="#paymentTwo"
                                >
                                  <div className="accordion-body text-muted">
                                    It will be as simple as Occidental; in fact,
                                    it will be Occidental. To an English person,
                                    it will seem like simplified English, as a
                                    skeptical Cambridge friend of mine told me
                                    what Occidental.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="paymentsix"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#payment-six"
                                    aria-expanded="false"
                                    aria-controls="payment-six"
                                  >
                                    Where can I get some ?
                                  </button>
                                </h2>
                                <div
                                  id="payment-six"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="paymentsix"
                                  data-bs-parent="#paymentTwo"
                                >
                                  <div className="accordion-body text-muted">
                                    To an English person, it will seem like
                                    simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is.
                                    The European languages are members of the
                                    same family. Their separate existence is a
                                    myth.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                            </div>
                            {/*end accordion*/}
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      {/*end payment-tab*/}
                      <div
                        className="tab-pane fade"
                        id="supportTab"
                        role="tabpanel"
                        aria-labelledby="support-tab"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div
                              className="accordion accordion-flush faq-box"
                              id="support"
                            >
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="supportone"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#support-one"
                                    aria-expanded="true"
                                    aria-controls="support-one"
                                  >
                                    Where does it come from ?
                                  </button>
                                </h2>
                                <div
                                  id="support-one"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="supportone"
                                  data-bs-parent="#support"
                                >
                                  <div className="accordion-body text-muted">
                                    If several languages coalesce, the grammar
                                    of the resulting language is more simple and
                                    regular than that of the individual
                                    languages. The new common language will be
                                    more simple and regular than the existing
                                    European languages.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="supporttwo"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#support-two"
                                    aria-expanded="false"
                                    aria-controls="support-two"
                                  >
                                    How Jobcy Work ?
                                  </button>
                                </h2>
                                <div
                                  id="support-two"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="supporttwo"
                                  data-bs-parent="#support"
                                >
                                  <div className="accordion-body text-muted">
                                    To an English person, it will seem like
                                    simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is.
                                    The European languages are members of the
                                    same family. Their separate existence is a
                                    myth.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="supportthree"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#support-three"
                                    aria-expanded="false"
                                    aria-controls="support-three"
                                  >
                                    What is your shipping policy?
                                  </button>
                                </h2>
                                <div
                                  id="support-three"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="supportthree"
                                  data-bs-parent="#support"
                                >
                                  <div className="accordion-body text-muted">
                                    Everyone realizes why a new common language
                                    would be desirable: one could refuse to pay
                                    expensive translators. To achieve this, it
                                    would be necessary to have uniform grammar,
                                    pronunciation and more common words.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                            </div>
                            {/*end accordion*/}
                          </div>
                          {/*end col*/}
                          <div className="col-lg-6">
                            <div
                              className="accordion accordion-flush faq-box"
                              id="supportTwo"
                            >
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="supportfour"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#support-four"
                                    aria-expanded="true"
                                    aria-controls="support-four"
                                  >
                                    Where To Place A FAQ Page
                                  </button>
                                </h2>
                                <div
                                  id="support-four"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="supportfour"
                                  data-bs-parent="#supportTwo"
                                >
                                  <div className="accordion-body text-muted">
                                    Just as the name suggests, a FAQ page is all
                                    about simple questions and answers. Gather
                                    common questions your customers have asked
                                    from your support team and include them in
                                    the FAQ, Use categories to organize
                                    questions related to specific topics.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="supportfive"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#support-five"
                                    aria-expanded="false"
                                    aria-controls="support-five"
                                  >
                                    Why do we use it ?
                                  </button>
                                </h2>
                                <div
                                  id="support-five"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="supportfive"
                                  data-bs-parent="#supportTwo"
                                >
                                  <div className="accordion-body text-muted">
                                    It will be as simple as Occidental; in fact,
                                    it will be Occidental. To an English person,
                                    it will seem like simplified English, as a
                                    skeptical Cambridge friend of mine told me
                                    what Occidental.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                              <div className="accordion-item mt-4 border-0">
                                <h2
                                  className="accordion-header"
                                  id="supportsix"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#support-six"
                                    aria-expanded="false"
                                    aria-controls="support-six"
                                  >
                                    Where can I get some ?
                                  </button>
                                </h2>
                                <div
                                  id="support-six"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="supportsix"
                                  data-bs-parent="#supportTwo"
                                >
                                  <div className="accordion-body text-muted">
                                    To an English person, it will seem like
                                    simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is.
                                    The European languages are members of the
                                    same family. Their separate existence is a
                                    myth.
                                  </div>
                                </div>
                              </div>
                              {/*end accordion-item*/}
                            </div>
                            {/*end accordion*/}
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      {/*end support-tab*/}
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-12">
                    <div className="text-center mt-5">
                      <a
                        href="contact.html"
                        className="btn btn-primary btn-hover mt-2"
                      >
                        <i className="uil uil-phone" /> Contact Us
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-warning btn-hover mt-2 ms-md-2"
                      >
                        <i className="uil uil-envelope" /> Email Now
                      </a>
                    </div>
                  </div>
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
            {/* END FAQ-PAGE */}
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
    </>
  );
};

export default FaqPage;
