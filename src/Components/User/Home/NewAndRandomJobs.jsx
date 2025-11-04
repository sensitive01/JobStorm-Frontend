import React, { useEffect, useState } from 'react'
import { getJobsByType } from '../../../api/service/axiosService';

const NewAndRandomJobs = () => {
    const [activeTab, setActiveTab] = useState('recent-jobs');
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch jobs based on active tab
    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                // Map tab IDs to API parameters
                const jobTypeMap = {
                    'recent-jobs': 'recent',
                    'featured-jobs': 'featured',
                    'freelancer': 'freelancer',
                    'part-time': 'part-time',
                    'full-time': 'full-time'
                };

                const jobType = jobTypeMap[activeTab];
                const response = await getJobsByType(jobType);

                if (response.data && response.data.success) {
                    setJobs(response.data.data);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setLoading(false);
            }
        };

        fetchJobs();
    }, [activeTab]);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const renderJobCard = (job, index) => (
        <div key={index} className="job-box bookmark-post card mt-4">
            <div className="bookmark-label text-center">
                <a href="javascript:void(0)" className="text-white align-middle">
                    <i className="mdi mdi-star" />
                </a>
            </div>
            <div className="p-4">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <div className="text-center mb-4 mb-md-0">
                            <a href="#">
                                <img
                                    src={job.companyLogo || "assets/images/featured-job/img-01.png"}
                                    alt=""
                                    className="img-fluid rounded-3"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-2 mb-md-0">
                            <h5 className="fs-18 mb-1">
                                <a href={`/job-details/${job._id}`} className="text-dark">
                                    {job.jobTitle}
                                </a>
                            </h5>
                            <p className="text-muted fs-14 mb-0">
                                {job.companyName}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex mb-2">
                            <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                            </div>
                            <p className="text-muted mb-0">{job.location}</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                {job.salary || '1000-1200/m'}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <span className={`badge ${job.jobType === 'Full Time' ? 'bg-success-subtle text-success' :
                                job.jobType === 'Part Time' ? 'bg-danger-subtle text-danger' :
                                    job.jobType === 'Freelancer' ? 'bg-primary-subtle text-primary' :
                                        'bg-info-subtle text-info'
                                } fs-13 mt-1`}>
                                {job.jobType}
                            </span>
                            {job.isUrgent && (
                                <span className="badge bg-warning-subtle text-warning fs-13 mt-1">
                                    Urgent
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3 bg-primary">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <p className="mb-0 text-white">
                                <span>Experience :</span> {job.experience || '1 - 2 years'}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div>
                            <p className="text-white mb-0">
                                <span className="text-white">Notes :</span>{' '}
                                {job.description || 'languages only differ in their grammar.'}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3">
                        <div className="text-start text-md-end">
                            <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="bg-white text-primary rounded p-2 primary-link"
                            >
                                Apply Now <i className="mdi mdi-chevron-double-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="section bg-primary">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-white">New &amp; Random Jobs</h4>
                            <p className="text-white mb-1">
                                Post a job to tell us about your project. We'll quickly
                                match you with the right freelancers.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <ul
                            className="job-list-menu nav nav-pills nav-justified flex-column flex-sm-row mb-4"
                            id="pills-tab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'recent-jobs' ? 'active' : ''}`}
                                    id="recent-jobs-tab"
                                    type="button"
                                    role="tab"
                                    onClick={() => handleTabChange('recent-jobs')}
                                >
                                    Recent Jobs
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'featured-jobs' ? 'active' : ''}`}
                                    id="featured-jobs-tab"
                                    type="button"
                                    role="tab"
                                    onClick={() => handleTabChange('featured-jobs')}
                                >
                                    Featured Jobs
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'freelancer' ? 'active' : ''}`}
                                    id="freelancer-tab"
                                    type="button"
                                    role="tab"
                                    onClick={() => handleTabChange('freelancer')}
                                >
                                    Freelancer
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'part-time' ? 'active' : ''}`}
                                    id="part-time-tab"
                                    type="button"
                                    role="tab"
                                    onClick={() => handleTabChange('part-time')}
                                >
                                    Part Time
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'full-time' ? 'active' : ''}`}
                                    id="full-time-tab"
                                    type="button"
                                    role="tab"
                                    onClick={() => handleTabChange('full-time')}
                                >
                                    Full Time
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="tab-content" id="pills-tabContent">
                            {loading ? (
                                <div className="text-center mt-5">
                                    <div className="spinner-border text-white" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : jobs.length > 0 ? (
                                <>
                                    {jobs.map((job, index) => renderJobCard(job, index))}
                                    <div className="text-center mt-4 pt-2">
                                        <a href="/job-list" className="btn btn-white">
                                            View More <i className="uil uil-arrow-right" />
                                        </a>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center mt-5">
                                    <p className="text-white">No jobs found for this category.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewAndRandomJobs;