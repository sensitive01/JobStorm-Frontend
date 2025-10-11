import React, { useState } from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { registerEmployer } from "../../../api/service/employerService";

const EmployerSignUpPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    contactEmail: "",
    mobile: "",
    countryCode: "",
    password: "",
    agreeToTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhoneChange = (value, country) => {
    // Extract country code and phone number
    const countryDialCode = country.dialCode;
    const phoneNumber = value.slice(countryDialCode.length);

    setFormData((prev) => ({
      ...prev,
      mobile: phoneNumber,
      countryCode: "+" + countryDialCode,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validation
    if (
      !formData.companyName ||
      !formData.contactPerson ||
      !formData.contactEmail ||
      !formData.mobile ||
      !formData.password
    ) {
      setError("Please fill in all fields");
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
      // Combine country code and mobile number
      const fullMobile = formData.countryCode + formData.mobile;

      const response = await registerEmployer(
        formData.companyName,
        formData.contactPerson,
        formData.contactEmail,
        fullMobile,
        formData.password
      );

      console.log("response", response);
      console.log("Country Code:", formData.countryCode);
      console.log("Mobile:", formData.mobile);
      console.log("Full Mobile:", fullMobile);

      if (response.status === 201) {
        setSuccess(true);
        toast.success("Registration successful!");
        setFormData({
          companyName: "",
          contactPerson: "",
          contactEmail: "",
          mobile: "",
          countryCode: "",
          password: "",
          agreeToTerms: false,
        });
        setTimeout(() => {
          window.location.href = "/employer-login";
        }, 2000);
      } else {
        toast.error(response.response.data.message);
      }
    } catch (err) {
      console.log("--->", err);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        /* Custom styling for phone input to match dark theme */
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

        /* Scrollbar styling for country list */
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

        /* Disabled state */
        .phone-input-container .form-control:disabled {
          background-color: rgba(255, 255, 255, 0.05) !important;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .phone-input-container .flag-dropdown.disabled {
          cursor: not-allowed;
          opacity: 0.6;
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
                      <div className="row align-items-center">
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
                        {/*end col*/}
                        <div className="col-lg-6">
                          <div className="auth-content card-body p-5 text-white">
                            <div className="w-100">
                              <div className="text-center">
                                <h5>Let's Get Started</h5>
                                <p className="text-white-70">
                                  Sign Up and get access to all the features of
                                  JobsStorm
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

                              <form
                                onSubmit={handleSubmit}
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
                                  />
                                </div>
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
                                  {formData.countryCode && formData.mobile && (
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
                                    {loading ? "Signing Up..." : "Sign Up"}
                                  </button>
                                </div>
                              </form>
                              <div className="mt-3 text-center">
                                <p className="mb-0">
                                  Already a member ?{" "}
                                  <a
                                    href="/employer-login"
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

export default EmployerSignUpPage;
