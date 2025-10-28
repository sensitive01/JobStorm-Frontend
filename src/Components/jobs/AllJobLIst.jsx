import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./jobportal.css";
import { getAllJobs } from "../../api/service/axiosService";

// API Configuration
const API_BASE_URL =
  import.meta.env.REACT_APP_API_URL || "http://localhost:5000/api";

const getAuthToken = () => {
  return localStorage.getItem("userId");
};

const AllJobList = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [appliedJobs, setAppliedJobs] = useState(new Set());
  const [savedJobs, setSavedJobs] = useState(new Set());
  const [sortBy, setSortBy] = useState("newest");
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  // Fetch jobs on component mount and when filters change
  useEffect(() => {
    fetchJobs();
    fetchAppliedJobs();
    fetchSavedJobs();
  }, [sortBy, filterType, searchQuery]);

  // Helper function to calculate time ago
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

  // Fetch all jobs from backend
  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);

      const candidateId = getAuthToken(); // Get current user ID

      const response = await getAllJobs();
      console.log("API Response:", response);

      if (response.status === 200) {
        // Map API data to component format
        let mappedJobs = response.data.map((job) => {
          // Check if current user has applied to this job
          const hasApplied =
            candidateId &&
            job.applications?.some(
              (application) => application?.applicantId === candidateId
            );

          return {
            ...job,
            // Map API fields to component fields
            id: job._id,
            title: job.jobTitle,
            companyLogo: `https://ui-avatars.com/api/?name=${encodeURIComponent(
              job.companyName
            )}&background=4A90E2&color=fff&size=128&bold=true`,
            salary:
              job.salaryFrom && job.salaryTo
                ? `₹${job.salaryFrom.toLocaleString()} - ₹${job.salaryTo.toLocaleString()}/${
                    job.salaryType
                  }`
                : null,
            experience: job.experienceLevel,
            type: job.jobType,
            description: job.jobDescription,
            tags: job.skills || [],
            postedDate: getTimeAgo(job.createdAt),
            urgent: job.status === "urgent" || false,
            isApplied: hasApplied || false, // Track if user has applied
          };
        });

        // Apply search filter
        if (searchQuery) {
          mappedJobs = mappedJobs.filter(
            (job) =>
              job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              job.companyName
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
              (job.tags &&
                job.tags.some((tag) =>
                  tag.toLowerCase().includes(searchQuery.toLowerCase())
                ))
          );
        }

        // Apply type filter
        if (filterType !== "all") {
          mappedJobs = mappedJobs.filter(
            (job) =>
              job.type && job.type.toLowerCase() === filterType.toLowerCase()
          );
        }

        // Apply sorting
        switch (sortBy) {
          case "newest":
            mappedJobs.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
            break;
          case "oldest":
            mappedJobs.sort(
              (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
            );
            break;
          case "salary-high":
            mappedJobs.sort((a, b) => (b.salaryTo || 0) - (a.salaryTo || 0));
            break;
          case "salary-low":
            mappedJobs.sort(
              (a, b) => (a.salaryFrom || 0) - (b.salaryFrom || 0)
            );
            break;
          default:
            break;
        }

        setJobs(mappedJobs);

        // Update applied jobs Set from the mapped jobs
        const appliedIds = new Set(
          mappedJobs.filter((job) => job.isApplied).map((job) => job.id)
        );
        setAppliedJobs(appliedIds);
      } else {
        setJobs([]);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("Failed to load jobs. Please try again later.");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user's applied jobs
  const fetchAppliedJobs = async () => {
    try {
      const token = getAuthToken();
      if (!token) return;

      const response = await fetch(
        `${API_BASE_URL}/applications/my-applications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const appliedIds = new Set(data.map((app) => app.jobId || app.id));
        setAppliedJobs((prev) => new Set([...prev, ...appliedIds]));
      }
    } catch (error) {
      console.error("Error fetching applied jobs:", error);
    }
  };

  // Fetch user's saved jobs
  const fetchSavedJobs = async () => {
    try {
      const token = getAuthToken();
      if (!token) return;

      const response = await fetch(`${API_BASE_URL}/saved-jobs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const savedIds = new Set(data.map((job) => job.jobId || job.id));
        setSavedJobs(savedIds);
      }
    } catch (error) {
      console.error("Error fetching saved jobs:", error);
    }
  };

  // Handle Apply for Job
  const handleApply = async (jobId) => {
    const token = getAuthToken();
    if (!token) {
      alert("Please login to apply for jobs");
      navigate("/candidate-login");
      return;
    }

    // Navigate to job details page where they can apply with full form
    navigate(`/job-preview/${jobId}`);
  };

  // Handle Save Job for Later
  const handleSaveJob = async (jobId) => {
    const token = getAuthToken();
    if (!token) {
      alert("Please login to save jobs");
      navigate("/candidate-login");
      return;
    }

    try {
      const isSaved = savedJobs.has(jobId);
      const url = `${API_BASE_URL}/jobs/${jobId}/save`;
      const method = isSaved ? "DELETE" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to save job");

      if (isSaved) {
        setSavedJobs((prev) => {
          const newSet = new Set(prev);
          newSet.delete(jobId);
          return newSet;
        });
        alert("Job removed from saved jobs");
      } else {
        setSavedJobs((prev) => new Set(prev).add(jobId));
        alert("Job saved successfully!");
      }
    } catch (error) {
      console.error("Error saving job:", error);
      alert("Failed to save job. Please try again.");
    }
  };

  // Check if job is applied
  const isApplied = (jobId) => appliedJobs.has(jobId);

  // Check if job is saved
  const isSaved = (jobId) => savedJobs.has(jobId);

  // Get badge class for job type
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

  return (
    <div className="all-job-list">
      {/* Header Section */}
      <div className="job-list-header">
        <div className="container">
          <h1>Find Your Dream Job</h1>
          <p>Browse through {jobs.length} available positions</p>
        </div>
      </div>

      <div className="container">
        {/* Search and Filter Section */}
        <div className="search-filter-section">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="search-icon">🔍</i>
              </div>
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Job Types</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="salary-high">Salary: High to Low</option>
                <option value="salary-low">Salary: Low to High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="alert alert-danger">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading jobs...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="no-jobs">
            <div className="no-jobs-icon">📋</div>
            <h3>No Jobs Found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        ) : (
          /* Job List */
          <div className="job-cards-container">
            {jobs.map((job) => (
              <div key={job.id || job._id} className="job-card">
                {/* Posted Date at Top */}
                <div className="job-posted">
                  Posted {job.postedDate || "2 days ago"}
                </div>

                {/* Job Card Header */}
                <div className="job-card-header">
                  <div className="company-info">
                    <img
                      src={job.companyLogo || "https://via.placeholder.com/60"}
                      alt={job.companyName}
                      className="company-logo"
                    />
                    <div>
                      <h3 className="job-title">{job.title || job.jobTitle}</h3>
                      <p className="company-name">
                        {job.companyName || job.company}
                      </p>
                    </div>
                  </div>
                  <button
                    className={`save-btn ${
                      isSaved(job.id || job._id) ? "saved" : ""
                    }`}
                    onClick={() => handleSaveJob(job.id || job._id)}
                    title={
                      isSaved(job.id || job._id) ? "Unsave" : "Save for later"
                    }
                  >
                    {isSaved(job.id || job._id) ? "❤️" : "🤍"}
                  </button>
                </div>

                {/* Job Details */}
                <div className="job-details">
                  <div className="job-detail-item">
                    <span className="icon">📍</span>
                    <span>{job.location}</span>
                  </div>
                  {job.salary && (
                    <div className="job-detail-item">
                      <span className="icon">💰</span>
                      <span>{job.salary}</span>
                    </div>
                  )}
                  {job.experience && (
                    <div className="job-detail-item">
                      <span className="icon">⏱️</span>
                      <span>{job.experience}</span>
                    </div>
                  )}
                </div>

                {/* Job Description - Will be truncated to 3 lines by CSS */}
                {job.description && (
                  <p className="job-description">{job.description}</p>
                )}

                {/* Job Tags - Limited display */}
                <div className="job-tags">
                  {job.type && (
                    <span className={`badge ${getJobTypeBadge(job.type)}`}>
                      {job.type}
                    </span>
                  )}
                  {/* Show max 4 skill tags to prevent overflow */}
                  {job.tags &&
                    job.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="badge badge-light">
                        {tag}
                      </span>
                    ))}
                  {/* Show +X more if there are additional tags */}
                  {job.tags && job.tags.length > 4 && (
                    <span className="badge badge-secondary">
                      +{job.tags.length - 4} more
                    </span>
                  )}
                  {job.urgent && (
                    <span className="badge badge-danger">Urgent</span>
                  )}
                </div>

                {/* Job Card Footer - NOW AT BOTTOM */}
                <div className="job-card-footer">
                  <div className="job-actions">
                    <button
                      className="btn btn-outline"
                      onClick={() =>
                        navigate(`/job-preview/${job.id || job._id}`)
                      }
                    >
                      View Details
                    </button>
                    {isApplied(job.id || job._id) ? (
                      <button className="btn btn-applied" disabled>
                        ✓ Applied
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => handleApply(job.id || job._id)}
                      >
                        Apply Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllJobList;
