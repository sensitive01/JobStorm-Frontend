import React, { useState, useEffect } from 'react';

const TopHeader = () => {
  const [userId, setUserId] = useState(null);
  const [location, setLocation] = useState('Loading...');
  const [locationError, setLocationError] = useState(false);

  // Load userId from localStorage on mount
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  // Get user's location
  useEffect(() => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setLocation('Location not supported');
      setLocationError(true);
      return;
    }

    // Get current position
    navigator.geolocation.getCurrentPosition(
      // Success callback
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Use reverse geocoding API to get location name
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();
          
          // Format location (City, Country)
          const locationName = `${data.city || data.locality || 'Unknown'}, ${data.countryName || 'Unknown'}`;
          setLocation(locationName);
        } catch (error) {
          // If reverse geocoding fails, show coordinates
          setLocation(`${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`);
        }
      },
      // Error callback
      (error) => {
        console.error('Geolocation error:', error);
        switch(error.code) {
          case error.PERMISSION_DENIED:
            setLocation('Location access denied');
            break;
          case error.POSITION_UNAVAILABLE:
            setLocation('Location unavailable');
            break;
          case error.TIMEOUT:
            setLocation('Location timeout');
            break;
          default:
            setLocation('Location error');
        }
        setLocationError(true);
      },
      // Options
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // Cache for 5 minutes
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
                      className={`text-white ${locationError ? 'text-decoration-line-through' : ''}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      {location}
                    </a>
                  </p>
                </li>
                <li className="list-inline-item">
                  <ul className="topbar-social-menu list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="#" className="social-link text-white">
                        <i className="uil uil-whatsapp" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link text-white">
                        <i className="uil uil-facebook-messenger-alt" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link text-white">
                        <i className="uil uil-instagram" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link text-white">
                        <i className="uil uil-envelope" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link text-white">
                        <i className="uil uil-twitter-alt" />
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
                  <a href="post-jobs.php" className="btn btn-info text-primary fw-bold fs-13 py-1">
                    <i className="uil uil-lock" />
                    Europe Jobs
                  </a>
                </li>
                <li className="list-inline-item py-2 me-2 align-middle">
                  <a href="post-jobs.php" className="btn btn-success fw-bold fs-13 py-1">
                    <i className="uil uil-lock" />
                    Asia Jobs
                  </a>
                </li>
                &nbsp; <span className="text-white">|</span> &nbsp; &nbsp;
                <li className="list-inline-item py-2 me-2 align-middle">
                  <a href="post-jobs.php" className="btn btn-white text-primary fw-bold fs-13 py-1">
                    <i className="uil uil-lock" />
                    Post Jobs FREE
                  </a>
                </li>
                <li className="list-inline-item py-2 me-2 align-middle">
                  <a href="#signupModal" className="btn btn-white fw-bold fs-13 py-1" data-bs-toggle="modal">
                    <i className="uil uil-lock" />
                    Book FREE Demo
                  </a>
                </li>
                <li className="list-inline-item align-middle">
                  <div className="dropdown d-inline-block language-switch">
                    <button type="button" className="btn" data-bs-toggle="dropdown">
                      <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height={16} />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="#" className="dropdown-item notify-item language">
                        <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height={12} />
                        <span className="align-middle">English</span>
                      </a>
                      <a href="#" className="dropdown-item notify-item language">
                        <img src="assets/images/flags/uae.webp" alt="user-image" className="me-1" height={12} />
                        <span className="align-middle">Arabic</span>
                      </a>
                      <a href="#" className="dropdown-item notify-item language">
                        <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} />
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

   
    </div>
  );
};

export default TopHeader;