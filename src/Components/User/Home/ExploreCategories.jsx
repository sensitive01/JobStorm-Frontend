import React from "react";
import "./ExploreCategories.css";

const categories = [
  {
    icon: "mdi-pencil-ruler",
    title: "Design",
    subtitle: "235 jobs available",
  },
  {
    icon: "mdi-chart-line",
    title: "Sales",
    subtitle: "756 jobs available",
  },
  {
    icon: "mdi-bullhorn-outline",
    title: "Marketing",
    subtitle: "140 jobs available",
    active: true, // Highlighted
  },
  {
    icon: "mdi-finance",
    title: "Finance",
    subtitle: "325 jobs available",
  },
  {
    icon: "mdi-monitor",
    title: "Technology",
    subtitle: "436 jobs available",
  },
  {
    icon: "mdi-code-tags",
    title: "Engineering",
    subtitle: "542 jobs available",
  },
  {
    icon: "mdi-briefcase-outline",
    title: "Business",
    subtitle: "211 jobs available",
  },
  {
    icon: "mdi-account-group-outline",
    title: "Human Resource",
    subtitle: "346 jobs available",
  },
];

const ExploreCategories = () => {
  return (
    <section className="section explore-categories-section">
      <div className="container-medium">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="title fw-bold">
            Explore by <span className="text-purple">category</span>
          </h2>
          <a href="/job-categories" className="show-all-link fw-semibold">
            Show all jobs <i className="mdi mdi-arrow-right ms-1"></i>
          </a>
        </div>

        <div className="categories-grid-wrapper">
          <div className="row g-4">
            {categories.map((cat, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div
                  className={`category-card p-4 h-100 d-flex flex-column justify-content-between ${
                    cat.active ? "active-card" : ""
                  }`}
                >
                  <div className="icon-wrapper mb-4">
                    <i className={`mdi ${cat.icon} fs-2`}></i>
                  </div>
                  <div>
                    <h5 className="cat-title fw-bold mb-2">{cat.title}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="cat-subtitle text-muted">
                        {cat.subtitle}
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
