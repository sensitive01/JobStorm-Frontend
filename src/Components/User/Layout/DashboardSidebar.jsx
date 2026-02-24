import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import accountImage from "../../../../public/assets/images/account.jpg";
import { getUserDetails } from "../../../api/service/axiosService";
import {
  LayoutGrid,
  User,
  Briefcase,
  Bookmark,
  MessageSquare,
  CreditCard,
  FileSearch,
  Award,
  Folder,
  Settings,
  LogOut,
} from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  // Retrieve user name from local storage or context if available
  // For now using static or simple retrieval as seen in Header
  const storedUserName = localStorage.getItem("userName") || "User";
  const userId = localStorage.getItem("userId");

  const [userData, setUserData] = useState({
    userName: storedUserName,
    currentrole: "Job Seeker",
    isAvailable: false,
    linkedin: "",
    github: "",
    portfolio: "",
    userEmail: "",
    userMobile: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const response = await getUserDetails(userId);
          if (response.status === 200 && response.data.data) {
            setUserData(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching sidebar user data:", error);
        }
      }
    };
    fetchUserData();
  }, [userId]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-white rounded-3 shadow-sm h-100">
      <div className="p-3">
        <div className="text-center pb-3 border-bottom">
          <img
            src={userData.userProfilePic?.url || accountImage}
            alt="user"
            className="avatar-lg img-thumbnail rounded-circle mb-3"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <h5 className="mb-0 fs-16">{userData.userName}</h5>
          <p className="text-muted fs-13 mb-2">
            {userData.currentrole || "Job Seeker"}
          </p>

          {userData.isAvailable && (
            <span className="badge bg-success-subtle text-success mb-3">
              Available for Work
            </span>
          )}

          {/* Social Links */}
          <ul className="list-inline mb-0 d-flex justify-content-center gap-2 flex-wrap">
            {userData.linkedin && (
              <li className="list-inline-item me-0">
                <a
                  href={userData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link btn-soft-primary"
                  title="LinkedIn"
                >
                  <i className="uil uil-linkedin" />
                </a>
              </li>
            )}
            {userData.github && (
              <li className="list-inline-item me-0">
                <a
                  href={userData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link btn-soft-dark"
                  title="GitHub"
                >
                  <i className="uil uil-github" />
                </a>
              </li>
            )}
            {userData.portfolio && (
              <li className="list-inline-item me-0">
                <a
                  href={userData.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link btn-soft-info"
                  title="Portfolio"
                >
                  <i className="uil uil-globe" />
                </a>
              </li>
            )}
            {userData.userEmail && (
              <li className="list-inline-item me-0">
                <a
                  href={`mailto:${userData.userEmail}`}
                  className="social-link btn-soft-danger"
                  title="Email"
                >
                  <i className="uil uil-envelope" />
                </a>
              </li>
            )}
            {userData.userMobile && (
              <li className="list-inline-item me-0">
                <a
                  href={`tel:${userData.userMobile}`}
                  className="social-link btn-soft-success"
                  title="Phone"
                >
                  <i className="uil uil-phone" />
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="mt-3">
          <ul className="list-unstyled profile-sidebar-menu mb-0">
            <li className="mb-1">
              <Link
                to="/user-dashboard"
                className={`d-flex align-items-center text-decoration-none py-2 px-3 rounded-2 transition-all ${
                  isActive("/user-dashboard")
                    ? "bg-soft-primary text-primary fw-medium"
                    : "text-dark hover-bg-light"
                }`}
              >
                <LayoutGrid className="me-3" size={18} />
                <span className="fs-14">Dashboard</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/my-profile"
                className={`d-flex align-items-center text-decoration-none py-2 px-3 rounded-2 transition-all ${
                  isActive("/my-profile") || isActive("/edit-myprofile")
                    ? "bg-soft-primary text-primary fw-medium"
                    : "text-dark hover-bg-light"
                }`}
              >
                <User className="me-3" size={18} />
                <span className="fs-14">My Profile</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/my-applied-jobs"
                className={`d-flex align-items-center text-decoration-none py-2 px-3 rounded-2 transition-all ${
                  isActive("/my-applied-jobs")
                    ? "bg-soft-primary text-primary fw-medium"
                    : "text-dark hover-bg-light"
                }`}
              >
                <Briefcase className="me-3" size={18} />
                <span className="fs-14">Applied Jobs</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/my-saved-jobs"
                className={`d-flex align-items-center text-decoration-none py-2 px-3 rounded-2 transition-all ${
                  isActive("/my-saved-jobs")
                    ? "bg-soft-primary text-primary fw-medium"
                    : "text-dark hover-bg-light"
                }`}
              >
                <Bookmark className="me-3" size={18} />
                <span className="fs-14">Saved Jobs</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/my-chats"
                className={`d-flex align-items-center text-decoration-none py-2 px-3 rounded-2 transition-all ${
                  isActive("/my-chats")
                    ? "bg-soft-primary text-primary fw-medium"
                    : "text-dark hover-bg-light"
                }`}
              >
                <MessageSquare className="me-3" size={18} />
                <span className="fs-14">My Chats</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/transaction-history"
                className={`d-flex align-items-center text-decoration-none py-2 px-3 rounded-2 transition-all ${
                  isActive("/transaction-history")
                    ? "bg-soft-primary text-primary fw-medium"
                    : "text-dark hover-bg-light"
                }`}
              >
                <CreditCard className="me-3" size={18} />
                <span className="fs-14">My Subscription</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/resume-matcher"
                className={`d-flex align-items-center text-decoration-none py-2 px-3 rounded-2 transition-all ${
                  isActive("/resume-matcher")
                    ? "bg-soft-primary text-primary fw-medium"
                    : "text-dark hover-bg-light"
                }`}
              >
                <FileSearch className="me-3" size={18} />
                <span className="fs-14">Resume Matcher</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/skill-badges"
                className={`d-flex align-items-center text-decoration-none py-2 px-3 rounded-2 transition-all ${
                  isActive("/skill-badges")
                    ? "bg-soft-primary text-primary fw-medium"
                    : "text-dark hover-bg-light"
                }`}
              >
                <Award className="me-3" size={18} />
                <span className="fs-14">Skill Badges</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/documents"
                className={`d-flex align-items-center text-decoration-none py-2 px-3 rounded-2 transition-all ${
                  isActive("/documents")
                    ? "bg-soft-primary text-primary fw-medium"
                    : "text-dark hover-bg-light"
                }`}
              >
                <Folder className="me-3" size={18} />
                <span className="fs-14">Documents</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h6 className="fs-11 text-muted text-uppercase mb-2 px-3">
            Settings
          </h6>
          <ul className="list-unstyled profile-sidebar-menu">
            <li className="mb-1">
              <Link
                to="/settings"
                className={`d-flex align-items-center text-decoration-none py-2 px-3 rounded-2 transition-all ${
                  isActive("/settings")
                    ? "bg-soft-primary text-primary fw-medium"
                    : "text-dark hover-bg-light"
                }`}
              >
                <Settings className="me-3" size={18} />
                <span className="fs-14">Settings</span>
              </Link>
            </li>
            <li className="mb-1">
              <a
                href="#"
                onClick={handleLogout}
                className="d-flex align-items-center text-danger text-decoration-none py-2 px-3 rounded-2 hover-bg-light"
              >
                <LogOut className="me-3" size={18} />
                <span className="fs-14">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style>{`
          .bg-soft-primary {
              background-color: rgba(99, 102, 241, 0.1);
          }
          .hover-bg-light:hover {
              background-color: #f8f9fa;
              color: #6366f1 !important;
          }
          .transition-all {
              transition: all 0.3s ease;
          }
          
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          font-size: 16px;
          border-radius: 6px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          transform: translateY(-2px);
        }

        .btn-soft-primary { background-color: rgba(99, 102, 241, 0.15); color: #6366f1; }
        .btn-soft-primary:hover { background-color: #6366f1; color: #ffffff; }

        .btn-soft-dark { background-color: rgba(33, 37, 41, 0.15); color: #212529; }
        .btn-soft-dark:hover { background-color: #212529; color: #ffffff; }

        .btn-soft-info { background-color: rgba(14, 165, 233, 0.15); color: #0ea5e9; }
        .btn-soft-info:hover { background-color: #0ea5e9; color: #ffffff; }

        .btn-soft-danger { background-color: rgba(239, 68, 68, 0.15); color: #ef4444; }
        .btn-soft-danger:hover { background-color: #ef4444; color: #ffffff; }

        .btn-soft-success { background-color: rgba(34, 197, 94, 0.15); color: #22c55e; }
        .btn-soft-success:hover { background-color: #22c55e; color: #ffffff; }
      `}</style>
    </div>
  );
};

export default DashboardSidebar;
