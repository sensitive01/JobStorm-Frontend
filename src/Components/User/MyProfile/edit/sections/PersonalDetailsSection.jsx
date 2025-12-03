import React from "react";
import "./PersonalDetailsSection.css";

const PersonalDetailsSection = ({
  formState,
  handleInputChange,
  profileImage,
  onProfileImageChange
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onProfileImageChange(file);
    }
  };

  const getInitials = (name) => {
    if (!name || name.trim() === '') return "";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  };

  return (
    <div className="section-card">
      <div className="section-header">
        <i className="uil uil-user"></i>
        <h3>Personal Details</h3>
      </div>

      <div className="section-content">
        {/* Profile Picture Upload */}
        <div className="profile-picture-upload">
          <div className="upload-avatar-wrapper">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="upload-avatar-img"
              />
            ) : (
              <div className="upload-avatar-placeholder">
                {getInitials(`${formState.firstName || ''} ${formState.lastName || ''}`.trim() || formState.userName || '') || (
                  <i className="uil uil-user" style={{ fontSize: '48px' }}></i>
                )}
              </div>
            )}
            <label htmlFor="profile-picture-upload" className="upload-avatar-btn" title="Upload photo">
              <i className="uil uil-camera"></i>
            </label>
            <input
              type="file"
              id="profile-picture-upload"
              className="upload-input-hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <p className="upload-hint">Click camera icon to upload photo</p>
        </div>

        <div className="form-grid">
          {/* First Name */}
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="form-input"
              value={formState.firstName}
              onChange={handleInputChange}
              placeholder="John"
              required
            />
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="form-input"
              value={formState.lastName}
              onChange={handleInputChange}
              placeholder="Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="userEmail" className="form-label">
              Email Address
            </label>
            <div className="input-with-icon">
              <i className="uil uil-envelope input-icon"></i>
              <input
                type="email"
                id="userEmail"
                className="form-input with-icon"
                value={formState.userEmail}
                onChange={handleInputChange}
                placeholder="john.doe@example.com"
                required
              />
            </div>
          </div>

          {/* Mobile with Country Code */}
          <div className="form-group">
            <label htmlFor="userMobile" className="form-label">
              Mobile Number (with country code)
            </label>
            <div className="input-with-icon">
              <i className="uil uil-phone input-icon"></i>
              <input
                type="tel"
                id="userMobile"
                className="form-input with-icon"
                value={formState.userMobile}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <small className="form-hint">Include country code (e.g., +1, +44, +91)</small>
          </div>

          {/* Date of Birth */}
          <div className="form-group">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <div className="input-with-icon">
              <i className="uil uil-calendar-alt input-icon"></i>
              <input
                type="date"
                id="dob"
                className="form-input with-icon"
                value={formState.dob}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Nationality */}
          <div className="form-group">
            <label htmlFor="nationality" className="form-label">
              Nationality
            </label>
            <div className="input-with-icon">
              <i className="uil uil-globe input-icon"></i>
              <input
                type="text"
                id="nationality"
                className="form-input with-icon"
                value={formState.nationality}
                onChange={handleInputChange}
                placeholder="American"
              />
            </div>
          </div>

          {/* Passport Number */}
          <div className="form-group">
            <label htmlFor="passportNumber" className="form-label">
              Passport Number
            </label>
            <div className="input-with-icon">
              <i className="uil uil-postcard input-icon"></i>
              <input
                type="text"
                id="passportNumber"
                className="form-input with-icon"
                value={formState.passportNumber}
                onChange={handleInputChange}
                placeholder="A12345678"
              />
            </div>
          </div>

          {/* Location */}
          <div className="form-group">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <div className="input-with-icon">
              <i className="uil uil-location-point input-icon"></i>
              <input
                type="text"
                id="location"
                className="form-input with-icon"
                value={formState.location}
                onChange={handleInputChange}
                placeholder="San Francisco, CA"
              />
            </div>
          </div>

          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              id="gender"
              className="form-select"
              value={formState.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Marital Status */}
          <div className="form-group">
            <label htmlFor="maritalStatus" className="form-label">
              Marital Status
            </label>
            <select
              id="maritalStatus"
              className="form-select"
              value={formState.maritalStatus}
              onChange={handleInputChange}
            >
              <option value="">Select Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>

          {/* Languages */}
          <div className="form-group form-group-full">
            <label htmlFor="languages" className="form-label">
              Languages
            </label>
            <input
              type="text"
              id="languages"
              className="form-input"
              value={formState.languages}
              onChange={handleInputChange}
              placeholder="English, Spanish, French (comma separated)"
            />
            <small className="form-hint">Separate languages with commas</small>
          </div>

          {/* Professional Summary - Full Width */}
          <div className="form-group form-group-full">
            <label htmlFor="profilesummary" className="form-label">
              Professional Summary
            </label>
            <textarea
              id="profilesummary"
              className="form-textarea"
              rows={15}
              value={formState.profilesummary}
              onChange={handleInputChange}
              placeholder="Passionate frontend developer with 5+ years of experience building scalable web applications. Expert in React, Next.js, and Tailwind CSS."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsSection;
