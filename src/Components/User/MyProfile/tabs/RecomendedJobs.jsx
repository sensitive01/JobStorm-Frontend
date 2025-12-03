import React from 'react'

const RecomendedJobs = ({styles,recommendedJobs}) => {
    return (
        <div className={styles.recommendedJobs}>
            <h3 className={styles.sectionTitle}>Recommended for You</h3>

            <div className={styles.jobsList}>
                {recommendedJobs.map((job) => (
                    <div key={job.id} className={styles.jobCard}>
                        <div className={styles.jobHeader}>
                            <div
                                className={styles.jobLogo}
                                style={{ backgroundColor: job.logoColor }}
                            >
                                {job.logo}
                            </div>
                            <button className={styles.bookmarkBtn}>🔖</button>
                        </div>
                        <h4 className={styles.jobTitle}>{job.position}</h4>
                        <p className={styles.jobCompany}>{job.company}</p>
                        <div className={styles.jobMeta}>
                            <span className={styles.jobLocation}>{job.location}</span>
                            <span className={styles.jobType}>{job.type}</span>
                            <span className={styles.jobSalary}>{job.salary}</span>
                        </div>
                    </div>
                ))}
            </div>

            <a href="#" className={styles.viewMoreLink}>View More Jobs</a>
        </div>
    )
}

export default RecomendedJobs