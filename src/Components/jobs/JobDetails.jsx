import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./jobdetails.css";
import { getJobDetails } from "../../api/service/employerService";
import { submitEasyApply } from "../../api/service/axiosService";
import { uploadCloudinary } from "../utils/cloudinaryConfig";

// API Configuration
const API_BASE_URL =
  import.meta.env.REACT_APP_API_URL || "http://localhost:5000/api";

const getAuthToken = () => {
  return localStorage.getItem("token");
};

const JobDetails = () => {
  const { id } = useParams();
  const candidateId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);

  // Modal States
  const [showModal, setShowModal] = useState(false);
  const [modalView, setModalView] = useState("options");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null); // Store Cloudinary URL
  const [coverLetter, setCoverLetter] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "today";
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const fetchJobDetails = async () => {
    try {
      setLoading(true);
      const response = await getJobDetails(id);

      const jobData = response.data;
      const mappedJob = {
        ...jobData,
        title: jobData.jobTitle,
        type: jobData.jobType,
        experience: `${jobData.experienceLevel} years`,
        salary:
          jobData.salaryFrom && jobData.salaryTo
            ? `₹${jobData.salaryFrom.toLocaleString()} - ₹${jobData.salaryTo.toLocaleString()} ${
                jobData.salaryType
              }`
            : null,
        description: jobData.jobDescription,
        fullDescription: jobData.jobDescription,
        requirements: jobData.qualifications || [],
        tags: jobData.skills || [],
        postedDate: getTimeAgo(jobData.createdAt),
        urgent: false,
        companyLogo: null,
        companyInfo: {
          about: `${jobData.companyName} is hiring for the position of ${jobData.jobTitle} in ${jobData.category} department.`,
          industry: jobData.category,
          size: `${jobData.vacancy} openings`,
          website: jobData.companyWebsite,
        },
      };
      setJob(mappedJob);
      const isApplied = jobData?.applications?.filter(
        (candidate) => candidate?.applicantId === candidateId
      );
      console.log("isApplied", isApplied);
      if (isApplied.length !== 0) {
        setApplied(true);
      } else {
        setApplied(false);
      }

      setError(null);
    } catch (error) {
      console.error("Error fetching job details:", error);
      setError("Failed to load job details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    const token = getAuthToken();
    if (!token) {
      alert("Please login to apply for jobs");
      navigate("/candidate-login");
      return;
    }
    setShowModal(true);
    setModalView("options");
  };

  const closeModal = () => {
    setShowModal(false);
    setModalView("options");
    setSelectedFile(null);
    setUploadedFileUrl(null);
    setCoverLetter("");
    setSubmitting(false);
    setUploading(false);
    setUploadError(null);
  };

  const handleEasyApply = () => {
    setModalView("easyApply");
  };

  const handleManualApply = () => {
    navigate(`/apply-manually/${id}`);
    closeModal();
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  // Handle file upload - Upload to Cloudinary immediately using your utility
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      event.target.value = "";
      return;
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PDF or DOC file");
      event.target.value = "";
      return;
    }

    // Set file info
    setSelectedFile(file);
    setUploadError(null);

    // Upload to Cloudinary immediately using your utility
    setUploading(true);
    try {
      console.log("📤 Starting upload for:", file.name);

      const result = await uploadCloudinary(file);

      console.log("✅ Upload successful!");
      console.log("📎 Cloudinary URL:", result.url);

      setUploadedFileUrl(result.url);
    } catch (error) {
      console.error("❌ Upload failed:", error);
      setUploadError(error.message || "Failed to upload file");
      setSelectedFile(null);
      event.target.value = "";
      alert("Failed to upload resume: " + (error.message || "Unknown error"));
    } finally {
      setUploading(false);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setUploadedFileUrl(null);
    setUploadError(null);
    const fileInput = document.getElementById("resumeFile");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  // Submit application with the already uploaded file URL
  const submitEasyApplication = async () => {
    if (!uploadedFileUrl) {
      alert("Please upload your resume first");
      return;
    }

    setSubmitting(true);

    try {
      const response = await submitEasyApply(
        uploadedFileUrl,
        id,
        coverLetter,
        candidateId
      );
      console.log("✅ Application submitted successfully:", response);
      if (response.status === 201) {
        setApplied(true);
        setModalView("success");
      }
    } catch (error) {
      console.error("❌ Application submission failed:", error);
      alert(error.message || "Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSaveJob = async () => {
    const token = getAuthToken();
    if (!token) {
      alert("Please login to save jobs");
      navigate("/login");
      return;
    }

    try {
      const url = `${API_BASE_URL}/jobs/${id}/save`;
      const method = saved ? "DELETE" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to save job");

      setSaved(!saved);
      alert(saved ? "Job removed from saved jobs" : "Job saved successfully!");
    } catch (error) {
      console.error("Error saving job:", error);
      alert("Failed to save job. Please try again.");
    }
  };

  const getJobTypeBadge = (type) => {
    const badges = {
      "full-time": "badge-success",
      "part-time": "badge-warning",
      contract: "badge-info",
      internship: "badge-primary",
      freelance: "badge-secondary",
    };
    return badges[type?.toLowerCase()] || "badge-secondary";
  };

  if (loading) {
    return (
      <div className="job-details-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading job details...</p>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="job-details-page">
        <div className="error-container">
          <h2>😕 {error || "Job not found"}</h2>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/job-list")}
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="job-details-page">
      {/* Application Modal */}
      {showModal && (
        <div
          className="application-modal-overlay"
          onClick={(e) => {
            if (e.target.className === "application-modal-overlay") {
              closeModal();
            }
          }}
        >
          <div className="application-modal">
            {/* Modal Header */}
            <div className="modal-header">
              <h2>Apply for Position</h2>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div
              className="modal-body"
              style={{ display: modalView === "success" ? "none" : "block" }}
            >
              <div className="modal-intro">
                <p>You're applying for</p>
                <p className="job-title-modal">{job.title}</p>
                <p>
                  at <strong>{job.companyName}</strong>
                </p>
              </div>

              {/* Application Options */}
              {modalView === "options" && (
                <div className="application-options">
                  <div className="application-option" onClick={handleEasyApply}>
                    <div className="option-header">
                      <div className="option-icon easy-apply-icon">📄</div>
                      <div className="option-content">
                        <h3>
                          Easy Apply{" "}
                          <span className="option-badge">Recommended</span>
                        </h3>
                      </div>
                    </div>
                    <p className="option-description">
                      Upload your resume and we'll automatically fill in your
                      details. Quick and simple!
                    </p>
                  </div>

                  <div
                    className="application-option"
                    onClick={handleManualApply}
                  >
                    <div className="option-header">
                      <div className="option-icon manual-apply-icon">✍️</div>
                      <div className="option-content">
                        <h3>Enter Details Manually</h3>
                      </div>
                    </div>
                    <p className="option-description">
                      Fill out a comprehensive application form with all your
                      information manually.
                    </p>
                  </div>
                </div>
              )}

              {/* Easy Apply Form */}
              {modalView === "easyApply" && (
                <div className="easy-apply-form">
                  <div className="form-group">
                    <label>
                      Upload Resume <span className="required">*</span>
                    </label>

                    {/* Upload Area - Show when no file selected */}
                    {!selectedFile && !uploadedFileUrl && (
                      <div
                        className="file-upload-area"
                        onClick={() =>
                          document.getElementById("resumeFile").click()
                        }
                      >
                        <div className="upload-icon">📁</div>
                        <p>
                          <strong>Click to upload</strong> or drag and drop
                        </p>
                        <p className="file-types">PDF, DOC, DOCX (Max 5MB)</p>
                        <input
                          type="file"
                          id="resumeFile"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                          style={{ display: "none" }}
                          disabled={uploading}
                        />
                      </div>
                    )}

                    {/* Uploading State */}
                    {uploading && (
                      <div
                        className="uploaded-file"
                        style={{
                          backgroundColor: "#fff3cd",
                          border: "2px solid #ffc107",
                        }}
                      >
                        <div className="uploaded-file-info">
                          <div
                            className="spinner"
                            style={{
                              width: "20px",
                              height: "20px",
                              margin: 0,
                              borderWidth: "2px",
                            }}
                          ></div>
                          <div className="file-details">
                            <p className="file-name">
                              Uploading to Cloudinary...
                            </p>
                            <p className="file-size">{selectedFile?.name}</p>
                            <p
                              style={{
                                fontSize: "11px",
                                color: "#856404",
                                marginTop: "3px",
                              }}
                            >
                              Please wait...
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Uploaded File with Link */}
                    {uploadedFileUrl && selectedFile && !uploading && (
                      <div
                        className="uploaded-file"
                        style={{
                          backgroundColor: "#d4edda",
                          border: "2px solid #28a745",
                        }}
                      >
                        <div className="uploaded-file-info">
                          <span
                            className="file-icon"
                            style={{ fontSize: "24px" }}
                          >
                            ✅
                          </span>
                          <div className="file-details">
                            <p
                              className="file-name"
                              style={{ fontWeight: "500" }}
                            >
                              {selectedFile.name}
                            </p>
                            <p
                              className="file-size"
                              style={{ color: "#155724" }}
                            >
                              {formatFileSize(selectedFile.size)} • Uploaded to
                              cloud
                            </p>
                            <a
                              href={uploadedFileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                fontSize: "12px",
                                color: "#0066cc",
                                textDecoration: "none",
                                marginTop: "5px",
                                display: "inline-block",
                                fontWeight: "500",
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              🔗 View uploaded resume
                            </a>
                          </div>
                        </div>
                        <button
                          className="remove-file"
                          onClick={removeFile}
                          style={{ color: "#721c24" }}
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>

                  {uploadError && (
                    <div
                      style={{
                        color: "#721c24",
                        fontSize: "13px",
                        marginTop: "-10px",
                        marginBottom: "15px",
                        padding: "12px",
                        backgroundColor: "#f8d7da",
                        border: "1px solid #f5c6cb",
                        borderRadius: "6px",
                      }}
                    >
                      <strong>⚠️ Upload Error:</strong> {uploadError}
                    </div>
                  )}

                  <div className="form-group">
                    <label>Cover Letter (Optional)</label>
                    <textarea
                      className="form-textarea"
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      placeholder="Tell us why you're a great fit for this role..."
                      maxLength={500}
                    />
                    <div className="char-count">{coverLetter.length} / 500</div>
                  </div>
                </div>
              )}
            </div>

            {/* Success Message */}
            {modalView === "success" && (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Application Submitted!</h3>
                <p>
                  Your application has been successfully submitted. We'll review
                  it and get back to you soon.
                </p>
                <button
                  className="btn btn-primary btn-block"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            )}

            {/* Modal Footer */}
            {modalView !== "success" && (
              <div className="modal-footer">
                <button className="btn btn-cancel" onClick={closeModal}>
                  Cancel
                </button>
                {modalView === "easyApply" && (
                  <button
                    className="btn btn-submit"
                    onClick={submitEasyApplication}
                    disabled={submitting || uploading || !uploadedFileUrl}
                  >
                    {uploading
                      ? "Uploading to Cloud..."
                      : submitting
                      ? "Submitting Application..."
                      : "Submit Application"}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="container">
        <div className="job-details-content">
          {/* Main Content */}
          <div className="job-details-main">
            {/* Job Header */}
            <div className="job-header-card">
              <div className="job-header-top">
                <img
                  src={
                    job.companyLogo ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      job.companyName
                    )}&background=4A90E2&color=fff&size=128&bold=true`
                  }
                  alt={job.companyName}
                  className="company-logo-large"
                />
                <div className="job-header-info">
                  <h1 className="job-title-large">{job.title}</h1>
                  <p className="company-name-large">{job.companyName}</p>
                  <div className="job-meta">
                    <span className="meta-item">
                      <span className="icon">📍</span> {job.location}
                    </span>
                    <span className="meta-item">
                      <span className="icon">💼</span> {job.type}
                    </span>
                    <span className="meta-item">
                      <span className="icon">⏱️</span> {job.experience}
                    </span>
                    {job.salary && (
                      <span className="meta-item">
                        <span className="icon">💰</span> {job.salary}
                      </span>
                    )}
                    {job.isRemote && (
                      <span className="meta-item">
                        <span className="icon">🏠</span> Remote
                      </span>
                    )}
                  </div>
                  <div className="job-tags-header">
                    <span className={`badge ${getJobTypeBadge(job.type)}`}>
                      {job.type}
                    </span>
                    <span className="badge badge-light">
                      Posted {job.postedDate}
                    </span>
                    {job.urgent && (
                      <span className="badge badge-danger">Urgent Hiring</span>
                    )}
                    {job.position && (
                      <span className="badge badge-info">
                        {job.position} level
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="job-header-actions">
                {applied ? (
                  <button className="btn btn-applied" disabled>
                    ✓ Applied
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={openModal}>
                    Apply Now
                  </button>
                )}
                <button
                  className={`btn btn-outline ${saved ? "btn-saved" : ""}`}
                  onClick={handleSaveJob}
                >
                  {saved ? "❤️ Saved" : "🤍 Save Job"}
                </button>
              </div>
            </div>

            {/* Job Description */}
            <div className="details-section">
              <h2>Job Description</h2>
              <p className="section-content">
                {job.fullDescription || job.description}
              </p>
            </div>

            {/* Requirements/Qualifications */}
            {job.requirements && job.requirements.length > 0 && (
              <div className="details-section">
                <h2>Requirements & Qualifications</h2>
                <ul className="section-list">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills/Tags */}
            {job.tags && job.tags.length > 0 && (
              <div className="details-section">
                <h2>Required Skills</h2>
                <div className="skills-tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="job-details-sidebar">
            {/* Company Info */}
            {job.companyInfo && (
              <div className="sidebar-card">
                <h3>About {job.companyName}</h3>
                <p>{job.companyInfo.about}</p>
                <div className="company-details">
                  <div className="company-detail-item">
                    <strong>Industry:</strong>
                    <span>{job.companyInfo.industry}</span>
                  </div>
                  <div className="company-detail-item">
                    <strong>Openings:</strong>
                    <span>{job.companyInfo.size}</span>
                  </div>
                  {job.companyInfo.website && (
                    <div className="company-detail-item">
                      <strong>Website:</strong>
                      <a
                        href={
                          job.companyInfo.website.startsWith("http")
                            ? job.companyInfo.website
                            : `https://${job.companyInfo.website}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Job Details Summary */}
            <div className="sidebar-card">
              <h3>Job Summary</h3>
              <div className="company-details">
                <div className="company-detail-item">
                  <strong>Job ID:</strong>
                  <span>{job.jobId}</span>
                </div>
                <div className="company-detail-item">
                  <strong>Category:</strong>
                  <span>{job.category}</span>
                </div>
                <div className="company-detail-item">
                  <strong>Job Type:</strong>
                  <span>{job.jobType}</span>
                </div>
                <div className="company-detail-item">
                  <strong>Experience:</strong>
                  <span>{job.experienceLevel} years</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="sidebar-card">
              <h3>Quick Actions</h3>
              <button
                className="btn btn-block btn-outline"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
              >
                🔗 Share Job
              </button>
              <button
                className="btn btn-block btn-outline"
                onClick={() => navigate("/jobs")}
              >
                📋 Browse More Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
