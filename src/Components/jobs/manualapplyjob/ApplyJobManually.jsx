import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./jobApplicationform.css";

const JobApplicationForm = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    experience: "",
    coverLetter: "",
    currentLocation: "",
    currentCompany: "",
    currentRole: "",
    currentSalary: "",
    expectedSalary: "",
    noticePeriod: "",
  });

  const [resume, setResume] = useState(null);
  const [resumePreview, setResumePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle resume file upload
  const handleResumeChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          resume: "Please upload a PDF or Word document",
        }));
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          resume: "File size should not exceed 5MB",
        }));
        return;
      }

      setResume(file);
      setResumePreview(file.name);
      setErrors((prev) => ({
        ...prev,
        resume: "",
      }));
    }
  };

  // Remove uploaded resume
  const handleRemoveResume = () => {
    setResume(null);
    setResumePreview(null);
    document.getElementById("resume-input").value = "";
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Resume validation
    if (!resume) {
      newErrors.resume = "Resume is required";
    }

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\s/g, ""))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    // Experience validation
    if (!formData.experience.trim()) {
      newErrors.experience = "Experience is required";
    }

    // Current Location validation
    if (!formData.currentLocation.trim()) {
      newErrors.currentLocation = "Current location is required";
    }

    // Current Company validation
    if (!formData.currentCompany.trim()) {
      newErrors.currentCompany = "Current company name is required";
    }

    // Current Role validation
    if (!formData.currentRole.trim()) {
      newErrors.currentRole = "Current role is required";
    }

    // Current Salary validation
    if (!formData.currentSalary.trim()) {
      newErrors.currentSalary = "Current salary is required";
    } else if (isNaN(formData.currentSalary) || formData.currentSalary <= 0) {
      newErrors.currentSalary = "Please enter a valid salary amount";
    }

    // Expected Salary validation
    if (!formData.expectedSalary.trim()) {
      newErrors.expectedSalary = "Expected salary is required";
    } else if (isNaN(formData.expectedSalary) || formData.expectedSalary <= 0) {
      newErrors.expectedSalary = "Please enter a valid salary amount";
    }

    // Notice Period validation
    if (!formData.noticePeriod.trim()) {
      newErrors.noticePeriod = "Notice period is required";
    }

    // Cover Letter is optional, no validation needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData object for file upload
      const submitData = new FormData();
      submitData.append("resume", resume);
      submitData.append("jobId", jobId);

      // Append all form fields
      Object.keys(formData).forEach((key) => {
        submitData.append(key, formData[key]);
      });

      // Get auth token
      const token = localStorage.getItem("userId");

      // API call to submit application
      const response = await fetch("YOUR_API_ENDPOINT/applications/apply", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: submitData,
      });

      if (response.ok) {
        alert("✓ Application submitted successfully!");
        navigate("/my-applications");
      } else {
        const errorData = await response.json();
        alert(
          `Failed to submit application: ${
            errorData.message || "Please try again"
          }`
        );
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(
        "An error occurred while submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="job-application-form">
      <div className="container">
        <div className="form-header">
          <h1>Apply for Job</h1>
          <p>Fill in your details to complete your application</p>
        </div>

        <form onSubmit={handleSubmit} className="application-form">
          {/* Resume Upload Section */}
          <div className="form-section">
            <h2 className="section-title">Resume *</h2>
            <div className="resume-upload-container">
              {!resumePreview ? (
                <div className="upload-area">
                  <input
                    type="file"
                    id="resume-input"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    className="file-input"
                  />
                  <label htmlFor="resume-input" className="upload-label">
                    <div className="upload-icon">📄</div>
                    <div className="upload-text">
                      <p className="upload-title">Upload Resume</p>
                      <p className="upload-subtitle">
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </div>
                  </label>
                </div>
              ) : (
                <div className="resume-preview">
                  <div className="preview-icon">📄</div>
                  <div className="preview-details">
                    <p className="preview-filename">{resumePreview}</p>
                    <p className="preview-size">
                      {(resume.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveResume}
                    className="remove-btn"
                    title="Remove resume"
                  >
                    ✕
                  </button>
                </div>
              )}
              {errors.resume && (
                <span className="error-message">{errors.resume}</span>
              )}
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="form-section">
            <h2 className="section-title">Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={errors.fullName ? "error" : ""}
                />
                {errors.fullName && (
                  <span className="error-message">{errors.fullName}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="mobile">
                  Mobile Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="1234567890"
                  maxLength="10"
                  className={errors.mobile ? "error" : ""}
                />
                {errors.mobile && (
                  <span className="error-message">{errors.mobile}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="experience">
                  Total Experience <span className="required">*</span>
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={errors.experience ? "error" : ""}
                >
                  <option value="">Select experience</option>
                  <option value="0-1 years">0-1 years</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-7 years">5-7 years</option>
                  <option value="7-10 years">7-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
                {errors.experience && (
                  <span className="error-message">{errors.experience}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="currentLocation">
                Current Location <span className="required">*</span>
              </label>
              <input
                type="text"
                id="currentLocation"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleChange}
                placeholder="City, State"
                className={errors.currentLocation ? "error" : ""}
              />
              {errors.currentLocation && (
                <span className="error-message">{errors.currentLocation}</span>
              )}
            </div>
          </div>

          {/* Current Employment Section */}
          <div className="form-section">
            <h2 className="section-title">Current Employment Details</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="currentCompany">
                  Current Company Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="currentCompany"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleChange}
                  placeholder="Company name"
                  className={errors.currentCompany ? "error" : ""}
                />
                {errors.currentCompany && (
                  <span className="error-message">{errors.currentCompany}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="currentRole">
                  Current Role <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="currentRole"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleChange}
                  placeholder="Your current position"
                  className={errors.currentRole ? "error" : ""}
                />
                {errors.currentRole && (
                  <span className="error-message">{errors.currentRole}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="currentSalary">
                  Current Salary (per annum) <span className="required">*</span>
                </label>
                <div className="input-with-icon">
                  <span className="input-icon">₹</span>
                  <input
                    type="number"
                    id="currentSalary"
                    name="currentSalary"
                    value={formData.currentSalary}
                    onChange={handleChange}
                    placeholder="500000"
                    className={errors.currentSalary ? "error" : ""}
                  />
                </div>
                {errors.currentSalary && (
                  <span className="error-message">{errors.currentSalary}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="expectedSalary">
                  Expected Salary (per annum){" "}
                  <span className="required">*</span>
                </label>
                <div className="input-with-icon">
                  <span className="input-icon">₹</span>
                  <input
                    type="number"
                    id="expectedSalary"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    placeholder="600000"
                    className={errors.expectedSalary ? "error" : ""}
                  />
                </div>
                {errors.expectedSalary && (
                  <span className="error-message">{errors.expectedSalary}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="noticePeriod">
                Notice Period <span className="required">*</span>
              </label>
              <select
                id="noticePeriod"
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
                className={errors.noticePeriod ? "error" : ""}
              >
                <option value="">Select notice period</option>
                <option value="Immediate">
                  Immediate (Can join immediately)
                </option>
                <option value="15 days">15 days</option>
                <option value="30 days">30 days</option>
                <option value="45 days">45 days</option>
                <option value="60 days">60 days</option>
                <option value="90 days">90 days</option>
              </select>
              {errors.noticePeriod && (
                <span className="error-message">{errors.noticePeriod}</span>
              )}
            </div>
          </div>

          {/* Cover Letter Section */}
          <div className="form-section">
            <h2 className="section-title">
              Cover Letter <span className="optional">(Optional)</span>
            </h2>
            <div className="form-group">
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                rows="6"
                className="cover-letter-textarea"
              />
              <span className="character-count">
                {formData.coverLetter.length} characters
              </span>
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-secondary"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-small"></span>
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
