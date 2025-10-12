import React, { useState } from "react";

const HeaderAuthButtons = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // 'login' or 'signup'

  const buttonStyle = {
    padding: "10px 24px",
    fontSize: "15px",
    fontWeight: "500",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    textDecoration: "none",
    transition: "all 0.3s ease",
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#6366f1",
    color: "#fff",
    marginRight: "12px",
  };

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: "transparent",
    color: "#6366f1",
    border: "2px solid #6366f1",
  };

  const iconStyle = {
    fontSize: "18px",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
  };

  const modalStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "40px",
    maxWidth: "500px",
    width: "90%",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    position: "relative",
    animation: "slideIn 0.3s ease",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#6c757d",
    padding: "5px",
    lineHeight: "1",
  };

  const modalTitleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "10px",
    textAlign: "center",
  };

  const modalSubtitleStyle = {
    fontSize: "15px",
    color: "#6c757d",
    marginBottom: "30px",
    textAlign: "center",
  };

  const optionCardStyle = {
    border: "2px solid #e5e7eb",
    borderRadius: "10px",
    padding: "24px",
    marginBottom: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    backgroundColor: "#fff",
  };

  const optionIconStyle = {
    fontSize: "32px",
    color: "#6366f1",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ede9fe",
    borderRadius: "10px",
  };

  const optionTextStyle = {
    flex: 1,
  };

  const optionTitleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "5px",
  };

  const optionDescStyle = {
    fontSize: "14px",
    color: "#6c757d",
    margin: 0,
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setModalType("login");
    setShowModal(true);
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    setModalType("signup");
    setShowModal(true);
  };

  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <ul
        className="header-menu list-inline d-flex align-items-center mb-0"
        style={{ listStyle: "none", padding: 0, margin: 0 }}
      >
        <li className="list-inline-item" style={{ display: "inline-block" }}>
          <button
            onClick={handleLoginClick}
            style={primaryButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#5558e3";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(99, 102, 241, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#6366f1";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            <i className="uil uil-lock-access" style={iconStyle} />
            Login
          </button>
        </li>
        <li className="list-inline-item" style={{ display: "inline-block" }}>
          <button
            onClick={handleSignupClick}
            style={outlineButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#6366f1";
              e.target.style.color = "#fff";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(99, 102, 241, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#6366f1";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            <i className="uil uil-user-plus" style={iconStyle} />
            Sign Up
          </button>
        </li>
      </ul>

      {showModal && (
        <div style={overlayStyle} onClick={() => setShowModal(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <button
              style={closeButtonStyle}
              onClick={() => setShowModal(false)}
              onMouseEnter={(e) => (e.target.style.color = "#000")}
              onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
            >
              ×
            </button>

            <h2 style={modalTitleStyle}>
              {modalType === "login" ? (
                <>
                  <i
                    className="uil uil-lock-access"
                    style={{ marginRight: "10px" }}
                  />
                  Login
                </>
              ) : (
                <>
                  <i
                    className="uil uil-user-plus"
                    style={{ marginRight: "10px" }}
                  />
                  Sign Up
                </>
              )}
            </h2>
            <p style={modalSubtitleStyle}>Choose how you want to continue</p>

            <div>
              <div
                style={optionCardStyle}
                onClick={() =>
                  handleNavigation(
                    modalType === "login"
                      ? "/candidate-login"
                      : "/candidate-signup"
                  )
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#6366f1";
                  e.currentTarget.style.backgroundColor = "#f9fafb";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div style={optionIconStyle}>
                  <i className="uil uil-user" />
                </div>
                <div style={optionTextStyle}>
                  <h3 style={optionTitleStyle}>Candidate</h3>
                  <p style={optionDescStyle}>Looking for job opportunities</p>
                </div>
                <i
                  className="uil uil-arrow-right"
                  style={{ fontSize: "20px", color: "#6366f1" }}
                />
              </div>

              <div
                style={optionCardStyle}
                onClick={() =>
                  handleNavigation(
                    modalType === "login"
                      ? "/employer-login"
                      : "/employer-signup"
                  )
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#6366f1";
                  e.currentTarget.style.backgroundColor = "#f9fafb";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div style={optionIconStyle}>
                  <i className="uil uil-building" />
                </div>
                <div style={optionTextStyle}>
                  <h3 style={optionTitleStyle}>Employer</h3>
                  <p style={optionDescStyle}>Hiring talented professionals</p>
                </div>
                <i
                  className="uil uil-arrow-right"
                  style={{ fontSize: "20px", color: "#6366f1" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
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
    </>
  );
};

export default HeaderAuthButtons;
