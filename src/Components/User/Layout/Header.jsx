import React, { useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import { getMyName } from "../../../api/service/axiosService";
import accountImage from "../../../../public/assets/images/account.jpg";
import HeaderAuthButtons from "./HeaderAuthButtons";

const Header = () => {
  const userId = localStorage.getItem("userId");
  const [name, setName] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyName(userId);
      if (response.status === 200) {
        setName(response.data.userName);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <>
        <div>
          {/* START TOP-BAR */}
          <TopHeader />
          {/* END TOP-BAR */}
          {/*Navbar Start*/}
          <nav className="navbar navbar-expand-lg fixed-top sticky" id="navbar">
            <div className="container-fluid custom-container">
              <a
                className="navbar-brand text-dark fw-bold me-auto"
                href="/"
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
                            <a className="dropdown-item" href="#">
                              IT Jobs
                            </a>
                            <a className="dropdown-item" href="#">
                              Accounting &amp; Banking
                            </a>
                            <a className="dropdown-item" href="#">
                              Tele-Calling
                            </a>
                            <a className="dropdown-item" href="#">
                              Sales &amp; Marketing
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                            >
                              Admin &amp; Operations
                            </a>
                            <a
                              className="dropdown-item"
                             href="#"
                            >
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
                            <a
                              className="dropdown-item"
                              href="#"
                            >
                              India
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                            >
                              Middle East
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                            >
                              UAE
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                            >
                              Singapore
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                            >
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
                            <a className="dropdown-item" href="#">
                              Fresher
                            </a>
                            <a className="dropdown-item" href="#">
                              0 to 2 Years
                            </a>
                            <a className="dropdown-item" href="#">
                              2 to 5 Years
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                            >
                              5 to 10 Years
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                            >
                              10 to 15 Years
                            </a>
                            <a className="dropdown-item" href="#">
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
                          <a
                            className="dropdown-item"
                            href="/associated-company-list"
                          >
                            Assocated Companies
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/saved-candidate-page"
                          >
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
                              <h6 className="mt-0 mb-1 fs-15">
                                Creative Agency
                              </h6>
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
                        src={accountImage}
                        alt="mdo"
                        width={35}
                        height={35}
                        className="rounded-circle me-1"
                      />{" "}
                      <span className="d-none d-md-inline-block fw-medium">
                        Hi, {name}
                      </span>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="userdropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/manage-jobs-page">
                          Manage Jobs
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/saved-candidate-page"
                        >
                          Bookmarks Jobs
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/my-profile">
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
                <HeaderAuthButtons />
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
                          Sign Up and get access to all the features of
                          JobsStorm
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
                          <button
                            type="submit"
                            className="btn btn-primary w-100"
                          >
                            Sign Up
                          </button>
                        </div>
                      </form>
                      <div className="mt-3 text-center">
                        <p className="mb-0">
                          Already a member ?{" "}
                          <a
                            href="/candidate-signup"
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
