import React, { useState } from "react";
import { toast } from "react-toastify";
import { changePassword } from "../../../api/service/axiosService";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.newPassword) {
      toast.error("Please enter a new password");
      return;
    }

    if (!formData.confirmPassword) {
      toast.error("Please confirm your password");
      return;
    }

    if (formData.newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    if (!passwordRegex.test(formData.newPassword)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }

    setLoading(true);

    try {
      const response = await changePassword(
        formData.newPassword,
        formData.confirmPassword
      );

      if (response.status === 200 || response.data?.success) {
        toast.success("Password changed successfully!");

        // Clear form
        setFormData({
          newPassword: "",
          confirmPassword: "",
        });

        // Redirect to login page
        setTimeout(() => {
          window.location.href = "/candidate-login";
        }, 1500);
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to change password. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Begin page */}
      <div>
        <div className="main-content">
          <div className="page-content">
            {/* START CHANGE-PASSWORD */}
            <section className="bg-auth">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10 col-lg-12">
                    <div className="card auth-box">
                      <div className="row g-0">
                        <div className="col-lg-6 text-center">
                          <div className="card-body p-4">
                            <a href="index.php">
                              <img
                                src="assets/images/logo-light.png"
                                alt=""
                                className="logo-light"
                              />
                              <img
                                src="assets/images/logo-dark.png"
                                width="100%"
                                alt=""
                                className="logo-dark"
                              />
                            </a>
                            <div className="mt-5">
                              <img
                                src="assets/images/auth/reset-password.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6">
                          <div className="auth-content card-body p-5 h-100 text-white">
                            <div className="text-center mb-4">
                              <h5>Change Password</h5>
                              <p className="text-white-50">
                                Create a new password for your account.
                              </p>
                            </div>
                            <form
                              onSubmit={handleSubmit}
                              className="auth-form text-white"
                            >
                              <div
                                className="alert alert-warning text-center mb-4"
                                role="alert"
                              >
                                Your password must be at least 8 characters long
                                and include uppercase, lowercase, and numbers.
                              </div>

                              {/* New Password */}
                              <div className="mb-4">
                                <label
                                  className="form-label"
                                  htmlFor="newPassword"
                                >
                                  New Password
                                </label>
                                <div className="position-relative">
                                  <input
                                    type={showNewPassword ? "text" : "password"}
                                    className="form-control"
                                    id="newPassword"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    placeholder="Enter new password"
                                    disabled={loading}
                                  />
                                  <button
                                    type="button"
                                    className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-white"
                                    onClick={toggleNewPasswordVisibility}
                                    style={{
                                      padding: "0.375rem 0.75rem",
                                      zIndex: 10,
                                    }}
                                  >
                                    <i
                                      className={
                                        showNewPassword
                                          ? "uil uil-eye-slash"
                                          : "uil uil-eye"
                                      }
                                    />
                                  </button>
                                </div>
                              </div>

                              {/* Confirm Password */}
                              <div className="mb-4">
                                <label
                                  className="form-label"
                                  htmlFor="confirmPassword"
                                >
                                  Confirm Password
                                </label>
                                <div className="position-relative">
                                  <input
                                    type={
                                      showConfirmPassword ? "text" : "password"
                                    }
                                    className="form-control"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm new password"
                                    disabled={loading}
                                  />
                                  <button
                                    type="button"
                                    className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-white"
                                    onClick={toggleConfirmPasswordVisibility}
                                    style={{
                                      padding: "0.375rem 0.75rem",
                                      zIndex: 10,
                                    }}
                                  >
                                    <i
                                      className={
                                        showConfirmPassword
                                          ? "uil uil-eye-slash"
                                          : "uil uil-eye"
                                      }
                                    />
                                  </button>
                                </div>
                              </div>

                              <div className="mt-3">
                                <button
                                  type="submit"
                                  className="btn btn-white w-100"
                                  disabled={loading}
                                >
                                  {loading
                                    ? "Changing Password..."
                                    : "Change Password"}
                                </button>
                              </div>
                            </form>
                            {/* end form */}
                            <div className="mt-5 text-center text-white-50">
                              <p>
                                Remembered It ?{" "}
                                <a
                                  href="/candidate-login"
                                  className="fw-medium text-white text-decoration-underline"
                                >
                                  {" "}
                                  Go to Login{" "}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end auth-box*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
            {/* END CHANGE-PASSWORD */}
          </div>
          {/* End Page-content */}
        </div>
        {/* end main content*/}
      </div>
      {/* END layout-wrapper */}
      {/* Style switcher */}
      <div id="style-switcher" onClick={() => {}} style={{ left: "-165px" }}>
        <div>
          <div className="mt-3">
            <h6>Light/dark Layout</h6>
            <div className="text-center mt-3">
              {/* light-dark mode */}
              <a
                href="#"
                id="mode"
                className="mode-btn text-white rounded-3"
                onClick={(e) => e.preventDefault()}
              >
                <i className="uil uil-brightness mode-dark mx-auto" />
                <i className="uil uil-moon mode-light" />
              </a>
              {/* END light-dark Mode */}
            </div>
          </div>
        </div>
      </div>
      {/* end switcher*/}
      {/*start back-to-top*/}
      <button onClick={() => window.scrollTo(0, 0)} id="back-to-top">
        <i className="mdi mdi-arrow-up" />
      </button>
      {/*end back-to-top*/}
    </>
  );
};

export default ChangePassword;
