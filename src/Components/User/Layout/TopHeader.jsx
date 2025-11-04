// TopHeader.jsx
import React, { useState, useEffect } from "react";
import BookDemoModal from "./BookDemoModal";
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
  const [userId, setUserId] = useState(null);
  const [location, setLocation] = useState("Loading...");
  const [locationError, setLocationError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleJobSearch = (e, loc) => {
    if (e) {
      e.preventDefault();
    }
    navigate('/job-list', { state: { jobTitle: '', location: loc, category: '', experience: '' } });
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location not supported");
      setLocationError(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();
          const locationName = `${data.city || data.locality || "Unknown"}, ${data.countryName || "Unknown"
            }`;
          setLocation(locationName);
        } catch (error) {
          setLocation(`${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocation("Location access denied");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocation("Location unavailable");
            break;
          case error.TIMEOUT:
            setLocation("Location timeout");
            break;
          default:
            setLocation("Location error");
        }
        setLocationError(true);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, []);

  return (
    <div>
      <style>{`
        .top-bar {
          padding: 0.4rem 0;
        }

        .top-bar .list-inline-item {
          margin-right: 0;
          margin-bottom: 0;
        }

        .top-bar .social-link {
          padding: 0 0.4rem;
          display: inline-block;
        }

        .top-bar .social-link:hover {
          opacity: 0.8;
        }

        /* Desktop View - Default */
        .top-bar-desktop {
          display: block;
        }

        .top-bar-mobile {
          display: none;
        }

        /* Mobile View */
        @media (max-width: 767px) {
          .top-bar {
            padding: 0.25rem 0;
          }

          .top-bar-desktop {
            display: none;
          }

          .top-bar-mobile {
            display: block;
          }

          .mobile-location-row {
            text-align: center;
            padding: 0.3rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .mobile-location-text {
            font-size: 10px;
            color: white;
            margin: 0;
          }

          .mobile-buttons-row {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 4px;
            padding: 0.4rem 0.25rem;
          }

          .mobile-btn {
            font-size: 9px !important;
            padding: 4px 8px !important;
            line-height: 1.2;
            white-space: nowrap;
          }

          .mobile-btn i {
            font-size: 9px;
            margin-right: 2px;
          }

          .mobile-separator {
            color: white;
            font-size: 12px;
            margin: 0 4px;
          }
        }

        @media (max-width: 991px) {
          .top-bar .btn {
            font-size: 11px !important;
            padding: 4px 8px !important;
          }
        }

        @media (max-width: 767px) {
          .topbar-social-menu {
            display: none !important;
          }
          
          .top-bar .fs-13 {
            font-size: 11px !important;
          }
        }
      `}</style>

      <div className="top-bar bg-primary">
        <div className="container-fluid custom-container">
          {/* Desktop View */}
          <div className="top-bar-desktop">
            <div className="row g-0 align-items-center">
              {/* Left Side */}
              <div className="col-lg-3 col-md-4">
                <div className="d-flex align-items-center text-white">
                  <p className="fs-13 mb-0 me-3">
                    <i className="mdi mdi-map-marker" /> Your Location:{" "}
                    <a
                      href="#"
                      className={`text-white ${locationError ? "text-decoration-line-through" : ""
                        }`}
                      onClick={(e) => e.preventDefault()}
                    >
                      {location}
                    </a>
                  </p>
                  <ul className="topbar-social-menu list-inline mb-0 d-none d-md-flex">
                    <li className="list-inline-item">
                      <a
                        href="https://instagram.com/jobsstorm"
                        className="social-link text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="uil uil-instagram" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://facebook.com/jobsstorm"
                        className="social-link text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="uil uil-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://x.com/jobsstorm"
                        className="social-link text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="uil uil-twitter-alt" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://youtube.com/@jobsstorm"
                        className="social-link text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="uil uil-youtube" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://linkedin.com/company/jobsstorm"
                        className="social-link text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="uil uil-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side */}
              <div className="col-lg-9 col-md-8">
                <div className="d-flex justify-content-end align-items-center gap-2">
                  <a
                    href="#"
                    className="btn btn-warning fw-bold fs-13 py-1 px-3"
                    onClick={(e) => handleJobSearch(e, 'Middle East')}
                  >
                    <i className="uil uil-lock" /> Middle East Jobs
                  </a>
                  <a
                    href="#"
                    className="btn btn-info text-primary fw-bold fs-13 py-1 px-3"
                    onClick={(e) => handleJobSearch(e, 'Europe')}
                  >
                    <i className="uil uil-lock" /> Europe Jobs
                  </a>
                  <a
                    href="#"
                    className="btn btn-success fw-bold fs-13 py-1 px-3"
                    onClick={(e) => handleJobSearch(e, 'Asia')}
                  >
                    <i className="uil uil-lock" /> Asia Jobs
                  </a>

                  <span className="text-white mx-2">|</span>

                  <a
                    href="/post-new-job"
                    className="btn btn-white text-primary fw-bold fs-13 py-1 px-3"
                  >
                    <i className="uil uil-lock" /> Post Jobs FREE
                  </a>

                  <div className="dropdown d-inline-block language-switch ms-2">
                    <button
                      type="button"
                      className="btn p-1"
                      data-bs-toggle="dropdown"
                    >
                      <img
                        id="header-lang-img"
                        src="assets/images/flags/us.jpg"
                        alt="Header Language"
                        height={16}
                      />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a
                        href="#"
                        className="dropdown-item notify-item language"
                      >
                        <img
                          src="assets/images/flags/us.jpg"
                          alt="user-image"
                          className="me-1"
                          height={12}
                        />
                        <span className="align-middle">English</span>
                      </a>
                      <a
                        href="#"
                        className="dropdown-item notify-item language"
                      >
                        <img
                          src="assets/images/flags/uae.webp"
                          alt="user-image"
                          className="me-1"
                          height={12}
                        />
                        <span className="align-middle">Arabic</span>
                      </a>
                      <a
                        href="#"
                        className="dropdown-item notify-item language"
                      >
                        <img
                          src="assets/images/flags/germany.jpg"
                          alt="user-image"
                          className="me-1"
                          height={12}
                        />
                        <span className="align-middle">German</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="top-bar-mobile">
            <div className="mobile-location-row">
              <p className="mobile-location-text">
                <i
                  className="mdi mdi-map-marker"
                  style={{ fontSize: "11px", marginRight: "3px" }}
                />
                {location}
              </p>
            </div>
            <div className="mobile-buttons-row">
              <a href="#" className="btn btn-warning fw-bold mobile-btn" onClick={(e) => handleJobSearch(e, 'Middle East')}>
                <i className="uil uil-lock" />
                Middle East
              </a>
              <a
                href="#"
                className="btn btn-info text-primary fw-bold mobile-btn"
                onClick={(e) => handleJobSearch(e, 'Europe')}
              >
                <i className="uil uil-lock" />
                Europe
              </a>
              <a href="#" className="btn btn-success fw-bold mobile-btn" onClick={(e) => handleJobSearch(e, 'Asia')}>
                <i className="uil uil-lock" />
                Asia
              </a>
              <span className="mobile-separator">|</span>
              <a
                href="/post-new-job"
                className="btn btn-white text-primary fw-bold mobile-btn"
              >
                <i className="uil uil-lock" />
                Post FREE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Side Button for Book Demo */}
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-primary text-white fw-bold position-fixed d-flex align-items-center justify-content-center"
        style={{
          right: "-55px",
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "center center",
          padding: "8px 15px",
          borderRadius: "5px 5px 0 0",
          zIndex: 1030,
          boxShadow: "-2px 2px 10px rgba(0,0,0,0.3)",
          fontSize: "13px",
          letterSpacing: "1.5px",
          whiteSpace: "nowrap",
          border: "none",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minWidth: "auto",
        }}
      >
        <i
          className="uil uil-calendar-alt"
          style={{ marginRight: "6px", fontSize: "16px" }}
        ></i>
        BOOK A DEMO
      </button>

      <BookDemoModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default TopHeader;
