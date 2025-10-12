import React, { useState, useCallback, useRef } from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  registerCandidate,
  resetPassword,
} from "../../../api/service/axiosService";

// import { sendVerificationOtp, verifyOtpCandidate } from "../../../api/service/candidateService";

const SignUpPage = () => {
  const [step, setStep] = useState(1); // 1: Basic Info + Email, 2: OTP Verification, 3: Complete Registration
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    countryCode: "",
    agreeToTerms: false,
  });

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  const abortControllerRef = useRef(null);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handlePhoneChange = useCallback((value, country) => {
    const countryDialCode = country.dialCode;
    const phoneNumber = value.slice(countryDialCode.length);

    setFormData((prev) => ({
      ...prev,
      mobile: phoneNumber,
      countryCode: "+" + countryDialCode,
    }));
  }, []);

  // Start resend timer
  const startResendTimer = useCallback(() => {
    setResendTimer(60);
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  // Send OTP API call
  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.username?.trim() || !formData.email?.trim()) {
      setError("Please enter username and email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout")), 15000)
      );

      // TODO: Replace with your actual OTP API
      const apiPromise = resetPassword(
        formData.email.trim(),
        formData.username.trim()
      );

      const response = await Promise.race([apiPromise, timeoutPromise]);

      if (response.status === 200) {
        toast.success("OTP sent to your email!", { autoClose: 2000 });
        setStep(2);
        startResendTimer();
      } else {
        const errorMsg = response.data?.message || "Failed to send OTP";
        setError(errorMsg);
        toast.error(errorMsg, { autoClose: 3000 });
      }
    } catch (err) {
      console.error("Send OTP error:", err);
      const errorMsg =
        err.message === "Request timeout"
          ? "Request timed out. Please check your connection and try again."
          : err.response?.data?.message ||
            "Failed to send OTP. Please try again.";
      setError(errorMsg);
      toast.error(errorMsg, { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP API call
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");

    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);

    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout")), 15000)
      );

      // TODO: Replace with your actual OTP verification API
      // const apiPromise = verifyOtpCandidate(formData.email, otp);

      // TEMPORARY: Mock API call - REMOVE THIS and uncomment above line
      const apiPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve({ status: 200, data: { message: "OTP verified" } });
        }, 1000);
      });

      const response = await Promise.race([apiPromise, timeoutPromise]);

      if (response.status === 200) {
        toast.success("Email verified!", { autoClose: 1500 });
        setStep(3);
      } else {
        const errorMsg = response.data?.message || "Invalid OTP";
        setError(errorMsg);
        toast.error(errorMsg, { autoClose: 3000 });
      }
    } catch (err) {
      console.error("Verify OTP error:", err);
      const errorMsg =
        err.message === "Request timeout"
          ? "Request timed out. Please try again."
          : err.response?.data?.message || "Invalid OTP. Please try again.";
      setError(errorMsg);
      toast.error(errorMsg, { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    if (resendTimer > 0) return;

    setError("");
    setOtp("");
    setLoading(true);

    try {
      // TODO: Replace with your actual OTP API
      // const response = await sendVerificationOtp(formData.email, formData.username);

      // TEMPORARY: Mock API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ status: 200 });
        }, 1000);
      });

      if (response.status === 200) {
        toast.success("OTP resent!", { autoClose: 2000 });
        startResendTimer();
      } else {
        toast.error("Failed to resend OTP", { autoClose: 3000 });
      }
    } catch (err) {
      console.error("Resend OTP error:", err);
      toast.error(err.response?.data?.message || "Failed to resend OTP", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Final registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.password || !formData.mobile) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (formData.mobile.length < 7) {
      setError("Please enter a valid mobile number");
      return;
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the terms and conditions");
      return;
    }

    setLoading(true);

    try {
      const fullMobile = formData.countryCode + formData.mobile;

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout")), 20000)
      );

      const apiPromise = registerCandidate(
        formData.username.trim(),
        formData.email.trim(),
        formData.password,
        fullMobile
      );

      const response = await Promise.race([apiPromise, timeoutPromise]);

      console.log("response", response);
      console.log("Country Code:", formData.countryCode);
      console.log("Mobile:", formData.mobile);
      console.log("Full Mobile:", fullMobile);

      if (response.status === 201) {
        setSuccess(true);
        toast.success("Registration successful!", { autoClose: 2000 });
        setTimeout(() => {
          window.location.href = "/candidate-login";
        }, 1500);
      } else {
        const errorMsg =
          response.response?.data?.message || "Registration failed";
        toast.error(errorMsg, { autoClose: 3000 });
      }
    } catch (err) {
      console.log("--->", err);
      const errorMsg =
        err.message === "Request timeout"
          ? "Request timed out. Please check your connection and try again."
          : err.response?.data?.message ||
            "Something went wrong. Please try again.";
      setError(errorMsg);
      toast.error(errorMsg, { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .phone-input-container {
          width: 100%;
        }

        .phone-input-container .react-tel-input {
          width: 100%;
        }

        .phone-input-container .form-control {
          width: 100% !important;
          height: 45px;
          background-color: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: white !important;
          border-radius: 0.25rem;
          padding-left: 52px !important;
        }

        .phone-input-container .form-control:focus {
          background-color: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
          box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.1) !important;
          outline: none;
        }

        .phone-input-container .form-control::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .phone-input-container .flag-dropdown {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 0.25rem 0 0 0.25rem;
        }

        .phone-input-container .flag-dropdown:hover {
          background-color: rgba(255, 255, 255, 0.15) !important;
        }

        .phone-input-container .selected-flag {
          background-color: transparent !important;
          padding: 0 0 0 10px;
        }

        .phone-input-container .selected-flag:hover,
        .phone-input-container .selected-flag:focus {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }

        .phone-input-container .country-list {
          background-color: #2c3e50 !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.25rem;
          margin-top: 2px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          max-height: 200px;
          overflow-y: auto;
        }

        .phone-input-container .country-list .country {
          color: white !important;
          padding: 8px 10px;
        }

        .phone-input-container .country-list .country:hover {
          background-color: #34495e !important;
        }

        .phone-input-container .country-list .country.highlight {
          background-color: #34495e !important;
        }

        .phone-input-container .country-list .search {
          background-color: #34495e !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 8px;
          position: sticky;
          top: 0;
          z-index: 1;
        }

        .phone-input-container .country-list .search-box {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: white !important;
          padding: 6px 10px;
          border-radius: 0.25rem;
          width: 100%;
        }

        .phone-input-container .country-list .search-box::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .phone-input-container .country-list .search-emoji {
          display: none;
        }

        .phone-input-container .country-list .dial-code {
          color: rgba(255, 255, 255, 0.7) !important;
        }

        .phone-input-container .country-list::-webkit-scrollbar {
          width: 8px;
        }

        .phone-input-container .country-list::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        .phone-input-container .country-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .phone-input-container .country-list::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .phone-input-container .form-control:disabled {
          background-color: rgba(255, 255, 255, 0.05) !important;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .phone-input-container .flag-dropdown.disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .spinner-border-sm {
          width: 1rem;
          height: 1rem;
          border-width: 0.15em;
        }

        .otp-input {
          width: 100%;
          text-align: center;
          letter-spacing: 10px;
          font-size: 24px;
          font-weight: 600;
        }

        .step-indicator {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          gap: 10px;
        }

        .step-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .step-dot.active {
          background-color: white;
          width: 30px;
          border-radius: 6px;
        }
           .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
    font-size: 20px;
    line-height: 1;
    padding: 0;
  }

  .close-button:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  .close-button:active {
    transform: rotate(90deg) scale(0.95);
  }
      `}</style>

      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-auth">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10 col-lg-12">
                    <div className="card auth-box">
                      <div className="row">
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
                                src="assets/images/auth/sign-up.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="auth-content card-body p-5 text-white">
                            <div className="w-100">
                              <button
                                type="button"
                                className="close-button"
                                onClick={() => (window.location.href = "/")}
                                aria-label="Close"
                              >
                                ×
                              </button>
                              {/* Step Indicator */}
                              <div className="step-indicator">
                                <div
                                  className={`step-dot ${
                                    step >= 1 ? "active" : ""
                                  }`}
                                ></div>
                                <div
                                  className={`step-dot ${
                                    step >= 2 ? "active" : ""
                                  }`}
                                ></div>
                                <div
                                  className={`step-dot ${
                                    step >= 3 ? "active" : ""
                                  }`}
                                ></div>
                              </div>

                              <div className="text-center">
                                <h5>
                                  {step === 1 && "Let's Get Started"}
                                  {step === 2 && "Verify Your Email"}
                                  {step === 3 && "Complete Registration"}
                                </h5>
                                <p className="text-white-70">
                                  {step === 1 &&
                                    "Enter your details to get started"}
                                  {step === 2 &&
                                    "We've sent a 6-digit OTP to your email"}
                                  {step === 3 &&
                                    "Just a few more details to complete"}
                                </p>
                              </div>

                              {error && (
                                <div
                                  className="alert alert-danger"
                                  role="alert"
                                >
                                  {error}
                                </div>
                              )}

                              {success && (
                                <div
                                  className="alert alert-success"
                                  role="alert"
                                >
                                  Signup successful! Redirecting to sign in...
                                </div>
                              )}

                              {/* Step 1: Username and Email Entry */}
                              {step === 1 && (
                                <form
                                  onSubmit={handleSendOTP}
                                  className="auth-form"
                                >
                                  <div className="mb-3">
                                    <label
                                      htmlFor="usernameInput"
                                      className="form-label"
                                    >
                                      Username
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="usernameInput"
                                      name="username"
                                      value={formData.username}
                                      onChange={handleChange}
                                      placeholder="Enter your username"
                                      disabled={loading}
                                      required
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="emailInput"
                                      className="form-label"
                                    >
                                      Email
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="emailInput"
                                      name="email"
                                      value={formData.email}
                                      onChange={handleChange}
                                      placeholder="Enter your email"
                                      disabled={loading}
                                      required
                                    />
                                  </div>
                                  <div className="text-center mt-4">
                                    <button
                                      type="submit"
                                      className="btn btn-white btn-hover w-100"
                                      disabled={loading}
                                    >
                                      {loading ? (
                                        <>
                                          <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                          ></span>
                                          Sending...
                                        </>
                                      ) : (
                                        "Send OTP"
                                      )}
                                    </button>
                                  </div>
                                </form>
                              )}

                              {/* Step 2: OTP Verification */}
                              {step === 2 && (
                                <form
                                  onSubmit={handleVerifyOTP}
                                  className="auth-form"
                                >
                                  <div className="mb-4">
                                    <label
                                      htmlFor="otpInput"
                                      className="form-label text-center d-block"
                                    >
                                      Enter 6-Digit OTP
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control otp-input"
                                      id="otpInput"
                                      value={otp}
                                      onChange={(e) => {
                                        const value = e.target.value.replace(
                                          /\D/g,
                                          ""
                                        );
                                        if (value.length <= 6) setOtp(value);
                                      }}
                                      placeholder="000000"
                                      disabled={loading}
                                      maxLength={6}
                                      required
                                      autoFocus
                                    />
                                    <small className="text-white-70 d-block text-center mt-2">
                                      Sent to {formData.email}
                                    </small>
                                  </div>
                                  <div className="text-center mb-3">
                                    {resendTimer > 0 ? (
                                      <p className="text-white-70 mb-0">
                                        Resend OTP in {resendTimer}s
                                      </p>
                                    ) : (
                                      <button
                                        type="button"
                                        className="btn btn-link text-white text-decoration-underline p-0"
                                        onClick={handleResendOTP}
                                        disabled={loading}
                                      >
                                        Resend OTP
                                      </button>
                                    )}
                                  </div>
                                  <div className="text-center">
                                    <button
                                      type="submit"
                                      className="btn btn-white btn-hover w-100 mb-2"
                                      disabled={loading || otp.length !== 6}
                                    >
                                      {loading ? (
                                        <>
                                          <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                          ></span>
                                          Verifying...
                                        </>
                                      ) : (
                                        "Verify OTP"
                                      )}
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-outline-light w-100"
                                      onClick={() => {
                                        setStep(1);
                                        setOtp("");
                                        setError("");
                                      }}
                                      disabled={loading}
                                    >
                                      Change Email
                                    </button>
                                  </div>
                                </form>
                              )}

                              {/* Step 3: Complete Registration */}
                              {step === 3 && (
                                <form
                                  onSubmit={handleSubmit}
                                  className="auth-form"
                                >
                                  <div className="mb-3">
                                    <label
                                      htmlFor="mobileInput"
                                      className="form-label"
                                    >
                                      Mobile Number
                                    </label>
                                    <PhoneInput
                                      country={"in"}
                                      value={
                                        formData.countryCode.replace("+", "") +
                                        formData.mobile
                                      }
                                      onChange={handlePhoneChange}
                                      disabled={loading}
                                      inputProps={{
                                        name: "mobile",
                                        required: true,
                                      }}
                                      containerClass="phone-input-container"
                                      enableSearch={true}
                                      searchPlaceholder="Search country"
                                      countryCodeEditable={false}
                                      disableSearchIcon={true}
                                      placeholder="Enter phone number"
                                    />
                                    {formData.countryCode &&
                                      formData.mobile && (
                                        <small className="text-white-50 mt-1 d-block">
                                          Full number: {formData.countryCode}{" "}
                                          {formData.mobile}
                                        </small>
                                      )}
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="passwordInput"
                                      className="form-label"
                                    >
                                      Password
                                    </label>
                                    <input
                                      type="password"
                                      className="form-control"
                                      id="passwordInput"
                                      name="password"
                                      value={formData.password}
                                      onChange={handleChange}
                                      placeholder="Enter your password"
                                      disabled={loading}
                                      required
                                    />
                                  </div>
                                  <div className="mb-4">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexCheckDefault"
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onChange={handleChange}
                                        disabled={loading}
                                        required
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                      >
                                        I agree to the{" "}
                                        <a
                                          href="#"
                                          className="text-white text-decoration-underline"
                                        >
                                          Terms and conditions
                                        </a>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    <button
                                      type="submit"
                                      className="btn btn-white btn-hover w-100"
                                      disabled={loading}
                                    >
                                      {loading ? (
                                        <>
                                          <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                          ></span>
                                          Completing...
                                        </>
                                      ) : (
                                        "Complete Registration"
                                      )}
                                    </button>
                                  </div>
                                </form>
                              )}

                              <div className="mt-3 text-center">
                                <p className="mb-0">
                                  Already a member ?{" "}
                                  <a
                                    href="/candidate-login"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign In{" "}
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div id="style-switcher" onClick={() => {}} style={{ left: "-165px" }}>
        <div>
          <h6>Select your color</h6>
          <ul className="pattern list-unstyled mb-0">
            <li>
              <a
                className="color-list color1"
                href="#"
                onClick={(e) => e.preventDefault()}
              />
            </li>
            <li>
              <a
                className="color-list color2"
                href="#"
                onClick={(e) => e.preventDefault()}
              />
            </li>
            <li>
              <a
                className="color-list color3"
                href="#"
                onClick={(e) => e.preventDefault()}
              />
            </li>
          </ul>
          <div className="mt-3">
            <h6>Light/dark Layout</h6>
            <div className="text-center mt-3">
              <a
                href="#"
                id="mode"
                className="mode-btn text-white rounded-3"
                onClick={(e) => e.preventDefault()}
              >
                <i className="uil uil-brightness mode-dark mx-auto" />
                <i className="uil uil-moon mode-light" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => window.scrollTo(0, 0)} id="back-to-top">
        <i className="mdi mdi-arrow-up" />
      </button>
    </>
  );
};

export default SignUpPage;
