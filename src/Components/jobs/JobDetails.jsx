import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './jobdetails.css';

// API Configuration
const API_BASE_URL = import.meta.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  // Helper function to calculate time ago
  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'today';
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const fetchJobDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/jobs/${id}`);
      
      if (!response.ok) throw new Error('Failed to fetch job details');
      
      const data = await response.json();
      
      // Map API data to component format
      const mappedJob = {
        ...data,
        id: data._id,
        title: data.jobTitle,
        companyLogo: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.companyName)}&background=4A90E2&color=fff&size=128&bold=true`,
        salary: data.salaryFrom && data.salaryTo 
          ? `₹${data.salaryFrom.toLocaleString()} - ₹${data.salaryTo.toLocaleString()}/${data.salaryType}`
          : null,
        experience: data.experienceLevel,
        type: data.jobType,
        description: data.jobDescription,
        fullDescription: data.jobDescription,
        responsibilities: data.responsibilities || [],
        requirements: data.qualifications || [],
        benefits: data.benefits ? [data.benefits] : [],
        tags: data.skills || [],
        postedDate: getTimeAgo(data.createdAt),
        urgent: data.status === 'urgent' || false,
        companyInfo: {
          about: `${data.companyName} is looking for talented individuals to join their team.`,
          size: data.vacancy ? `${data.vacancy} openings` : 'Multiple openings',
          industry: data.category || 'Not specified',
          website: data.companyWebsite || data.companyUrl || null
        }
      };

      setJob(mappedJob);
      setError(null);
    } catch (error) {
      console.error('Error fetching job details:', error);
      setError('Failed to load job details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async () => {
    const token = getAuthToken();
    if (!token) {
      alert('Please login to apply for jobs');
      navigate('/login');
      return;
    }

    const confirmed = window.confirm('Are you sure you want to apply for this job?');
    if (!confirmed) return;

    try {
      const response = await fetch(`${API_BASE_URL}/jobs/${id}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          jobId: id,
          appliedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to apply');
      }

      setApplied(true);
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error applying for job:', error);
      alert(error.message || 'Failed to apply for the job. Please try again.');
    }
  };

  const handleSaveJob = async () => {
    const token = getAuthToken();
    if (!token) {
      alert('Please login to save jobs');
      navigate('/login');
      return;
    }

    try {
      const url = `${API_BASE_URL}/jobs/${id}/save`;
      const method = saved ? 'DELETE' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to save job');

      setSaved(!saved);
      alert(saved ? 'Job removed from saved jobs' : 'Job saved successfully!');
    } catch (error) {
      console.error('Error saving job:', error);
      alert('Failed to save job. Please try again.');
    }
  };

  const getJobTypeBadge = (type) => {
    const badges = {
      'full-time': 'badge-success',
      'part-time': 'badge-warning',
      'contract': 'badge-info',
      'internship': 'badge-primary',
      'freelance': 'badge-secondary',
    };
    return badges[type?.toLowerCase()] || 'badge-secondary';
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
          <h2>😕 {error || 'Job not found'}</h2>
          <button className="btn btn-primary" onClick={() => navigate('/job-list')}>
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="job-details-page">
      {/* Header */}
      <div className="job-details-header">
        <div className="container">
          <button className="back-button" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>
      </div>

      <div className="container">
        <div className="job-details-content">
          {/* Main Content */}
          <div className="job-details-main">
            {/* Job Header */}
            <div className="job-header-card">
              <div className="job-header-top">
                <img
                  src={job.companyLogo || 'https://via.placeholder.com/80'}
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
                  </div>
                  <div className="job-tags-header">
                    <span className={`badge ${getJobTypeBadge(job.type)}`}>
                      {job.type}
                    </span>
                    {job.urgent && (
                      <span className="badge badge-danger">Urgent</span>
                    )}
                    <span className="badge badge-light">
                      Posted {job.postedDate}
                    </span>
                    {job.vacancy && (
                      <span className="badge badge-info">
                        {job.vacancy} Vacancies
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
                  <button className="btn btn-primary" onClick={handleApply}>
                    Apply Now
                  </button>
                )}
                <button
                  className={`btn btn-outline ${saved ? 'btn-saved' : ''}`}
                  onClick={handleSaveJob}
                >
                  {saved ? '❤️ Saved' : '🤍 Save Job'}
                </button>
              </div>
            </div>

            {/* Job Description */}
            <div className="details-section">
              <h2>Job Description</h2>
              <p className="section-content">{job.fullDescription || job.description}</p>
            </div>

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="details-section">
                <h2>Key Responsibilities</h2>
                <ul className="section-list">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

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

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="details-section">
                <h2>Benefits</h2>
                <ul className="section-list">
                  {job.benefits.map((item, index) => (
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

            {/* Application Instructions */}
            {job.applicationInstructions && (
              <div className="details-section">
                <h2>Application Instructions</h2>
                <p className="section-content">{job.applicationInstructions}</p>
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
                      <a href={`https://${job.companyInfo.website}`} target="_blank" rel="noopener noreferrer">
                        Visit Website →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Contact Information */}
            {(job.contactEmail || job.contactPhone) && (
              <div className="sidebar-card">
                <h3>Contact Information</h3>
                <div className="company-details">
                  {job.contactEmail && (
                    <div className="company-detail-item">
                      <strong>Email:</strong>
                      <a href={`mailto:${job.contactEmail}`}>{job.contactEmail}</a>
                    </div>
                  )}
                  {job.contactPhone && (
                    <div className="company-detail-item">
                      <strong>Phone:</strong>
                      <a href={`tel:${job.contactPhone}`}>{job.contactPhone}</a>
                    </div>
                  )}
                  {job.companyAddress && (
                    <div className="company-detail-item">
                      <strong>Address:</strong>
                      <span>{job.companyAddress}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="sidebar-card">
              <h3>Quick Actions</h3>
              <button className="btn btn-block btn-outline" onClick={() => window.print()}>
                🖨️ Print Job
              </button>
              <button className="btn btn-block btn-outline" onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}>
                🔗 Share Job
              </button>
              <button className="btn btn-block btn-outline" onClick={() => navigate('/jobs')}>
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