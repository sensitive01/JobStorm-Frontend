import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MySavedJobs.css";
import {
  candidateSaveJob,
  getSavedJobDetails,
  getSavedJobs,
} from "../../../api/service/axiosService";

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

      const response = await getSavedJobDetails(candidateId);
      console.log("API Response:", response);

      if (response.status === 200) {
        // Map API data to component format
        let mappedJobs = response?.data?.savedJobs?.map((job) => {
          // Check if current user has applied to this job
          const hasApplied =
            candidateId &&
            job.applications?.some(
              (application) => application?.applicantId === candidateId,
            );

          return {
            ...job,
            // Map API fields to component fields
            id: job._id,
            title: job.jobTitle,
            companyLogo: `https://ui-avatars.com/api/?name=${encodeURIComponent(
              job.companyName,
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
                  tag.toLowerCase().includes(searchQuery.toLowerCase()),
                )),
          );
        }

        // Apply type filter
        if (filterType !== "all") {
          mappedJobs = mappedJobs.filter(
            (job) =>
              job.type && job.type.toLowerCase() === filterType.toLowerCase(),
          );
        }

        // Apply sorting
        switch (sortBy) {
          case "newest":
            mappedJobs.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
            );
            break;
          case "oldest":
            mappedJobs.sort(
              (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
            );
            break;
          case "salary-high":
            mappedJobs.sort((a, b) => (b.salaryTo || 0) - (a.salaryTo || 0));
            break;
          case "salary-low":
            mappedJobs.sort(
              (a, b) => (a.salaryFrom || 0) - (b.salaryFrom || 0),
            );
            break;
          default:
            break;
        }

        setJobs(mappedJobs);

        // Update applied jobs Set from the mapped jobs
        const appliedIds = new Set(
          mappedJobs.filter((job) => job.isApplied).map((job) => job.id),
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

  // Fetch user's saved jobs
  const fetchSavedJobs = async () => {
    try {
      const token = getAuthToken();
      if (!token) return;

      const response = await getSavedJobs(token);

      if (response.status === 200) {
        // Handle the API response format: { savedJobs: ["id1", "id2"] }
        const savedIds = new Set(response.data.savedJobs || []);
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

  // Handle Save Job for Later with Confirmation
  const handleSaveJob = async (jobId) => {
    const token = getAuthToken();
    if (!token) {
      alert("Please login to save jobs");
      navigate("/candidate-login");
      return;
    }

    try {
      const isSaved = savedJobs.has(jobId);

      // Show confirmation dialog
      const confirmMessage = isSaved
        ? "Are you sure you want to remove this job from your saved list?"
        : "Do you want to save this job for later?";

      const confirmed = window.confirm(confirmMessage);

      if (!confirmed) {
        return; // User cancelled the action
      }

      const response = await candidateSaveJob(token, jobId);

      if (response.status === 200) {
        if (isSaved) {
          setSavedJobs((prev) => {
            const newSet = new Set(prev);
            newSet.delete(jobId);
            return newSet;
          });
          alert("✓ Job removed from saved list successfully!");
        } else {
          setSavedJobs((prev) => new Set(prev).add(jobId));
          alert(
            "✓ Job saved successfully! You can find it in your saved jobs.",
          );
        }
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
    <div className="my-saved-jobs">
      {/* Search and Filter Section */}
      <div className="filters-section">
        <div className="search-box">
          <i className="uil uil-search"></i>
          <input
            type="text"
            placeholder="Search saved jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-controls">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="form-select"
          >
            <option value="all">All Types</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Freelance">Freelance</option>
            <option value="Remote">Remote</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="form-select"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="salary-high">Salary: High to Low</option>
            <option value="salary-low">Salary: Low to High</option>
          </select>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="alert alert-danger">
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Jobs Grid */}
      {loading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading your saved jobs...</p>
        </div>
      ) : jobs.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">❤️</div>
          <h3>No Saved Jobs Found</h3>
          <p>
            {searchQuery || filterType !== "all"
              ? "Try adjusting your search or filters"
              : "Jobs you save will appear here for easy access"}
          </p>
          <button className="browse-btn" onClick={() => navigate("/job-list")}>
            Browse Jobs
          </button>
        </div>
      ) : (
        <div className="saved-jobs-grid">
          {jobs.map((job) => (
            <div key={job.id} className="saved-job-card">
              <div className="card-top">
                <img
                  src={job.companyLogo}
                  alt={job.companyName}
                  className="company-logo"
                />
                <button
                  className="remove-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Removing job:", job.id);
                    // Pass job.id. If job.id is missing, try job._id as fallback
                    handleSaveJob(job.id || job._id);
                  }}
                  title="Remove from saved"
                >
                  <i className="uil uil-trash-alt"></i>
                </button>
              </div>

              <div className="card-content">
                <h3 className="job-title">{job.title || job.jobTitle}</h3>
                <p className="company-name">{job.companyName}</p>

                <div className="job-tags">
                  <span className="tag">
                    <i className="uil uil-map-marker"></i>{" "}
                    {job.location || "N/A"}
                  </span>
                  <span className="tag">
                    <i className="uil uil-clock"></i> {job.type || job.jobType}
                  </span>
                  {job.salary && (
                    <span className="tag salary">
                      <i className="uil uil-bill"></i> {job.salary}
                    </span>
                  )}
                </div>

                <div className="skills-preview">
                  {job.tags?.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                  {job.tags?.length > 3 && (
                    <span className="more-skills">+{job.tags.length - 3}</span>
                  )}
                </div>
              </div>

              <div className="card-footer">
                <div className="meta-info">
                  {job.deadline && (
                    <span className="deadline">
                      Expires: {new Date(job.deadline).toLocaleDateString()}
                    </span>
                  )}
                  <span className="saved-date">Posted {job.postedDate}</span>
                </div>
                <div className="action-buttons">
                  <button
                    className="view-btn"
                    onClick={() => navigate(`/job-preview/${job.id}`)}
                  >
                    View Details
                  </button>
                  <button
                    className={`apply-btn ${job.isApplied ? "applied" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!job.isApplied) handleApply(job.id);
                    }}
                    disabled={job.isApplied}
                  >
                    {job.isApplied ? "Applied" : "Apply Now"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllJobList;
