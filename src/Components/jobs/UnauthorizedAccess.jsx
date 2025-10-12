import React from "react";
import "./unauthorized.css";

export default function UnauthorizedAccess() {
  const handleLoginRedirect = () => {
    window.location.href = "/employer-login";
  };

  return (
    <div className="simple-message-container">
      <div className="simple-message-box">
        <h2>Please login with Employer Account to post jobs</h2>
        <button onClick={handleLoginRedirect} className="simple-login-btn">
          Employer Login
        </button>
      </div>
    </div>
  );
}
