import React from 'react'

const PostJob = () => {
  return (
    <div><div className="main-content">
  <div className="page-content">
    {/* Start home */}
    <section className="page-title-box">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center text-white">
              <h3 className="mb-4">Manage Job Post</h3>
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
                      <a href="javascript:void(0)">Manage Jobs</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {" "}
                      Manage Job Post{" "}
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
    {/* START JOBS-POST-EDIT */}
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="primary-bg-subtle p-3">
              <h5 className="mb-0 fs-17">Post a New Job!</h5>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <form action="#" className="job-post-form shadow mt-4">
          <div className="job-post-content box-shadow-md rounded-3 p-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-4">
                  <label htmlFor="jobtitle" className="form-label">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobtitle"
                    placeholder="Title"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-12">
                <div className="mb-4">
                  <label htmlFor="jobdescription" className="form-label">
                    Job Description
                  </label>
                  <textarea
                    className="form-control"
                    id="jobdescription"
                    rows={3}
                    placeholder="Enter Job Description"
                    defaultValue={""}
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-6">
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-6">
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-6">
                <div className="mb-4">
                  <label
                    htmlFor="choices-single-categories"
                    className="form-label"
                  >
                    Categories
                  </label>
                  <select
                    className="form-select"
                    data-trigger=""
                    name="choices-single-categories"
                    id="choices-single-categories"
                    aria-label="Default select example"
                  >
                    <option value="ne">Digital &amp; Creative</option>
                    <option value="df">Retail</option>
                    <option value="od">Management</option>
                    <option value="rd">Human Resources</option>
                  </select>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-6">
                <div className="mb-4">
                  <label htmlFor="jobtype" className="form-label">
                    Job Type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobtype"
                    placeholder="Job type"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-6">
                <div className="mb-4">
                  <label htmlFor="designation" className="form-label">
                    Designation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="designation"
                    placeholder="Designation"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-6">
                <div className="mb-4">
                  <label htmlFor="salary" className="form-label">
                    Salary($)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="salary"
                    placeholder="Salary"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-6">
                <div className="mb-4">
                  <label htmlFor="qualification" className="form-label">
                    Qualification
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="qualification"
                    placeholder="Qualification"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-6">
                <div className="mb-4">
                  <label htmlFor="skills" className="form-label">
                    Job Skills{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="skills"
                    placeholder="Job skills"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-12">
                <div className="mb-4">
                  <label htmlFor="lastdate" className="form-label">
                    Application Deadline Date
                  </label>
                  <input type="date" className="form-control" id="lastdate" />
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-6">
                <div className="mb-4">
                  <label
                    htmlFor="choices-single-location"
                    className="form-label"
                  >
                    Country
                  </label>
                  <select
                    className="form-select"
                    data-trigger=""
                    name="choices-single-location"
                    id="choices-single-location"
                    aria-label="Default select example"
                  >
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                  </select>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-3">
                <div className="mb-4">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="City"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-3">
                <div className="mb-4">
                  <label htmlFor="zipcode" className="form-label">
                    Zipcode
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipcode"
                    placeholder="Zipcode"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-12">
                <div className="text-end">
                  <a href="javascript:void(0)" className="btn btn-success">
                    Back
                  </a>
                  <a href="javascript:void(0)" className="btn btn-primary">
                    Post Now <i className="mdi mdi-send" />
                  </a>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end job-post-content*/}
        </form>
      </div>
      {/*end container*/}
    </section>
    {/* END JOBS-POST-EDIT */}
  </div>
</div>
</div>
  )
}

export default PostJob