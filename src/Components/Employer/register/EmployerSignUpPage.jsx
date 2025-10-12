import React, { useState, useCallback, useRef } from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  registerEmployer,
  sendVeificationOtp,
  verifyOtpEmployer,
} from "../../../api/service/employerService";

const EmployerSignUpPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    contactEmail: "",
    mobile: "",
    countryCode: "",
    password: "",
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

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.companyName?.trim() ||
      !formData.contactPerson?.trim() ||
      !formData.contactEmail?.trim()
    ) {
      setError("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.contactEmail)) {
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

      const apiPromise = sendVeificationOtp(
        formData.contactEmail.trim(),
        formData.contactPerson.trim(),
        formData.companyName.trim()
      );

      const response = await Promise.race([apiPromise, timeoutPromise]);

      if (response.status === 200) {
        toast.success("OTP sent successfully!", { autoClose: 2000 });
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

      const apiPromise = verifyOtpEmployer(formData.contactEmail, otp);
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

  const handleResendOTP = async () => {
    if (resendTimer > 0) return;

    setError("");
    setOtp("");
    setLoading(true);

    try {
      const response = await sendVeificationOtp(
        formData.contactEmail,
        formData.contactPerson,
        formData.companyName
      );

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.mobile || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.mobile.length < 7) {
      setError("Please enter a valid mobile number");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
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

      const apiPromise = registerEmployer(
        formData.companyName.trim(),
        formData.contactPerson.trim(),
        formData.contactEmail.trim(),
        fullMobile,
        formData.password
      );

      const response = await Promise.race([apiPromise, timeoutPromise]);

      if (response.status === 201) {
        setSuccess(true);
        toast.success("Registration successful!", { autoClose: 2000 });
        setTimeout(() => {
          window.location.href = "/employer-login";
        }, 1500);
      } else {
        const errorMsg =
          response.response?.data?.message || "Registration failed";
        toast.error(errorMsg, { autoClose: 3000 });
      }
    } catch (err) {
      console.error("Registration error:", err);
      const errorMsg =
        err.message === "Request timeout"
          ? "Request timed out. Please try again."
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
        .phone-input-container .flag-dropdown {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 0.25rem 0 0 0.25rem;
        }
        .phone-input-container .selected-flag {
          background-color: transparent !important;
          padding: 0 0 0 10px;
        }
        .phone-input-container .country-list {
          background-color: #2c3e50 !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.25rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          max-height: 200px;
        }
        .phone-input-container .country-list .country {
          color: white !important;
          padding: 8px 10px;
        }
        .phone-input-container .country-list .country:hover {
          background-color: #34495e !important;
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
        .spinner-border-sm {
          width: 1rem;
          height: 1rem;
          border-width: 0.15em;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
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
        .auth-content {
          position: relative;
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
                      <div className="row ">
                        <div className="col-lg-6 text-center">
                          <div className="card-body p-4">
                            <a href="/">
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
                                  Registration successful! Redirecting to
                                  login...
                                </div>
                              )}

                              {step === 1 && (
                                <form
                                  onSubmit={handleSendOTP}
                                  className="auth-form"
                                >
                                  <div className="mb-3">
                                    <label
                                      htmlFor="companyNameInput"
                                      className="form-label"
                                    >
                                      Company Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="companyNameInput"
                                      name="companyName"
                                      value={formData.companyName}
                                      onChange={handleChange}
                                      placeholder="Enter company name"
                                      disabled={loading}
                                      required
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="contactPersonInput"
                                      className="form-label"
                                    >
                                      Contact Person
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="contactPersonInput"
                                      name="contactPerson"
                                      value={formData.contactPerson}
                                      onChange={handleChange}
                                      placeholder="Enter contact person name"
                                      disabled={loading}
                                      required
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="contactEmailInput"
                                      className="form-label"
                                    >
                                      Contact Email
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="contactEmailInput"
                                      name="contactEmail"
                                      value={formData.contactEmail}
                                      onChange={handleChange}
                                      placeholder="Enter contact email"
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
                                      Sent to {formData.contactEmail}
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
                                  Already a member?{" "}
                                  <a
                                    href="/employer-login"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    Sign In
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
    </>
  );
};

export default EmployerSignUpPage;
