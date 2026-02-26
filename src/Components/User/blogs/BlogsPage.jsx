import React, { useEffect, useState } from "react";
import { getBlogList } from "../../../api/service/axiosService";
import { useNavigate } from "react-router-dom";
import profileImage from "../../../../public/img-02.jpg";
import blogImage from "../../../../public/img-08.jpg";

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
    <>
      <div className="main-content">
        <div className="page-content pt-5 mt-5">
          {/* START BLOG-PAGE */}
          <section className="section">
            <div className="container">
              <div className="row mb-4">
                <div className="col-lg-12">
                  <div>
                    <h4>All Blog Posts</h4>
                  </div>
                </div>
              </div>

              <div className="row">
                {blogs.map((blog) => (
                  <div className="col-lg-4 col-md-6 mb-5" key={blog._id}>
                    <article className="post position-relative h-100 d-flex flex-column">
                      <div
                        className="post-preview overflow-hidden mb-3 rounded-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleBlogClick(blog._id)}
                      >
                        <img
                          src={blog.image || blogImage}
                          alt={blog.title}
                          className="img-fluid blog-img h-auto w-100 object-fit-cover "
                          style={{
                            maxHeight: "300px",
                            aspectRatio: "16/9",
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = blogImage;
                          }}
                        />
                      </div>
                      <p className="text-muted mb-2">
                        <b>{blog.category}</b> - {formatDate(blog.createdAt)}
                      </p>
                      <h5 className="mb-3">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleBlogClick(blog._id);
                          }}
                          className="primary-link"
                        >
                          {blog.title}
                        </a>
                      </h5>
                      <p className="text-muted">
                        {truncateText(blog.description, 200)}
                      </p>
                      <div className="d-flex align-items-center mt-auto pt-4">
                        <div className="flex-shrink-0">
                          <img
                            src={blog.authorImage || profileImage}
                            alt={blog.author}
                            className="avatar-sm rounded-circle"
                            style={{
                              width: "40px",
                              height: "40px",
                              objectFit: "cover",
                            }}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = profileImage;
                            }}
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="fs-16 mb-0">{blog.author}</h6>
                          <p className="text-muted mb-0">{blog.authorRole}</p>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {blogs.length > 6 && (
                <div className="row">
                  <div className="col-lg-12 mt-5">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination job-pagination mb-0 justify-content-center">
                        <li className="page-item disabled">
                          <a
                            className="page-link"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            tabIndex={-1}
                          >
                            <i className="mdi mdi-chevron-double-left fs-15" />
                          </a>
                        </li>
                        <li className="page-item active">
                          <a
                            className="page-link"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="mdi mdi-chevron-double-right fs-15" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </section>
          {/* END BLOG-PAGE */}
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
