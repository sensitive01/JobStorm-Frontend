import React from "react";
import { LogIn, User } from "lucide-react";

const HeaderAuthButtons = () => {
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
          gap: 12px;
        }

        .auth-btn {
          padding: 8px 20px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
          background-color: #f3e8ff; /* Light purple */
          color: #9333ea; /* Purple text */
        }

        .auth-btn:hover {
          background-color: #e9d5ff;
          transform: translateY(-1px);
        }

        .auth-btn-employer {
          background-color: #fae8ff; /* Slightly different pink/purple for employer */
          color: #a855f7;
        }
        
        .auth-btn-employer:hover {
           background-color: #f5d0fe;
        }

        .auth-divider {
          height: 32px;
          width: 1px;
          background-color: #e5e7eb;
          margin: 0 4px;
        }

        /* Mobile responsive */
        @media (max-width: 991px) {
          .auth-btn {
            padding: 6px 14px;
            font-size: 13px;
          }
          
          .auth-buttons-wrapper {
            flex-wrap: wrap; 
          }
          
           .auth-divider {
            display: none;
          }
        }
      `}</style>

      <div className="auth-buttons-wrapper">
        <button
          onClick={() => handleNavigation("/candidate-login")}
          className="auth-btn"
        >
          <LogIn size={16} />
          <span>Login</span>
        </button>

        <button
          onClick={() => handleNavigation("/candidate-signup")}
          className="auth-btn"
        >
          <User size={16} />
          <span>Register</span>
        </button>

        <div className="auth-divider"></div>

        <button
          onClick={() => handleNavigation("https://employer.jobsstorm.com")}
          className="auth-btn auth-btn-employer"
        >
          <span>For Employers</span>
        </button>
      </div>
    </>
  );
};

export default HeaderAuthButtons;
