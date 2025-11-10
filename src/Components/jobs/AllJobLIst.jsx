import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./jobportal.css";
import {
  candidateSaveJob,
  getAllJobs,
  getSavedJobs,
} from "../../api/service/axiosService";

// API Configuration
const API_BASE_URL =
  import.meta.env.REACT_APP_API_URL || "http://localhost:5000/api";

const getAuthToken = () => {
  return localStorage.getItem("userId");
};

const AllJobList = () => {
  const locationCtx = useLocation();
  const state = locationCtx?.state || {};
  const { category = "", jobTitle = "", location: locationFilter = "", experience = "" } = state;
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [appliedJobs, setAppliedJobs] = useState(new Set());
  const [savedJobs, setSavedJobs] = useState(new Set());
  const [sortBy, setSortBy] = useState("newest");
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(10);

  useEffect(() => {
    fetchJobs();
    fetchSavedJobs();
  }, [sortBy, filterType, searchQuery, category, jobTitle, locationFilter, experience]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, filterType, searchQuery, category, jobTitle, locationFilter, experience]);

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

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);

      const candidateId = getAuthToken();

      const response = await getAllJobs(category, jobTitle, locationFilter, experience);

      if (response.status === 200) {
        let mappedJobs = response.data.map((job) => {
          const hasApplied =
            candidateId &&
            job.applications?.some(
              (application) => application?.applicantId === candidateId
            );

          return {
            ...job,
            id: job._id,
            title: job.jobTitle,
            companyLogo: `https://ui-avatars.com/api/?name=${encodeURIComponent(
              job.companyName
            )}&background=4A90E2&color=fff&size=128&bold=true`,
            salary:
              job.salaryFrom && job.salaryTo
                ? `₹${job.salaryFrom.toLocaleString()} - ₹${job.salaryTo.toLocaleString()}/${job.salaryType
                }`
                : null,
            experience: job.experienceLevel,
            type: job.jobType,
            description: job.jobDescription,
            tags: job.skills || [],
            postedDate: getTimeAgo(job.createdAt),
            urgent: job.status === "urgent" || false,
            isApplied: hasApplied || false,
          };
        });

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

        if (filterType !== "all") {
          mappedJobs = mappedJobs.filter(
            (job) =>
              job.type && job.type.toLowerCase() === filterType.toLowerCase()
          );
        }

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

  const fetchSavedJobs = async () => {
    try {
      const token = getAuthToken();
      if (!token) return;

      const response = await getSavedJobs(token);

      if (response.status === 200) {
        const savedIds = new Set(response.data.savedJobs || []);
        setSavedJobs(savedIds);
      }
    } catch (error) {
      console.error("Error fetching saved jobs:", error);
    }
  };

  const handleApply = async (jobId) => {
    const token = getAuthToken();
    if (!token) {
      alert("Please login to apply for jobs");
      navigate("/candidate-login");
      return;
    }

    navigate(`/job-preview/${jobId}`);
  };

  const handleSaveJob = async (jobId) => {
    const token = getAuthToken();
    if (!token) {
      alert("Please login to save jobs");
      navigate("/candidate-login");
      return;
    }

    try {
      const isSaved = savedJobs.has(jobId);

      const confirmMessage = isSaved
        ? "Are you sure you want to remove this job from your saved list?"
        : "Do you want to save this job for later?";

      const confirmed = window.confirm(confirmMessage);

      if (!confirmed) {
        return;
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
            "✓ Job saved successfully! You can find it in your saved jobs."
          );
        }
      }
    } catch (error) {
      console.error("Error saving job:", error);
      alert("Failed to save job. Please try again.");
    }
  };

  const isApplied = (jobId) => appliedJobs.has(jobId);
  const isSaved = (jobId) => savedJobs.has(jobId);

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

  // Check if any filters are active
  const hasActiveFilters = category || jobTitle || locationFilter || experience;

  // Clear all filters
  const clearFilters = () => {
    navigate("/all-jobs", { state: {} });
  };

  // Pagination Logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of job list
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
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
        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="active-filters-section">
            <div className="active-filters-header">
              <h5>
                <span className="filter-icon">🔍</span>
                Active Filters:
              </h5>
              <button
                className="btn btn-link clear-filters-btn"
                onClick={clearFilters}
              >
                Clear All
              </button>
            </div>
            <div className="active-filters-list">
              {category && (
                <div className="filter-chip">
                  <span className="filter-label">Category:</span>
                  <span className="filter-value">{category}</span>
                </div>
              )}
              {jobTitle && (
                <div className="filter-chip">
                  <span className="filter-label">Job Title:</span>
                  <span className="filter-value">{jobTitle}</span>
                </div>
              )}
              {locationFilter && (
                <div className="filter-chip">
                  <span className="filter-label">Location:</span>
                  <span className="filter-value">{locationFilter}</span>
                </div>
              )}
              {experience && (
                <div className="filter-chip">
                  <span className="filter-label">Experience:</span>
                  <span className="filter-value">{experience}</span>
                </div>
              )}
            </div>
          </div>
        )}

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
            <div className="col-md-3">
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
            <div className="col-md-3">
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
            <div className="col-md-2">
              <select
                className="form-select"
                value={jobsPerPage}
                onChange={(e) => {
                  setJobsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={5}>5 per page</option>
                <option value={10}>10 per page</option>
                <option value={15}>15 per page</option>
                <option value={20}>20 per page</option>
                <option value={50}>50 per page</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        {!loading && jobs.length > 0 && (
          <div className="results-info">
            <p>
              Showing {indexOfFirstJob + 1} - {Math.min(indexOfLastJob, jobs.length)} of {jobs.length} jobs
            </p>
          </div>
        )}

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
          <>
            {/* Job List */}
            <div className="job-cards-container">
              {currentJobs.map((job) => (
                <div key={job.id || job._id} className="job-card">
                  <div className="job-card-top-bar">
                    <div className="job-posted">
                      Posted {job.postedDate || "2 days ago"}
                    </div>
                    <button
                      className={`save-btn ${isSaved(job.id || job._id) ? "saved" : ""
                        }`}
                      onClick={() => handleSaveJob(job.id || job._id)}
                      title={
                        isSaved(job.id || job._id)
                          ? "Remove from saved"
                          : "Save for later"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={isSaved(job.id || job._id) ? "#dc3545" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="bookmark-icon"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </button>
                  </div>

                  <div className="job-card-header">
                    <div className="company-info">
                      <img
                        src={job.companyLogo || "https://via.placeholder.com/60"}
                        alt={job.companyName}
                        className="company-logo"
                      />
                      <div className="company-text-info">
                        <h3
                          className="job-title"
                          title={job.title || job.jobTitle}
                        >
                          {job.title || job.jobTitle}
                        </h3>
                        <p
                          className="company-name"
                          title={job.companyName || job.company}
                        >
                          {job.companyName || job.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="job-details">
                    <div className="job-detail-item" title={job.location}>
                      <span className="icon">📍</span>
                      <span>{job.location}</span>
                    </div>
                    {job.salary && (
                      <div className="job-detail-item" title={job.salary}>
                        <span className="icon">💰</span>
                        <span>{job.salary}</span>
                      </div>
                    )}
                    {job.experience && (
                      <div className="job-detail-item" title={job.experience}>
                        <span className="icon">⏱️</span>
                        <span>{job.experience}</span>
                      </div>
                    )}
                  </div>

                  {job.description && (
                    <p className="job-description" title={job.description}>
                      {job.description}
                    </p>
                  )}

                  <div className="job-tags">
                    {job.type && (
                      <span className={`badge ${getJobTypeBadge(job.type)}`}>
                        {job.type}
                      </span>
                    )}
                    {job.tags &&
                      job.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="badge badge-light"
                          title={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    {job.tags && job.tags.length > 4 && (
                      <span
                        className="badge badge-secondary"
                        title={job.tags.slice(4).join(", ")}
                      >
                        +{job.tags.length - 4} more
                      </span>
                    )}
                    {job.urgent && (
                      <span className="badge badge-danger">Urgent</span>
                    )}
                  </div>

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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination-container">
                <div className="pagination-wrapper">
                  <button
                    className="pagination-btn"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <span>←</span> Previous
                  </button>

                  <div className="pagination-numbers">
                    {getPageNumbers().map((number, index) => (
                      <React.Fragment key={index}>
                        {number === '...' ? (
                          <span className="pagination-dots">...</span>
                        ) : (
                          <button
                            className={`pagination-number ${currentPage === number ? 'active' : ''
                              }`}
                            onClick={() => paginate(number)}
                          >
                            {number}
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    className="pagination-btn"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next <span>→</span>
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllJobList;