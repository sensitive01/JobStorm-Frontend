import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAllResources,
  getDasboardData,
} from "../../../api/service/axiosService";
import blogImage from "../../../../public/img-08.jpg";

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUserData, setCurrentUserData] = useState(null);

  useEffect(() => {
    fetchResources();
    fetchUserInformation();
  }, []);

  const fetchUserInformation = async () => {
    const candidateId = localStorage.getItem("candidateId");

    // Check if candidateId exists and is not the string "null" before making the API call
    if (!candidateId || candidateId === "null") {
      return;
    }

    try {
      const { data, status } = await getDasboardData(candidateId);
      if (status === 200) {
        setCurrentUserData(data?.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchResources = async () => {
    try {
      setLoading(true);
      const response = await getAllResources();
      if (response.data && response.data.resources) {
        setResources(response.data.resources);
      }
    } catch (error) {
      console.error("Error fetching resources:", error);
    } finally {
      setLoading(false);
    }
  };

  const isUserPremium = currentUserData?.trial || currentUserData?.subscription;

  if (loading) {
    return (
      <React.Fragment>
        <div className="main-content">
          <div className="page-content">
            <section className="section py-5">
              <div className="container text-center pt-5 mt-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="main-content">
        <div className="page-content">
          <section className="section py-5" style={{ minHeight: "80vh" }}>
            <div className="container mt-5 pt-5">
              {/* Header */}
              <div className="row justify-content-center mb-5">
                <div className="col-lg-8 text-center">
                  <h2 className="mb-3">Career Resources</h2>
                  <p className="text-muted">
                    Explore our collection of expert advice, salary guides,
                    interview strategies, and more to accelerate your career
                    growth.
                  </p>
                </div>
              </div>

              {/* Resources Grid */}
              <div className="row g-4">
                {resources.length > 0 ? (
                  resources.map((resource) => (
                    <div className="col-lg-4 col-md-6" key={resource._id}>
                      <div
                        className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden"
                        style={{ transition: "transform 0.3s" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "translateY(-5px)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "translateY(0)")
                        }
                      >
                        <div className="position-relative">
                          <img
                            src={
                              resource.image
                                ? resource.image.replace(/\.pdf$/i, ".jpg")
                                : blogImage
                            }
                            alt={resource.title}
                            className="card-img-top object-fit-cover"
                            style={{ height: "200px" }}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = blogImage;
                            }}
                          />
                          <span className="position-absolute top-0 end-0 m-3 badge bg-primary">
                            {resource.category}
                          </span>
                        </div>
                        <div className="card-body d-flex flex-col flex-column">
                          <h5 className="card-title fw-bold mb-3 line-clamp-2">
                            {resource.title}
                          </h5>
                          <p
                            className="card-text text-muted mb-4 line-clamp-3"
                            style={{ fontSize: "14px", flexGrow: 1 }}
                          >
                            {resource.description}
                          </p>
                          <div className="mt-auto">
                            {isUserPremium ? (
                              <a
                                href={resource.link || "#"}
                                target={resource.link ? "_blank" : "_self"}
                                rel="noreferrer"
                                className="btn btn-outline-primary w-100 rounded-pill"
                              >
                                View Resource{" "}
                                <i className="mdi mdi-arrow-right ms-1"></i>
                              </a>
                            ) : (
                              <button
                                className="btn btn-secondary w-100 rounded-pill"
                                style={{ cursor: "not-allowed" }}
                                disabled
                              >
                                Unlock with Premium{" "}
                                <i className="mdi mdi-lock ms-1"></i>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center text-muted py-5">
                    <h5>No resources available at the moment.</h5>
                    <p>Please check back later.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResourcesPage;
