import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
// TopHeader import removed
import {
  getDistictValues,
  getMyName,
  getUserDetails,
} from "../../../api/service/axiosService";
import accountImage from "../../../../public/assets/images/account.jpg";
import HeaderAuthButtons from "./HeaderAuthButtons";

const Header = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [name, setName] = useState(localStorage.getItem("userName") || "");
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("userProfilePic") || null,
  );
  const isNavigatingRef = useRef(false);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        try {
          // Fetch user name
          const nameResponse = await getMyName(userId);
          if (nameResponse.status === 200) {
            const fetchedName = nameResponse.data.userName;
            setName(fetchedName);
            localStorage.setItem("userName", fetchedName);
          }

          // Fetch full details for profile pic
          const userDetailsResponse = await getUserDetails(userId);
          if (
            userDetailsResponse.status === 200 &&
            userDetailsResponse.data.data
          ) {
            const picUrl = userDetailsResponse.data.data.userProfilePic?.url;
            setProfilePic(picUrl);
            if (picUrl) {
              localStorage.setItem("userProfilePic", picUrl);
            }
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchData();
    }
  }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDistictValues();
        if (response.data && response.status === 200) {
          const rawCats = response.data.categories || [];
          const rawLocs = response.data.locations || [];

          // Deduplicate category and location names case-insensitively, keeping uppercase versions for consistency
          const uniqueCategories = Array.from(
            new Set(rawCats.map((c) => c.toUpperCase())),
          );
          const uniqueLocations = Array.from(
            new Set(rawLocs.map((l) => l.toUpperCase())),
          );

          setCategories(uniqueCategories);
          setLocations(uniqueLocations);
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
      const dropdowns = document.querySelectorAll(".dropdown-menu.show");
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("show");
      });

      const dropdownParents = document.querySelectorAll(".dropdown.show");
      dropdownParents.forEach((parent) => {
        parent.classList.remove("show");
      });

      const toggles = document.querySelectorAll(
        '[data-bs-toggle="dropdown"][aria-expanded="true"]',
      );
      toggles.forEach((toggle) => {
        toggle.setAttribute("aria-expanded", "false");
      });

      const collapse = document.getElementById("navbarCollapse");
      if (collapse && collapse.classList.contains("show")) {
        collapse.classList.remove("show");
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
          margin-top: 0 !important;
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

        /* Nav Link Typography matching Design */
        .navbar-nav .nav-link {
          font-weight: 600;
          color: #1f2937 !important; /* Dark gray for high contrast */
          font-size: 15px;
          padding-left: 1rem !important;
          padding-right: 1rem !important;
          text-transform: none !important;
        }
        
        .navbar-nav .nav-link:hover {
          color: #6366f1 !important; /* Primary color on hover */
        }
      `}</style>

      <>
        <div>
          {/* <TopHeader /> removed as per user request */}

          <nav className="navbar navbar-expand-lg fixed-top sticky" id="navbar">
            <div className="container-fluid custom-container">
              <Link className="navbar-brand text-dark fw-bold" to="/">
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
              </Link>

              <div
                className="collapse navbar-collapse justify-content-end gap-4"
                id="navbarCollapse"
              >
                <ul
                  className="navbar-nav m-0 flex-grow-0 w-auto"
                  style={{ gap: "24px" }}
                >
                  {/* New Design Layout Links */}
                  {/* About Us Dropdown */}
                  <li className="nav-item dropdown dropdown-hover">
                    <a
                      className="nav-link"
                      href="#"
                      id="aboutDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      About Us <div className="arrow-down" />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-center"
                      aria-labelledby="aboutDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/about-us">
                          About JobsStorm
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/contact-us">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Jobs Dropdown (Existing Logic Preserved) */}
                  <li className="nav-item dropdown dropdown-hover">
                    <a
                      className="nav-link"
                      href="#"
                      id="jobsDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Jobs <div className="arrow-down" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-lg dropdown-menu-center"
                      aria-labelledby="jobsDropdown"
                    >
                      <div className="row">
                        <div className="col-lg-4">
                          <span className="dropdown-header text-primary fw-bold">
                            Jobs by Category
                          </span>
                          <hr />
                          <div>
                            {categories.slice(0, 5).map((category, index) => (
                              <a
                                key={index}
                                className="dropdown-item"
                                href="#"
                                onClick={(e) =>
                                  handleJobSearch(e, { category })
                                }
                              >
                                {category}
                              </a>
                            ))}
                            <Link className="dropdown-item" to="/job-list">
                              View All Categories
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <span className="dropdown-header text-primary fw-bold">
                            Jobs by Location
                          </span>
                          <hr />
                          <div>
                            {locations.slice(0, 5).map((location, index) => (
                              <a
                                key={index}
                                className="dropdown-item"
                                href="#"
                                onClick={(e) =>
                                  handleJobSearch(e, { location })
                                }
                              >
                                {location}
                              </a>
                            ))}
                            <Link className="dropdown-item" to="/job-list">
                              Explore Locations
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <span className="dropdown-header text-primary fw-bold">
                            Jobs by Experience
                          </span>
                          <hr />
                          <div>
                            {[
                              "Fresher",
                              "0-2",
                              "2-5",
                              "5-10",
                              "10-15",
                              "15+",
                            ].map((exp, i) => (
                              <a
                                key={i}
                                className="dropdown-item"
                                href="#"
                                onClick={(e) =>
                                  handleJobSearch(e, { experience: exp })
                                }
                              >
                                {exp === "Fresher" ? "Fresher" : `${exp} Years`}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Companies Dropdown */}
                  <li className="nav-item dropdown dropdown-hover">
                    <a
                      className="nav-link"
                      href="#"
                      id="companiesDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Companies <div className="arrow-down" />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-center"
                      aria-labelledby="companiesDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/associated-company-list"
                        >
                          Browse Companies
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/employer-login">
                          Post a Job
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Learn Link */}
                  <li className="nav-item">
                    <Link to="/learn" className="nav-link">
                      Learn
                    </Link>
                  </li>

                  {/* Resources Link */}
                  <li className="nav-item">
                    <Link to="/resources" className="nav-link">
                      Resources
                    </Link>
                  </li>

                  {/* Internship Dropdown */}
                  <li className="nav-item dropdown dropdown-hover">
                    <a
                      className="nav-link"
                      href="#"
                      id="internshipDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Internship <div className="arrow-down" />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-center"
                      aria-labelledby="internshipDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/internship">
                          Internship Program
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="d-none d-lg-block">
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
                            src={profilePic || accountImage}
                            alt="user"
                            width={35}
                            height={35}
                            className="rounded-circle me-1"
                            style={{ objectFit: "cover" }}
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
                            <Link className="dropdown-item" to="/my-profile">
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/my-applied-jobs"
                            >
                              Applied Jobs
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/my-saved-jobs">
                              Saved Jobs
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/my-chats">
                              My Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/transaction-history"
                            >
                              My Subscription
                            </Link>
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
                    </ul>
                  ) : (
                    <HeaderAuthButtons />
                  )}
                </div>
              </div>

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
                            src={profilePic || accountImage}
                            alt="user"
                            width={30}
                            height={30}
                            className="rounded-circle"
                            style={{ objectFit: "cover" }}
                          />
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="userdropdownMobile"
                        >
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/manage-jobs-page"
                            >
                              Manage Jobs
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/my-profile">
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/my-applied-jobs"
                            >
                              Applied Jobs
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/my-saved-jobs">
                              Saved Jobs
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/my-chats">
                              My Chats
                            </Link>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/transaction-history"
                            >
                              My Subscription
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
                    </ul>
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
              </div>
            </div>
          </nav>

          {/* Region Job Buttons removed */}
        </div>
      </>
    </div>
  );
};

export default Header;
