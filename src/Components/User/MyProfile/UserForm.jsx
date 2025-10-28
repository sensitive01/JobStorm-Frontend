import React, { useState, useEffect } from "react";
import axios from "axios";

import {getUserData,sendUserData} from "../../../api/service/axiosService"

const UserForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    accountType: "",
    email: "",
    introduction: "",
    languages: "",
    location: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    whatsapp: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorEnabled: false,
  });

  // State for profile image
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);

  // State for CV attachment
  const [cvFile, setCVFile] = useState(null);

  // State for loading and error handling
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


  // Fetch user data when component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  // Function to fetch existing user data
  const fetchUserData = async () => {
    setIsFetching(true);
    setError(null);

    try {
      // Replace with your actual endpoint and add authentication headers if needed
      const response = await getUserData()
      

      if (response.status===200) {
        const userData = response.data.data;
        
        // Map the backend data to your form structure
        setFormData({
          firstName: userData.firstName || userData.userName?.split(' ')[0] || "",
          lastName: userData.lastName || userData.userName?.split(' ')[1] || "",
          accountType: userData.accountType || "",
          email: userData.email || userData.userEmail || "",
          introduction: userData.introduction || userData.profilesummary || "",
          languages: Array.isArray(userData.languages) 
            ? userData.languages.join(", ") 
            : userData.languages || "",
          location: userData.location || userData.preferredLocation || "",
          facebook: userData.socialLinks?.facebook || userData.facebook || "",
          twitter: userData.socialLinks?.twitter || userData.twitter || "",
          linkedin: userData.linkedin || "",
          whatsapp: userData.socialLinks?.whatsapp || userData.whatsapp || "",
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
          twoFactorEnabled: userData.twoFactorEnabled || false,
        });

        // Set profile image preview if exists
        if (userData.profileImage) {
          setProfileImagePreview(userData.profileImage);
        }

        // Set CV file name if exists
        if (userData.cvFileName) {
          // Just show the filename, not the actual file
          setCVFile({ name: userData.cvFileName });
        }
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError(
        err.response?.data?.message || 
        "Failed to load profile data. Please refresh the page."
      );
    } finally {
      setIsFetching(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle profile image upload
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle CV file upload
  const handleCVUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCVFile(file);
    }
  };

  // Form validation
  const validateForm = () => {
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError("Please fill in all required fields");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    // Password validation (only if changing password)
    if (formData.newPassword || formData.confirmPassword) {
      if (!formData.currentPassword) {
        setError("Please enter your current password");
        return false;
      }
      if (formData.newPassword !== formData.confirmPassword) {
        setError("New passwords do not match");
        return false;
      }
      if (formData.newPassword.length < 8) {
        setError("New password must be at least 8 characters long");
        return false;
      }
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset states
    setError(null);
    setSuccess(false);

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Create FormData for file uploads
      const formDataToSend = new FormData();

      // Append all text data
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("accountType", formData.accountType);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("introduction", formData.introduction);
      formDataToSend.append("languages", formData.languages);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("facebook", formData.facebook);
      formDataToSend.append("twitter", formData.twitter);
      formDataToSend.append("linkedin", formData.linkedin);
      formDataToSend.append("whatsapp", formData.whatsapp);
      formDataToSend.append("twoFactorEnabled", formData.twoFactorEnabled);

      // Only append password fields if changing password
      if (formData.newPassword) {
        formDataToSend.append("currentPassword", formData.currentPassword);
        formDataToSend.append("newPassword", formData.newPassword);
        formDataToSend.append("confirmPassword", formData.confirmPassword);
      }

      // Append files if they exist
      if (profileImage) {
        formDataToSend.append("profileImage", profileImage);
      }
      if (cvFile && cvFile instanceof File) {
        formDataToSend.append("cv", cvFile);
      }

      // Send data to backend
      const response = await sendUserData(formData)
      
      

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);

        // Clear password fields after successful update
        setFormData((prev) => ({
          ...prev,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }));

        // Clear file inputs
        setProfileImage(null);
        if (cvFile instanceof File) {
          setCVFile(null);
        }

        // Show success message for 3 seconds
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "An error occurred while updating your profile"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading state while fetching data
  if (isFetching) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Success Message */}
      {success && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Success!</strong> Your profile has been updated successfully.
          <button
            type="button"
            className="btn-close"
            onClick={() => setSuccess(false)}
            aria-label="Close"
          ></button>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Error!</strong> {error}
          <button
            type="button"
            className="btn-close"
            onClick={() => setError(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h5 className="fs-17 fw-semibold mb-3">My Account</h5>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="accountType" className="form-label">
                  Account Type
                </label>
                <select
                  className="form-select"
                  id="accountType"
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleInputChange}
                >
                  <option value="">Select account type</option>
                  <option value="personal">Personal</option>
                  <option value="business">Business</option>
                  <option value="professional">Professional</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="youremail@example.com"
                  required
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="profileImage" className="form-label">
                  Profile Picture
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="profileImage"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                />
                {profileImagePreview && (
                  <div className="mt-2">
                    <img
                      src={profileImagePreview}
                      alt="Profile preview"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="fs-17 fw-semibold mb-3">Profile</h5>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="introduction" className="form-label">
                  Introduce Yourself
                </label>
                <textarea
                  className="form-control"
                  id="introduction"
                  name="introduction"
                  rows={5}
                  value={formData.introduction}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself..."
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="languages" className="form-label">
                  Languages
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="languages"
                  name="languages"
                  value={formData.languages}
                  onChange={handleInputChange}
                  placeholder="e.g., English, Spanish, French"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <select
                  className="form-select"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                >
                  <option value="">Select location</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="attachmentscv" className="form-label">
                  Attachments CV
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="attachmentscv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleCVUpload}
                />
                {cvFile && (
                  <small className="text-muted">Selected: {cvFile.name}</small>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="fs-17 fw-semibold mb-3">Social Media</h5>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="facebook" className="form-label">
                  Facebook
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="facebook"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleInputChange}
                  placeholder="https://www.facebook.com/yourprofile"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="twitter" className="form-label">
                  Twitter
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="twitter"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleInputChange}
                  placeholder="https://www.twitter.com/yourprofile"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="linkedin" className="form-label">
                  Linkedin
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://www.linkedin.com/in/yourprofile"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="whatsapp" className="form-label">
                  Whatsapp
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="+1234567890"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="fs-17 fw-semibold mb-3">Change Password</h5>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="currentPassword" className="form-label">
                  Current password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Current password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                  New password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter new password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="twoFactorEnabled"
                  name="twoFactorEnabled"
                  checked={formData.twoFactorEnabled}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="twoFactorEnabled">
                  Enable Two-Step Verification via email
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Updating...
              </>
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;