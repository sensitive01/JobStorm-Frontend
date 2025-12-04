import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./appliedjobs.css";
import { getMyAppliedJobs } from "../../../api/service/axiosService";

const AppliedJobs = () => {
  const candidateId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawingJobId, setWithdrawingJobId] = useState(null);

  useEffect(() => {
    fetchAppliedJobs();
  }, []);

  const fetchAppliedJobs = async () => {
    setLoading(true);
    try {
      const response = await getMyAppliedJobs(candidateId);
      console.log(response.data.data);

      if (response.status === 200) {
        // Transform API data to match component structure
        const transformedJobs = response.data.data.flatMap((job) => {
          return job.applications.map((application) => {
            // Map the status from API to match your badge system
            const statusMapping = {
              pending: "pending",
              "under review": "under-review",
              shortlisted: "shortlisted",
              "interview scheduled": "interview-scheduled",
              "offer received": "offered",
              offered: "offered",
              rejected: "rejected",
              "not selected": "rejected",
              withdrawn: "withdrawn",
            };

            const mappedStatus =
              statusMapping[application.employApplicantStatus.toLowerCase()] ||
              "pending";

            return {
              id: application._id,
              jobId: job._id,
              jobTitle: job.jobTitle || "N/A",
              companyName: job.companyName || "N/A",
              companyLogo:
                job.companyLogo ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  job.companyName || "Company"
                )}&background=4A90E2&color=fff&size=128&bold=true`,
              location: job.location || "N/A",
              jobType: job.jobType || "N/A",
              salary:
                job.salaryFrom && job.salaryTo
                  ? `${job.salaryFrom}-${job.salaryTo}`
                  : "N/A",

              appliedDate: application.appliedDate,
              applicationStatus: mappedStatus,
              skills: job.skills || [],
              experience: job.experienceLevel || "N/A",
              // Additional fields from your application
              resume: application.resume,
              coverLetter: application.coverLetter,
              favourite: application.favourite,
              // Interview and offer fields (if available)
              interviewDate: application.interviewDate,
              interviewTime: application.interviewTime,
              offerAmount: application.offerAmount,
            };
          });
        });

        setAppliedJobs(transformedJobs);
      }
    } catch (error) {
      console.error("Error fetching applied jobs:", error);
      // You might want to show an error message to the user
      // alert("Failed to fetch applied jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Get time ago helper
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

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get status badge details
  const getStatusBadge = (status) => {
    const badges = {
      pending: { label: "Pending", class: "status-pending", icon: "⏳" },
      "under-review": {
        label: "Under Review",
        class: "status-review",
        icon: "👁️",
      },
      shortlisted: {
        label: "Shortlisted",
        class: "status-shortlisted",
        icon: "✨",
      },
      "interview-scheduled": {
        label: "Interview Scheduled",
        class: "status-interview",
        icon: "📅",
      },
      offered: { label: "Offer Received", class: "status-offered", icon: "🎉" },
      rejected: { label: "Not Selected", class: "status-rejected", icon: "❌" },
      withdrawn: { label: "Withdrawn", class: "status-withdrawn", icon: "↩️" },
    };
    return badges[status] || badges.pending;
  };

  // Filter and sort jobs
  const getFilteredJobs = () => {
    let filtered = [...appliedJobs];

    // Apply status filter
    if (filterStatus !== "all") {
      filtered = filtered.filter(
        (job) => job.applicationStatus === filterStatus
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "newest":
        filtered.sort(
          (a, b) => new Date(b.appliedDate) - new Date(a.appliedDate)
        );
        break;
      case "oldest":
        filtered.sort(
          (a, b) => new Date(a.appliedDate) - new Date(b.appliedDate)
        );
        break;
      case "status":
        filtered.sort((a, b) =>
          a.applicationStatus.localeCompare(b.applicationStatus)
        );
        break;
      default:
        break;
    }

    return filtered;
  };

  // Handle withdraw application
  const handleWithdrawClick = (job) => {
    setSelectedJob(job);
    setShowWithdrawModal(true);
  };

  const confirmWithdraw = () => {
    if (selectedJob) {
      setWithdrawingJobId(selectedJob.id);

      // Simulate API call
      setTimeout(() => {
        setAppliedJobs((prev) =>
          prev.map((job) =>
            job.id === selectedJob.id
              ? { ...job, applicationStatus: "withdrawn" }
              : job
          )
        );
        setWithdrawingJobId(null);
        setShowWithdrawModal(false);
        setSelectedJob(null);
        alert("Application withdrawn successfully!");
      }, 1000);
    }
  };

  // Handle view status
  const handleViewStatus = (job) => {
    setSelectedJob(job);
    setShowStatusModal(true);
  };

  // Get status steps for timeline
  const getStatusSteps = (status) => {
    const allSteps = [
      { key: "pending", label: "Application Submitted" },
      { key: "under-review", label: "Under Review" },
      { key: "shortlisted", label: "Shortlisted" },
      { key: "interview-scheduled", label: "Interview Scheduled" },
      { key: "offered", label: "Offer Received" },
    ];

    const rejectedSteps = [
      { key: "pending", label: "Application Submitted" },
      { key: "rejected", label: "Not Selected" },
    ];

    const withdrawnSteps = [
      { key: "pending", label: "Application Submitted" },
      { key: "withdrawn", label: "Application Withdrawn" },
    ];

    if (status === "rejected") return rejectedSteps;
    if (status === "withdrawn") return withdrawnSteps;
    return allSteps;
  };

  const getCurrentStepIndex = (status, steps) => {
    return steps.findIndex((step) => step.key === status);
  };

  const filteredJobs = getFilteredJobs();

  return (
    <div className="applied-jobs">
      {/* Header Section */}
      <div className="applied-jobs-header">
        <div className="container">
          <h1>My Applications</h1>
          <p>Track and manage your job applications</p>
        </div>
      </div>

      <div className="container">
        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div className="stat-content">
              <h3>{appliedJobs.length}</h3>
              <p>Total Applications</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <h3>
                {
                  appliedJobs.filter((j) => j.applicationStatus === "pending")
                    .length
                }
              </h3>
              <p>Pending</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✨</div>
            <div className="stat-content">
              <h3>
                {
                  appliedJobs.filter(
                    (j) => j.applicationStatus === "shortlisted"
                  ).length
                }
              </h3>
              <p>Shortlisted</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎉</div>
            <div className="stat-content">
              <h3>
                {
                  appliedJobs.filter((j) => j.applicationStatus === "offered")
                    .length
                }
              </h3>
              <p>Offers</p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="filter-section">
          <div className="filter-group">
            <label>Filter by Status:</label>
            <select
              className="form-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Applications</option>
              <option value="pending">Pending</option>
              <option value="under-review">Under Review</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="interview-scheduled">Interview Scheduled</option>
              <option value="offered">Offer Received</option>
              <option value="rejected">Not Selected</option>
              <option value="withdrawn">Withdrawn</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Sort by:</label>
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>

        {/* Jobs List */}
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading your applications...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="no-jobs">
            <div className="no-jobs-icon">📭</div>
            <h3>No Applications Found</h3>
            <p>
              {filterStatus !== "all"
                ? "No applications with this status"
                : "You haven't applied to any jobs yet"}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/jobs")}
            >
              Browse Jobs
            </button>
          </div>
        ) : (
          <div className="jobs-list">
            {filteredJobs.map((job) => {
              const statusBadge = getStatusBadge(job.applicationStatus);
              console.log("statusBadge", statusBadge);
              console.log("job.applicationStatus", job.applicationStatus);
              const canWithdraw = ![
                "rejected",
                "withdrawn",
                "offered",
              ].includes(job.applicationStatus);

              return (
                <div key={job.id} className="job-application-card">
                  {/* Card Header */}
                  <div className="card-header">
                    <div className="company-section">
                      <img
                        src={job.companyLogo}
                        alt={job.companyName}
                        className="company-logo"
                      />
                      <div className="job-info">
                        <h3 className="job-title">{job.jobTitle}</h3>
                        <p className="company-name">{job.companyName}</p>
                      </div>
                    </div>
                    <span className={`status-badge ${statusBadge.class}`}>
                      <span className="badge-icon">{statusBadge.icon}</span>
                      {statusBadge.label}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <div className="job-details-grid">
                      <div className="detail-item">
                        <span className="detail-icon">📍</span>
                        <span className="detail-text">{job.location}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">💼</span>
                        <span className="detail-text">{job.jobType}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">💰</span>
                        <span className="detail-text">{job.salary}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">⏱️</span>
                        <span className="detail-text">{job.experience}</span>
                      </div>
                    </div>

                    <div className="application-meta">
                      <p className="applied-date">
                        Applied on {formatDate(job.appliedDate)} (
                        {getTimeAgo(job.appliedDate)})
                      </p>
                    </div>

                    {/* Interview Info */}
                    {job.applicationStatus === "interview-scheduled" &&
                      job.interviewDate && (
                        <div className="interview-info">
                          <div className="info-badge">
                            <span className="info-icon">📅</span>
                            <div>
                              <strong>Interview Scheduled</strong>
                              <p>
                                {formatDate(job.interviewDate)} at{" "}
                                {job.interviewTime}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                    {/* Offer Info */}
                    {job.applicationStatus === "offered" && job.offerAmount && (
                      <div className="offer-info">
                        <div className="info-badge success">
                          <span className="info-icon">🎉</span>
                          <div>
                            <strong>Congratulations! Offer Received</strong>
                            <p>Offered Amount: {job.offerAmount}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    {job.skills && job.skills.length > 0 && (
                      <div className="skills-section">
                        {job.skills.slice(0, 4).map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 4 && (
                          <span className="skill-tag more">
                            +{job.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="card-footer">
                    <button
                      className="btn btn-outline"
                      onClick={() => handleViewStatus(job)}
                    >
                      <span className="btn-icon">📊</span>
                      View Status
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => navigate(`/job-preview/${job.jobId}`)}
                    >
                      <span className="btn-icon">👁️</span>
                      View Job
                    </button>
                    {canWithdraw && (
                      <button
                        className="btn btn-danger"
                        onClick={() => handleWithdrawClick(job)}
                        disabled={withdrawingJobId === job.id}
                      >
                        <span className="btn-icon">↩️</span>
                        {withdrawingJobId === job.id
                          ? "Withdrawing..."
                          : "Withdraw"}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Status Modal */}
      {showStatusModal && selectedJob && (
        <div
          className="modal-overlay"
          onClick={() => setShowStatusModal(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Application Status</h2>
              <button
                className="close-btn"
                onClick={() => setShowStatusModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="job-summary">
                <img
                  src={selectedJob.companyLogo}
                  alt={selectedJob.companyName}
                  className="modal-logo"
                />
                <div>
                  <h3>{selectedJob.jobTitle}</h3>
                  <p>{selectedJob.companyName}</p>
                </div>
              </div>

              <div className="status-timeline">
                {getStatusSteps(selectedJob.applicationStatus).map(
                  (step, index) => {
                    const currentIndex = getCurrentStepIndex(
                      selectedJob.applicationStatus,
                      getStatusSteps(selectedJob.applicationStatus)
                    );
                    const isCompleted = index <= currentIndex;
                    const isCurrent = index === currentIndex;

                    return (
                      <div
                        key={step.key}
                        className={`timeline-step ${
                          isCompleted ? "completed" : ""
                        } ${isCurrent ? "current" : ""}`}
                      >
                        <div className="step-indicator">
                          {isCompleted ? "✓" : index + 1}
                        </div>
                        <div className="step-content">
                          <h4>{step.label}</h4>
                          {isCurrent && (
                            <p className="current-label">Current Status</p>
                          )}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>

              <div className="application-details">
                <div className="detail-row">
                  <span className="label">Applied On:</span>
                  <span className="value">
                    {formatDate(selectedJob.appliedDate)}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="label">Status:</span>
                  <span className="value">
                    {getStatusBadge(selectedJob.applicationStatus).label}
                  </span>
                </div>
                {selectedJob.interviewDate && (
                  <div className="detail-row">
                    <span className="label">Interview Date:</span>
                    <span className="value">
                      {formatDate(selectedJob.interviewDate)} at{" "}
                      {selectedJob.interviewTime}
                    </span>
                  </div>
                )}
                {selectedJob.offerAmount && (
                  <div className="detail-row">
                    <span className="label">Offer Amount:</span>
                    <span className="value">{selectedJob.offerAmount}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                onClick={() => setShowStatusModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Confirmation Modal */}
      {showWithdrawModal && selectedJob && (
        <div
          className="modal-overlay"
          onClick={() => setShowWithdrawModal(false)}
        >
          <div
            className="modal-content modal-small"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Withdraw Application</h2>
              <button
                className="close-btn"
                onClick={() => setShowWithdrawModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="warning-icon">⚠️</div>
              <p className="warning-text">
                Are you sure you want to withdraw your application for{" "}
                <strong>{selectedJob.jobTitle}</strong> at{" "}
                <strong>{selectedJob.companyName}</strong>?
              </p>
              <p className="warning-subtext">
                This action cannot be undone. You will need to reapply if you
                change your mind.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setShowWithdrawModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-danger"
                onClick={confirmWithdraw}
                disabled={withdrawingJobId !== null}
              >
                {withdrawingJobId ? "Withdrawing..." : "Yes, Withdraw"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
