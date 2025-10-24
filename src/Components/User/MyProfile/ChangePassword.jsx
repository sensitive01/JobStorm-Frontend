import React from "react";

const ChangePassword = ({formState,handleInputChange}) => {
  return (
    <div className="mt-4">
      <h5 className="fs-17 fw-semibold mb-3">Change Password</h5>
      <div className="row">
        <div className="col-lg-12">
          <div className="mb-3">
            <label htmlFor="currentPassword" className="form-label">
              Current Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter current password"
              id="currentPassword"
              value={formState.currentPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
              id="newPassword"
              value={formState.newPassword}
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
              placeholder="Confirm new password"
              id="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="twoStepVerification"
              checked={formState.twoStepVerification}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="twoStepVerification">
              Enable Two-Step Verification via email
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
