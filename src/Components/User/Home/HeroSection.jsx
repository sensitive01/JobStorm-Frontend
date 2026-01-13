import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = () => {
    window.location.href = `/job-list?jobTitle=${encodeURIComponent(
      searchTerm
    )}`;
  };

  return (
    <section className="hero-section">
      <div className="container-medium">
        <div className="row align-items-center">
          <div className="col-lg-7">
            {/* Left Content */}
            <div className="hero-badge">
              <span>#India's 1</span> Trusted Overseas Job portal{" "}
              <i className="mdi mdi-arrow-right"></i>
            </div>
            <h1 className="hero-heading">
              Find a job that suits <br /> your interest & skills.
            </h1>
            <p className="hero-subtext">
              if you want to get shortlisted on overseas companies start apply
              now with us to your dream destiny
            </p>

            <div className="region-buttons d-none d-md-flex">
              <button
                className="region-btn"
                onClick={() =>
                  (window.location.href = "/job-list?location=Europe")
                }
              >
                <img
                  src="/assets/images/flags/germany.jpg"
                  className="region-flag"
                  alt="Europe"
                />
                Europe
              </button>
              <button
                className="region-btn"
                onClick={() =>
                  (window.location.href = "/job-list?location=Middle East")
                }
              >
                <img
                  src="/assets/images/flags/uae.webp"
                  className="region-flag"
                  alt="Middle East"
                />
                Middle East
              </button>
              <button
                className="region-btn"
                onClick={() =>
                  (window.location.href = "/job-list?location=Asia")
                }
              >
                <img
                  src="/assets/images/flags/russia.jpg"
                  className="region-flag"
                  alt="Asia"
                />
                Asia
              </button>
            </div>

            <div className="hero-search-wrapper">
              <div className="search-input-group">
                <i className="uil uil-search"></i>
                <input
                  type="text"
                  placeholder="Job tittle, Keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <div className="country-select border-start ps-3">
                {/* Using US flag as placeholder for India if India not found */}
                <img
                  src="/assets/images/flags/india.png"
                  className="country-flag"
                  alt="India"
                />
                <span className="fw-semibold">India</span>
                <i className="uil uil-angle-down text-muted"></i>
              </div>
              <button className="search-btn" onClick={handleSearch}>
                Find Job
              </button>
            </div>

            <div className="suggestions d-none d-md-block">
              <span className="text-muted">Suggestion:</span>{" "}
              <a href="#">Designer</a>, <a href="#">Programing</a>,{" "}
              <a href="#">Digital Marketing</a>, <a href="#">Video</a>,{" "}
              <a href="#">Animation</a>.
            </div>
          </div>

          <div className="col-lg-5 d-none d-lg-block">
            {/* Orbit Animation */}
            <div className="orbit-container">
              <div className="orbit-center-logo">
                <i className="mdi mdi-twitter"></i>
              </div>

              <div className="orbit-ring-1">
                {/* Inner Ring: India (Top), UK (Left), UAE (Right) */}
                <div className="orbit-item item-1-1">
                  <img
                    src="/assets/images/flags/india.png"
                    alt="India"
                    title="India"
                  />
                </div>
                <div className="orbit-item item-1-2">
                  <img
                    src="/assets/images/flags/us.jpg"
                    alt="UK"
                    title="UK (Proxy)"
                  />
                </div>
                <div className="orbit-item item-1-3">
                  <img src="/assets/images/flags/uae.webp" alt="UAE" />
                </div>
              </div>

              <div className="orbit-ring-2">
                {/* Outer Ring: EU (Top), Neth (Right), Pol (Bottom), Ger (Left) */}
                <div className="orbit-item item-2-1">
                  <img
                    src="/assets/images/flags/germany.jpg"
                    alt="EU"
                    title="EU (Proxy)"
                  />
                </div>
                <div className="orbit-item item-2-2">
                  <img
                    src="/assets/images/flags/spain.jpg"
                    alt="Netherlands"
                    title="Netherlands (Proxy)"
                  />
                </div>
                <div className="orbit-item item-2-3">
                  <img
                    src="/assets/images/flags/russia.jpg"
                    alt="Poland"
                    title="Poland (Proxy)"
                  />
                </div>
                <div className="orbit-item item-2-4">
                  <img src="/assets/images/flags/germany.jpg" alt="Germany" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <p className="companies-title text-muted mb-4">
              Companies we helped grow
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="hero-marquee-container">
          <div className="hero-marquee-track">
            {/* 1st Set of Logos */}
            <div className="hero-marquee-item" title="Amazon">
              <i className="mdi mdi-amazon"></i> <span>Amazon</span>
            </div>
            <div className="hero-marquee-item" title="Google+">
              <i className="mdi mdi-google-plus"></i> <span>Google</span>
            </div>
            <div className="hero-marquee-item" title="Microsoft">
              <i className="mdi mdi-microsoft"></i> <span>Microsoft</span>
            </div>
            <div className="hero-marquee-item" title="MetalLab">
              <i className="mdi mdi-alpha-m-circle-outline"></i>{" "}
              <span>MetalLab</span>
            </div>
            <div className="hero-marquee-item" title="LinkedIn">
              <i className="mdi mdi-linkedin"></i> <span>LinkedIn</span>
            </div>
            <div className="hero-marquee-item" title="Instagram">
              <i className="mdi mdi-instagram"></i> <span>Instagram</span>
            </div>
            <div className="hero-marquee-item" title="Apple Pay">
              <i className="mdi mdi-apple"></i> <span>Pay</span>
            </div>

            {/* Duplicate Set for Seamless Scroll */}
            <div className="hero-marquee-item" title="Amazon">
              <i className="mdi mdi-amazon"></i> <span>Amazon</span>
            </div>
            <div className="hero-marquee-item" title="Google+">
              <i className="mdi mdi-google-plus"></i> <span>Google</span>
            </div>
            <div className="hero-marquee-item" title="Microsoft">
              <i className="mdi mdi-microsoft"></i> <span>Microsoft</span>
            </div>
            <div className="hero-marquee-item" title="MetalLab">
              <i className="mdi mdi-alpha-m-circle-outline"></i>{" "}
              <span>MetalLab</span>
            </div>
            <div className="hero-marquee-item" title="LinkedIn">
              <i className="mdi mdi-linkedin"></i> <span>LinkedIn</span>
            </div>
            <div className="hero-marquee-item" title="Instagram">
              <i className="mdi mdi-instagram"></i> <span>Instagram</span>
            </div>
            <div className="hero-marquee-item" title="Apple Pay">
              <i className="mdi mdi-apple"></i> <span>Pay</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Shape Separator Removed for Straight Line Design */}
    </section>
  );
};
export default HeroSection;
