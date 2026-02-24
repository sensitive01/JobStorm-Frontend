import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getJobsByType,
  getUserDetails,
} from "../../../api/service/axiosService";
import "./FeaturedJobs.css";

const NewAndRandomJobs = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const [activeTab, setActiveTab] = useState("INDIA");
  const [isPaid, setIsPaid] = useState(false);
  const [allJobs, setAllJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [dynamicTabs, setDynamicTabs] = useState(["INDIA"]);

  const inferRegion = (job) => {
    if (job.region) return job.region;

    // Fallback logic for older jobs missing the region field
    const loc = (job.location || "").toLowerCase();
    if (loc.includes("india")) return "INDIA";
    if (
      loc.includes("dubai") ||
      loc.includes("uae") ||
      loc.includes("oman") ||
      loc.includes("qatar") ||
      loc.includes("saudi")
    )
      return "Middle East";
    if (
      loc.includes("europe") ||
      loc.includes("uk") ||
      loc.includes("london") ||
      loc.includes("germany")
    )
      return "Europe";
    if (
      loc.includes("singapore") ||
      loc.includes("malaysia") ||
      loc.includes("asia")
    )
      return "Asia";

    return "Other";
  };

  // Fetch jobs
  useEffect(() => {
    const fetchJobsData = async () => {
      setLoading(true);
      try {
        let paidUser = false;
        if (userId) {
          const userResponse = await getUserDetails(userId);
          if (userResponse.data && userResponse.data.data) {
            const userDetail = userResponse.data.data;
            if (
              userDetail.subscriptionActive ||
              userDetail.subscription?.status === "active"
            ) {
              paidUser = true;
            }
          }
        }
        setIsPaid(paidUser);

        const response = await getJobsByType("recent");
        if (response.data && response.data.success) {
          const fetchedJobs = response.data.data || [];
          setAllJobs(fetchedJobs);

          // Get unique regions, default to INDIA if missing
          const fetchedRegions = fetchedJobs.map(inferRegion).filter(Boolean);
          let uniqueRegions = [...new Set(fetchedRegions)];

          // If no jobs at all, ensure INDIA is there
          if (uniqueRegions.length === 0) {
            uniqueRegions = ["INDIA"];
          } else if (!paidUser && !uniqueRegions.includes("INDIA")) {
            uniqueRegions.unshift("INDIA"); // Ensure INDIA is present for unpaid users
          }

          // Show all unique regions regardless of payment status
          setDynamicTabs(uniqueRegions);

          if (paidUser) {
            // Default to the first available region if paid
            setActiveTab(uniqueRegions[0]);
          } else {
            // Unpaid users always start on INDIA
            setActiveTab("INDIA");
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchJobsData();
  }, [userId]);

  useEffect(() => {
    if (allJobs.length > 0) {
      const filteredJobs = allJobs.filter((job) => {
        const jobRegion = inferRegion(job);
        return jobRegion.toLowerCase() === activeTab.toLowerCase();
      });
      setJobs(filteredJobs.slice(0, 5));
    } else {
      setJobs([]);
    }
  }, [activeTab, allJobs]);

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
            {dynamicTabs.map((tab) => (
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
          ) : activeTab !== "INDIA" && !isPaid ? (
            <div className="text-center py-5">
              <div className="mb-4">
                <i
                  className="mdi mdi-lock-outline"
                  style={{ fontSize: "48px", color: "#8b5cf6" }}
                ></i>
              </div>
              <h4 className="mb-3">Premium Content Unlocked</h4>
              <p className="text-muted mb-4">
                You must have an active subscription to access premium job roles
                situated in {activeTab}. Please upgrade to view and apply!
              </p>
              <button
                onClick={() => navigate("/pricing")}
                className="btn btn-primary bg-purple-600 text-white px-4 py-2 rounded-lg"
              >
                View Subscription Plans
              </button>
            </div>
          ) : jobs.length > 0 ? (
            <div className="row">
              <div className="col-12">
                {jobs.map((job, index) => {
                  return (
                    <div key={job._id || index} className="feat-job-card">
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
              <p className="text-muted">No featured jobs available here yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewAndRandomJobs;
