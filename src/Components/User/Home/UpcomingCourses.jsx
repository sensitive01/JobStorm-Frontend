import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UpcomingCourses.css";
import courseImage from "../../../assets/images/courseimage.jpg";
import courseImage2 from "../../../assets/images/couseImage2.jpg";
import courseImage3 from "../../../assets/images/courseImage3.jpg";

const UpcomingCourses = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="section upcoming-courses-section">
      <div className="container-medium">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h2 className="course-title">
              Our Upcoming <span className="text-purple">Courses</span>
            </h2>
            <p className="course-description text-muted mt-3 mb-4">
              We offer industry-aligned, practical training programs designed to
              help students, freshers, and working professionals build job-ready
              skills and advance their careers in today's competitive market.
            </p>
            <button
              onClick={() => navigate("/candidate-signup")}
              className="btn btn-outline-purple rounded-pill px-4 py-2"
            >
              Register Now
            </button>
          </div>

          {/* Right Side Cards */}
          <div className="col-lg-7">
            <div className="courses-grid">
              {[
                {
                  id: 0,
                  title: "AI in Cyber Security",
                  duration: "6 Months",
                  subtitle: "Self made Curriculum based Learning",
                  image: courseImage,
                },
                {
                  id: 1,
                  title: "SuccessFactor - HRM",
                  duration: "6 Months",
                  subtitle: "Industry Aligned Training",
                  image: courseImage2,
                },
                {
                  id: 2,
                  title: "Data Science",
                  duration: "8 Months",
                  subtitle: "Practical Data Skills",
                  image: courseImage3,
                },
              ].map((course, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={course.id}
                    className={`course-card ${
                      isActive ? "large-card" : "pill-card"
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="course-img"
                    />
                    <div className="card-overlay">
                      <div
                        className={`card-content ${
                          !isActive ? "vertical-text" : ""
                        }`}
                      >
                        <h4 className="card-title">{course.title}</h4>
                        <span className="card-duration">{course.duration}</span>
                        {isActive && (
                          <p className="card-subtitle mt-2">
                            {course.subtitle}
                          </p>
                        )}
                      </div>
                      {isActive && (
                        <div className="card-arrow">
                          <i className="mdi mdi-arrow-top-right"></i>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingCourses;
