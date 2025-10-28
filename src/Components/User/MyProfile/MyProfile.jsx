import React from "react";
import EditFormDataPage from "./EditFormDataPage";
import CandidateOverview from "./CandidateOverview";

const MyProfile = () => {
  return (
    <div>
      <div className="main-content">
        <div className="page-content">
          {/* Start home */}
          <section className="page-title-box">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="text-center text-white">
                    <h3 className="mb-4">My Profile</h3>
                    <div className="page-next">
                      <nav
                        className="d-inline-block"
                        aria-label="breadcrumb text-center"
                      >
                        <ol className="breadcrumb justify-content-center">
                          <li className="breadcrumb-item">
                            <a href="index-2.html">Home</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="javascript:void(0)">My Profile</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            {" "}
                            My Profile{" "}
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </section>
          {/* end home */}
          {/* START SHAPE */}
          <div className="position-relative" style={{ zIndex: 1 }}>
            <div className="shape">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path
                  fill=""
                  fillOpacity={1}
                  d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                />
              </svg>
            </div>
          </div>
          {/* END SHAPE */}
          {/* START PROFILE */}
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card profile-sidebar me-lg-4">
                    <div className="card-body p-4">
                      <div className="text-center pb-4 border-bottom">
                        <img
                          src="assets/images/profile.jpg"
                          alt=""
                          className="avatar-lg img-thumbnail rounded-circle mb-4"
                        />
                        <h5 className="mb-0">Jansh Dickens</h5>
                        <p className="text-muted">Developer</p>
                        <ul className="list-inline d-flex justify-content-center align-items-center ">
                          <li className="list-inline-item text-warning fs-19">
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star-half-full" />
                          </li>
                        </ul>
                        <ul className="candidate-detail-social-menu list-inline mb-0">
                          <li className="list-inline-item">
                            <a
                              href="javascript:void(0)"
                              className="social-link rounded-3 btn-soft-primary"
                            >
                              <i className="uil uil-facebook-f" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="javascript:void(0)"
                              className="social-link rounded-3 btn-soft-info"
                            >
                              <i className="uil uil-twitter-alt" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="javascript:void(0)"
                              className="social-link rounded-3 btn-soft-success"
                            >
                              <i className="uil uil-whatsapp" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="javascript:void(0)"
                              className="social-link rounded-3 btn-soft-danger"
                            >
                              <i className="uil uil-phone-alt" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*end profile*/}
                      <div className="mt-4 border-bottom pb-4">
                        <h5 className="fs-17 fw-bold mb-3">Documents</h5>
                        <ul className="profile-document list-unstyled mb-0">
                          <li>
                            <div className="profile-document-list d-flex align-items-center mt-4 ">
                              <div className="icon flex-shrink-0">
                                <i className="uil uil-file" />
                              </div>
                              <div className="ms-3">
                                <h6 className="fs-16 mb-0">Resume.pdf</h6>
                                <p className="text-muted mb-0">1.25 MB</p>
                              </div>
                              <div className="ms-auto">
                                <a
                                  href="assets/images/dark-logo.html"
                                  download=""
                                  className="fs-20 text-muted"
                                >
                                  <i className="uil uil-import" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="profile-document-list d-flex align-items-center mt-4 ">
                              <div className="icon flex-shrink-0">
                                <i className="uil uil-file" />
                              </div>
                              <div className="ms-3">
                                <h6 className="fs-16 mb-0">Cover-letter.pdf</h6>
                                <p className="text-muted mb-0">1.25 MB</p>
                              </div>
                              <div className="ms-auto">
                                <a
                                  href="assets/images/dark-logo.html"
                                  download="dark-logo"
                                  className="fs-20 text-muted"
                                >
                                  <i className="uil uil-import" />
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/*end document*/}
                      <div className="mt-4">
                        <h5 className="fs-17 fw-bold mb-3">Contacts</h5>
                        <div className="profile-contact">
                          <ul className="list-unstyled mb-0">
                            <li>
                              <div className="d-flex">
                                <label>Email</label>
                                <div>
                                  <p className="text-muted text-break mb-0">
                                    Jansh@gmail.com
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">
                                <label>Phone Number</label>
                                <div>
                                  <p className="text-muted mb-0">
                                    +2 345 678 0000
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">
                                <label>Location</label>
                                <div>
                                  <p className="text-muted mb-0">
                                    New Caledonia
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*end contact-details*/}
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end profile-sidebar*/}
                </div>
                {/*end col*/}
                <div className="col-lg-8">
                  <div className="card profile-content-page mt-4 mt-lg-0">
                    <ul
                      className="profile-content-nav nav nav-pills border-bottom mb-4"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="overview-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#overview"
                          type="button"
                          role="tab"
                          aria-controls="overview"
                          aria-selected="true"
                        >
                          Overview
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#settings"
                          type="button"
                          role="tab"
                          aria-controls="settings"
                          aria-selected="false"
                        >
                          My Jobs
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#settings"
                          type="button"
                          role="tab"
                          aria-controls="settings"
                          aria-selected="false"
                        >
                          Edit Profile
                        </button>
                      </li>
                    </ul>
                    {/*end profile-content-nav*/}
                    <div className="card-body p-4">
                      <div className="tab-content" id="pills-tabContent">
                        <CandidateOverview />
                        <EditFormDataPage />
                        {/*end tab-pane*/}
                      </div>
                      {/*end tab-content*/}
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end profile-content-page*/}
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </section>
          {/* END PROFILE */}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
