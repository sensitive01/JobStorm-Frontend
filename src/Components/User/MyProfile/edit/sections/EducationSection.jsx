import React, { useState } from "react";
import "./EducationSection.css";

const EducationSection = ({ education, setEducation }) => {
  const [educationInput, setEducationInput] = useState({
    type: "",
    degree: "",
    institution: "",
    startDate: "",
    endDate: "",
  });

  const handleEducationInputChange = (field, value) => {
    setEducationInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addEducation = () => {
    if (
      educationInput.type &&
      educationInput.degree &&
      educationInput.institution &&
      educationInput.startDate
    ) {
      setEducation([...education, { ...educationInput }]);
      setEducationInput({
        type: "",
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
      });
    } else {
      alert("Please fill all required education fields");
    }
  };

  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  return (
    <div className="section-card">
      <div className="section-header">
        <i className="uil uil-graduation-cap"></i>
        <h3>Education</h3>
      </div>

      <div className="section-content">
        {/* Add Education Form */}
        <div className="add-form-container">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Type</label>
              <input
                type="text"
                className="form-input"
                value={educationInput.type}
                onChange={(e) =>
                  handleEducationInputChange("type", e.target.value)
                }
                placeholder="e.g., Degree, Diploma"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Degree</label>
              <input
                type="text"
                className="form-input"
                value={educationInput.degree}
                onChange={(e) =>
                  handleEducationInputChange("degree", e.target.value)
                }
                placeholder="e.g., B.Sc, B.Ed"
              />
            </div>

            <div className="form-group form-group-full">
              <label className="form-label">Institution</label>
              <input
                type="text"
                className="form-input"
                value={educationInput.institution}
                onChange={(e) =>
                  handleEducationInputChange("institution", e.target.value)
                }
                placeholder="Institution name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-input"
                value={educationInput.startDate}
                onChange={(e) =>
                  handleEducationInputChange("startDate", e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-input"
                value={educationInput.endDate}
                onChange={(e) =>
                  handleEducationInputChange("endDate", e.target.value)
                }
              />
            </div>

            <div className="form-group form-group-full">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={addEducation}
              >
                <i className="uil uil-plus"></i> Add Education
              </button>
            </div>
          </div>
        </div>

        {/* Education List */}
        {education.length > 0 && (
          <div className="items-list">
            <h6 className="list-title">Added Education:</h6>
            {education.map((edu, index) => (
              <div key={index} className="list-item">
                <div className="list-item-content">
                  <h5 className="item-title">
                    {edu.degree} - {edu.type}
                  </h5>
                  <p className="item-subtitle">{edu.institution}</p>
                  <p className="item-date">
                    {edu.startDate} - {edu.endDate || "Present"}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-remove"
                  onClick={() => removeEducation(index)}
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

export default EducationSection;
