import React from "react";

const Footer = () => {
  return (
    <>
      {/* START FOOTER */}
      <section className="bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-item mt-4 mt-lg-0 me-lg-5">
                <a className="navbar-brand text-dark fw-bold me-auto" href="#">
                  <img
                    src="assets/images/logo-light.png"
                    height={60}
                    alt=""
                    className="logo-dark"
                  />
                  <img
                    src="assets/images/logo-dark.png"
                    height={60}
                    alt=""
                    className="logo-light"
                  />
                </a>
                <hr />
                <h4 className="text-white mb-4">JobsStorm</h4>
                <p className="text-white-50">
                  At Jobsstorm, we are committed to helping you unlock your full
                  career potential. As a global career partner, we provide
                  personalized support and resources for job seekers and
                  professionals worldwide.
                </p>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-2 col-6">
              <div className="footer-item mt-4 mt-lg-0">
                <p className="fs-16 text-white mb-4">Company</p>
                <hr />
                <ul className="list-unstyled footer-list mb-0">
                  <li>
                    <a href="/about-us">
                      <i className="mdi mdi-chevron-right" /> About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact-us">
                      <i className="mdi mdi-chevron-right" /> Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="mdi mdi-chevron-right" /> Services
                    </a>
                  </li>
                  <li>
                    <a href="/blogs-page">
                      <i className="mdi mdi-chevron-right" /> Blog
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="mdi mdi-chevron-right" /> Team
                    </a>
                  </li>
                  <li>
                    <a href="/price-page">
                      <i className="mdi mdi-chevron-right" /> Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-2 col-6">
              <div className="footer-item mt-4 mt-lg-0">
                <p className="fs-16 text-white mb-4">For Jobs</p>
                <hr />
                <ul className="list-unstyled footer-list mb-0">
                  <li>
                    <a href="#">
                      <i className="mdi mdi-chevron-right" /> Browser Categories
                    </a>
                  </li>
                  <li>
                    <a href="/jobs-list-view">
                      <i className="mdi mdi-chevron-right" /> Browser Jobs
                    </a>
                  </li>
                  <li>
                    <a href="/jobs-list-view">
                      <i className="mdi mdi-chevron-right" /> Job Details
                    </a>
                  </li>
                  <li>
                    <a href="/saved-candidate-page">
                      <i className="mdi mdi-chevron-right" /> Bookmark Jobs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-2 col-6">
              <div className="footer-item mt-4 mt-lg-0">
                <p className="text-white fs-16 mb-4">For Candidates</p>
                <hr />
                <ul className="list-unstyled footer-list mb-0">
                  <li>
                    <a href="/saved-candidate-page">
                      <i className="mdi mdi-chevron-right" /> Candidate List
                    </a>
                  </li>
                  <li>
                    <a href="/saved-candidate-page">
                      <i className="mdi mdi-chevron-right" /> Candidate Grid
                    </a>
                  </li>
                  <li>
                    <a href="/saved-candidate-page">
                      <i className="mdi mdi-chevron-right" /> Candidate Details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-2 col-6">
              <div className="footer-item mt-4 mt-lg-0">
                <p className="fs-16 text-white mb-4">Support</p>
                <hr />
                <ul className="list-unstyled footer-list mb-0">
                  <li>
                    <a href="/contact-us">
                      <i className="mdi mdi-chevron-right" /> Help Center
                    </a>
                  </li>
                  <li>
                    <a href="/faq-pages">
                      <i className="mdi mdi-chevron-right" /> FAQ'S
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy">
                      <i className="mdi mdi-chevron-right" /> Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions">
                      <i className="mdi mdi-chevron-right" /> Terms and
                      Conditions
                    </a>
                  </li>
                </ul>
                <p className="text-white mt-3">Follow Us on:</p>
                <ul className="footer-social-menu list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="uil uil-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="uil uil-linkedin-alt" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="uil uil-google" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="uil uil-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/* END FOOTER */}
      {/* Style switcher */}
      <div
        id="style-switcher"
        onClick={() => window.toggleSwitcher && window.toggleSwitcher()}
        style={{ left: "-165px" }}
      >
        <div>
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
      <button
        onClick={() => window.topFunction && window.topFunction()}
        id="back-to-top"
      >
        <i className="mdi mdi-arrow-up" />
      </button>
      {/*end back-to-top*/}
      {/* end main content*/}
      {/* END layout-wrapper */}
      <br />
      <p align="center">
        Copyright © 2025 JobsStorm. All Rights Reserved. Designed and Developed
        by <a href="https://sensitive.co.in">Sensitive Technologies</a>.
      </p>
      {/* JAVASCRIPT */}
      {/* Choice Js */}
      {/* Swiper Js */}
      {/* Job-list Init Js */}
      {/* Switcher Js */}
    </>
  );
};

export default Footer;
