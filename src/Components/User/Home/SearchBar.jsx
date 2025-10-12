import React, { useState } from "react";

const SearchBar = () => {
  const [locationSearch, setLocationSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const locations = [
    // Europe
    "United Kingdom",
    "Ireland",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Norway",
    "Austria",
    "Poland",
    "Luxembourg",
    "Sweden",
    "Hungary",

    // Asia / Oceania
    "India",
    "Malaysia",
    "Singapore",
    "Hong Kong",
    "Australia",
    "New Zealand",
  ];

  const categories = ["Accounting", "IT & Software", "Marketing", "Banking"];

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(categorySearch.toLowerCase())
  );

  return (
    <div>
      <form action="#">
        <div className="registration-form">
          <div className="row g-0">
            <div className="col-lg-3">
              <div className="filter-search-form filter-border mt-3 mt-lg-0">
                <i className="uil uil-briefcase-alt" />
                <input
                  type="search"
                  id="job-title"
                  className="form-control filter-input-box"
                  placeholder="Job, Company name..."
                />
              </div>
            </div>

            <div className="col-lg-3">
              <div
                className="filter-search-form filter-border mt-3 mt-lg-0"
                style={{ position: "relative" }}
              >
                <i className="uil uil-map-marker" />
                <div
                  className="form-control filter-input-box"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                >
                  <span
                    style={{ color: selectedLocation ? "#495057" : "#6c757d" }}
                  >
                    {selectedLocation || "Location"}
                  </span>
                  <i
                    className="uil uil-angle-down"
                    style={{ fontSize: "18px" }}
                  />
                </div>

                {showLocationDropdown && (
                  <>
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 998,
                      }}
                      onClick={() => setShowLocationDropdown(false)}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 10px)",
                        left: 0,
                        right: 0,
                        backgroundColor: "#fff",
                        border: "1px solid #e0e0e0",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        maxHeight: "300px",
                        overflowY: "auto",
                        zIndex: 999,
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Search location..."
                        style={{
                          width: "100%",
                          padding: "12px 15px",
                          border: "none",
                          borderBottom: "1px solid #e0e0e0",
                          outline: "none",
                          fontSize: "14px",
                          color: "#495057",
                        }}
                        value={locationSearch}
                        onChange={(e) => setLocationSearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      {filteredLocations.map((location, index) => (
                        <div
                          key={index}
                          style={{
                            padding: "12px 15px",
                            cursor: "pointer",
                            fontSize: "14px",
                            color: "#495057",
                            transition: "background-color 0.2s",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#f8f9fa")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "transparent")
                          }
                          onClick={() => {
                            setSelectedLocation(location);
                            setShowLocationDropdown(false);
                            setLocationSearch("");
                          }}
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-3">
              <div
                className="filter-search-form filter-border mt-3 mt-lg-0"
                style={{ position: "relative" }}
              >
                <i className="uil uil-clipboard-notes" />
                <div
                  className="form-control filter-input-box"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                >
                  <span
                    style={{ color: selectedCategory ? "#495057" : "#6c757d" }}
                  >
                    {selectedCategory || "Categories"}
                  </span>
                  <i
                    className="uil uil-angle-down"
                    style={{ fontSize: "18px" }}
                  />
                </div>

                {showCategoryDropdown && (
                  <>
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 998,
                      }}
                      onClick={() => setShowCategoryDropdown(false)}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 10px)",
                        left: 0,
                        right: 0,
                        backgroundColor: "#fff",
                        border: "1px solid #e0e0e0",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        maxHeight: "300px",
                        overflowY: "auto",
                        zIndex: 999,
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Search category..."
                        style={{
                          width: "100%",
                          padding: "12px 15px",
                          border: "none",
                          borderBottom: "1px solid #e0e0e0",
                          outline: "none",
                          fontSize: "14px",
                          color: "#495057",
                        }}
                        value={categorySearch}
                        onChange={(e) => setCategorySearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      {filteredCategories.map((category, index) => (
                        <div
                          key={index}
                          style={{
                            padding: "12px 15px",
                            cursor: "pointer",
                            fontSize: "14px",
                            color: "#495057",
                            transition: "background-color 0.2s",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#f8f9fa")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "transparent")
                          }
                          onClick={() => {
                            setSelectedCategory(category);
                            setShowCategoryDropdown(false);
                            setCategorySearch("");
                          }}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mt-3 mt-lg-0 h-100">
                <button
                  className="btn btn-primary submit-btn w-100 h-100"
                  type="submit"
                >
                  <i className="uil uil-search me-1" /> Find Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
