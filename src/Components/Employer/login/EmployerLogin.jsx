import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginEmployer } from "../../../api/service/employerService";

const EmployerLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleNavigation = (url) => {
    window.location.href = url;
  };

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await loginEmployer(
        formData.username,
        formData.password
      );

      if (response.status === 200) {
        toast.success("Login successful!");

        if (response?.status === 200) {
          localStorage.setItem("token", response?.data.token);
          localStorage.setItem("userId", response?.data.user?._id);
          localStorage.setItem("role", "employer");
        }

        setFormData({
          username: "",
          password: "",
          rememberMe: false,
        });

        setTimeout(() => {
          handleNavigation("https://employer.jobsstorm.com/dashboard")
        }, 1000);
      } else {
        toast.error(response?.response?.data?.message);
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Invalid credentials. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
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
                      <div className="row g-0">
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
                                alt=""
                                width="100%"
                                className="logo-dark"
                              />
                            </a>
                            <div className="mt-5">
                              <img
                                src="assets/images/auth/sign-in.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="auth-content card-body p-5 h-100 text-white">
                            <div className="w-100">
                              <button
                                type="button"
                                className="close-button"
                                onClick={() => (window.location.href = "/")}
                                aria-label="Close"
                              >
                                ×
                              </button>

                              <div className="text-center mb-4">
                                <h5>Welcome Back !</h5>
                                <p className="text-white-70">
                                  Sign in to continue to JobsStorm.
                                </p>
                              </div>
                              <form
                                onSubmit={handleSubmit}
                                className="auth-form"
                              >
                                <div className="mb-3">
                                  <label
                                    htmlFor="usernameInput"
                                    className="form-label"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="usernameInput"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
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
                                      name="rememberMe"
                                      checked={formData.rememberMe}
                                      onChange={handleChange}
                                      disabled={loading}
                                    />
                                    <a
                                      href="/employer/reset-password"
                                      className="float-end text-white"
                                    >
                                      Forgot Password?
                                    </a>
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      Remember me
                                    </label>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                    disabled={loading}
                                  >
                                    {loading ? "Signing In..." : "Sign In"}
                                  </button>
                                </div>
                              </form>
                              <div className="mt-4 text-center">
                                <p className="mb-0">
                                  Don't have an account ?{" "}
                                  <a
                                    href="/employer-signup"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign Up{" "}
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

      <div id="style-switcher" onClick={() => { }} style={{ left: "-165px" }}>
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

export default EmployerLogin;
