import React from 'react'

const Contact = () => {
  return (
    <div><>
  {/* Hello world */}
  <div className="main-content">
    <div className="page-content">
      {/* Start home */}
      <section className="page-title-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center text-white">
                <h3 className="mb-4">Contact</h3>
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
                        <a href="javascript:void(0)">Contact</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        Contact{" "}
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
      {/* START CONTACT-PAGE */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center mt-5">
            <div className="col-lg-6">
              <div className="section-title mt-4 mt-lg-0">
                <h3 className="title">Get in touch</h3>
                <p className="text-muted">
                  Start working with Jobcy that can provide everything you need
                  to generate awareness, drive traffic, connect.
                </p>
                <form
                  method="post"
                  onsubmit="return validateForm()"
                  className="contact-form mt-4"
                  name="myForm"
                  id="myForm"
                >
                  <span id="error-msg" />
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="emaiol"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="subjectInput" className="form-label">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subjectInput"
                          name="subject"
                          placeholder="Enter your subject"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label htmlFor="meassageInput" className="form-label">
                          Your Message
                        </label>
                        <textarea
                          className="form-control"
                          id="meassageInput"
                          placeholder="Enter your message"
                          name="comments"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                  <div className="text-end">
                    <button
                      type="submit"
                      id="submit"
                      name="submit"
                      className="btn btn-primary"
                    >
                      {" "}
                      Send Message <i className="uil uil-message ms-1" />
                    </button>
                  </div>
                </form>
                {/*end form*/}
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-5 ms-auto order-first order-lg-last">
              <div className="text-center">
                <img
                  src="assets/images/contact.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="mt-4 pt-3">
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-map-marker" />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">
                      2453 Clinton StreetLittle Rock, California, USA
                    </p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-envelope" />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">contactus@Jobcy.com</p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-phone-alt" />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">(+245) 223 1245</p>
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
      {/* START CONTACT-PAGE */}
    </div>
  </div>
</>
</div>
  )
}

export default Contact