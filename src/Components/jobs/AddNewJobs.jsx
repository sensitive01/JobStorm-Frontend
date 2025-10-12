import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./jobs.css";
import UnauthorizedAccess from "./UnauthorizedAccess"
import { getJobDetails, postNewJob, updateJob } from "../../api/service/employerService";

const AddNewJobs = () => {
  const role = localStorage.getItem("role");
  const { id } = useParams();
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("basic");
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [responsibilityInput, setResponsibilityInput] = useState("");
  const [qualifications, setQualifications] = useState([]);
  const [qualificationInput, setQualificationInput] = useState("");
  const [locationTypes, setLocationTypes] = useState([]);
  const [locationTypeInput, setLocationTypeInput] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    category: "",
    jobType: "",
    experienceLevel: "",
    educationLevel: "",
    position: "",
    vacancy: "",
    salaryFrom: "",
    salaryTo: "",
    salaryType: "",
    applicationDeadline: "",
    contactEmail: "",
    contactPhone: "",
    companyWebsite: "",
    benefits: "",
    applicationInstructions: "",
    location: "",
    companyAddress: "",
  });

  // Check if user is employer
  const isEmployer = role === "employer";

  useEffect(() => {
    const fetchData = async () => {
      if (id && isEmployer) {
        try {
          const response = await getJobDetails(id);
          if (response.status === 200) {
            const jobData = response.data;
            setFormData({
              companyName: jobData.companyName || "",
              jobTitle: jobData.jobTitle || "",
              jobDescription: jobData.jobDescription || "",
              category: jobData.category || "",
              jobType: jobData.jobType || "",
              experienceLevel: jobData.experienceLevel || "",
              educationLevel: jobData.educationLevel || "",
              position: jobData.position || "",
              vacancy: jobData.vacancy || "",
              salaryFrom: jobData.salaryFrom || "",
              salaryTo: jobData.salaryTo || "",
              salaryType: jobData.salaryType || "",
              applicationDeadline: jobData.applicationDeadline || "",
              contactEmail: jobData.contactEmail || "",
              contactPhone: jobData.contactPhone || "",
              companyWebsite: jobData.companyWebsite || "",
              benefits: jobData.benefits || "",
              applicationInstructions: jobData.applicationInstructions || "",
              location: jobData.location || "",
              companyAddress: jobData.companyAddress || "",
            });

            setSkills(Array.isArray(jobData.skills) ? jobData.skills : []);
            setResponsibilities(
              Array.isArray(jobData.responsibilities)
                ? jobData.responsibilities
                : []
            );
            setQualifications(
              Array.isArray(jobData.qualifications)
                ? jobData.qualifications
                : []
            );
            setLocationTypes(
              Array.isArray(jobData.locationTypes) ? jobData.locationTypes : []
            );
            setIsRemote(jobData.isRemote || false);
            setIsEditMode(true);
          }
        } catch (error) {
          console.error("Error fetching job details:", error);
          toast.error("Failed to load job details");
        }
      }
    };

    fetchData();
  }, [id, isEmployer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleAddResponsibility = () => {
    if (
      responsibilityInput.trim() &&
      !responsibilities.includes(responsibilityInput.trim())
    ) {
      setResponsibilities([...responsibilities, responsibilityInput.trim()]);
      setResponsibilityInput("");
    }
  };

  const handleRemoveResponsibility = (item) => {
    setResponsibilities(responsibilities.filter((resp) => resp !== item));
  };

  const handleAddQualification = () => {
    if (
      qualificationInput.trim() &&
      !qualifications.includes(qualificationInput.trim())
    ) {
      setQualifications([...qualifications, qualificationInput.trim()]);
      setQualificationInput("");
    }
  };

  const handleRemoveQualification = (item) => {
    setQualifications(qualifications.filter((qual) => qual !== item));
  };

  const handleAddLocationType = () => {
    if (
      locationTypeInput.trim() &&
      !locationTypes.includes(locationTypeInput.trim())
    ) {
      setLocationTypes([...locationTypes, locationTypeInput.trim()]);
      setLocationTypeInput("");
    }
  };

  const handleRemoveLocationType = (typeToRemove) => {
    setLocationTypes(locationTypes.filter((type) => type !== typeToRemove));
  };

  const handleKeyPress = (e, addFunction) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addFunction();
    }
  };

  const validateBasicInfo = () => {
    if (!formData.jobTitle) {
      toast.error("Job Title is required");
      return false;
    }
    if (!formData.jobDescription) {
      toast.error("Job Description is required");
      return false;
    }
    if (!formData.category) {
      toast.error("Category is required");
      return false;
    }
    if (!formData.salaryFrom) {
      toast.error("Salary From is required");
      return false;
    }
    if (!formData.salaryTo) {
      toast.error("Salary To is required");
      return false;
    }
    return true;
  };

  const handleSaveAndNext = () => {
    if (validateBasicInfo()) {
      setActiveTab("location");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateBasicInfo()) {
      return;
    }

    if (!formData.location) {
      toast.error("Location is required");
      return;
    }

    setLoading(true);

    try {
      const jobData = {
        ...formData,
        skills: skills,
        responsibilities: responsibilities,
        qualifications: qualifications,
        locationTypes: locationTypes,
        isRemote: isRemote,
      };

      let response;
      if (isEditMode && id) {
        response = await updateJob(id, jobData);
        if (response.status === 200) {
          toast.success("Job updated successfully");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      } else {
        response = await postNewJob(userId, jobData);
        if (response.status === 201) {
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }else{
           toast.error(response.response.data.message);

        }
      }
    } catch (error) {
      console.error("Error posting/updating job:", error);
      toast.error(
        isEditMode
          ? "An error occurred while updating the job"
          : "An error occurred while posting the job"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/employer/all-job-list");
  };

  const handleLoginRedirect = () => {
    navigate("/employer-login");
  };

  // If user is not an employer, show login message
  if (!isEmployer) {
    return (
    <UnauthorizedAccess/>
    );
  }

  return (
    <>
      <div className="post-job-container">
        {/* Header */}
        <div className="post-job-header">
          <h2 className="post-job-title">
            {isEditMode ? "Edit Job" : "Post Job"}
          </h2>
          <button onClick={handleCancel} className="post-job-close-btn">
            <svg
              className="post-job-close-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="post-job-tabs">
          <button
            onClick={() => setActiveTab("basic")}
            className={`post-job-tab ${
              activeTab === "basic"
                ? "post-job-tab-active"
                : "post-job-tab-inactive"
            }`}
          >
            Basic Information
          </button>
          <button
            onClick={() => setActiveTab("location")}
            className={`post-job-tab ${
              activeTab === "location"
                ? "post-job-tab-active"
                : "post-job-tab-inactive"
            }`}
          >
            Location
          </button>
        </div>

        {/* Form Content */}
        <div className="post-job-form-content">
          <form onSubmit={handleSubmit}>
            {/* Basic Information Tab */}
            {activeTab === "basic" && (
              <div className="post-job-form-section">
                {/* Company Name and Job Title */}
                <div className="post-job-grid-2">
                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Company Name <span className="post-job-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="post-job-input"
                      required
                    />
                  </div>

                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Job Title <span className="post-job-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="e.g., Product Designer / UI Designer"
                      className="post-job-input"
                      required
                    />
                  </div>
                </div>

                {/* Job Description */}
                <div className="post-job-form-group">
                  <label className="post-job-label">
                    Job Description <span className="post-job-required">*</span>
                  </label>
                  <textarea
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Describe the role, expectations, and what makes this position unique..."
                    className="post-job-textarea"
                    required
                  />
                </div>

                {/* Category and Job Type */}
                <div className="post-job-grid-2">
                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Category <span className="post-job-required">*</span>
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="post-job-select"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="IT">IT & Software</option>
                      <option value="marketing">Marketing</option>
                      <option value="sales">Sales</option>
                      <option value="design">Design</option>
                      <option value="engineering">Engineering</option>
                      <option value="finance">Finance</option>
                      <option value="hr">Human Resources</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                    </select>
                  </div>

                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Job Type <span className="post-job-required">*</span>
                    </label>
                    <select
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleChange}
                      className="post-job-select"
                      required
                    >
                      <option value="">Select Job Type</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                      <option value="temporary">Temporary</option>
                      <option value="freelance">Freelance</option>
                    </select>
                  </div>
                </div>

                {/* Experience Level, Position, and Vacancy */}
                <div className="post-job-grid-3">
                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Experience Level{" "}
                      <span className="post-job-required">*</span>
                    </label>
                    <select
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleChange}
                      className="post-job-select"
                      required
                    >
                      <option value="">Select Experience</option>
                      <option value="0-1">0-1 Year</option>
                      <option value="1-3">1-3 Years</option>
                      <option value="3-5">3-5 Years</option>
                      <option value="5-10">5-10 Years</option>
                      <option value="10+">10+ Years</option>
                    </select>
                  </div>

                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Position <span className="post-job-required">*</span>
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="post-job-select"
                      required
                    >
                      <option value="">Select Position</option>
                      <option value="junior">Junior</option>
                      <option value="mid">Mid-Level</option>
                      <option value="senior">Senior</option>
                      <option value="lead">Lead</option>
                      <option value="manager">Manager</option>
                      <option value="director">Director</option>
                    </select>
                  </div>

                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Number of Vacancies{" "}
                      <span className="post-job-required">*</span>
                    </label>
                    <input
                      type="number"
                      name="vacancy"
                      value={formData.vacancy}
                      onChange={handleChange}
                      min="1"
                      placeholder="e.g., 8"
                      className="post-job-input"
                      required
                    />
                  </div>
                </div>

                {/* Education Level and Application Deadline */}
                <div className="post-job-grid-2">
                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Education Level{" "}
                      <span className="post-job-required">*</span>
                    </label>
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleChange}
                      className="post-job-select"
                      required
                    >
                      <option value="">Select Education Level</option>
                      <option value="high-school">High School</option>
                      <option value="associate">Associate Degree</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD</option>
                      <option value="any">Any Degree</option>
                    </select>
                  </div>

                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Application Deadline
                    </label>
                    <input
                      type="date"
                      name="applicationDeadline"
                      value={formData.applicationDeadline}
                      onChange={handleChange}
                      className="post-job-input"
                    />
                  </div>
                </div>

                {/* Salary Information */}
                <div className="post-job-grid-3">
                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Salary From <span className="post-job-required">*</span>
                    </label>
                    <input
                      type="number"
                      name="salaryFrom"
                      value={formData.salaryFrom}
                      onChange={handleChange}
                      placeholder="e.g., 2150"
                      className="post-job-input"
                      required
                    />
                  </div>

                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Salary To <span className="post-job-required">*</span>
                    </label>
                    <input
                      type="number"
                      name="salaryTo"
                      value={formData.salaryTo}
                      onChange={handleChange}
                      placeholder="e.g., 3500"
                      className="post-job-input"
                      required
                    />
                  </div>

                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Salary Type <span className="post-job-required">*</span>
                    </label>
                    <select
                      name="salaryType"
                      value={formData.salaryType}
                      onChange={handleChange}
                      className="post-job-select"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="hourly">Per Hour</option>
                      <option value="monthly">Per Month</option>
                      <option value="yearly">Per Year</option>
                    </select>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="post-job-form-group">
                  <label className="post-job-label">Responsibilities</label>
                  <div className="post-job-input-group">
                    <input
                      type="text"
                      value={responsibilityInput}
                      onChange={(e) => setResponsibilityInput(e.target.value)}
                      onKeyPress={(e) =>
                        handleKeyPress(e, handleAddResponsibility)
                      }
                      placeholder="Add responsibility and press Enter"
                      className="post-job-input post-job-input-flex"
                    />
                    <button
                      type="button"
                      onClick={handleAddResponsibility}
                      className="post-job-btn post-job-btn-primary"
                    >
                      Add
                    </button>
                  </div>
                  {responsibilities.length > 0 && (
                    <ul className="post-job-list">
                      {responsibilities.map((resp, index) => (
                        <li key={index} className="post-job-list-item">
                          <span className="post-job-list-bullet">•</span>
                          <span className="post-job-list-text">{resp}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveResponsibility(resp)}
                            className="post-job-remove-btn"
                          >
                            ×
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Qualifications */}
                <div className="post-job-form-group">
                  <label className="post-job-label">Qualifications</label>
                  <div className="post-job-input-group">
                    <input
                      type="text"
                      value={qualificationInput}
                      onChange={(e) => setQualificationInput(e.target.value)}
                      onKeyPress={(e) =>
                        handleKeyPress(e, handleAddQualification)
                      }
                      placeholder="Add qualification and press Enter"
                      className="post-job-input post-job-input-flex"
                    />
                    <button
                      type="button"
                      onClick={handleAddQualification}
                      className="post-job-btn post-job-btn-primary"
                    >
                      Add
                    </button>
                  </div>
                  {qualifications.length > 0 && (
                    <ul className="post-job-list">
                      {qualifications.map((qual, index) => (
                        <li key={index} className="post-job-list-item">
                          <span className="post-job-list-bullet">•</span>
                          <span className="post-job-list-text">{qual}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveQualification(qual)}
                            className="post-job-remove-btn"
                          >
                            ×
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Skills & Experience */}
                <div className="post-job-form-group">
                  <label className="post-job-label">Skills & Experience</label>
                  <div className="post-job-input-group">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyPress={(e) => handleKeyPress(e, handleAddSkill)}
                      placeholder="Add skill and press Enter (e.g., PHP, JS, React)"
                      className="post-job-input post-job-input-flex"
                    />
                    <button
                      type="button"
                      onClick={handleAddSkill}
                      className="post-job-btn post-job-btn-primary"
                    >
                      Add
                    </button>
                  </div>
                  {skills.length > 0 && (
                    <div className="post-job-tags">
                      {skills.map((skill, index) => (
                        <span key={index} className="post-job-tag">
                          {skill}
                          <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            className="post-job-tag-btn"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact Information */}
                <div className="post-job-grid-2">
                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Contact Email <span className="post-job-required">*</span>
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      placeholder="hr@company.com"
                      className="post-job-input"
                      required
                    />
                  </div>

                  <div className="post-job-form-group">
                    <label className="post-job-label">
                      Contact Phone <span className="post-job-required">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      placeholder="+589 560 56555"
                      className="post-job-input"
                      required
                    />
                  </div>
                </div>

                {/* Company Website */}
                <div className="post-job-form-group">
                  <label className="post-job-label">Company Website</label>
                  <input
                    type="url"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    placeholder="www.company.com"
                    className="post-job-input"
                  />
                </div>

                {/* Benefits */}
                <div className="post-job-form-group">
                  <label className="post-job-label">Benefits & Perks</label>
                  <textarea
                    name="benefits"
                    value={formData.benefits}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe benefits such as health insurance, flexible hours, remote work options, etc."
                    className="post-job-textarea"
                  />
                </div>

                {/* Application Instructions */}
                <div className="post-job-form-group">
                  <label className="post-job-label">
                    Application Instructions
                  </label>
                  <textarea
                    name="applicationInstructions"
                    value={formData.applicationInstructions}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Special instructions for applicants (e.g., required documents, application process)"
                    className="post-job-textarea"
                  />
                </div>
              </div>
            )}

            {/* Location Tab */}
            {activeTab === "location" && (
              <div className="post-job-form-section">
                <div className="post-job-form-group">
                  <label className="post-job-label">
                    Location <span className="post-job-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State/Province"
                    className="post-job-input"
                    required
                  />
                </div>

                <div className="post-job-form-group">
                  <label className="post-job-label">Company Address</label>
                  <textarea
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Full company address"
                    className="post-job-textarea"
                  />
                </div>

                <div className="post-job-form-group">
                  <label className="post-job-label">Location Types</label>
                  <div className="post-job-input-group">
                    <input
                      type="text"
                      value={locationTypeInput}
                      onChange={(e) => setLocationTypeInput(e.target.value)}
                      onKeyPress={(e) =>
                        handleKeyPress(e, handleAddLocationType)
                      }
                      placeholder="Add location type and press Enter (e.g., Office, Hybrid)"
                      className="post-job-input post-job-input-flex"
                    />
                    <button
                      type="button"
                      onClick={handleAddLocationType}
                      className="post-job-btn post-job-btn-primary"
                    >
                      Add
                    </button>
                  </div>
                  {locationTypes.length > 0 && (
                    <div className="post-job-tags">
                      {locationTypes.map((type, index) => (
                        <span key={index} className="post-job-location-tag">
                          {type}
                          <button
                            type="button"
                            onClick={() => handleRemoveLocationType(type)}
                            className="post-job-location-tag-btn"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="post-job-checkbox-group">
                  <input
                    type="checkbox"
                    id="isRemote"
                    checked={isRemote}
                    onChange={(e) => setIsRemote(e.target.checked)}
                    className="post-job-checkbox"
                  />
                  <label htmlFor="isRemote" className="post-job-checkbox-label">
                    This is a Remote Job
                  </label>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className="post-job-footer">
          <button
            type="button"
            onClick={handleCancel}
            className="post-job-btn-cancel"
            disabled={loading}
          >
            Cancel
          </button>
          {activeTab === "basic" ? (
            <button
              type="button"
              onClick={handleSaveAndNext}
              className="post-job-btn post-job-btn-primary"
            >
              Save & Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="post-job-btn post-job-btn-primary"
            >
              {loading
                ? isEditMode
                  ? "Updating..."
                  : "Posting..."
                : isEditMode
                ? "Update"
                : "Post"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AddNewJobs;
