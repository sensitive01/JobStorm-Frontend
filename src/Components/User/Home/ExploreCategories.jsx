import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExploreCategories.css";
import { getAllCatergories } from "../../../api/service/axiosService";

const ExploreCategories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCatergories();
        if (response.status === 200) {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  const getIcon = (categoryName) => {
    const name = categoryName.toLowerCase();
    switch (name) {
      case "design":
        return "mdi-pencil-ruler";
      case "sales":
        return "mdi-chart-line";
      case "marketing":
        return "mdi-bullhorn-outline";
      case "finance":
        return "mdi-finance";
      case "technology":
      case "it":
        return "mdi-monitor";
      case "engineering":
        return "mdi-code-tags";
      case "business":
      case "management":
        return "mdi-briefcase-outline";
      case "human resource":
      case "hr":
        return "mdi-account-group-outline";
      case "healthcare":
        return "mdi-hospital-box";
      case "education":
        return "mdi-school";
      case "logistics":
        return "mdi-truck-delivery";
      default:
        return "mdi-shape-outline";
    }
  };

  const handleNext = () => {
    if (startIndex + 8 < categories.length) {
      setStartIndex((prev) => prev + 2);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => Math.max(0, prev - 2));
    }
  };

  const visibleCategories = categories.slice(startIndex, startIndex + 8);

  return (
    <section className="section explore-categories-section">
      <div className="container-medium">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center text-center text-md-start mb-5 gap-3 gap-md-0">
          <h2 className="title fw-bold mb-0">
            Explore by <span className="text-purple">category</span>
          </h2>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
            {categories.length > 8 && (
              <>
                <button
                  className={`btn btn-icon rounded-circle border ${startIndex === 0 ? "text-muted" : "text-purple"}`}
                  onClick={handlePrev}
                  disabled={startIndex === 0}
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="mdi mdi-arrow-left fs-5"></i>
                </button>
                <button
                  className={`btn btn-icon rounded-circle border ${startIndex + 8 >= categories.length ? "text-muted" : "text-purple"}`}
                  onClick={handleNext}
                  disabled={startIndex + 8 >= categories.length}
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="mdi mdi-arrow-right fs-5"></i>
                </button>
              </>
            )}
            <a
              href="/job-categories"
              className="show-all-link fw-semibold ms-3"
            >
              Show all jobs <i className="mdi mdi-arrow-right ms-1"></i>
            </a>
          </div>
        </div>

        <div className="categories-grid-wrapper">
          <div className="row g-4">
            {visibleCategories.map((cat, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                {/* Note: The key should ideally be unique ID, but index is fine for now as list changes are simple slices */}
                <div
                  onClick={() =>
                    navigate("/job-list", { state: { category: cat.category } })
                  }
                  className={`category-card p-4 h-100 d-flex flex-column justify-content-between ${
                    // Optional: keep 'active' logic if backend provides it or we default one, currently none
                    ""
                  }`}
                >
                  <div className="icon-wrapper mb-4">
                    <i className={`mdi ${getIcon(cat.category)} fs-2`}></i>
                  </div>
                  <div>
                    <h5 className="cat-title fw-bold mb-2 text-capitalize">
                      {cat.category}
                    </h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="cat-subtitle text-muted">
                        {cat.count} jobs available
                      </span>
                      <i className="mdi mdi-arrow-right arrow-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
