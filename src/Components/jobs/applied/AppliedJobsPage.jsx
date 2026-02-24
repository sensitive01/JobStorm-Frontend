import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  MapPin,
  Clock,
  Eye,
  MessageSquare,
  MoreVertical,
} from "lucide-react";
import "./appliedjobs.css";
import { getMyAppliedJobs } from "../../../api/service/axiosService";

const AppliedJobs = () => {
  const candidateId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      setLoading(true);
      try {
        const response = await getMyAppliedJobs(candidateId);

        if (response.status === 200) {
          const transformedJobs = response.data.data.flatMap((job) => {
            return job.applications.map((application) => {
              const statusMapping = {
                pending: "applied",
                "under review": "screening",
                shortlisted: "screening",
                "interview scheduled": "interview",
                "offer received": "offer",
                offered: "offer",
                rejected: "rejected",
                "not selected": "rejected",
                withdrawn: "withdrawn",
              };

              const mappedStatus =
                statusMapping[
                  application.employApplicantStatus.toLowerCase()
                ] || "applied";

              return {
                id: application._id,
                jobId: job._id,
                jobTitle: job.jobTitle || "N/A",
                companyName: job.companyName || "N/A",
                location: job.location || "N/A",
                appliedDate: application.appliedDate,
                applicationStatus: mappedStatus,
                interviewDate: application.interviewDate,
              };
            });
          });

          // Sort by newest by default
          transformedJobs.sort(
            (a, b) => new Date(b.appliedDate) - new Date(a.appliedDate),
          );
          setAppliedJobs(transformedJobs);
        }
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (candidateId) {
      fetchAppliedJobs();
    }
  }, [candidateId]);

  const getInitials = (name) => {
    if (!name || name === "N/A") return "NA";
    const words = name.trim().split(" ");
    if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
    return name.substring(0, 2).toUpperCase();
  };

  const getColorFromText = (text) => {
    const colors = [
      "#1ee0a8",
      "#c2185b",
      "#3949ab",
      "#ffb300",
      "#00acc1",
      "#8e24aa",
    ];
    if (!text) return colors[0];
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const formatShortDate = (dateString) => {
    if (!dateString) return "Pending";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const formatDateYear = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusBadge = (status) => {
    const badges = {
      applied: { label: "Applied", class: "status-applied" },
      screening: { label: "Screening", class: "status-screening" },
      interview: { label: "Interviewing", class: "status-interview" },
      offer: { label: "Offer Received", class: "status-offer" },
      rejected: { label: "Rejected", class: "status-rejected" },
      withdrawn: { label: "Withdrawn", class: "status-withdrawn" },
    };
    return badges[status] || badges.applied;
  };

  const timelineSteps = ["applied", "screening", "interview", "offer"];
  const timelineLabels = ["Applied", "Screening", "Interview", "Offer Pending"];

  return (
    <div className="applied-jobs-page">
      <div className="page-header-simple">
        <h1>My Applications</h1>
        <p>Track the status of your job applications.</p>
      </div>

      <div className="container">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading your applications...</p>
          </div>
        ) : appliedJobs.length === 0 ? (
          <div className="no-jobs">
            <p>You haven't applied to any jobs yet.</p>
          </div>
        ) : (
          <div className="applications-list">
            {appliedJobs.map((job) => {
              const statusBadge = getStatusBadge(job.applicationStatus);
              const initials = getInitials(job.companyName);
              const logoColor = getColorFromText(job.companyName);

              const currentStepIndex = timelineSteps.indexOf(
                ["rejected", "withdrawn"].includes(job.applicationStatus)
                  ? "applied"
                  : job.applicationStatus,
              );

              return (
                <div key={job.id} className="application-card">
                  <div className="card-top-section">
                    <div className="job-main-info">
                      <div
                        className="company-logo-square"
                        style={{ backgroundColor: logoColor }}
                      >
                        {initials}
                      </div>
                      <div className="job-details">
                        <h3 className="job-title">{job.jobTitle}</h3>
                        <div className="job-meta">
                          <span className="meta-item">
                            <Building2 size={16} /> {job.companyName}
                          </span>
                          <span className="meta-item">
                            <MapPin size={16} /> {job.location}
                          </span>
                          <span className="meta-item">
                            <Clock size={16} /> Applied{" "}
                            {formatDateYear(job.appliedDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="job-actions">
                      <span className={`badge ${statusBadge.class}`}>
                        {statusBadge.label}
                      </span>
                      <button
                        className="action-btn"
                        title="View Job"
                        onClick={() => navigate(`/job-preview/${job.jobId}`)}
                      >
                        <Eye size={20} />
                      </button>
                      <button className="action-btn" title="Messages">
                        <MessageSquare size={20} />
                      </button>
                      <button className="action-btn">
                        <MoreVertical size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="card-timeline-section">
                    <div className="timeline-container">
                      {timelineSteps.map((stepKey, index) => {
                        const isCompleted = index <= currentStepIndex;

                        let dateStr = "Pending";
                        if (isCompleted) {
                          if (stepKey === "applied") {
                            dateStr = formatShortDate(job.appliedDate);
                          } else if (
                            stepKey === "interview" &&
                            job.interviewDate
                          ) {
                            dateStr = formatShortDate(job.interviewDate);
                          } else {
                            const baseDate = new Date(job.appliedDate);
                            baseDate.setDate(baseDate.getDate() + index * 2);
                            dateStr = formatShortDate(baseDate);
                          }
                        }

                        return (
                          <div
                            key={stepKey}
                            className={`timeline-step ${isCompleted ? "active" : ""}`}
                          >
                            <div className="step-circle"></div>
                            <div className="step-label-group">
                              <span className="step-name">
                                {timelineLabels[index]
                                  .split(" ")
                                  .map((line, i) => (
                                    <React.Fragment key={i}>
                                      {line}
                                      {i <
                                        timelineLabels[index].split(" ")
                                          .length -
                                          1 && <br />}
                                    </React.Fragment>
                                  ))}
                              </span>
                              <span className="step-date">{dateStr}</span>
                            </div>
                            {index < timelineSteps.length - 1 && (
                              <div
                                className={`step-line ${isCompleted && index < currentStepIndex ? "active" : ""}`}
                              ></div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
