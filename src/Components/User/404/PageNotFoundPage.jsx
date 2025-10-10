import React from "react";

const PageNotFoundPage = () => {
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
            {/* START ERROR */}
            <section className="bg-error bg-auth text-dark">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="text-center">
                      <img
                        src="assets/images/404.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="mt-5">
                        {/* <h1 class="fw-bold display-1">404</h1> */}
                        <h4 className="text-uppercase mt-3">
                          Sorry, page not found
                        </h4>
                        <p className="text-muted">
                          It will be as simple as Occidental in fact, it will be
                          Occidental
                        </p>
                        <div className="mt-4">
                          <a
                            className="btn btn-primary waves-effect waves-light"
                            href="index-2.html"
                          >
                            <i className="mdi mdi-home" /> Back to Home
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
            {/* END ERROR */}
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
        <div className="bottom d-none d-md-block">
          <a href="javascript: void(0);" className="settings rounded-end">
            <i className="mdi mdi-cog mdi-spin" />
          </a>
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

export default PageNotFoundPage;
