import React, { useEffect } from "react";
import "./SuccessPopup.css";

const SuccessPopup = ({ message, show, type, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`success-popup-overlay ${show ? "active" : ""}`}>
      <div className={`success-popup-card ${type}`}>
        <div className="icon-wrapper">
          {type === "saved" ? (
            <div className="saved-icon-anim">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                  fill="currentColor"
                />
              </svg>
            </div>
          ) : (
            <div className="unsaved-icon-anim">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                <line
                  x1="1"
                  y1="1"
                  x2="23"
                  y2="23"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </div>
          )}
        </div>
        <p className="popup-message">{message}</p>
      </div>
    </div>
  );
};

export default SuccessPopup;
