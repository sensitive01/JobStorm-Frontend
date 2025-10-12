import React, { useState, useEffect } from "react";
import BookDemoModal from "./BookDemoModal";

const TopHeader = () => {
  const [userId, setUserId] = useState(null);
  const [location, setLocation] = useState("Loading...");
  const [locationError, setLocationError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Load userId from localStorage on mount
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  // Get user's location
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

          const locationName = `${data.city || data.locality || "Unknown"}, ${
            data.countryName || "Unknown"
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

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserId(null);
    window.location.href = "/candidate-login";
  };

  return (
    <div>
      {/* START TOP-BAR */}
      <div className="top-bar bg-primary">
        <div className="container-fluid custom-container">
          <div className="row g-0 align-items-center">
            <div className="col-md-3">
              <ul className="list-inline mb-0 text-center text-white text-md-start">
                <li className="list-inline-item">
                  <p className="fs-13 mb-0">
                    <i className="mdi mdi-map-marker" /> Your Location:{" "}
                    <a
                      href="#"
                      className={`text-white ${
                        locationError ? "text-decoration-line-through" : ""
                      }`}
                      onClick={(e) => e.preventDefault()}
                    >
                      {location}
                    </a>
                  </p>
                </li>
                <li className="list-inline-item">
                  <ul className="topbar-social-menu list-inline mb-0">
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
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <ul className="list-inline mb-0 text-center text-md-end">
                <li className="list-inline-item py-2 me-2 align-middle">
                  <a href="/" className="btn btn-warning fw-bold fs-13 py-1">
                    <i className="uil uil-lock" />
                    Middle East Jobs
                  </a>
                </li>
                <li className="list-inline-item py-2 me-2 align-middle">
                  <a
                    href="#"
                    className="btn btn-info text-primary fw-bold fs-13 py-1"
                  >
                    <i className="uil uil-lock" />
                    Europe Jobs
                  </a>
                </li>
                <li className="list-inline-item py-2 me-2 align-middle">
                  <a href="#" className="btn btn-success fw-bold fs-13 py-1">
                    <i className="uil uil-lock" />
                    Asia Jobs
                  </a>
                </li>
                &nbsp; <span className="text-white">|</span> &nbsp; &nbsp;
                <li className="list-inline-item py-2 me-2 align-middle">
                  <a
                    href="#"
                    className="btn btn-white text-primary fw-bold fs-13 py-1"
                  >
                    <i className="uil uil-lock" />
                    Post Jobs FREE
                  </a>
                </li>
                <li className="list-inline-item align-middle">
                  <div className="dropdown d-inline-block language-switch">
                    <button
                      type="button"
                      className="btn"
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END TOP-BAR */}

      {/* Fixed Side Button for Book Demo */}
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-primary text-white fw-bold position-fixed d-flex align-items-center justify-content-center"
        style={{
          right: "-35px",
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

      {/* Book Demo Modal */}
      <BookDemoModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default TopHeader;
