import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginCandidate } from "../../../api/service/axiosService";

const UserLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

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

    // Validation
    if (!formData.username || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await loginCandidate(
        formData.username,
        formData.password
      );

      if (response.status === 200) {
        toast.success("Login successful!");

        if (response?.status === 200) {
          localStorage.setItem("token", response?.data.token);
          localStorage.setItem("userId", response?.data.user?._id);
        }

        // Reset form
        setFormData({
          username: "",
          password: "",
          rememberMe: false,
        });

        // Redirect to dashboard or home page
        setTimeout(() => {
          navigate("/");
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
    <div>
      <div className="main-content">
        <div className="page-content">
          {/* START SIGN-IN */}
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
                      {/*end col*/}
                      <div className="col-lg-6">
                        <div className="auth-content card-body p-5 h-100 text-white">
                          <div className="w-100">
                            <div className="text-center mb-4">
                              <h5>Welcome Back !</h5>
                              <p className="text-white-70">
                                Sign in to continue to JobsStorm.
                              </p>
                            </div>
                            <form onSubmit={handleSubmit} className="auth-form">
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
                                    href="/candidate-reset-password"
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
                                  href="/candidate-signup"
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
          {/* END SIGN-IN */}
        </div>
        {/* End Page-content */}
      </div>
      {/* end main content*/}

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
    </div>
  );
};

export default UserLogin;
