import React from "react";
import "./ProfessionalDetailsSection.css";

const ProfessionalDetailsSection = ({ formState, handleInputChange }) => {
  return (
    <div className="section-card">
      <div className="section-header">
        <i className="uil uil-briefcase-alt"></i>
        <h3>Professional Details</h3>
      </div>

      <div className="section-content">
        <div className="form-grid">
          {/* Current Role */}
          <div className="form-group">
            <label htmlFor="currentrole" className="form-label">
              Current Role
            </label>
            <input
              type="text"
              id="currentrole"
              className="form-input"
              value={formState.currentrole}
              onChange={handleInputChange}
              placeholder="e.g., Software Developer"
            />
          </div>

          {/* Specialization */}
          <div className="form-group">
            <label htmlFor="specialization" className="form-label">
              Specialization
            </label>
            <input
              type="text"
              id="specialization"
              className="form-input"
              value={formState.specialization}
              onChange={handleInputChange}
              placeholder="e.g., Full Stack Development"
            />
          </div>

          {/* Total Experience */}
          <div className="form-group">
            <label htmlFor="totalExperience" className="form-label">
              Total Experience (Years)
            </label>
            <input
              type="text"
              id="totalExperience"
              className="form-input"
              value={formState.totalExperience}
              onChange={handleInputChange}
              placeholder="e.g., 5 years"
            />
          </div>

          {/* Expected Salary */}
          <div className="form-group">
            <label htmlFor="expectedSalary" className="form-label">
              Expected Salary (Annual)
            </label>
            <input
              type="number"
              id="expectedSalary"
              className="form-input"
              value={formState.expectedSalary}
              onChange={handleInputChange}
              placeholder="e.g., 1200000"
            />
          </div>

          {/* Grade Levels */}
          <div className="form-group form-group-full">
            <label htmlFor="gradeLevels" className="form-label">
              Grade Levels (if applicable)
            </label>
            <input
              type="text"
              id="gradeLevels"
              className="form-input"
              value={formState.gradeLevels}
              onChange={handleInputChange}
              placeholder="e.g., 10th, 12th (comma separated)"
            />
            <small className="form-hint">Separate with commas</small>
          </div>

          {/* Availability */}
          <div className="form-group form-group-full">
            <div className="form-checkbox">
              <input
                type="checkbox"
                id="isAvailable"
                className="checkbox-input"
                checked={formState.isAvailable}
                onChange={handleInputChange}
              />
              <label htmlFor="isAvailable" className="checkbox-label">
                <i className="uil uil-check-circle"></i>
                Available for Job Opportunities
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetailsSection;
