import React from "react";
import SearchBar from "./SearchBar";
import NewAndRandomJobs from "./NewAndRandomJobs";
import BrowseCatagories from "./BrowseCatagories";
import Testimonials from "./Testimonials";
import BlogsPage from "./BlogsPage";

const Homepage = () => {
  return (
    <div className="main-content">
      <div className="page-content">
        {/* START HOME */}
        <section className="bg-home" id="home">
          <div className="bg-overlay" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center text-white mb-5">
                  <h1 className="display-5 fw-semibold mb-3">
                    One Platform. Endless Opportunities.
                  </h1>
                  <p className="fs-17">
                    Find your next role, craft a standout resume, and track your job applications—all in one place
                  </p>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <SearchBar />

            {/*end row*/}
          </div>
          {/*end container*/}
        </section>
        {/* End Home */}
        {/* START SHAPE */}
        <div className="position-relative">
          <div className="shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={1440}
              height={150}
              preserveAspectRatio="none"
              viewBox="0 0 1440 220"
            >
              <g mask='url("#SvgjsMask1004")' fill="none">
                <path
                  d="M 0,213 C 288,186.4 1152,106.6 1440,80L1440 250L0 250z"
                  fill="rgba(255, 255, 255, 1)"
                />
              </g>
              <defs>
                <mask id="SvgjsMask1004">
                  <rect width={1440} height={250} fill="#ffffff" />
                </mask>
              </defs>
            </svg>
          </div>
        </div>
        {/* END SHAPE */}
        {/* START CATEGORY */}
        <BrowseCatagories />
        {/* END CATEGORY */}
        <img src="image.jpg" width="100%" />
        {/* START JOB-LIST */}
        <NewAndRandomJobs />
        {/* END JOB-LIST */}
        {/* START PROCESS */}
        <section className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title me-5">
                  <h3 className="title">How It Work</h3>
                  <p className="text-muted">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                  <div
                    className="process-menu nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <div className="d-flex">
                        <div className="number flex-shrink-0">1</div>
                        <div className="flex-grow-1 text-start ms-3">
                          <h5 className="fs-18">Register an account</h5>
                          <p className="text-muted mb-0">
                            Due to its widespread use as filler text for
                            layouts, non-readability is of great importance.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <div className="d-flex">
                        <div className="number flex-shrink-0">2</div>
                        <div className="flex-grow-1 text-start ms-3">
                          <h5 className="fs-18">Find your job</h5>
                          <p className="text-muted mb-0">
                            There are many variations of passages of
                            avaibookmark-label, but the majority alteration in
                            some form.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <div className=" d-flex">
                        <div className="number flex-shrink-0">3</div>
                        <div className="flex-grow-1 text-start ms-3">
                          <h5 className="fs-18">Apply for job</h5>
                          <p className="text-muted mb-0">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-6">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <img
                      src="assets/images/process-01.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <img
                      src="assets/images/process-02.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <img
                      src="assets/images/process-03.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            {/*end row*/}
          </div>
          {/*end container*/}
        </section>
        {/* END PROCESS */}
        {/*START CTA*/}
        <section className="section bg-primary">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="text-center">
                  <h2 className="text-white mb-4">
                    Browse Our{" "}
                    <span className="text-warning fw-bold">5,000+</span> Latest
                    Jobs
                  </h2>
                  <hr className="border-white" />
                  <p className="text-white">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                  <div className="mt-4 pt-2">
                    <a
                      href="/job-list"
                      className="btn btn-white btn-hover"
                    >
                      Started Now{" "}
                      <i className="uil uil-rocket align-middle ms-1" />
                    </a>
                  </div>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </section>
        {/*END CTA*/}
        {/* START TESTIMONIAL */}
        <Testimonials />
        {/* END TESTIMONIAL */}
        {/* START BLOG */}
        <BlogsPage/>
        {/* <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-5">
                  <h3 className="title mb-3">Quick Career Tips</h3>
                  <p className="text-muted">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                </div>
              </div>
          
            </div>
          
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="blog-box card p-2 mt-3">
                  <div className="blog-img position-relative overflow-hidden">
                    <img
                      src="assets/images/blog/img-01.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="bg-overlay" />
                    <div className="author">
                      <p className=" mb-0">
                        <i className="mdi mdi-account text-light" />{" "}
                        <a
                          href="javascript:void(0)"
                          className="text-light user"
                        >
                          Dirio Walls
                        </a>
                      </p>
                      <p className="text-light mb-0 date">
                        <i className="mdi mdi-calendar-check" /> 01 July, 2021
                      </p>
                    </div>
                    <div className="likes">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-white">
                            <i className="mdi mdi-heart-outline me-1" /> 33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-white">
                            <i className="mdi mdi-comment-outline me-1" /> 08
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a href="#" className="primary-link">
                      <h5 className="fs-17">How apps is the IT world ?</h5>
                    </a>
                    <p className="text-muted">
                      The final text is not yet avaibookmark-label. Dummy texts
                      have Internet tend been in use by typesetters since
                      century.
                    </p>
                    <a href="#" className="form-text text-primary">
                      Read more{" "}
                      <i className="mdi mdi-chevron-right align-middle" />
                    </a>
                  </div>
                </div>
           
              </div>
        
              <div className="col-lg-4 col-md-6">
                <div className="blog-box card p-2 mt-3">
                  <div className="blog-img position-relative overflow-hidden">
                    <img
                      src="assets/images/blog/img-02.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="bg-overlay" />
                    <div className="author">
                      <p className=" mb-0">
                        <i className="mdi mdi-account text-light" />{" "}
                        <a
                          href="javascript:void(0)"
                          className="text-light user"
                        >
                          Brandon Carney
                        </a>
                      </p>
                      <p className="text-light mb-0 date">
                        <i className="mdi mdi-calendar-check" /> 25 June, 2021
                      </p>
                    </div>
                    <div className="likes">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-white">
                            <i className="mdi mdi-heart-outline me-1" /> 44
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-white">
                            <i className="mdi mdi-comment-outline me-1" /> 25
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a href="#" className="primary-link">
                      <h5 className="fs-17">
                        Smartest Applications for Business ?
                      </h5>
                    </a>
                    <p className="text-muted">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance: human perception.
                    </p>
                    <a href="#" className="form-text text-primary">
                      Read more{" "}
                      <i className="mdi mdi-chevron-right align-middle" />
                    </a>
                  </div>
                </div>
        
              </div>
        
              <div className="col-lg-4 col-md-6">
                <div className="blog-box card p-2 mt-3">
                  <div className="blog-img position-relative overflow-hidden">
                    <img
                      src="assets/images/blog/img-03.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="bg-overlay" />
                    <div className="author">
                      <p className=" mb-0">
                        <i className="mdi mdi-account text-light" />{" "}
                        <a
                          href="javascript:void(0)"
                          className="text-light user"
                        >
                          William Mooneyhan
                        </a>
                      </p>
                      <p className="text-light mb-0 date">
                        <i className="mdi mdi-calendar-check" /> 16 March, 2021
                      </p>
                    </div>
                    <div className="likes">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-white">
                            <i className="mdi mdi-heart-outline me-1" /> 68
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-white">
                            <i className="mdi mdi-comment-outline me-1" /> 20
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a href="#" className="primary-link">
                      <h5 className="fs-17">
                        Design your apps in your own way ?
                      </h5>
                    </a>
                    <p className="text-muted">
                      One disadvantage of Lorum Ipsum is that in Latin certain
                      letters appear more frequently than others.
                    </p>
                    <a href="#" className="form-text text-primary">
                      Read more{" "}
                      <i className="mdi mdi-chevron-right align-middle" />
                    </a>
                  </div>
                </div>
        
              </div>
          
            </div>
     
          </div>
    
        </section> */}
        {/* END BLOG */}
        {/* START CLIENT */}
        <div className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="text-center p-3">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Woocommerce"
                  >
                    <img
                      src="assets/images/logo/logo-01.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-2">
                <div className="text-center p-3">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Envato"
                  >
                    <img
                      src="assets/images/logo/logo-02.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-2">
                <div className="text-center p-3">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Magento"
                  >
                    <img
                      src="assets/images/logo/logo-03.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-2">
                <div className="text-center p-3">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Wordpress"
                  >
                    <img
                      src="assets/images/logo/logo-04.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-2">
                <div className="text-center p-3">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Generic"
                  >
                    <img
                      src="assets/images/logo/logo-05.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="text-center p-3">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Reveal"
                  >
                    <img
                      src="assets/images/logo/logo-06.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </div>
        {/* END CLIENT */}
      </div>
    </div>
  );
};

export default Homepage;
