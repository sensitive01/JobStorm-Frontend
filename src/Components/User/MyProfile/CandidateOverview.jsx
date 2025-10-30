const CandidateOverview = ({ data, loading }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.getFullYear();
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border"></div>
      </div>
    );
  }

  if (!data) {
    return <div className="alert alert-warning">No data found</div>;
  }

  return (
    <div
      className="tab-pane fade show active"
      id="overview"
      role="tabpanel"
      aria-labelledby="overview-tab"
    >
      {/* About Section */}
      <div>
        <h5 className="fs-18 fw-bold">About</h5>
        <p className="text-muted mt-4">
          {data.profilesummary || "No profile summary available"}
        </p>
        {data.currentrole && (
          <p className="text-muted">
            Currently working as <b>{data.currentrole}</b>.
            {data.totalExperience &&
              ` Total experience: ${data.totalExperience} year(s).`}
          </p>
        )}
      </div>

      {/* Education Section */}
      {data.education && data.education.length > 0 && (
        <div className="candidate-education-details mt-4">
          <h6 className="fs-18 fw-bold mb-0">Education</h6>
          {data.education.map((edu, index) => (
            <div
              key={edu._id || index}
              className="candidate-education-content mt-4 d-flex"
            >
              <div className="circle flex-shrink-0 primary-bg-subtle">
                {edu.degree?.charAt(0) || "E"}
              </div>
              <div className="ms-4">
                <h6 className="fs-16 mb-1">{edu.degree}</h6>
                <p className="mb-2 text-muted">{edu.institution}</p>
                <p className="text-muted">
                  {edu.type} • {formatDate(edu.startDate)} -{" "}
                  {formatDate(edu.endDate)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Work Experience Section */}
      {data.workExperience && data.workExperience.length > 0 && (
        <div className="candidate-education-details mt-4">
          <h6 className="fs-18 fw-bold mb-0">Work Experience</h6>
          {data.workExperience.map((exp, index) => (
            <div
              key={exp._id || index}
              className="candidate-education-content mt-4 d-flex"
            >
              <div className="circle flex-shrink-0 primary-bg-subtle">
                {exp.position?.charAt(0).toUpperCase() || "W"}
              </div>
              <div className="ms-4">
                <h6 className="fs-16 mb-1">{exp.position}</h6>
                <p className="mb-2 text-muted">
                  {exp.company} • {formatDate(exp.startDate)} -{" "}
                  {formatDate(exp.endDate)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {data.skills && data.skills.length > 0 && (
        <div className="mt-4">
          <h5 className="fs-18 fw-bold">Skills</h5>
          <div className="mt-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="badge fs-13 bg-primary-subtle text-primary mt-2 me-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Languages Section */}
      {data.languages && data.languages.length > 0 && (
        <div className="mt-4">
          <h5 className="fs-18 fw-bold">Spoken Languages</h5>
          <div className="mt-2">
            {data.languages.map((language, index) => (
              <span
                key={index}
                className="badge fs-13 bg-success-subtle text-success mt-2 me-2"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Additional Info */}
      {(data.expectedSalary ||
        data.preferredLocation ||
        data.linkedin ||
        data.github) && (
        <div className="mt-4">
          <h5 className="fs-18 fw-bold">Additional Information</h5>
          <div className="mt-3">
            {data.expectedSalary && (
              <p className="text-muted mb-2">
                <b>Expected Salary:</b> ₹{data.expectedSalary.toLocaleString()}{" "}
                per annum
              </p>
            )}
            {data.preferredLocation && (
              <p className="text-muted mb-2">
                <b>Preferred Location:</b> {data.preferredLocation}
              </p>
            )}
            {data.linkedin && (
              <p className="text-muted mb-2">
                <b>LinkedIn:</b>{" "}
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  View Profile
                </a>
              </p>
            )}
            {data.github && (
              <p className="text-muted mb-2">
                <b>GitHub:</b>{" "}
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  View Profile
                </a>
              </p>
            )}
            {data.portfolio && (
              <p className="text-muted mb-2">
                <b>Portfolio:</b>{" "}
                <a
                  href={data.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  View Portfolio
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateOverview;
