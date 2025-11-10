import React, { useEffect, useState } from 'react'
import { getRandomBlogs } from '../../../api/service/axiosService'

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Default blog images as fallback
    const defaultImages = [
        "assets/images/blog/img-01.jpg",
        "assets/images/blog/img-02.jpg",
        "assets/images/blog/img-03.jpg"
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
                console.error('Error fetching blogs:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Format date to readable format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    // Get valid image URL or use default
    const getImageUrl = (imageUrl, index) => {
        if (imageUrl && (imageUrl.endsWith('.jpg') || imageUrl.endsWith('.png') || imageUrl.endsWith('.jpeg') || imageUrl.endsWith('.webp'))) {
            return imageUrl;
        }
        return defaultImages[index % defaultImages.length];
    };

    // Get valid author image or use placeholder
    const getAuthorImage = (authorImageUrl) => {
        if (authorImageUrl && (authorImageUrl.endsWith('.jpg') || authorImageUrl.endsWith('.png') || authorImageUrl.endsWith('.jpeg') || authorImageUrl.endsWith('.webp'))) {
            return authorImageUrl;
        }
        return null; // Will use icon instead
    };

    return (
        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-5">
                            <h3 className="title mb-3">Latest Blogs</h3>
                            <p className="text-muted">
                                Discover insights, tips, and stories from our community. Stay informed and inspired.
                            </p>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : blogs.length > 0 ? (
                    <div className="row">
                        {blogs.map((blog, index) => (
                            <div className="col-lg-4 col-md-6" key={blog._id}>
                                <div className="blog-box card p-2 mt-3">
                                    <div className="blog-img position-relative overflow-hidden">
                                        <img
                                            src={getImageUrl(blog.image, index)}
                                            alt={blog.title}
                                            className="img-fluid"
                                            style={{ height: '250px', objectFit: 'cover', width: '100%' }}
                                        />
                                        <div className="bg-overlay" />
                                        <div className="author">
                                            <p className="mb-0">
                                                <i className="mdi mdi-account text-light" />{" "}
                                                <a
                                                href="javascript:void(0)"
                                                className="text-light user"
                                                >
                                                {blog.author}
                                            </a>
                                        </p>
                                        <p className="text-light mb-0 date">
                                            <i className="mdi mdi-calendar-check" /> {formatDate(blog.createdAt)}
                                        </p>
                                    </div>
                                    <div className="likes">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item">
                                                <a href="javascript:void(0)" className="text-white">
                                                    <i className="mdi mdi-heart-outline me-1" /> {Math.floor(Math.random() * 50) + 20}
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="javascript:void(0)" className="text-white">
                                                    <i className="mdi mdi-comment-outline me-1" /> {Math.floor(Math.random() * 30) + 5}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <a href="#" className="primary-link">
                                        <h5 className="fs-17">{blog.title}</h5>
                                    </a>
                                    <p className="text-muted">
                                        {blog.description.length > 120
                                            ? `${blog.description.substring(0, 120)}...`
                                            : blog.description}
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a href="#" className="form-text text-primary">
                                            Read more{" "}
                                            <i className="mdi mdi-chevron-right align-middle" />
                                        </a>
                                        {blog.category && (
                                            <span className="badge bg-primary-subtle text-primary">
                                                {blog.category}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            </div>
                ))}
            </div>
            ) : (
            <div className="text-center">
                <p className="text-muted">No blogs available at the moment.</p>
            </div>
                )}

            {/* View All Blogs Button */}
            {blogs.length > 0 && (
                <div className="row">
                    <div className="col-lg-12 text-center mt-4">
                        <a href="/blogs-pages" className="btn btn-primary">
                            View All Blogs <i className="uil uil-arrow-right" />
                        </a>
                    </div>
                </div>
            )}
        </div>
        </section >
    );
}

export default BlogsPage;