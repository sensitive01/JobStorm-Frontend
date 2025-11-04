import React, { useState } from "react";
import { LogIn, User, Building2, ArrowRight } from "lucide-react";

const HeaderAuthButtons = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleLoginClick = (e) => {
    e.preventDefault();
    setModalType("login");
    setShowModal(true);
  };

  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <style>{`
        /* Responsive button styles */
        .auth-buttons-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .auth-btn {
          padding: 10px 24px;
          font-size: 15px;
          font-weight: 500;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .auth-btn-primary {
          background-color: #6366f1;
          color: #fff;
        }

        .auth-btn-primary:hover {
          background-color: #5558e3;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .auth-btn i {
          font-size: 18px;
        }

        /* Mobile responsive */
        @media (max-width: 991px) {
          .auth-btn {
            padding: 8px 16px;
            font-size: 14px;
          }
          
          .auth-btn i {
            font-size: 16px;
          }
        }

        @media (max-width: 767px) {
          .auth-buttons-wrapper {
            gap: 6px;
          }
          
          .auth-btn {
            padding: 7px 12px;
            font-size: 13px;
          }
          
          .auth-btn i {
            font-size: 15px;
          }
        }

        @media (max-width: 575px) {
          .auth-buttons-wrapper {
            gap: 4px;
          }
          
          .auth-btn {
            padding: 6px 10px;
            font-size: 12px;
            gap: 4px;
          }
          
          .auth-btn i {
            font-size: 14px;
          }
          
          .btn-text {
            display: none;
          }
          
          .auth-btn {
            padding: 6px 8px;
          }
        }

        /* Modal styles */
        .auth-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }

        .auth-modal {
          background-color: #fff;
          border-radius: 12px;
          padding: 40px;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          animation: slideIn 0.3s ease;
        }

        .auth-modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #6c757d;
          padding: 5px;
          line-height: 1;
        }

        .auth-modal-close:hover {
          color: #000;
        }

        .auth-modal-title {
          font-size: 24px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 10px;
          text-align: center;
        }

        .auth-modal-subtitle {
          font-size: 15px;
          color: #6c757d;
          margin-bottom: 30px;
          text-align: center;
        }

        .auth-option-card {
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          padding: 24px;
          margin-bottom: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 15px;
          background-color: #fff;
        }

        .auth-option-card:hover {
          border-color: #6366f1;
          background-color: #f9fafb;
          transform: translateX(5px);
        }

        .auth-option-icon {
          font-size: 32px;
          color: #6366f1;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ede9fe;
          border-radius: 10px;
        }

        .auth-option-text {
          flex: 1;
        }

        .auth-option-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 5px;
        }

        .auth-option-desc {
          font-size: 14px;
          color: #6c757d;
          margin: 0;
        }

        .auth-option-arrow {
          font-size: 20px;
          color: #6366f1;
        }

        .custom-user-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="auth-buttons-wrapper">
        <button
          onClick={handleLoginClick}
          className="auth-btn auth-btn-primary"
        >
          <User size={18} style={{ strokeWidth: 2.5 }} />
          <span className="btn-text">Login</span>
        </button>
      </div>

      {showModal && (
        <div className="auth-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="auth-modal-close"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <h2 className="auth-modal-title">
              <>
                <User
                  size={28}
                  style={{
                    marginRight: "10px",
                    display: "inline",
                    strokeWidth: 2.5,
                  }}
                />
                Login
              </>
            </h2>
            <p className="auth-modal-subtitle">
              Choose how you want to continue
            </p>

            <div>
              <div
                className="auth-option-card"
                onClick={() => handleNavigation("/candidate-login")}
              >
                <div className="auth-option-icon">
                  <svg
                    className="custom-user-icon"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="8" r="5" fill="currentColor" />
                    <path
                      d="M12 14c-6 0-8 3-8 3v5h16v-5s-2-3-8-3z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="auth-option-text">
                  <h3 className="auth-option-title">Candidate</h3>
                  <p className="auth-option-desc">
                    Looking for job opportunities
                  </p>
                </div>
                <ArrowRight size={20} className="auth-option-arrow" />
              </div>

              <div
                className="auth-option-card"
                onClick={() => handleNavigation("https://employer.jobsstorm.com/")}
              >
                <div className="auth-option-icon">
                  <Building2 size={28} style={{ strokeWidth: 2.5 }} />
                </div>
                <div className="auth-option-text">
                  <h3 className="auth-option-title">Employer</h3>
                  <p className="auth-option-desc">
                    Hiring talented professionals
                  </p>
                </div>
                <ArrowRight size={20} className="auth-option-arrow" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderAuthButtons;
