import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById } from "../../../api/service/axiosService";
import profileImage from "../../../../public/img-02.jpg";
import blogImage from "../../../../public/img-08.jpg";
import "./Blogs.css";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        const response = await getBlogById(id);
        if (response.data && response.data.success) {
          setBlog(response.data.blog);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("An error occurred while fetching the blog");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="section mt-5 pt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="section mt-5 pt-5 text-center">
        <div className="alert alert-danger">{error || "Blog not found"}</div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/blogs-pages")}
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="blogs-page-wrap">
      <div className="container">
        <div className="blog-details-wrap animate__animated animate__fadeIn">
          <div className="blog-article-container">
            {/* Main Content Column */}
            <div className="blog-main-content">
              <header className="blog-details-header">
                <span className="latest-badge">
                  {blog.category || "Perspective"}
                </span>
                <h1>{blog.title}</h1>

                <div className="author-premium-box">
                  <img
                    src={blog.authorImage || profileImage}
                    alt={blog.author}
                    className="js-author-avatar"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = profileImage;
                    }}
                  />
                  <div>
                    <span className="author-name-text d-block">
                      {blog.author || "JobStorm Associate"}
                    </span>
                    <span className="publish-date-v2">
                      {formatDate(blog.createdAt)} •{" "}
                      {blog.readingTime || "5 min"} read
                    </span>
                  </div>
                </div>
              </header>

              <div className="blog-details-feature-img">
                <img
                  src={blog.image || blogImage}
                  alt={blog.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = blogImage;
                  }}
                />
              </div>

              <div className="blog-content-v2">
                {blog.description.split("\n").map((para, index) => (
                  <p key={index}>{para}</p>
                ))}

                {blog.content && (
                  <div
                    className="mt-4"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                )}
              </div>

              <div className="share-strip">
                <button
                  className="back-v2-btn btn-link p-0 border-0 bg-transparent"
                  onClick={() => navigate("/blogs-pages")}
                >
                  <i className="mdi mdi-arrow-left"></i> Back to all articles
                </button>
                <div className="d-flex gap-3">
                  <i
                    className="mdi mdi-twitter text-muted fs-18 pointer"
                    title="Twitter"
                  ></i>
                  <i
                    className="mdi mdi-linkedin text-muted fs-18 pointer"
                    title="LinkedIn"
                  ></i>
                </div>
              </div>
            </div>

            {/* Sidebar Space / Right Column */}
            <aside className="blog-sidebar d-none d-lg-block p-5 bg-light h-100">
              <div className="sticky-top" style={{ top: "100px" }}>
                <h6 className="fw-bold mb-4 text-uppercase small">
                  About the Author
                </h6>
                <div className="mb-4">
                  <p className="text-muted small">
                    Experts at JobStorm bringing you the latest in workforce
                    trends and recruitment strategies.
                  </p>
                </div>
                <hr className="my-4" />
                <h6 className="fw-bold mb-3 text-uppercase small">
                  Stay Updated
                </h6>
                <p className="text-muted small mb-4">
                  Subscribe to our newsletter for weekly career insights.
                </p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary btn-sm">Join</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
