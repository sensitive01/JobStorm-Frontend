import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJobsByType } from "../../../api/service/axiosService";
import "./FeaturedJobs.css";

const NewAndRandomJobs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("INDIA");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Tabs configuration
  const tabs = ["INDIA", "Middle East", "Europe", "Asia"];

  // Fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await getJobsByType("recent");

        if (response.data && response.data.success) {
          let fetchedJobs = response.data.data.slice(0, 5);

          setJobs(fetchedJobs);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [activeTab]);

  const handleApplyNow = (jobId) => {
    navigate(`/job-preview/${jobId}`);
  };

  const handleJobDetails = (jobId) => {
    navigate(`/job-details/${jobId}`);
  };

  const getRandomColor = (index) => {
  
    const colors = ["#84cc16", "#1f2937", "#000000", "#ef4444", "#3b82f6"];
    return colors[index % colors.length];
  };

  return (
    <section className="section featured-jobs-section">
      <div className="container-medium">
        {/* Header */}
        <div className="featured-header">
          <h2 className="featured-title">Featured job</h2>

          <div className="region-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`region-tab-btn ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <a href="/job-list" className="view-all-btn">
            View All <i className="mdi mdi-arrow-right ms-2"></i>
          </a>
        </div>

        {/* Content */}
        <div className="jobs-list-container">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-purple" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : jobs.length > 0 ? (
            <div className="row">
              <div className="col-12">
                {jobs.map((job, index) => {
                  // Simulate 2nd item being "active" for demo, or based on logic
                  const isActive = index === 1;

                  return (
                    <div
                      key={job._id || index}
                      className={`feat-job-card ${
                        isActive ? "active-job" : ""
                      }`}
                    >
                      {/* Logo */}
                      <div
                        className="job-logo-box"
                        style={{ backgroundColor: getRandomColor(index) }}
                      >
                        {job.companyLogo ? (
                          <img src={job.companyLogo} alt={job.companyName} />
                        ) : (
                          // Fallback initial or icon if no logo
                          <span className="text-white fw-bold fs-4">
                            {job.companyName ? job.companyName.charAt(0) : "J"}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="job-content-middle">
                        <div className="job-title-row">
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleJobDetails(job._id);
                            }}
                            className="job-title"
                          >
                            {job.jobTitle}
                          </a>
                          <span className="job-type-badge badge-purple-light ms-2">
                            {job.jobType || "Full Time"}
                          </span>
                        </div>

                        <div className="job-meta-row">
                          <div className="meta-item">
                            <i className="mdi mdi-map-marker-outline"></i>
                            <span>{job.location || "Remote"}</span>
                          </div>
                          <div className="meta-item">
                            <i className="mdi mdi-currency-usd"></i>
                            <span>{job.salary || "$30k-$50k"}</span>
                          </div>
                          <div className="meta-item">
                            <i className="mdi mdi-calendar-blank-outline"></i>
                            <span>4 Days Remaining</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="job-actions-right">
                        <i className="mdi mdi-bookmark-outline bookmark-icon"></i>
                        <button
                          className="apply-btn"
                          onClick={() => handleApplyNow(job._id)}
                        >
                          Apply Now <i className="mdi mdi-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-5">
              <p className="text-muted">No featured jobs available.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewAndRandomJobs;
