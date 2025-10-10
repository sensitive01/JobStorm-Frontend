import React from "react";
import Loader from "../../Loader/Loader";

const SearchCandidate = () => {
  return (
    <>
      <Loader />

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
                      <h3 className="mb-4">Candidate Grid</h3>
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
                              Candidate Grid{" "}
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
            {/* START CANDIDATE-GRID */}
            <section className="section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="candidate-list-widgets mb-4">
                      <form action="#">
                        <div className="row g-2">
                          <div className="col-lg-3">
                            <div className="filler-job-form">
                              <i className="uil uil-briefcase-alt" />
                              <input
                                type="search"
                                className="form-control filter-job-input-box"
                                id="exampleFormControlInput1"
                                placeholder="Job, Company name... "
                              />
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-3">
                            <div className="filler-job-form">
                              <i className="uil uil-location-point" />
                              <select
                                className="form-select"
                                data-trigger=""
                                name="choices-single-location"
                                id="choices-single-location"
                                aria-label="Default select example"
                              >
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Åland Islands</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">
                                  Bolivia, Plurinational State of
                                </option>
                                <option value="BA">
                                  Bosnia and Herzegovina
                                </option>
                                <option value="BW">Botswana</option>
                                <option value="BV">Bouvet Island</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">
                                  British Indian Ocean Territory
                                </option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">
                                  Central African Republic
                                </option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CX">Christmas Island</option>
                                <option value="CC">
                                  Cocos (Keeling) Islands
                                </option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo</option>
                                <option value="CD">
                                  Congo, the Democratic Republic of the
                                </option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Côte d'Ivoire</option>
                                <option value="HR">Croatia</option>
                                <option value="CU">Cuba</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">
                                  Falkland Islands (Malvinas)
                                </option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="TF">
                                  French Southern Territories
                                </option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GG">Guernsey</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">
                                  Heard Island and McDonald Islands
                                </option>
                                <option value="VA">
                                  Holy See (Vatican City State)
                                </option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IR">
                                  Iran, Islamic Republic of
                                </option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IM">Isle of Man</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JE">Jersey</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KP">
                                  Korea, Democratic People's Republic of
                                </option>
                                <option value="KR">Korea, Republic of</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">
                                  Lao People's Democratic Republic
                                </option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">
                                  Libyan Arab Jamahiriya
                                </option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macao</option>
                                <option value="MK">
                                  Macedonia, the former Yugoslav Republic of
                                </option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">
                                  Micronesia, Federated States of
                                </option>
                                <option value="MD">Moldova, Republic of</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="AN">Netherlands Antilles</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">
                                  Northern Mariana Islands
                                </option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PS">
                                  Palestinian Territory, Occupied
                                </option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">Réunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russian Federation</option>
                                <option value="RW">Rwanda</option>
                                <option value="BL">Saint Barthélemy</option>
                                <option value="SH">
                                  Saint Helena, Ascension and Tristan da Cunha
                                </option>
                                <option value="KN">
                                  Saint Kitts and Nevis
                                </option>
                                <option value="LC">Saint Lucia</option>
                                <option value="MF">
                                  Saint Martin (French part)
                                </option>
                                <option value="PM">
                                  Saint Pierre and Miquelon
                                </option>
                                <option value="VC">
                                  Saint Vincent and the Grenadines
                                </option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">
                                  Sao Tome and Principe
                                </option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">
                                  South Georgia and the South Sandwich Islands
                                </option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">
                                  Svalbard and Jan Mayen
                                </option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">
                                  Taiwan, Province of China
                                </option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">
                                  Tanzania, United Republic of
                                </option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">
                                  Turks and Caicos Islands
                                </option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="UM">
                                  United States Minor Outlying Islands
                                </option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VE">
                                  Venezuela, Bolivarian Republic of
                                </option>
                                <option value="VN">Viet Nam</option>
                                <option value="VG">
                                  Virgin Islands, British
                                </option>
                                <option value="VI">Virgin Islands, U.S.</option>
                                <option value="WF">Wallis and Futuna</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                              </select>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-3">
                            <div className="filler-job-form">
                              <i className="uil uil-clipboard-notes" />
                              <select
                                className="form-select "
                                data-trigger=""
                                name="choices-single-categories"
                                id="choices-single-categories"
                                aria-label="Default select example"
                              >
                                <option value={4}>Accounting</option>
                                <option value={1}>IT &amp; Software</option>
                                <option value={3}>Marketing</option>
                                <option value={5}>Banking</option>
                              </select>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-3">
                            <div>
                              <a
                                href="javascript:void(0)"
                                className="btn btn-primary"
                              >
                                <i className="uil uil-filter" /> Filter
                              </a>
                              <a
                                href="javascript:void(0)"
                                className="btn btn-success ms-2"
                              >
                                <i className="uil uil-cog" /> Advance
                              </a>
                            </div>
                          </div>
                        </div>
                        {/*end row*/}
                      </form>
                      {/*end form*/}
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-7">
                    <div>
                      <h6 className="fs-16 mb-0">
                        {" "}
                        Showing 1 – 8 of 11 results{" "}
                      </h6>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-5">
                    <div className="candidate-list-widgets">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="selection-widget mt-3 mt-md-0">
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
                        <div className="col-md-6">
                          <div className="selection-widget mt-3 mt-md-0">
                            <select
                              className="form-select"
                              data-trigger=""
                              name="choices-candidate-page"
                              id="choices-candidate-page"
                              aria-label="Default select example"
                            >
                              <option value="all">All</option>
                              <option value={4}>4 per Page</option>
                              <option value={8}>8 per Page</option>
                              <option value={12}>12 per Page</option>
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
                <div className="candidate-list">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="candidate-grid-box bookmark-post card mt-4">
                        <div className="card-body p-4">
                          <div className="featured-label">
                            <span className="featured">featured</span>
                          </div>
                          <div className="d-flex mb-4">
                            <div className="flex-shrink-0 position-relative">
                              <img
                                src="assets/images/user/img-01.jpg"
                                alt=""
                                className="avatar-md rounded"
                              />
                              <span className="profile-active position-absolute badge rounded-circle bg-success">
                                <span className="visually-hidden">active</span>
                              </span>
                            </div>
                            <div className="ms-3">
                              <a
                                href="candidate-details.html"
                                className="primary-link"
                              >
                                <h5 className="fs-17">Charles Dickens</h5>
                              </a>
                              <span className="badge bg-info-subtle text-info fs-13">
                                $800/month
                              </span>
                            </div>
                          </div>
                          <ul className="list-inline d-flex justify-content-between align-items-center">
                            <li className="list-inline-item text-warning fs-17">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-half-full" />
                            </li>
                            <li className="list-inline-item">
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="border rounded mb-4">
                            <div className="row g-0">
                              <div className="col-lg-6">
                                <div className="border-end px-3 py-2">
                                  <p className="text-muted mb-0">
                                    Exp. : 0-3 Years
                                  </p>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-6">
                                <div className="px-3 py-2">
                                  <p className="text-muted mb-0">Freelancers</p>
                                </div>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          <p className="text-muted">
                            Some quick example text to build on the card title
                            and bulk the card's content Moltin gives you
                            platform.
                          </p>
                          <div className="mt-3">
                            <a
                              href="#hireNow"
                              data-bs-toggle="modal"
                              className="btn btn-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-account-check" /> Hire Now
                            </a>
                            <a
                              href="candidate-details.html"
                              className="btn btn-soft-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-eye" /> View Profile
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/*end card*/}
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="candidate-grid-box bookmark-post card mt-4">
                        <div className="card-body p-4">
                          <div className="d-flex mb-4">
                            <div className="flex-shrink-0 position-relative">
                              <img
                                src="assets/images/user/img-02.jpg"
                                alt=""
                                className="avatar-md rounded"
                              />
                              <span className="profile-active position-absolute badge rounded-circle bg-success">
                                <span className="visually-hidden">active</span>
                              </span>
                            </div>
                            <div className="ms-3">
                              <a
                                href="candidate-details.html"
                                className="primary-link"
                              >
                                <h5 className="fs-17">Gabriel Palmer</h5>
                              </a>
                              <span className="badge bg-info-subtle text-info fs-13">
                                $350/hrs
                              </span>
                            </div>
                          </div>
                          <ul className="list-inline d-flex justify-content-between align-items-center">
                            <li className="list-inline-item text-warning fs-17">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-half-full" />
                            </li>
                            <li className="list-inline-item">
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="border rounded mb-4">
                            <div className="row g-0">
                              <div className="col-lg-6">
                                <div className="border-end px-3 py-2">
                                  <p className="text-muted mb-0">
                                    Exp. : 3.5 Years
                                  </p>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-6">
                                <div className="px-3 py-2">
                                  <p className="text-muted mb-0">Freelancers</p>
                                </div>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          <p className="text-muted">
                            Some quick example text to build on the card title
                            and bulk the card's content Moltin gives you
                            platform.
                          </p>
                          <div className="mt-3">
                            <a
                              href="#hireNow"
                              data-bs-toggle="modal"
                              className="btn btn-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-account-check" /> Hire Now
                            </a>
                            <a
                              href="candidate-details.html"
                              className="btn btn-soft-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-eye" /> View Profile
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/*end card*/}
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="candidate-grid-box card mt-4">
                        <div className="card-body p-4">
                          <div className="featured-label">
                            <span className="featured">Urgent</span>
                          </div>
                          <div className="d-flex mb-4">
                            <div className="flex-shrink-0 position-relative">
                              <img
                                src="assets/images/user/img-03.jpg"
                                alt=""
                                className="avatar-md rounded"
                              />
                              <span className="profile-active position-absolute badge rounded-circle bg-danger">
                                <span className="visually-hidden">active</span>
                              </span>
                            </div>
                            <div className="ms-3">
                              <a
                                href="candidate-details.html"
                                className="primary-link"
                              >
                                <h5 className="fs-17">James Lemire</h5>
                              </a>
                              <span className="badge bg-info-subtle text-info fs-13">
                                $280/hrs
                              </span>
                            </div>
                          </div>
                          <ul className="list-inline d-flex justify-content-between align-items-center">
                            <li className="list-inline-item text-warning fs-17">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-half-full" />
                            </li>
                            <li className="list-inline-item">
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="border rounded mb-4">
                            <div className="row g-0">
                              <div className="col-lg-6">
                                <div className="border-end px-3 py-2">
                                  <p className="text-muted mb-0">
                                    Exp. : 4 Years
                                  </p>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-6">
                                <div className="px-3 py-2">
                                  <p className="text-muted mb-0">Freelancers</p>
                                </div>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          <p className="text-muted">
                            Some quick example text to build on the card title
                            and bulk the card's content Moltin gives you
                            platform.
                          </p>
                          <div className="mt-3">
                            <a
                              href="#hireNow"
                              data-bs-toggle="modal"
                              className="btn btn-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-account-check" /> Hire Now
                            </a>
                            <a
                              href="candidate-details.html"
                              className="btn btn-soft-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-eye" /> View Profile
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/*end card*/}
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="candidate-grid-box card mt-4">
                        <div className="card-body p-4">
                          <div className="d-flex mb-4">
                            <div className="flex-shrink-0 position-relative">
                              <img
                                src="assets/images/user/img-04.jpg"
                                alt=""
                                className="avatar-md rounded"
                              />
                              <span className="profile-active position-absolute badge rounded-circle bg-success">
                                <span className="visually-hidden">active</span>
                              </span>
                            </div>
                            <div className="ms-3">
                              <a
                                href="candidate-details.html"
                                className="primary-link"
                              >
                                <h5 className="fs-17">Rebecca Swartz</h5>
                              </a>
                              <span className="badge bg-info-subtle text-info fs-13">
                                $240/hrs
                              </span>
                            </div>
                          </div>
                          <ul className="list-inline d-flex justify-content-between align-items-center">
                            <li className="list-inline-item text-warning fs-17">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-half-full" />
                            </li>
                            <li className="list-inline-item">
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="border rounded mb-4">
                            <div className="row g-0">
                              <div className="col-lg-6">
                                <div className="border-end px-3 py-2">
                                  <p className="text-muted mb-0">
                                    Exp. : 2 Years
                                  </p>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-6">
                                <div className="px-3 py-2">
                                  <p className="text-muted mb-0">Freelancers</p>
                                </div>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          <p className="text-muted">
                            Some quick example text to build on the card title
                            and bulk the card's content Moltin gives you
                            platform.
                          </p>
                          <div className="mt-3">
                            <a
                              href="#hireNow"
                              data-bs-toggle="modal"
                              className="btn btn-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-account-check" /> Hire Now
                            </a>
                            <a
                              href="candidate-details.html"
                              className="btn btn-soft-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-eye" /> View Profile
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/*end card*/}
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="candidate-grid-box card mt-4">
                        <div className="card-body p-4">
                          <div className="d-flex mb-4">
                            <div className="flex-shrink-0 position-relative">
                              <img
                                src="assets/images/user/img-05.jpg"
                                alt=""
                                className="avatar-md rounded"
                              />
                              <span className="profile-active position-absolute badge rounded-circle bg-success">
                                <span className="visually-hidden">active</span>
                              </span>
                            </div>
                            <div className="ms-3">
                              <a
                                href="candidate-details.html"
                                className="primary-link"
                              >
                                <h5 className="fs-17">Betty Richards</h5>
                              </a>
                              <span className="badge bg-info-subtle text-info fs-13">
                                $198/hrs
                              </span>
                            </div>
                          </div>
                          <ul className="list-inline d-flex justify-content-between align-items-center">
                            <li className="list-inline-item text-warning fs-17">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-half-full" />
                            </li>
                            <li className="list-inline-item">
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="border rounded mb-4">
                            <div className="row g-0">
                              <div className="col-lg-6">
                                <div className="border-end px-3 py-2">
                                  <p className="text-muted mb-0">
                                    Exp. : 2 Years
                                  </p>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-6">
                                <div className="px-3 py-2">
                                  <p className="text-muted mb-0">Freelancers</p>
                                </div>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          <p className="text-muted">
                            Some quick example text to build on the card title
                            and bulk the card's content Moltin gives you
                            platform.
                          </p>
                          <div className="mt-3">
                            <a
                              href="#hireNow"
                              data-bs-toggle="modal"
                              className="btn btn-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-account-check" /> Hire Now
                            </a>
                            <a
                              href="candidate-details.html"
                              className="btn btn-soft-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-eye" /> View Profile
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/*end card*/}
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="candidate-grid-box bookmark-post card mt-4">
                        <div className="card-body p-4">
                          <div className="d-flex mb-4">
                            <div className="flex-shrink-0 position-relative">
                              <img
                                src="assets/images/user/img-06.jpg"
                                alt=""
                                className="avatar-md rounded"
                              />
                              <span className="profile-active position-absolute badge rounded-circle bg-success">
                                <span className="visually-hidden">active</span>
                              </span>
                            </div>
                            <div className="ms-3">
                              <a
                                href="candidate-details.html"
                                className="primary-link"
                              >
                                <h5 className="fs-17">Jeffrey Montgomery</h5>
                              </a>
                              <span className="badge bg-info-subtle text-info fs-13">
                                $299/hrs
                              </span>
                            </div>
                          </div>
                          <ul className="list-inline d-flex justify-content-between align-items-center">
                            <li className="list-inline-item text-warning fs-17">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-half-full" />
                            </li>
                            <li className="list-inline-item">
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="border rounded mb-4">
                            <div className="row g-0">
                              <div className="col-lg-6">
                                <div className="border-end px-3 py-2">
                                  <p className="text-muted mb-0">
                                    Exp. : 7 Years
                                  </p>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-6">
                                <div className="px-3 py-2">
                                  <p className="text-muted mb-0">Freelancers</p>
                                </div>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          <p className="text-muted">
                            Some quick example text to build on the card title
                            and bulk the card's content Moltin gives you
                            platform.
                          </p>
                          <div className="mt-3">
                            <a
                              href="#hireNow"
                              data-bs-toggle="modal"
                              className="btn btn-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-account-check" /> Hire Now
                            </a>
                            <a
                              href="candidate-details.html"
                              className="btn btn-soft-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-eye" /> View Profile
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/*end card*/}
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="candidate-grid-box bookmark-post card mt-4">
                        <div className="card-body p-4">
                          <div className="d-flex mb-4">
                            <div className="flex-shrink-0 position-relative">
                              <img
                                src="assets/images/user/img-07.jpg"
                                alt=""
                                className="avatar-md rounded"
                              />
                              <span className="profile-active position-absolute badge rounded-circle bg-success">
                                <span className="visually-hidden">active</span>
                              </span>
                            </div>
                            <div className="ms-3">
                              <a
                                href="candidate-details.html"
                                className="primary-link"
                              >
                                <h5 className="fs-17">Brooke Hayes</h5>
                              </a>
                              <span className="badge bg-info-subtle text-info fs-13">
                                $310/hrs
                              </span>
                            </div>
                          </div>
                          <ul className="list-inline d-flex justify-content-between align-items-center">
                            <li className="list-inline-item text-warning fs-17">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-half-full" />
                            </li>
                            <li className="list-inline-item">
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="border rounded mb-4">
                            <div className="row g-0">
                              <div className="col-lg-6">
                                <div className="border-end px-3 py-2">
                                  <p className="text-muted mb-0">
                                    Exp. : 4 Years
                                  </p>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-6">
                                <div className="px-3 py-2">
                                  <p className="text-muted mb-0">Freelancers</p>
                                </div>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          <p className="text-muted">
                            Some quick example text to build on the card title
                            and bulk the card's content Moltin gives you
                            platform.
                          </p>
                          <div className="mt-3">
                            <a
                              href="#hireNow"
                              data-bs-toggle="modal"
                              className="btn btn-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-account-check" /> Hire Now
                            </a>
                            <a
                              href="candidate-details.html"
                              className="btn btn-soft-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-eye" /> View Profile
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/*end card*/}
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="candidate-grid-box card mt-4">
                        <div className="card-body p-4">
                          <div className="d-flex mb-4">
                            <div className="flex-shrink-0 position-relative">
                              <img
                                src="assets/images/user/img-08.jpg"
                                alt=""
                                className="avatar-md rounded"
                              />
                              <span className="profile-active position-absolute badge rounded-circle bg-danger">
                                <span className="visually-hidden">active</span>
                              </span>
                            </div>
                            <div className="ms-3">
                              <a
                                href="candidate-details.html"
                                className="primary-link"
                              >
                                <h5 className="fs-17">Cerys Woods</h5>
                              </a>
                              <span className="badge bg-info-subtle text-info fs-13">
                                $450/hrs
                              </span>
                            </div>
                          </div>
                          <ul className="list-inline d-flex justify-content-between align-items-center">
                            <li className="list-inline-item text-warning fs-17">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-half-full" />
                            </li>
                            <li className="list-inline-item">
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="border rounded mb-4">
                            <div className="row g-0">
                              <div className="col-lg-6">
                                <div className="border-end px-3 py-2">
                                  <p className="text-muted mb-0">
                                    Exp. : 4.5 Years
                                  </p>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-6">
                                <div className="px-3 py-2">
                                  <p className="text-muted mb-0">Freelancers</p>
                                </div>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          <p className="text-muted">
                            Some quick example text to build on the card title
                            and bulk the card's content Moltin gives you
                            platform.
                          </p>
                          <div className="mt-3">
                            <a
                              href="#hireNow"
                              data-bs-toggle="modal"
                              className="btn btn-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-account-check" /> Hire Now
                            </a>
                            <a
                              href="candidate-details.html"
                              className="btn btn-soft-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-eye" /> View Profile
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/*end card*/}
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="candidate-grid-box card mt-4">
                        <div className="card-body p-4">
                          <div className="d-flex mb-4">
                            <div className="flex-shrink-0 position-relative">
                              <img
                                src="assets/images/user/img-09.jpg"
                                alt=""
                                className="avatar-md rounded"
                              />
                              <span className="profile-active position-absolute badge rounded-circle bg-success">
                                <span className="visually-hidden">active</span>
                              </span>
                            </div>
                            <div className="ms-3">
                              <a
                                href="candidate-details.html"
                                className="primary-link"
                              >
                                <h5 className="fs-17">Olivia Murphy</h5>
                              </a>
                              <span className="badge bg-info-subtle text-info fs-13">
                                $300/hrs
                              </span>
                            </div>
                          </div>
                          <ul className="list-inline d-flex justify-content-between align-items-center">
                            <li className="list-inline-item text-warning fs-17">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-half-full" />
                            </li>
                            <li className="list-inline-item">
                              <div className="favorite-icon">
                                <a href="javascript:void(0)">
                                  <i className="uil uil-heart-alt fs-18" />
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="border rounded mb-4">
                            <div className="row g-0">
                              <div className="col-lg-6">
                                <div className="border-end px-3 py-2">
                                  <p className="text-muted mb-0">
                                    Exp. : 7 Years
                                  </p>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-6">
                                <div className="px-3 py-2">
                                  <p className="text-muted mb-0">Freelancers</p>
                                </div>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          <p className="text-muted">
                            Some quick example text to build on the card title
                            and bulk the card's content Moltin gives you
                            platform.
                          </p>
                          <div className="mt-3">
                            <a
                              href="#hireNow"
                              data-bs-toggle="modal"
                              className="btn btn-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-account-check" /> Hire Now
                            </a>
                            <a
                              href="candidate-details.html"
                              className="btn btn-soft-primary btn-hover w-100 mt-2"
                            >
                              <i className="mdi mdi-eye" /> View Profile
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/*end card*/}
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </div>
                {/*end candidate-list*/}
                <div className="row mt-5 pt-2">
                  <div className="col-lg-12">
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
            {/* END CANDIDATE-GRID */}
            {/* START HIRE-NOW MODAL */}
            <div
              className="modal fade"
              id="hireNow"
              tabIndex={-1}
              aria-labelledby="hireNow"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body p-5">
                    <div className="text-center mb-4">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Hire Now
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
                        htmlFor="namrFormControlInput"
                        className="form-label"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="namrFormControlInput"
                        placeholder="Enter your company name"
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
                    <div className="mb-4">
                      <label
                        htmlFor="messageFormControlTextarea"
                        className="form-label"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="messageFormControlTextarea"
                        rows={4}
                        placeholder="Enter your message"
                        defaultValue={""}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* END HIRE-NOW MODAL */}
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
      {/* Candidate Init Js */}
      {/* Job-list Init Js */}
      {/* Switcher Js */}
      {/* App Js */}
    </>
  );
};

export default SearchCandidate;
