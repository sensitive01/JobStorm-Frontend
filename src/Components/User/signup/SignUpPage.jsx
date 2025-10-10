import React, { useState } from "react";
import Loader from "../../Loader/Loader";
import { registerCandidate } from "../../../api/service/axiosService";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validation
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.mobile
    ) {
      setError("Please fill in all fields");
      return;
    }

    // if (!formData.agreeToTerms) {
    //   setError("Please agree to the terms and conditions");
    //   return;
    // }

    setLoading(true);

    try {
      const response = await registerCandidate(
        formData.username,
        formData.email,
        formData.password,
        formData.mobile
      );
      console.log("response",response)
      if (response.status === 201) {
        setSuccess(true);
        setFormData({
          username: "",
          email: "",
          password: "",
          mobile: "",
          agreeToTerms: false,
        });
        setTimeout(() => {
          window.location.href = "/candidate-login";
        }, 2000);
      }else{
        toast.error(response.response.data.message)
      }
    } catch (err) {
      console.log("--->",err);
      setError(err.response || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="mobileInput"
                                    className="form-label"
                                  >
                                    Mobile
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="mobileInput"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Enter your mobile number"
                                    disabled={loading}
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
