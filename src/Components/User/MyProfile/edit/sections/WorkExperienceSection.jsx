import React, { useState } from "react";
import "./WorkExperienceSection.css";

const WorkExperienceSection = ({ workExperience, setWorkExperience }) => {
  const [workExperienceInput, setWorkExperienceInput] = useState({
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    isCurrentlyWorking: false,
  });

  const handleWorkExperienceInputChange = (field, value) => {
    setWorkExperienceInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCurrentlyWorkingChange = (checked) => {
    setWorkExperienceInput((prev) => ({
      ...prev,
      isCurrentlyWorking: checked,
      endDate: checked ? "" : prev.endDate,
    }));
  };

  const addWorkExperience = () => {
    if (
      workExperienceInput.position &&
      workExperienceInput.company &&
      workExperienceInput.startDate
    ) {
      setWorkExperience([...workExperience, { ...workExperienceInput }]);
      setWorkExperienceInput({
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        isCurrentlyWorking: false,
      });
    } else {
      alert("Please fill all required work experience fields");
    }
  };

  const removeWorkExperience = (index) => {
    setWorkExperience(workExperience.filter((_, i) => i !== index));
  };

  return (
    <div className="section-card">
      <div className="section-header">
        <i className="uil uil-suitcase-alt"></i>
        <h3>Work Experience</h3>
      </div>

      <div className="section-content">
        {/* Add Work Experience Form */}
        <div className="add-form-container">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Position / Role</label>
              <input
                type="text"
                className="form-input"
                value={workExperienceInput.position}
                onChange={(e) =>
                  handleWorkExperienceInputChange("position", e.target.value)
                }
                placeholder="Job title"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-input"
                value={workExperienceInput.company}
                onChange={(e) =>
                  handleWorkExperienceInputChange("company", e.target.value)
                }
                placeholder="Company name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-input"
                value={workExperienceInput.startDate}
                onChange={(e) =>
                  handleWorkExperienceInputChange("startDate", e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-input"
                value={workExperienceInput.endDate}
                onChange={(e) =>
                  handleWorkExperienceInputChange("endDate", e.target.value)
                }
                disabled={workExperienceInput.isCurrentlyWorking}
              />
            </div>

            <div className="form-group form-group-full">
              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="isCurrentlyWorking"
                  className="checkbox-input"
                  checked={workExperienceInput.isCurrentlyWorking}
                  onChange={(e) =>
                    handleCurrentlyWorkingChange(e.target.checked)
                  }
                />
                <label htmlFor="isCurrentlyWorking" className="checkbox-label">
                  <i className="uil uil-check-circle"></i>
                  Currently working here
                </label>
              </div>
            </div>

            <div className="form-group form-group-full">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={addWorkExperience}
              >
                <i className="uil uil-plus"></i> Add Work Experience
              </button>
            </div>
          </div>
        </div>

        {/* Work Experience List */}
        {workExperience.length > 0 && (
          <div className="items-list">
            <h6 className="list-title">Added Work Experience:</h6>
            {workExperience.map((work, index) => (
              <div key={index} className="list-item">
                <div className="list-item-content">
                  <h5 className="item-title">{work.position}</h5>
                  <p className="item-subtitle">{work.company}</p>
                  <p className="item-date">
                    {work.startDate} -{" "}
                    {work.isCurrentlyWorking ? "Present" : work.endDate}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-remove"
                  onClick={() => removeWorkExperience(index)}
                >
                  <i className="uil uil-times"></i>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceSection;
