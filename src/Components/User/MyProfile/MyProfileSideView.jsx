import React from "react";

const MyProfileSideView = ({ data, profileImage }) => {
  console.log(data);

  if (!data) {
    return (
      <div className="text-center py-4">
        <p className="text-muted">Loading profile...</p>
      </div>
    );
  }

  const handleDownloadResume = () => {
    if (data.resume?.url) {
      window.open(data.resume.url, "_blank");
    }
  };

  const handleDownloadCoverLetter = () => {
    if (data.coverLetterFile?.url) {
      window.open(data.coverLetterFile.url, "_blank");
    }
  };

  return (
    <div>
      {/* Profile Section */}
      <div className="text-center pb-4 border-bottom">
        <img
          src={ profileImage}
          alt={data.userName}
          className="avatar-lg img-thumbnail rounded-circle mb-4"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
        <h5 className="mb-0">{data.userName}</h5>
        <p className="text-muted">{data.currentrole || "Job Seeker"}</p>

        {/* Availability Badge */}
        {data.isAvailable && (
          <span className="badge bg-success-subtle text-success mb-3">
            Available for Work
          </span>
        )}

        {/* Social Links */}
        <ul className="candidate-detail-social-menu list-inline mb-0">
          {data.linkedin && (
            <li className="list-inline-item">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link rounded-3 btn-soft-primary"
                title="LinkedIn"
              >
                <i className="uil uil-linkedin" />
              </a>
            </li>
          )}
          {data.github && (
            <li className="list-inline-item">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link rounded-3 btn-soft-dark"
                title="GitHub"
              >
                <i className="uil uil-github" />
              </a>
            </li>
          )}
          {data.portfolio && (
            <li className="list-inline-item">
              <a
                href={data.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link rounded-3 btn-soft-info"
                title="Portfolio"
              >
                <i className="uil uil-globe" />
              </a>
            </li>
          )}
          {data.userEmail && (
            <li className="list-inline-item">
              <a
                href={`mailto:${data.userEmail}`}
                className="social-link rounded-3 btn-soft-danger"
                title="Email"
              >
                <i className="uil uil-envelope" />
              </a>
            </li>
          )}
          {data.userMobile && (
            <li className="list-inline-item">
              <a
                href={`tel:${data.userMobile}`}
                className="social-link rounded-3 btn-soft-success"
                title="Phone"
              >
                <i className="uil uil-phone" />
              </a>
            </li>
          )}
        </ul>
      </div>

      {/* Contact Details */}
      <div className="py-4 border-bottom">
        <h6 className="fs-16 fw-bold mb-3">Contact Information</h6>
        <div className="candidate-profile-overview">
          {data.userEmail && (
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0">
                <i className="uil uil-envelope-alt text-primary fs-20" />
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="fs-14 mb-1 text-muted">Email</h6>
                <p className="mb-0 fs-14 text-break">{data.userEmail}</p>
              </div>
            </div>
          )}

          {data.userMobile && (
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0">
                <i className="uil uil-phone text-success fs-20" />
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="fs-14 mb-1 text-muted">Phone</h6>
                <p className="mb-0 fs-14">{data.userMobile}</p>
              </div>
            </div>
          )}

          {data.currentCity && (
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0">
                <i className="uil uil-map-marker text-danger fs-20" />
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="fs-14 mb-1 text-muted">Location</h6>
                <p className="mb-0 fs-14">
                  {data.currentCity}
                  {data.state && `, ${data.state}`}
                </p>
              </div>
            </div>
          )}

          {data.totalExperience && (
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0">
                <i className="uil uil-briefcase text-info fs-20" />
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="fs-14 mb-1 text-muted">Experience</h6>
                <p className="mb-0 fs-14">{data.totalExperience} years</p>
              </div>
            </div>
          )}

          {data.expectedSalary && (
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0">
                <i className="uil uil-dollar-sign text-warning fs-20" />
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="fs-14 mb-1 text-muted">Expected Salary</h6>
                <p className="mb-0 fs-14">
                  ₹{(data.expectedSalary / 100000).toFixed(1)} LPA
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Resume & Documents */}
      <div className="py-4 border-bottom">
        <h6 className="fs-16 fw-bold mb-3">Documents</h6>

        {data.resume?.url && (
          <button
            onClick={handleDownloadResume}
            className="btn btn-soft-primary w-100 mb-2"
          >
            <i className="uil uil-file-download me-2" />
            Download Resume
          </button>
        )}

        {data.coverLetterFile?.url && (
          <button
            onClick={handleDownloadCoverLetter}
            className="btn btn-soft-info w-100"
          >
            <i className="uil uil-file-download me-2" />
            Download Cover Letter
          </button>
        )}
      </div>

      {/* Additional Info */}
      <div className="py-4">
        <h6 className="fs-16 fw-bold mb-3">Additional Details</h6>
        <div className="candidate-profile-overview">
          {data.dob && (
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted fs-14">Date of Birth</span>
              <span className="fs-14 fw-semibold">
                {new Date(data.dob).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          )}

          {data.gender && (
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted fs-14">Gender</span>
              <span className="fs-14 fw-semibold">{data.gender}</span>
            </div>
          )}

          {data.maritalStatus && (
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted fs-14">Marital Status</span>
              <span className="fs-14 fw-semibold">{data.maritalStatus}</span>
            </div>
          )}

          {data.preferredLocation && (
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted fs-14">Preferred Location</span>
              <span className="fs-14 fw-semibold">
                {data.preferredLocation}
              </span>
            </div>
          )}

          {data.specialization && (
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted fs-14">Specialization</span>
              <span className="fs-14 fw-semibold">{data.specialization}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfileSideView;
