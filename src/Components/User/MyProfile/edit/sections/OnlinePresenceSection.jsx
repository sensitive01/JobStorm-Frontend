import React from "react";
import "./OnlinePresenceSection.css";

const OnlinePresenceSection = ({ formState, handleInputChange }) => {
  return (
    <div className="section-card">
      <div className="section-header">
        <i className="uil uil-link"></i>
        <h3>Online Presence</h3>
      </div>

      <div className="section-content">
        <div className="form-grid">
          {/* LinkedIn */}
          <div className="form-group">
            <label htmlFor="linkedin" className="form-label">
              <i className="uil uil-linkedin"></i> LinkedIn
            </label>
            <input
              type="url"
              id="linkedin"
              className="form-input"
              value={formState.linkedin}
              onChange={handleInputChange}
              placeholder="https://www.linkedin.com/in/yourprofile"
            />
          </div>

          {/* GitHub */}
          <div className="form-group">
            <label htmlFor="github" className="form-label">
              <i className="uil uil-github"></i> GitHub
            </label>
            <input
              type="url"
              id="github"
              className="form-input"
              value={formState.github}
              onChange={handleInputChange}
              placeholder="https://github.com/yourusername"
            />
          </div>

          {/* Portfolio */}
          <div className="form-group form-group-full">
            <label htmlFor="portfolio" className="form-label">
              <i className="uil uil-globe"></i> Portfolio Website
            </label>
            <input
              type="url"
              id="portfolio"
              className="form-input"
              value={formState.portfolio}
              onChange={handleInputChange}
              placeholder="https://yourportfolio.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlinePresenceSection;
