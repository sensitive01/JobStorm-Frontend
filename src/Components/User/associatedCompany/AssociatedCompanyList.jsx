import React, { useState, useEffect, useMemo } from "react";
import { getAllJobs } from "../../../api/service/axiosService";
import "./AssociatedCompany.css";

const AssociatedCompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("jobs");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const response = await getAllJobs("", "", "", "");
        if (response.status === 200 && response.data) {
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
                description:
                  job.companyDescription ||
                  `Leading partner in ${job.category || "diverse industries"}, offering various career paths and growth opportunities.`,
              };
            }
            companyMap[name].totalJobs += 1;
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
    } else if (sortBy === "jobs") {
      result.sort((a, b) => b.totalJobs - a.totalJobs);
    }

    return result;
  }, [companies, searchQuery, sortBy]);

  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(
    indexOfFirstCompany,
    indexOfLastCompany,
  );
  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

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
    <div className="companies-page">
      {/* Hero Section */}
      <section className="companies-hero-section">
        <div className="container">
          <div className="companies-hero-content">
            <h1 className="animate__animated animate__fadeInDown">
              Associated Companies
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Partnering with global industry leaders to provide you with the
              best career opportunities. Explore our diverse network of 1,200+
              companies.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Filter Container */}
        <div className="filter-container animate__animated animate__fadeInUp">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="search-input-group">
                <i className="mdi mdi-magnify fs-20"></i>
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
              <div className="selection-widget">
                <select
                  className="form-select custom-select-box"
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option value="jobs">Sort by: Popularity (Jobs)</option>
                  <option value="az">Sort by: Name (A-Z)</option>
                  <option value="za">Sort by: Name (Z-A)</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 text-lg-end">
              <span className="text-muted fw-medium">
                {loading
                  ? "Loading..."
                  : `${filteredCompanies.length} Partners`}
              </span>
            </div>
          </div>
        </div>

        {/* Company Grid */}
        <div className="row g-4">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div
                  className="skeleton-card"
                  style={{ height: "300px", borderRadius: "20px" }}
                ></div>
              </div>
            ))
          ) : currentCompanies.length > 0 ? (
            currentCompanies.map((company, index) => (
              <div
                className="col-lg-4 col-md-6 animate__animated animate__fadeInUp"
                key={index}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="company-card-ultra">
                  <div className="logo-container-rounded">
                    <img src={company.logo} alt={company.companyName} />
                  </div>
                  <h3 className="company-name-new">{company.companyName}</h3>
                  <div className="company-loc-new">
                    <i className="mdi mdi-map-marker-outline"></i>
                    <span>{company.location}</span>
                  </div>
                  <div className="jobs-badge-new">
                    <i className="mdi mdi-briefcase-outline"></i>
                    <span>
                      {company.totalJobs} Active Opening
                      {company.totalJobs !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4 className="fw-bold">No companies found</h4>
              <button
                className="btn btn-primary mt-3 px-4 py-2"
                onClick={() => {
                  setSearchQuery("");
                  setSortBy("jobs");
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-container-new">
            {getPageNumbers().map((number, idx) => (
              <button
                key={idx}
                className={`page-link-rounded ${currentPage === number ? "active" : ""} ${number === "..." ? "disabled" : ""}`}
                onClick={() => typeof number === "number" && paginate(number)}
              >
                {number}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AssociatedCompanyList;
