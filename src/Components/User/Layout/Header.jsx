import React from 'react';

const Header = () => {
  const userId = localStorage.getItem("userId");
  
  return (
    <div>
      <>
        <div>
          {/* START TOP-BAR */}
          <div className="top-bar bg-primary">
            <div className="container-fluid custom-container">
              <div className="row g-0 align-items-center">
                <div className="col-md-3">
                  <ul className="list-inline mb-0 text-center text-white text-md-start">
                    <li className="list-inline-item">
                      <p className="fs-13 mb-0">
                        {" "}
                        <i className="mdi mdi-map-marker" /> Your Location:{" "}
                        <a href="#" className="text-white">
                          Loading...
                        </a>
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <ul className="topbar-social-menu list-inline mb-0">
                        <li className="list-inline-item">
                          <a
                            href="#"
                            className="social-link text-white"
                          >
                            <i className="uil uil-whatsapp" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="#"
                            className="social-link text-white"
                          >
                            <i className="uil uil-facebook-messenger-alt" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="#"
                            className="social-link text-white"
                          >
                            <i className="uil uil-instagram" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="#"
                            className="social-link text-white"
                          >
                            <i className="uil uil-envelope" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="#"
                            className="social-link text-white"
                          >
                            <i className="uil uil-twitter-alt" />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/*end col*/}
                <div className="col-md-9">
                  <ul className="list-inline mb-0 text-center text-md-end">
                    <li className="list-inline-item py-2 me-2 align-middle">
                      <a
                        href="/"
                        className="btn btn-warning fw-bold fs-13 py-1"
                      >
                        <i className="uil uil-lock" />
                        Middle East Jobs
                      </a>
                    </li>
                    <li className="list-inline-item py-2 me-2 align-middle">
                      <a
                        href="post-jobs.php"
                        className="btn btn-warning text-primary fw-bold fs-13 py-1"
                      >
                        <i className="uil uil-lock" />
                        Europe Jobs
                      </a>
                    </li>
                    <li className="list-inline-item py-2 me-2 align-middle">
                      <a
                        href="post-jobs.php"
                        className="btn btn-warning fw-bold fs-13 py-1"
                      >
                        <i className="uil uil-lock" />
                        Asia Jobs
                      </a>
                    </li>{" "}
                    &nbsp; <span className="text-white">|</span> &nbsp; &nbsp;
                    <li className="list-inline-item py-2 me-2 align-middle">
                      <a
                        href="post-jobs.php"
                        className="btn btn-white text-primary fw-bold fs-13 py-1"
                      >
                        <i className="uil uil-lock" />
                        Post Jobs FREE
                      </a>
                    </li>
                    <li className="list-inline-item py-2 me-2 align-middle">
                      <a
                        href="#signupModal"
                        className="btn btn-white fw-bold fs-13 py-1"
                        data-bs-toggle="modal"
                      >
                        <i className="uil uil-lock" />
                        Book FREE Demo
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
                            href="#"
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
                            href="#"
                            className="dropdown-item notify-item language"
                            data-lang="sp"
                          >
                            <img
                              src="assets/images/flags/uae.webp"
                              alt="user-image"
                              className="me-1"
                              height={12}
                            />
                            <span className="align-middle">Arabic</span>
                          </a>
                          {/* item*/}
                          <a
                            href="#"
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
                            href="#"
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
                            href="#"
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
                  height={60}
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
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-hover">
                    <a
                      className="nav-link"
                      href="#"
                      id="jobsdropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      JobsStorm <div className="arrow-down" />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-center"
                      aria-labelledby="jobsdropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/about-us">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Careers
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/blogs-pages">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/price-page">
                          Plans &amp; Pricing
                        </a>
                      </li>
                      <a className="dropdown-item" href="#">
                        Priacy &amp; Policy
                      </a>
                      <li>
                        <a className="dropdown-item" href="/faq-pages">
                          Faqs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown dropdown-hover">
                    <a
                      className="nav-link"
                      href="#"
                      id="pagesdoropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Jobs
                      <div className="arrow-down" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-lg dropdown-menu-center"
                      aria-labelledby="pagesdoropdown"
                    >
                      <div className="row">
                        <div className="col-lg-4">
                          <span className="dropdown-header text-primary fw-bold">
                            Jobs by Category
                          </span>
                          <hr />
                          <div>
                            <a className="dropdown-item" href="job-list.html">
                              IT Jobs
                            </a>
                            <a className="dropdown-item" href="job-list-2.html">
                              Accounting &amp; Banking
                            </a>
                            <a className="dropdown-item" href="job-grid.html">
                              Tele-Calling
                            </a>
                            <a className="dropdown-item" href="job-grid-2.html">
                              Sales &amp; Marketing
                            </a>
                            <a className="dropdown-item" href="job-details.html">
                              Admin &amp; Operations
                            </a>
                            <a className="dropdown-item" href="job-categories.html">
                              All Other Jobs
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-4">
                          <span className="dropdown-header text-primary fw-bold">
                            Jobs by Location
                          </span>
                          <hr />
                          <div>
                            <a className="dropdown-item" href="candidate-list.html">
                              India
                            </a>
                            <a className="dropdown-item" href="candidate-grid.html">
                              Middle East
                            </a>
                            <a
                              className="dropdown-item"
                              href="candidate-details.html"
                            >
                              UAE
                            </a>
                            <a className="dropdown-item" href="company-list.html">
                              Singapore
                            </a>
                            <a className="dropdown-item" href="company-list.html">
                              Explore Locations
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-4">
                          <span className="dropdown-header text-primary fw-bold">
                            Jobs by Experience
                          </span>
                          <hr />
                          <div>
                            <a className="dropdown-item" href="sign-up.html">
                              Fresher
                            </a>
                            <a className="dropdown-item" href="sign-in.html">
                              0 to 2 Years
                            </a>
                            <a className="dropdown-item" href="sign-out.html">
                              2 to 5 Years
                            </a>
                            <a className="dropdown-item" href="reset-password.html">
                              5 to 10 Years
                            </a>
                            <a className="dropdown-item" href="coming-soon.html">
                              10 to 15 Years
                            </a>
                            <a className="dropdown-item" href="404-error.html">
                              15+ Years
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                    </div>
                  </li>
                  {/*end dropdown*/}
                  
                  {/* Conditionally render Employers dropdown - only show if userId is NOT present */}
                  {!userId && (
                    <li className="nav-item dropdown dropdown-hover">
                      <a
                        className="nav-link"
                        href="#"
                        id="productdropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Employers
                        <div className="arrow-down" />
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-center"
                        aria-labelledby="productdropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="/employer-login">
                            Login | Signup
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/associated-company-list">
                            Assocated Companies
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/saved-candidate-page">
                            Search Candidates
                          </a>
                        </li>
                      </ul>
                    </li>
                  )}
                  {/*end dropdown*/}
                  
                  <li className="nav-item">
                    <a href="/contact-us" className="nav-link">
                      Events &amp; Ads
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/contact-us" className="nav-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
                {/*end navbar-nav*/}
              </div>
              {/*end navabar-collapse*/}
              
              {/* Conditionally render header menu based on userId */}
              {userId ? (
                // Show notifications and user profile when logged in
                <ul className="header-menu list-inline d-flex align-items-center mb-0">
                  <li className="list-inline-item dropdown me-4">
                    <a
                      href="#"
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
                          href="#"
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
                          href="#"
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
                          href="#"
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
                          href="#"
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
                          href="#"
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
                        <a className="primary-link fs-13" href="#">
                          <i className="mdi mdi-arrow-right-circle me-1" />{" "}
                          <span>View More..</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item dropdown">
                    <a
                      href="#"
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
                        <a className="dropdown-item" href="my-profile.php">
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a 
                          className="dropdown-item" 
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            localStorage.removeItem("userId");
                            localStorage.removeItem("token");
                            localStorage.removeItem("user");
                            window.location.href = "/candidate-login";
                          }}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              ) : (
                // Show login/signup buttons when not logged in
                <ul className="header-menu list-inline d-flex align-items-center mb-0">
                  <li className="list-inline-item">
                    <a 
                      href="/candidate-login" 
                      className="btn btn-primary btn-sm me-2"
                    >
                      <i className="uil uil-sign-in-alt me-1" />
                      Login
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a 
                      href="/candidate-signup" 
                      className="btn btn-outline-primary btn-sm"
                    >
                      <i className="uil uil-user-plus me-1" />
                      Sign Up
                    </a>
                  </li>
                </ul>
              )}
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
                      <p align="center">
                        <img
                          src="assets/images/logo-dark.png"
                          height={60}
                          alt=""
                          className="logo-dark"
                        />
                      </p>
                      <hr />
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
                                href="#"
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
                            <b>Login</b>{" "}
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
        </div>
      </>
    </div>
  );
};

export default Header;