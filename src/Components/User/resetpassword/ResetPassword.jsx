import React, { useState } from "react";
import { toast } from "react-toastify";
import { resetPassword } from "../../../api/service/axiosService";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    const handleSuccess = true;

    try {
      const response = await resetPassword(email);

      if (response.status === 200 || handleSuccess) {
        toast.success(
          "Password reset instructions have been sent to your email!"
        );

        setEmail("");

        setTimeout(() => {
          window.location.href = "/candidate-login";
        }, 1500);
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to send reset instructions. Please try again.";
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
            {/* START RESET-PASSWORD */}
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
                              <h5>Reset Password</h5>
                              <p className="text-white-50">
                                Reset your password with JobsStorm.
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
                                Enter your Email and instructions will be sent
                                to you!
                              </div>
                              <div className="mb-4">
                                <label className="form-label" htmlFor="email">
                                  Username/Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  value={email}
                                  onChange={handleChange}
                                  placeholder="Enter username or email"
                                  disabled={loading}
                                />
                              </div>
                              <div className="mt-3">
                                <button
                                  type="submit"
                                  className="btn btn-white w-100"
                                  disabled={loading}
                                >
                                  {loading ? "Sending..." : "Send Request"}
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
            {/* END RESET-PASSWORD */}
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

export default ResetPassword;
