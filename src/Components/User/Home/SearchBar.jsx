import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJobDataOrCompanyData } from "../../../api/service/axiosService";

const SearchBar = () => {
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showJobSuggestions, setShowJobSuggestions] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // API data
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendingKeywords, setTrendingKeywords] = useState([]);

  // Fetch jobs data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getJobDataOrCompanyData();
        if (response.data && response.data.success) {
          setJobsData(response.data.data);
          // Generate trending keywords after data is loaded
          generateTrendingKeywords(response.data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Generate random trending keywords from job titles (only 3)
  const generateTrendingKeywords = (data) => {
    if (!data || data.length === 0) return;

    // Extract all job titles
    const allJobTitles = data.map(job => job.jobTitle);

    // Remove duplicates
    const uniqueJobTitles = [...new Set(allJobTitles)];

    // Shuffle the array
    const shuffled = uniqueJobTitles.sort(() => 0.5 - Math.random());

    // Get first 3 random job titles
    const randomKeywords = shuffled.slice(0, 3);

    setTrendingKeywords(randomKeywords);
  };

  // Get unique locations from API data
  const getUniqueLocations = () => {
    const locationSet = new Set();
    jobsData.forEach((job) => {
      if (job.location) {
        locationSet.add(job.location);
      }
    });
    return Array.from(locationSet).sort();
  };

  // Get unique categories from API data
  const getUniqueCategories = () => {
    const categorySet = new Set();
    jobsData.forEach((job) => {
      if (job.category) {
        categorySet.add(job.category);
      }
    });
    return Array.from(categorySet).sort();
  };

  // Filter job and company name suggestions
  const getJobSuggestions = () => {
    if (!jobTitle.trim() || jobTitle.length < 2) return [];

    const searchTerm = jobTitle.toLowerCase();
    const suggestions = [];
    const seenValues = new Set();

    jobsData.forEach((job) => {
      // Match job title
      if (job.jobTitle.toLowerCase().includes(searchTerm) && !seenValues.has(job.jobTitle)) {
        suggestions.push({
          type: "job",
          value: job.jobTitle,
          subtitle: job.companyName,
          location: job.location,
          category: job.category,
        });
        seenValues.add(job.jobTitle);
      }

      // Match company name
      if (job.companyName.toLowerCase().includes(searchTerm) && !seenValues.has(job.companyName)) {
        suggestions.push({
          type: "company",
          value: job.companyName,
          subtitle: `Has ${jobsData.filter(j => j.companyName === job.companyName).length} job(s)`,
          location: job.location,
          category: job.category,
        });
        seenValues.add(job.companyName);
      }
    });

    return suggestions.slice(0, 8);
  };

  // Get all unique locations and filter by search
  const allLocations = getUniqueLocations();
  const filteredLocations = allLocations.filter((loc) =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  // Get all unique categories and filter by search
  const allCategories = getUniqueCategories();
  const filteredCategories = allCategories.filter((cat) =>
    cat.toLowerCase().includes(categorySearch.toLowerCase())
  );

  const handleJobSuggestionClick = (suggestion) => {
    setJobTitle(suggestion.value);
    setShowJobSuggestions(false);
  };

  const handleTrendingKeywordClick = (keyword) => {
    setJobTitle(keyword);
    // Optionally scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchData = {
      jobTitle: jobTitle,
      location: selectedLocation,
      category: selectedCategory,
    };

    navigate('/job-list', { state: searchData });
  };

  const jobSuggestions = getJobSuggestions();

  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      <form onSubmit={handleSubmit}>
        <div className="registration-form">
          <div className="row g-0">
            {/* Job Title Input with Suggestions - Only shows Job Titles and Company Names */}
            <div className="col-lg-3">
              <div className="filter-search-form filter-border mt-3 mt-lg-0" style={{ position: "relative" }}>
                <i className="uil uil-briefcase-alt" />
                <input
                  type="search"
                  id="job-title"
                  className="form-control filter-input-box"
                  placeholder="Job, Company name..."
                  value={jobTitle}
                  onChange={(e) => {
                    setJobTitle(e.target.value);
                    if (e.target.value.length >= 2) {
                      setShowJobSuggestions(true);
                    } else {
                      setShowJobSuggestions(false);
                    }
                  }}
                  onFocus={() => {
                    if (jobTitle.length >= 2) {
                      setShowJobSuggestions(true);
                    }
                  }}
                  autoComplete="off"
                />

                {/* Clear button */}
                {jobTitle && (
                  <i
                    className="uil uil-times"
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      fontSize: "18px",
                      color: "#6c757d",
                      zIndex: 10,
                    }}
                    onClick={() => {
                      setJobTitle("");
                      setShowJobSuggestions(false);
                    }}
                  />
                )}

                {/* Job & Company Name Suggestions Dropdown */}
                {showJobSuggestions && jobSuggestions.length > 0 && (
                  <>
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 998,
                        backgroundColor: "transparent",
                      }}
                      onClick={() => setShowJobSuggestions(false)}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 5px)",
                        left: 0,
                        right: 0,
                        backgroundColor: "#fff",
                        border: "1px solid #e0e0e0",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        maxHeight: "300px",
                        overflowY: "auto",
                        zIndex: 1000,
                        borderRadius: "8px",
                      }}
                    >
                      {jobSuggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          style={{
                            padding: "10px 15px",
                            cursor: "pointer",
                            borderBottom: index < jobSuggestions.length - 1 ? "1px solid #f5f5f5" : "none",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f8f9fa";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                          }}
                          onClick={() => handleJobSuggestionClick(suggestion)}
                        >
                          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#2d3748",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}>
                                {suggestion.value}
                              </div>
                              <div style={{
                                fontSize: "12px",
                                color: "#718096",
                                marginTop: "3px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}>
                                {suggestion.subtitle}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Location Dropdown - Shows only locations from API */}
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
                  onClick={() => {
                    setShowLocationDropdown(!showLocationDropdown);
                    setShowJobSuggestions(false);
                    setShowCategoryDropdown(false);
                  }}
                >
                  <span style={{ color: selectedLocation ? "#495057" : "#6c757d" }}>
                    {selectedLocation || "Location"}
                  </span>
                  <i className="uil uil-angle-down" style={{ fontSize: "18px" }} />
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
                        top: "calc(100% + 5px)",
                        left: 0,
                        right: 0,
                        backgroundColor: "#fff",
                        border: "1px solid #e0e0e0",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        maxHeight: "300px",
                        overflowY: "auto",
                        zIndex: 1000,
                        borderRadius: "8px",
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
                          borderRadius: "8px 8px 0 0",
                        }}
                        value={locationSearch}
                        onChange={(e) => setLocationSearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      {filteredLocations.length > 0 ? (
                        filteredLocations.map((location, index) => (
                          <div
                            key={index}
                            style={{
                              padding: "12px 15px",
                              cursor: "pointer",
                              fontSize: "14px",
                              color: "#495057",
                              transition: "background-color 0.2s",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                            onClick={() => {
                              setSelectedLocation(location);
                              setShowLocationDropdown(false);
                              setLocationSearch("");
                            }}
                          >
                            <span>{location}</span>
                          </div>
                        ))
                      ) : (
                        <div style={{ padding: "12px 15px", fontSize: "14px", color: "#6c757d" }}>
                          No locations found
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Category Dropdown - Shows only categories from API */}
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
                  onClick={() => {
                    setShowCategoryDropdown(!showCategoryDropdown);
                    setShowJobSuggestions(false);
                    setShowLocationDropdown(false);
                  }}
                >
                  <span style={{ color: selectedCategory ? "#495057" : "#6c757d" }}>
                    {selectedCategory || "Categories"}
                  </span>
                  <i className="uil uil-angle-down" style={{ fontSize: "18px" }} />
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
                        top: "calc(100% + 5px)",
                        left: 0,
                        right: 0,
                        backgroundColor: "#fff",
                        border: "1px solid #e0e0e0",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        maxHeight: "300px",
                        overflowY: "auto",
                        zIndex: 1000,
                        borderRadius: "8px",
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
                          borderRadius: "8px 8px 0 0",
                        }}
                        value={categorySearch}
                        onChange={(e) => setCategorySearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      {filteredCategories.length > 0 ? (
                        filteredCategories.map((category, index) => (
                          <div
                            key={index}
                            style={{
                              padding: "12px 15px",
                              cursor: "pointer",
                              fontSize: "14px",
                              color: "#495057",
                              transition: "background-color 0.2s",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                            onClick={() => {
                              setSelectedCategory(category);
                              setShowCategoryDropdown(false);
                              setCategorySearch("");
                            }}
                          >
                            <span>{category}</span>
                          </div>
                        ))
                      ) : (
                        <div style={{ padding: "12px 15px", fontSize: "14px", color: "#6c757d" }}>
                          No categories found
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-lg-3">
              <div className="mt-3 mt-lg-0 h-100">
                <button
                  className="btn btn-warning submit-btn w-100 h-100"
                  type="submit"
                >
                  <i className="uil uil-search me-1" /> Find Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Dynamic Trending Keywords - Only 3 */}
      <div className="row">
        <div className="col-lg-12">
          <ul className="treding-keywords list-inline mb-0 text-white-50 mt-4 mt-lg-3 text-center">
            <li className="list-inline-item text-white">
              <i className="mdi mdi-tag-multiple-outline text-warning fs-18" />{" "}
              Trending Keywords:
            </li>
            {trendingKeywords.length > 0 ? (
              trendingKeywords.map((keyword, index) => (
                <li key={index} className="list-inline-item">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleTrendingKeywordClick(keyword);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {keyword}{index < trendingKeywords.length - 1 ? ',' : ''}
                  </a>
                </li>
              ))
            ) : (
              <li className="list-inline-item">
                <span>Loading...</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;