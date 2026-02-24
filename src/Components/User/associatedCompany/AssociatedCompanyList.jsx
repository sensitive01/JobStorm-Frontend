import React, { useState, useEffect, useMemo } from "react";
import { getAllJobs } from "../../../api/service/axiosService";

const AssociatedCompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage, setCompaniesPerPage] = useState(25);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("df");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const response = await getAllJobs("", "", "", "");
        if (response.status === 200 && response.data) {
          // Group jobs by company name
          const companyMap = {};
          response.data.forEach((job) => {
            const name = job.companyName || "Unknown Company";
            if (!companyMap[name]) {
              companyMap[name] = {
                companyName: name,
                location: job.location || "Global",
                totalJobs: 0,
                logo: `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  name,
                )}&background=random&color=fff&size=128&bold=true`,
              };
            }
            companyMap[name].totalJobs += 1;
            // Capture a real location if first job had none
            if (companyMap[name].location === "Global" && job.location) {
              companyMap[name].location = job.location;
            }
          });
          setCompanies(Object.values(companyMap));
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  const filteredCompanies = useMemo(() => {
    let result = [...companies];

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.companyName.toLowerCase().includes(lowerQuery) ||
          c.location.toLowerCase().includes(lowerQuery),
      );
    }

    if (sortBy === "az") {
      result.sort((a, b) => a.companyName.localeCompare(b.companyName));
    } else if (sortBy === "za") {
      result.sort((a, b) => b.companyName.localeCompare(a.companyName));
    } else if (sortBy === "random") {
      result.sort(() => Math.random() - 0.5);
    } else if (sortBy === "jobs") {
      result.sort((a, b) => b.totalJobs - a.totalJobs);
    }

    return result;
  }, [companies, searchQuery, sortBy]);

  // Pagination calculations
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(
    indexOfFirstCompany,
    indexOfLastCompany,
  );
  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get page numbers to display with professional ellipsis (...) limits
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <>
      <div>
        <div
          className="modal fade"
          id="signupModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-5">
                <div className="position-absolute end-0 top-0 p-3">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="auth-content">
                  <div className="w-100">
                    <div className="text-center mb-4">
                      <h5>Sign Up</h5>
                      <p className="text-muted">
                        Sign Up and get access to all the features of JobsStorm
                      </p>
                    </div>
                    <form action="#" className="auth-form">
                      <div className="mb-3">
                        <label htmlFor="usernameInput" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="usernameInput"
                          placeholder="Enter your username"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="passwordInput" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="emailInput"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="passwordInput"
                          placeholder="Password"
                        />
                      </div>
                      <div className="mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            I agree to the{" "}
                            <a
                              href="javascript:void(0)"
                              className="text-primary form-text text-decoration-underline"
                            >
                              Terms and conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary w-100">
                          Sign Up
                        </button>
                      </div>
                    </form>
                    <div className="mt-3 text-center">
                      <p className="mb-0">
                        Already a member ?{" "}
                        <a
                          href="sign-in.html"
                          className="form-text text-primary text-decoration-underline"
                        >
                          {" "}
                          Sign-in{" "}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*end modal-body*/}
            </div>
            {/*end modal-content*/}
          </div>
          {/*end modal-dialog*/}
        </div>
        {/* END SIGN-UP MODAL */}
        <div className="main-content">
          <div className="page-content">
            {/* Start home */}
            {/* START SHAPE */}
            <div
              className="position-relative"
              style={{ zIndex: 1, marginTop: "80px" }}
            >
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
            {/* START COMPANY-LIST */}
            <section className="section">
              <div className="container">
                <div className="row mb-4">
                  <div className="col-12 text-center text-lg-start">
                    <h2 className="fw-bold mb-2">Associated Companies</h2>
                    <p className="text-muted">
                      Explore our global network of top-tier company partners
                      and job opportunities.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center mb-4">
                  <div className="col-lg-3">
                    <div className="mb-3 mb-lg-0">
                      <h6 className="fs-16 mb-0">
                        {loading
                          ? "Loading results..."
                          : `Showing ${filteredCompanies.length > 0 ? indexOfFirstCompany + 1 : 0} – ${Math.min(indexOfLastCompany, filteredCompanies.length)} of ${filteredCompanies.length} results`}
                      </h6>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-9">
                    <div className="candidate-list-widgets">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="search-box mb-2 mb-lg-0">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search company or location..."
                              value={searchQuery}
                              onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="selection-widget mt-2 mt-lg-0">
                            <select
                              className="form-select"
                              value={sortBy}
                              onChange={(e) => {
                                setSortBy(e.target.value);
                                setCurrentPage(1);
                              }}
                            >
                              <option value="df">Default Sort</option>
                              <option value="az">A to Z</option>
                              <option value="za">Z to A</option>
                              <option value="jobs">Most Jobs</option>
                              <option value="random">Randomize</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="selection-widget mt-2 mt-lg-0">
                            <select
                              className="form-select"
                              value={
                                companiesPerPage === filteredCompanies.length
                                  ? "all"
                                  : companiesPerPage
                              }
                              onChange={(e) => {
                                if (e.target.value === "all") {
                                  setCompaniesPerPage(
                                    filteredCompanies.length || 100,
                                  );
                                } else {
                                  setCompaniesPerPage(Number(e.target.value));
                                }
                                setCurrentPage(1);
                              }}
                            >
                              <option value="12">12 per Page</option>
                              <option value="25">25 per Page</option>
                              <option value="50">50 per Page</option>
                              <option value="all">All</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end candidate-list-widgets*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row">
                  {loading ? (
                    <div className="col-12 text-center py-5">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : currentCompanies.length > 0 ? (
                    currentCompanies.map((company, index) => (
                      <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card text-center mb-4">
                          <div className="card-body px-4 py-5">
                            <img
                              src={company.logo}
                              alt={company.companyName}
                              className="img-fluid rounded-3 mb-3 shadow-sm"
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                                borderRadius: "10px",
                              }}
                            />
                            <div className="mt-4">
                              <a href="#" className="primary-link">
                                <h6 className="fs-18 mb-2">
                                  {company.companyName}
                                </h6>
                              </a>
                              <p className="text-muted mb-4">
                                {company.location}
                              </p>
                              <a href="#" className="btn btn-primary">
                                {company.totalJobs} Opening Job
                                {company.totalJobs !== 1 ? "s" : ""}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12 text-center py-5">
                      <h5>No associated companies found.</h5>
                    </div>
                  )}
                </div>
                {/*end row*/}
                {totalPages > 1 && (
                  <div className="row">
                    <div className="col-lg-12 mt-5">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination job-pagination mb-0 justify-content-center">
                          <li
                            className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                          >
                            <button
                              className="page-link"
                              onClick={() => paginate(currentPage - 1)}
                              disabled={currentPage === 1}
                              style={{
                                border: "none",
                                background: "transparent",
                              }}
                            >
                              <i className="mdi mdi-chevron-double-left fs-15" />
                            </button>
                          </li>

                          {getPageNumbers().map((number, idx) => (
                            <li
                              key={idx}
                              className={`page-item ${currentPage === number ? "active" : ""}`}
                            >
                              {number === "..." ? (
                                <span
                                  className="page-link"
                                  style={{
                                    border: "none",
                                    background: "transparent",
                                    cursor: "default",
                                  }}
                                >
                                  ...
                                </span>
                              ) : (
                                <button
                                  className="page-link"
                                  onClick={() => paginate(number)}
                                  style={
                                    currentPage !== number
                                      ? {
                                          border: "none",
                                          background: "transparent",
                                        }
                                      : {}
                                  }
                                >
                                  {number}
                                </button>
                              )}
                            </li>
                          ))}

                          <li
                            className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                          >
                            <button
                              className="page-link"
                              onClick={() => paginate(currentPage + 1)}
                              disabled={currentPage === totalPages}
                              style={{
                                border: "none",
                                background: "transparent",
                              }}
                            >
                              <i className="mdi mdi-chevron-double-right fs-15" />
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
                {/* end row */}
              </div>
              {/*end container*/}
            </section>
            {/* END COMPANY-LIST */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AssociatedCompanyList;
