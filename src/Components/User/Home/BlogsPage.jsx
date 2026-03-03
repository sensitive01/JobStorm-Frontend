import React, { useEffect, useState } from "react";
import { getRandomBlogs } from "../../../api/service/axiosService";
import { useNavigate } from "react-router-dom";
import "../blogs/Blogs.css";

const BlogsPage = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Default blog images as fallback
  const defaultImages = [
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&auto=format&fit=crop&q=60",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getRandomBlogs();
        if (response.data && response.data.success) {
          // Limit to 3 blogs for display
          const limitedBlogs = response.data.blogs.slice(0, 3);
          setBlogs(limitedBlogs);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <section className="section bg-light" id="blog">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-5">
              <h3 className="title mb-3 fw-bold">Latest Blogs</h3>
              <p className="text-muted">
                Discover insights, tips, and stories from our community. Stay
                informed and inspired.
              </p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : blogs.length > 0 ? (
          <div className="row g-4">
            {blogs.map((blog, index) => (
              <div className="col-lg-4 col-md-6" key={blog._id}>
                <div
                  className="premium-blog-card h-100"
                  onClick={() => handleBlogClick(blog._id)}
                >
                  <div className="blog-card-img-wrap">
                    <img
                      src={
                        blog.image ||
                        defaultImages[index % defaultImages.length]
                      }
                      alt={blog.title}
                      className="blog-card-img"
                    />
                    <div className="blog-card-category">
                      {blog.category || "General"}
                    </div>
                  </div>
                  <div className="blog-card-body p-4">
                    <div className="blog-card-meta mb-2">
                      <span className="text-muted small">
                        <i className="mdi mdi-calendar-outline me-1"></i>
                        {formatDate(blog.createdAt)}
                      </span>
                    </div>
                    <h5 className="blog-card-title mb-3 fs-18 fw-bold">
                      {blog.title}
                    </h5>
                    <p className="blog-card-excerpt text-muted mb-4">
                      {blog.description.length > 100
                        ? `${blog.description.substring(0, 100)}...`
                        : blog.description}
                    </p>
                    <div className="blog-card-footer mt-auto pt-4 border-top d-flex align-items-center justify-content-between">
                      <div className="read-more-link text-primary fw-medium">
                        Read More <i className="mdi mdi-arrow-right ms-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <p className="text-muted">No blogs available at the moment.</p>
          </div>
        )}

        {/* View All Blogs Button */}
        {blogs.length > 0 && (
          <div className="row">
            <div className="col-lg-12 text-center mt-5">
              <a
                href="/blogs-pages"
                className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
              >
                View All Blogs <i className="uil uil-arrow-right ms-1" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsPage;
