import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "./TopHeader";
import { getDistictValues, getMyName } from "../../../api/service/axiosService";
import accountImage from "../../../../public/assets/images/account.jpg";
import HeaderAuthButtons from "./HeaderAuthButtons";

const Header = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [name, setName] = useState("");
  const isNavigatingRef = useRef(false);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        try {
          const response = await getMyName(userId);
          if (response.status === 200) {
            setName(response.data.userName);
          }
        } catch (error) {
          console.error("Error fetching user name:", error);
        }
      };
      fetchData();
    }
  }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDistictValues();
        if (response.data && response.status===200) {
          setCategories(response.data.categories || []);
          setLocations(response.data.locations || []);
        }
      } catch (error) {
        console.error("Error fetching categories and locations:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const updateBodyPadding = () => {
      if (userId) {
        document.body.classList.add("user-logged-in");
        document.body.style.paddingTop = "0px";
      } else {
        document.body.classList.remove("user-logged-in");
        document.body.style.paddingTop = "0px";
      }
    };

    updateBodyPadding();
    window.addEventListener("resize", updateBodyPadding);

    return () => {
      window.removeEventListener("resize", updateBodyPadding);
    };
  }, [userId]);

  const handleJobSearch = (e, filters = {}) => {
    if (isNavigatingRef.current) {
      return;
    }

    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    isNavigatingRef.current = true;

    const closeOpenUI = () => {
      const dropdowns = document.querySelectorAll('.dropdown-menu.show');
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove('show');
      });

      const dropdownParents = document.querySelectorAll('.dropdown.show');
      dropdownParents.forEach((parent) => {
        parent.classList.remove('show');
      });

      const toggles = document.querySelectorAll('[data-bs-toggle="dropdown"][aria-expanded="true"]');
      toggles.forEach((toggle) => {
        toggle.setAttribute('aria-expanded', 'false');
      });

      const collapse = document.getElementById('navbarCollapse');
      if (collapse && collapse.classList.contains('show')) {
        collapse.classList.remove('show');
      }
    };

    closeOpenUI();

    setTimeout(() => {
      const searchData = {
        jobTitle: filters.jobTitle || "",
        location: filters.location || "",
        category: filters.category || "",
        experience: filters.experience || "",
      };

      navigate(`/job-list`, { state: searchData });

      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 500);
    }, 100);
  };

  return (
    <div>
      <style>{`
        /* Top Mobile Bar */
        .mobile-top-bar {
          display: none;
          background: #f8f9fa;
          border-bottom: 2px solid #6366f1;
          padding: 8px 0;
        }

        .mobile-top-bar-content {
          display: flex;
          gap: 6px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .mobile-top-bar .btn {
          font-size: 11px !important;
          padding: 5px 14px !important;
          line-height: 1.3 !important;
          white-space: nowrap !important;
          font-weight: 600 !important;
          border-radius: 4px !important;
        }

        @media (max-width: 991px) {
          .mobile-top-bar {
            display: block;
          }
        }

        @media (max-width: 575px) {
          .mobile-top-bar .btn {
            font-size: 10px !important;
            padding: 4px 10px !important;
          }

          .mobile-top-bar-content {
            gap: 4px;
            padding: 0 10px;
          }
        }

        /* Responsive logo sizing */
        .navbar-brand img.logo-dark {
          height: 45px;
          transition: height 0.3s ease;
        }
        
        .navbar-brand img.logo-light {
          height: 18px;
        }
        
        @media (max-width: 991px) {
          .navbar-brand img.logo-dark {
            height: 38px;
          }
          .navbar-brand img.logo-light {
            height: 16px;
          }
        }
        
        @media (max-width: 767px) {
          .navbar-brand img.logo-dark {
            height: 32px;
          }
          .navbar-brand img.logo-light {
            height: 14px;
          }
        }
        
        @media (max-width: 575px) {
          .navbar-brand img.logo-dark {
            height: 28px;
          }
          .navbar-brand img.logo-light {
            height: 12px;
          }
        }

        /* Navbar adjustments */
        .navbar {
          padding: 0.5rem 0;
          z-index: 1050;
        }

        .navbar-brand {
          flex-shrink: 0;
        }

        .navbar-toggler {
          padding: 0.25rem 0.5rem;
          font-size: 1.25rem;
          border: 1px solid rgba(0,0,0,.1);
        }

        body {
          padding-top: 0;
          transition: padding-top 0.3s ease;
        }

        @media (max-width: 991px) {
          body {
            padding-top: 0;
          }
        }

        @media (min-width: 992px) {
          .navbar-nav {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 991px) {
          .custom-container {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .navbar-brand {
            flex-shrink: 0;
            margin: 0;
          }
          
          .mobile-auth-section {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-shrink: 0;
            margin-left: auto;
          }

          .mobile-job-buttons {
            display: none;
          }

          .mobile-job-buttons-bar {
            display: flex !important;
            gap: 8px;
            justify-content: center;
            align-items: center;
            padding: 12px 15px;
            background: #f5f5f5;
            border-bottom: 3px solid #6366f1;
            flex-wrap: wrap;
            margin-top: 0;
            position: fixed;
            top: 50px;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 1049;
          }

          body.user-logged-in .mobile-job-buttons-bar {
            top: 80px;
          }

          .mobile-job-buttons-bar .btn {
            font-size: 11px !important;
            padding: 8px 16px !important;
            line-height: 1.4 !important;
            white-space: nowrap !important;
            font-weight: 600 !important;
            flex-shrink: 0;
            border: none !important;
            cursor: pointer;
          }

          .mobile-job-buttons-bar .btn-warning {
            background-color: #F5D547 !important;
            color: #333 !important;
          }

          .mobile-job-buttons-bar .btn-info {
            background-color: #5CB3E8 !important;
            color: white !important;
          }

          .mobile-job-buttons-bar .btn-success {
            background-color: #2D9B6F !important;
            color: white !important;
          }

          .header-menu {
            margin: 0 !important;
            gap: 0.5rem !important;
          }

          .header-menu .list-inline-item {
            margin: 0 !important;
          }

          .navbar-collapse {
            position: absolute;
            top: 90px;
            left: 0;
            right: 0;
            width: 100%;
          }

          body.user-logged-in .navbar-collapse {
            top: 120px;
          }
        }

        @media (max-width: 575px) {
          .mobile-job-buttons-bar .btn {
            font-size: 10px !important;
            padding: 6px 12px !important;
          }

          .mobile-auth-section {
            gap: 0.3rem;
          }
        }

        .count {
          top: -5px;
          right: -5px;
          background: #ef4444;
          color: white;
          font-size: 10px;
          padding: 2px 5px;
          border-radius: 10px;
          min-width: 18px;
          text-align: center;
        }

        @media (max-width: 767px) {
          .header-menu .fs-22 {
            font-size: 18px !important;
          }
          
          .header-item img {
            width: 30px !important;
            height: 30px !important;
          }
        }

        .dropdown-menu {
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Prevent pointer events during navigation */
        .navigating {
          pointer-events: none;
          opacity: 0.7;
        }
      `}</style>

      <>
        <div>
          <TopHeader />

          <nav className="navbar navbar-expand-lg fixed-top sticky" id="navbar">
            <div className="container-fluid custom-container">
              <a className="navbar-brand text-dark fw-bold" href="/">
                <img
                  src="assets/images/logo-dark.png"
                  alt=""
                  className="logo-dark"
                />
                <img
                  src="assets/images/logo-light.png"
                  alt=""
                  className="logo-light"
                />
              </a>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav navbar-center">
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
                      <li>
                        <a className="dropdown-item" href="#">
                          Privacy &amp; Policy
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/faq-pages">
                          Faqs
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/contact-us">
                          Contact Us
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
                            {categories.map((category, index) => (
                              <a
                                key={index}
                                className="dropdown-item"
                                href="#"
                                onClick={(e) => handleJobSearch(e, { category })}
                              >
                                {category}
                              </a>
                            ))}
                            <a className="dropdown-item" href="/job-list">
                              All Other Jobs
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <span className="dropdown-header text-primary fw-bold">
                            Jobs by Location
                          </span>
                          <hr />
                          <div>
                            {locations.map((location, index) => (
                              <a
                                key={index}
                                className="dropdown-item"
                                href="#"
                                onClick={(e) => handleJobSearch(e, { location })}
                              >
                                {location}
                              </a>
                            ))}
                            <a className="dropdown-item" href="/job-list">
                              Explore Locations
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <span className="dropdown-header text-primary fw-bold">
                            Jobs by Experience
                          </span>
                          <hr />
                          <div>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(e) => handleJobSearch(e, { experience: 'Fresher' })}
                            >
                              Fresher
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(e) => handleJobSearch(e, { experience: '0-2' })}
                            >
                              0 to 2 Years
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(e) => handleJobSearch(e, { experience: '2-5' })}
                            >
                              2 to 5 Years
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(e) => handleJobSearch(e, { experience: '5-10' })}
                            >
                              5 to 10 Years
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(e) => handleJobSearch(e, { experience: '10-15' })}
                            >
                              10 to 15 Years
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(e) => handleJobSearch(e, { experience: '15+' })}
                            >
                              15 + Years
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="categoriesDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="categoriesDropdown"
                    >
                      {categories.map((category, index) => (
                        <li key={index}>
                          <a
                            className="dropdown-item"
                            href={`/jobs?category=${encodeURIComponent(category)}`}
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li> */}

                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="locationsDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Locations
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="locationsDropdown"
                    >
                      {locations.map((location, index) => (
                        <li key={index}>
                          <a
                            className="dropdown-item"
                            href={`/jobs?location=${encodeURIComponent(location)}`}
                          >
                            {location}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li> */}

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
                        {/* <li>
                          <a
                            className="dropdown-item"
                            href="/associated-company-list"
                          >
                            Associated Companies
                          </a>
                        </li> */}
                        {/* <li>
                          <a
                            className="dropdown-item"
                            href="/saved-candidate-page"
                          >
                            Search Candidates
                          </a>
                        </li> */}
                      </ul>
                    </li>
                  )}

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Freelance Corner
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Hiring Assist
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/contact-us" className="nav-link">
                      Events &amp; Ads
                    </a>
                  </li>
                </ul >

                <div className="ms-auto d-none d-lg-block">
                  {userId ? (
                    <ul className="header-menu list-inline d-flex align-items-center mb-0">
                      <li className="list-inline-item dropdown me-3">
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
                            <h6 className="mb-1">Notification</h6>
                            <p className="text-muted fs-13 mb-0">
                              You have 3 unread notifications
                            </p>
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
                            alt="user"
                            width={35}
                            height={35}
                            className="rounded-circle me-1"
                          />
                          <span className="d-none d-xl-inline-block fw-medium">
                            Hi, {name}
                          </span>
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="userdropdown"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="/my-applied-jobs"
                            >
                              Applied Jobs
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/my-saved-jobs">
                              Saved Jobs
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/my-chats">
                              My Chats
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
                                localStorage.clear();
                                window.location.href = "/";
                              }}
                            >
                              Logout
                            </a>
                          </li>
                        </ul >
                      </li >
                    </ul >
                  ) : (
                    <HeaderAuthButtons />
                  )}
                </div >
              </div >

              <div className="d-lg-none mobile-auth-section">
                {userId ? (
                  <>
                    <ul className="header-menu list-inline d-flex align-items-center mb-0">
                      <li className="list-inline-item dropdown">
                        <a
                          href="#"
                          className="header-item"
                          id="userdropdownMobile"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src={accountImage}
                            alt="user"
                            width={30}
                            height={30}
                            className="rounded-circle"
                          />
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="userdropdownMobile"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="/manage-jobs-page"
                            >
                              Manage Jobs
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
                                localStorage.clear();
                                window.location.href = "/";
                              }}
                            >
                              Logout
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul >
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarCollapse"
                      aria-controls="navbarCollapse"
                      aria-label="Toggle navigation"
                    >
                      <i className="mdi mdi-menu" />
                    </button>
                  </>
                ) : (
                  <>
                    <HeaderAuthButtons />
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarCollapse"
                      aria-controls="navbarCollapse"
                      aria-label="Toggle navigation"
                    >
                      <i className="mdi mdi-menu" />
                    </button>
                  </>
                )}
              </div >
            </div >
          </nav >

          {/* Region Job Buttons - Desktop */}
          <div className="d-none d-lg-flex align-items-center ms-3" style={{ gap: '8px' }}>
            <button
              className="btn btn-sm btn-warning"
              onClick={(e) => handleJobSearch(e, { location: 'Middle East' })}
              style={{ whiteSpace: 'nowrap' }}
            >
              Middle East
            </button>
            <button
              className="btn btn-sm btn-info text-white"
              onClick={(e) => handleJobSearch(e, { location: 'Europe' })}
              style={{ whiteSpace: 'nowrap' }}
            >
              Europe
            </button>
            <button
              className="btn btn-sm btn-success"
              onClick={(e) => handleJobSearch(e, { location: 'Asia' })}
              style={{ whiteSpace: 'nowrap' }}
            >
              Asia
            </button>
          </div>

          {/* Region Job Buttons - Mobile */}
          <div className="d-lg-none mobile-job-buttons-bar" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '8px' }}>
            <button
              className="btn btn-sm btn-warning"
              onClick={(e) => handleJobSearch(e, { location: 'Middle East' })}
              style={{ flex: '1', minWidth: '120px' }}
            >
              Middle East Jobs
            </button>
            <button
              className="btn btn-sm btn-info text-white"
              onClick={(e) => handleJobSearch(e, { location: 'Europe' })}
              style={{ flex: '1', minWidth: '120px' }}
            >
              Europe Jobs
            </button>
            <button
              className="btn btn-sm btn-success"
              onClick={(e) => handleJobSearch(e, { location: 'Asia' })}
              style={{ flex: '1', minWidth: '120px' }}
            >
              Asia Jobs
            </button>
          </div>

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
                            <b>Login</b>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div >
            </div >
          </div >
        </div >
      </>
    </div >
  );
};

export default Header;