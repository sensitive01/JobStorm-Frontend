import React from "react";
import "./HeroSection.css";
import indiaImage from "../../../assets/images/india.jpg";
import uaeImage from "../../../assets/images/uae.jpg";
import ukImage from "../../../assets/images/uk.jpg";
import germanyImage from "../../../assets/images/germany.jpg";
import polandImage from "../../../assets/images/poland.jpg";
import euImage from "../../../assets/images/Europe.jpg";
import netherlandsImage from "../../../assets/images/Netherlands.jpg"; // Fixed casing
import jobsstormLogo from "../../../../public/assets/images/favicon.ico";
import asiaImage from "../../../assets/images/Asia.png";

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
                <img src={euImage} className="region-flag" alt="Europe" />
                Europe
              </button>
              <button
                className="region-btn"
                onClick={() =>
                  (window.location.href = "/job-list?location=Middle East")
                }
              >
                <img src={uaeImage} className="region-flag" alt="Middle East" />
                Middle East
              </button>
              <button
                className="region-btn"
                onClick={() =>
                  (window.location.href = "/job-list?location=Asia")
                }
              >
                {/* Visual placeholder for Asia using India for now as China flag is missing */}
                <img src={asiaImage} className="region-flag" alt="Asia" />
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
              <div className="country-select border-start ps-4">
                {/* Using US flag as placeholder for India if India not found */}
                <img src={indiaImage} className="country-flag" alt="India" />
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
              <div
                className="orbit-center-logo bg-transparent shadow-none"
                style={{ padding: 0 }}
              >
                {/* User can replace this src with their logo */}
                <img
                  src={jobsstormLogo}
                  alt="Center Logo"
                  className="w-100 h-100 rounded-4 object-fit-cover"
                />
              </div>

              <div className="orbit-ring-1">
                {/* Inner Ring: UAE, UK, India */}
                <div className="orbit-item item-1-1">
                  <img src={uaeImage} alt="UAE" />
                </div>
                <div className="orbit-item item-1-2">
                  <img src={ukImage} alt="UK" />
                </div>
                <div className="orbit-item item-1-3">
                  <img src={indiaImage} alt="India" />
                </div>
              </div>

              <div className="orbit-ring-2">
                {/* Outer Ring: Netherlands, Poland, Germany, EU */}
                <div className="orbit-item item-2-1">
                  <img src={netherlandsImage} alt="Netherlands" />
                </div>
                <div className="orbit-item item-2-2">
                  <img src={polandImage} alt="Poland" />
                </div>
                <div className="orbit-item item-2-3">
                  <img src={germanyImage} alt="Germany" />
                </div>
                <div className="orbit-item item-2-4">
                  <img src={euImage} alt="EU" />
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
