import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({
  profileImage,
  userName,
  currentRole,
  location,
  email,
  mobile,
}) => {
  const getInitials = (name) => {
    if (!name) return "JD";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="profile-card">
      <div className="profile-avatar-section">
        <div className="profile-avatar-wrapper">
          {profileImage ? (
            <img
              src={profileImage}
              alt={userName}
              className="profile-avatar-img"
            />
          ) : (
            <div className="profile-avatar-placeholder">
              {getInitials(userName)}
            </div>
          )}
        </div>

        <div className="profile-info">
          <h3 className="profile-name">{userName || "John Doe"}</h3>
          <p className="profile-role">{currentRole || "Full Stack Developer"}</p>
        </div>
      </div>

      <div className="profile-contact-info">
        {location && (
          <div className="contact-item">
            <i className="uil uil-location-point"></i>
            <span>{location}</span>
          </div>
        )}
        {email && (
          <div className="contact-item">
            <i className="uil uil-envelope"></i>
            <span>{email}</span>
          </div>
        )}
        {mobile && (
          <div className="contact-item">
            <i className="uil uil-phone"></i>
            <span>{mobile}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
