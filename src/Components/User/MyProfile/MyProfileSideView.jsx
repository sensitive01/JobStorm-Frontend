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

  return (
    <div>
      {/* Profile Section */}
      <div className="text-center pb-4">
        <img
          src={profileImage}
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
      <style>{`
        .candidate-detail-social-menu .list-inline-item:not(:last-child) {
          margin-right: 0.5rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          font-size: 20px;
          border-radius: 8px; /* Rounded square look */
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          transform: translateY(-2px);
        }

        .btn-soft-primary {
          background-color: rgba(99, 102, 241, 0.15);
          color: #6366f1;
        }
        
        .btn-soft-primary:hover {
          background-color: #6366f1;
          color: #ffffff;
        }

        .btn-soft-dark {
          background-color: rgba(33, 37, 41, 0.15);
          color: #212529;
        }
        
        .btn-soft-dark:hover {
          background-color: #212529;
          color: #ffffff;
        }

        .btn-soft-info {
          background-color: rgba(14, 165, 233, 0.15);
          color: #0ea5e9;
        }
        
        .btn-soft-info:hover {
          background-color: #0ea5e9;
          color: #ffffff;
        }

        .btn-soft-danger {
          background-color: rgba(239, 68, 68, 0.15);
          color: #ef4444;
        }
        
        .btn-soft-danger:hover {
          background-color: #ef4444;
          color: #ffffff;
        }

        .btn-soft-success {
          background-color: rgba(34, 197, 94, 0.15);
          color: #22c55e;
        }
        
        .btn-soft-success:hover {
          background-color: #22c55e;
          color: #ffffff;
        }

        .avatar-lg {
          width: 100px;
          height: 100px;
        }
      `}</style>
    </div>
  );
};

export default MyProfileSideView;
