import React from "react";

const LogoutPage = () => {
  return (
    <>
      {/*start page Loader */}
      {/* <div id="preloader">
        <div id="status">
          <ul>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div> */}
      {/*end page Loader */}
      {/* Begin page */}
      <div>
        <div className="main-content">
          <div className="page-content">
            {/* START SIGN-OUT */}
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
                                src="assets/images/auth/sign-in.png"
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
                              <div className="text-center mb-4">
                                <h5>You are Logged Out</h5>
                                <p className="text-white-70">
                                  Thank you for using JobsStorm
                                </p>
                              </div>
                              <a
                                href="sign-in.html"
                                className="btn btn-white btn-hover w-100"
                              >
                                Sign In
                              </a>
                              <div className="mt-3 text-center">
                                <p className="mb-0">
                                  Don't have an account ?{" "}
                                  <a
                                    href="sign-up.html"
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
            {/* END SIGN-OUT */}
          </div>
          {/* End Page-content */}
        </div>
        {/* end main content*/}
      </div>
      {/* END layout-wrapper */}
      {/* Style switcher */}
      <div
        id="style-switcher"
        onclick="toggleSwitcher()"
        style={{ left: "-165px" }}
      >
        <div>
          <h6>Select your color</h6>
          <ul className="pattern list-unstyled mb-0">
            <li>
              <a
                className="color-list color1"
                href="javascript: void(0);"
                onclick="setColorGreen()"
              />
            </li>
            <li>
              <a
                className="color-list color2"
                href="javascript: void(0);"
                onclick="setColor('blue')"
              />
            </li>
            <li>
              <a
                className="color-list color3"
                href="javascript: void(0);"
                onclick="setColor('green')"
              />
            </li>
          </ul>
          <div className="mt-3">
            <h6>Light/dark Layout</h6>
            <div className="text-center mt-3">
              {/* light-dark mode */}
              <a
                href="javascript: void(0);"
                id="mode"
                className="mode-btn text-white rounded-3"
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
      <button onclick="topFunction()" id="back-to-top">
        <i className="mdi mdi-arrow-up" />
      </button>
      {/*end back-to-top*/}
      {/* JAVASCRIPT */}
      {/* Switcher Js */}
    </>
  );
};

export default LogoutPage;
