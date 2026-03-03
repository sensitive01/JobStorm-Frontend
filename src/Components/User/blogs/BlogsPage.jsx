import React, { useEffect, useState } from "react";
import { getBlogList } from "../../../api/service/axiosService";
import { useNavigate } from "react-router-dom";
import profileImage from "../../../../public/img-02.jpg";
import blogImage from "../../../../public/img-08.jpg";
import "./Blogs.css";

const BlogsPage = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getBlogList();

        // Handle the response based on your API structure
        if (response.data && response.data.success) {
          setBlogs(response.data.blogs || []);
        } else {
          setError("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("An error occurred while fetching blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Truncate description to specific length
  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  // Handle blog click
  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  // Removed separate featured blog logic so all blogs use the same layout

  if (loading) {
    return (
      <div className="main-content">
        <div className="page-content">
          <section className="section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-3 text-muted">Loading blogs...</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main-content">
        <div className="page-content">
          <section className="section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="main-content">
        <div className="page-content">
          <section className="section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <div className="alert alert-info" role="alert">
                    No blogs available at the moment.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="blogs-page-wrap">
      {/* Premium Hero Section */}
      <section className="blogs-hero-section">
        <div className="container">
          <div className="blogs-hero-content animate__animated animate__fadeIn">
            <span className="latest-badge">Insights & Updates</span>
            <h1>The JobStorm Blog</h1>
            <p>
              Your destination for career growth, hiring strategies, and the
              latest workspace trends globally.
            </p>
          </div>
        </div>
      </section>

      <section className="section py-5">
        <div className="container">
          {blogs.length > 0 ? (
            <>
              <div className="section-header">
                <h3 className="section-title">
                  Latest Articles ({blogs.length})
                </h3>
              </div>

              <div className="row g-4">
                {blogs.map((blog, index) => (
                  <div
                    className="col-lg-4 col-md-6 animate__animated animate__fadeInUp"
                    key={blog._id}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className="premium-blog-card"
                      onClick={() => handleBlogClick(blog._id)}
                    >
                      <div className="blog-card-img-wrap">
                        <img
                          src={blog.image || blogImage}
                          alt={blog.title}
                          className="blog-card-img"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = blogImage;
                          }}
                        />
                        <div className="blog-card-category">
                          {blog.category || "Article"}
                        </div>
                      </div>
                      <div className="blog-card-body">
                        <h5 className="blog-card-title">{blog.title}</h5>
                        <p className="blog-card-excerpt">
                          {truncateText(blog.description, 90)}
                        </p>

                        <div className="blog-card-footer">
                          <div className="author-chip">
                            <img
                              src={blog.authorImage || profileImage}
                              alt={blog.author}
                              className="js-author-avatar"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = profileImage;
                              }}
                            />
                            <span className="author-name-text">
                              {blog.author || "JobStorm Team"}
                            </span>
                          </div>
                          <div className="read-btn">
                            Read <i className="mdi mdi-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="empty-blogs">
              <div className="empty-icon">
                <i className="mdi mdi-book-open-outline"></i>
              </div>
              <h4 className="fw-bold">No blogs found</h4>
              <p className="text-muted">
                We're currently crafting new insights for you. Please check back
                later.
              </p>
            </div>
          )}

          {/* Pagination */}
          {blogs.length > 12 && (
            <div className="pagination-wrap-blogs text-center mt-5">
              <div className="d-inline-flex gap-2">
                <button className="page-btn-blogs active">1</button>
                <button className="page-btn-blogs">2</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
