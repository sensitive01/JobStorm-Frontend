import React from "react";
import "./UpcomingCourses.css";
import courseImage from "../../../assets/images/courseimage.jpg";
import courseImage2 from "../../../assets/images/couseImage2.jpg";
import courseImage3 from "../../../assets/images/courseImage3.jpg";

const UpcomingCourses = () => {
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
            <a
              href="#"
              className="btn btn-outline-purple rounded-pill px-4 py-2"
            >
              Register Now
            </a>
          </div>

          {/* Right Side Cards */}
          <div className="col-lg-7">
            <div className="courses-grid">
              {/* Main Large Card */}
              <div className="course-card large-card">
                <img
                  src={courseImage}
                  alt="AI in Cyber Security"
                  className="course-img"
                />
                <div className="card-overlay">
                  <div className="card-content">
                    <h4 className="card-title">AI in Cyber Security</h4>
                    <span className="card-duration">6 Months</span>
                    <p className="card-subtitle mt-2">
                      Self made Curriculum based Learning
                    </p>
                  </div>
                  <div className="card-arrow">
                    <i className="mdi mdi-arrow-top-right"></i>
                  </div>
                </div>
              </div>

              {/* Vertical Pill Card 1 */}
              <div className="course-card pill-card">
                <img
                  src={courseImage2}
                  alt="SuccessFactor - HRM"
                  className="course-img"
                />
                <div className="card-overlay">
                  <div className="card-content vertical-text">
                    <h5 className="card-title">SuccessFactor - HRM</h5>
                    <span className="card-duration">6 Months</span>
                  </div>
                </div>
              </div>

              {/* Vertical Pill Card 2 */}
              <div className="course-card pill-card">
                <img
                  src={courseImage3}
                  alt="Data Science"
                  className="course-img"
                />
                <div className="card-overlay">
                  <div className="card-content vertical-text">
                    <h5 className="card-title">Data Science</h5>
                    <span className="card-duration">8 Months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingCourses;
