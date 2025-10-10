import React from 'react'

const Footer = () => {
  return (
    <>
  <div
    className="modal fade"
    id="applyNow"
    tabIndex={-1}
    aria-labelledby="applyNow"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-5">
          <p align="center">
            <img
              src="assets/images/logo-dark.png"
              height={60}
              alt=""
              className="logo-dark"
            />
          </p>
          <hr />
          <div className="text-center mb-4">
            <h5 className="modal-title" id="staticBackdropLabel">
              Apply For This Job
            </h5>
          </div>
          <div className="position-absolute end-0 top-0 p-3">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nameControlInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameControlInput"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailControlInput2" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailControlInput2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="messageControlTextarea" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="messageControlTextarea"
              rows={4}
              placeholder="Enter your message"
              defaultValue={""}
            />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="inputGroupFile01">
              Resume Upload
            </label>
            <input type="file" className="form-control" id="inputGroupFile01" />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Application
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* END APPLY MODAL */}
  {/* End Page-content */}
  {/* START SUBSCRIBE */}
  <section className="bg-subscribe bg-primary">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6">
          <div className="text-center text-lg-start">
            <h4 className="text-white">Get New Jobs Notification!</h4>
            <p className="text-white-50 mb-0">
              Subscribe &amp; get all related jobs notification.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mt-4 mt-lg-0">
            <form className="subscribe-form" action="#">
              <div className="input-group justify-content-center justify-content-lg-end">
                <input
                  type="text"
                  className="form-control border-white"
                  id="subscribe"
                  placeholder="Enter your email"
                />
                <button
                  className="btn btn-white"
                  type="button"
                  id="subscribebtn"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {/*end form*/}
          </div>
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
    </div>
    {/*end container*/}
    <div className="email-img d-none d-lg-block">
      <img src="assets/images/subscribe.png" alt="" className="img-fluid" />
    </div>
  </section>
  {/* END SUBSCRIBE */}
  {/* START FOOTER */}
  <section className="bg-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="footer-item mt-4 mt-lg-0 me-lg-5">
            <a
              className="navbar-brand text-dark fw-bold me-auto"
              href="index-2.html"
            >
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
                <a href="about.html">
                  <i className="mdi mdi-chevron-right" /> About Us
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <i className="mdi mdi-chevron-right" /> Contact Us
                </a>
              </li>
              <li>
                <a href="services.html">
                  <i className="mdi mdi-chevron-right" /> Services
                </a>
              </li>
              <li>
                <a href="blog.html">
                  <i className="mdi mdi-chevron-right" /> Blog
                </a>
              </li>
              <li>
                <a href="team.html">
                  <i className="mdi mdi-chevron-right" /> Team
                </a>
              </li>
              <li>
                <a href="pricing.html">
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
                <a href="job-categories.html">
                  <i className="mdi mdi-chevron-right" /> Browser Categories
                </a>
              </li>
              <li>
                <a href="job-list.html">
                  <i className="mdi mdi-chevron-right" /> Browser Jobs
                </a>
              </li>
              <li>
                <a href="job-details.html">
                  <i className="mdi mdi-chevron-right" /> Job Details
                </a>
              </li>
              <li>
                <a href="bookmark-jobs.html">
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
                <a href="candidate-list.html">
                  <i className="mdi mdi-chevron-right" /> Candidate List
                </a>
              </li>
              <li>
                <a href="candidate-grid.html">
                  <i className="mdi mdi-chevron-right" /> Candidate Grid
                </a>
              </li>
              <li>
                <a href="candidate-details.html">
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
                <a href="contact.html">
                  <i className="mdi mdi-chevron-right" /> Help Center
                </a>
              </li>
              <li>
                <a href="faqs.html">
                  <i className="mdi mdi-chevron-right" /> FAQ'S
                </a>
              </li>
              <li>
                <a href="privacy-policy.html">
                  <i className="mdi mdi-chevron-right" /> Privacy Policy
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
    onclick="toggleSwitcher()"
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
  <button onclick="topFunction()" id="back-to-top">
    <i className="mdi mdi-arrow-up" />
  </button>
  {/*end back-to-top*/}
  {/* end main content*/}
  {/* END layout-wrapper */}
  <br />
  <p align="center">
    Copyright © 2025 JobsStorm. All Rights Reserved. Designed and Developed by{" "}
    <a href="https://sensitive.co.in">Sensitive Technologies</a>.
  </p>
  {/* JAVASCRIPT */}
  {/* Choice Js */}
  {/* Swiper Js */}
  {/* Job-list Init Js */}
  {/* Switcher Js */}
</>
)
}

export default Footer