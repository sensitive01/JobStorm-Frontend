import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { resetPassword, verifyOTP } from "../../../api/service/axiosService";

const EmployeerResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Email, 2: OTP
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [isTimerActive, setIsTimerActive] = useState(false);

  // Timer countdown effect
  useEffect(() => {
    let interval = null;

    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
      toast.warning("OTP expired. Please request a new one.");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive, timer]);

  // Format timer display (MM:SS)
  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const handleEmailSubmit = async (e) => {
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

    try {
      const response = await resetPassword(email);

      if (response.status === 200) {
        toast.success("OTP has been sent to your email!");
        setStep(2);
        setTimer(120); // Reset timer to 2 minutes
        setIsTimerActive(true);
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to send OTP. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }

    if (otp.length !== 6) {
      toast.error("OTP must be 6 digits");
      return;
    }

    setLoading(true);

    try {
      const response = await verifyOTP(email, otp);
      console.log(response);

      if (response.status === 200) {
        toast.success("OTP verified successfully!");
        setIsTimerActive(false);

        // Navigate to change password page after a short delay
        setTimeout(() => {
          window.location.href = `/candidate-change-password?email=${encodeURIComponent(
            email
          )}`;
        }, 1000);
      } else {
        toast.error(response?.response?.data?.message);
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Invalid OTP. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (timer > 0) {
      toast.info("Please wait for the timer to expire before resending");
      return;
    }

    setLoading(true);
    const handleSuccess = true;

    try {
      const response = await resetPassword(email);

      if (response.status === 200 || handleSuccess) {
        toast.success("OTP has been resent to your email!");
        setTimer(120); // Reset timer to 2 minutes
        setIsTimerActive(true);
        setOtp(""); // Clear previous OTP
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to resend OTP. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToEmail = () => {
    setStep(1);
    setOtp("");
    setTimer(120);
    setIsTimerActive(false);
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
                            {/* STEP 1: Email Input */}
                            {step === 1 && (
                              <>
                                <div className="text-center mb-4">
                                  <h5>Reset Password</h5>
                                  <p className="text-white-50">
                                    Reset your password with JobsStorm.
                                  </p>
                                </div>
                                <form
                                  onSubmit={handleEmailSubmit}
                                  className="auth-form text-white"
                                >
                                  <div
                                    className="alert alert-warning text-center mb-4"
                                    role="alert"
                                  >
                                    Enter your Email and OTP will be sent to
                                    you!
                                  </div>
                                  <div className="mb-4">
                                    <label
                                      className="form-label"
                                      htmlFor="email"
                                    >
                                      Username/Email
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="email"
                                      name="email"
                                      value={email}
                                      onChange={handleEmailChange}
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
                                      {loading ? "Sending..." : "Send OTP"}
                                    </button>
                                  </div>
                                </form>
                              </>
                            )}

                            {/* STEP 2: OTP Verification */}
                            {step === 2 && (
                              <>
                                <div className="text-center mb-4">
                                  <h5>Verify OTP</h5>
                                  <p className="text-white-50">
                                    Enter the 6-digit OTP sent to {email}
                                  </p>
                                </div>
                                <form
                                  onSubmit={handleOtpSubmit}
                                  className="auth-form text-white"
                                >
                                  <div
                                    className="alert alert-info text-center mb-4"
                                    role="alert"
                                  >
                                    <div className="mb-2">
                                      Time remaining:{" "}
                                      <strong>{formatTimer()}</strong>
                                    </div>
                                    {timer === 0 && (
                                      <small className="text-danger">
                                        OTP expired!
                                      </small>
                                    )}
                                  </div>
                                  <div className="mb-4">
                                    <label className="form-label" htmlFor="otp">
                                      Enter OTP
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control text-center"
                                      id="otp"
                                      name="otp"
                                      value={otp}
                                      onChange={handleOtpChange}
                                      placeholder="Enter 6-digit OTP"
                                      disabled={loading || timer === 0}
                                      maxLength={6}
                                      style={{
                                        fontSize: "24px",
                                        letterSpacing: "10px",
                                      }}
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <button
                                      type="submit"
                                      className="btn btn-white w-100"
                                      disabled={
                                        loading ||
                                        timer === 0 ||
                                        otp.length !== 6
                                      }
                                    >
                                      {loading ? "Verifying..." : "Verify OTP"}
                                    </button>
                                  </div>
                                  <div className="mt-3 text-center">
                                    <button
                                      type="button"
                                      className="btn btn-outline-light w-100 mb-2"
                                      onClick={handleResendOtp}
                                      disabled={loading || timer > 0}
                                    >
                                      {timer > 0
                                        ? `Resend OTP (${formatTimer()})`
                                        : "Resend OTP"}
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-link text-white text-decoration-underline"
                                      onClick={handleBackToEmail}
                                      disabled={loading}
                                    >
                                      Change Email Address
                                    </button>
                                  </div>
                                </form>
                              </>
                            )}

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

export default EmployeerResetPassword;
