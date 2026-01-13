import React, { Fragment } from "react";
import "./AboutUs.css";
// Importing the same components used in Homepage for consistency
import AssessmentPromo from "../Home/AssessmentPromo";
import CareerCTA from "../Home/CareerCTA";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const About = () => {
  return (
    <Fragment>
      <div className="about-us-page">
        {/* HERO SECTION */}
        <section className="about-hero">
          <div className="container-medium">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="stars">
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <span className="ms-2 text-white-50">
                    Trusted by 4000+ companies
                  </span>
                </div>

                <h1>
                  Your Global <br />
                  <span className="text-purple">Career Partner</span>
                </h1>

                <p className="lead">
                  JobsStorm is a professionally managed overseas career support
                  platform helping candidates access verified international
                  opportunities.
                </p>

                <div className="avatars-group">
                  <button className="btn-purple-glow me-4">
                    Create Account For Free{" "}
                    <i className="mdi mdi-arrow-right ms-1"></i>
                  </button>

                  <div className="d-flex align-items-center">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="User"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="User"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="User"
                    />
                    <span
                      className="ms-4 text-white-50"
                      style={{ fontSize: "12px" }}
                    >
                      Trusted by <br /> 1000+ Companies
                    </span>
                  </div>
                </div>

                <div className="stats-row">
                  <div className="stat-item">
                    <h3>1000 +</h3>
                    <p>Clients</p>
                  </div>
                  <div className="stat-item border-start ps-4 border-secondary">
                    <h3>15 +</h3>
                    <p>Years</p>
                  </div>
                  <div className="stat-item border-start ps-4 border-secondary">
                    <h3>2000 +</h3>
                    <p>Candidates</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                {/* World Map or abstract graphic placeholder */}
                <div
                  style={{
                    width: "100%",
                    height: "400px",
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")',
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    opacity: 0.1,
                    filter: "invert(1)",
                  }}
                ></div>
              </div>
            </div>

            {/* MISSION BAR */}
            <div className="mission-bar">
              <h4>Defining the Future of Global Career Access</h4>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section className="achievements-section">
          <div className="container-medium">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2>Our Achievements Over The Years!</h2>
                <p>
                  Powerful, self-serve product and growth analytics to help you
                  convert, engage, and retain more users. Trusted by over 4,000
                  startups.
                </p>

                <div className="mb-4">
                  <span className="badge bg-secondary mb-2">History</span>
                  <div
                    style={{
                      height: "4px",
                      width: "50px",
                      background: "#6366f1",
                    }}
                  ></div>
                </div>

                <div className="history-card" style={{ maxWidth: "300px" }}>
                  <h6 className="mb-0">Users</h6>
                  <h3 className="mb-0">140,000</h3>
                  <span className="text-success text-small">
                    <i className="mdi mdi-arrow-up"></i> 12% vs last month
                  </span>

                  <div className="graph-mock">
                    <div className="graph-line"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/* Placeholder for right side visual if needed, currently leaving generous dark space as per design */}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials-section">
          <div className="container-medium">
            <h2>Listen to What Our Client Says!</h2>

            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              loopedSlides={8} /* Increased buffer for stability */
              loopAdditionalSlides={4}
              initialSlide={4}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={
                0
              } /* Handled via CSS margin for better dynamic width stability */
              breakpoints={{
                640: {
                  centeredSlides: true,
                },
                1024: {
                  centeredSlides: true,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className="testimonial-swiper"
            >
              {[
                // Set 1
                {
                  text: "Fantastic platform for global reach. Simplified our recruitment process significantly.",
                  name: "Sarah Jenkins",
                  role: "Talent Acquisition, GlobalTech",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  text: "Aludiah, under the umbrella of Zanalat Pro, has completely transformed our approach to learning and development. Their tailored solutions have not only improved employee engagement but have also driven tangible business results.",
                  name: "David Lee",
                  role: "HR Director, TechWorld Inc.",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  text: "Great service and reliable support. Highly recommended for international hiring.",
                  name: "Michael Chen",
                  role: "CEO, StartUp Hub",
                  image: "https://randomuser.me/api/portraits/men/45.jpg",
                },
                {
                  text: "The best decision we made for our offshore expansion.",
                  name: "Emily Davis",
                  role: "Director, Creative Solutions",
                  image: "https://randomuser.me/api/portraits/women/68.jpg",
                },
                // Set 2
                {
                  text: "Fantastic platform for global reach. Simplified our recruitment process significantly.",
                  name: "Sarah Jenkins",
                  role: "Talent Acquisition, GlobalTech",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  text: "Aludiah, under the umbrella of Zanalat Pro, has completely transformed our approach to learning and development. Their tailored solutions have not only improved employee engagement but have also driven tangible business results.",
                  name: "David Lee",
                  role: "HR Director, TechWorld Inc.",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  text: "Great service and reliable support. Highly recommended for international hiring.",
                  name: "Michael Chen",
                  role: "CEO, StartUp Hub",
                  image: "https://randomuser.me/api/portraits/men/45.jpg",
                },
                {
                  text: "The best decision we made for our offshore expansion.",
                  name: "Emily Davis",
                  role: "Director, Creative Solutions",
                  image: "https://randomuser.me/api/portraits/women/68.jpg",
                },
                // Set 3
                {
                  text: "Fantastic platform for global reach. Simplified our recruitment process significantly.",
                  name: "Sarah Jenkins",
                  role: "Talent Acquisition, GlobalTech",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  text: "Aludiah, under the umbrella of Zanalat Pro, has completely transformed our approach to learning and development. Their tailored solutions have not only improved employee engagement but have also driven tangible business results.",
                  name: "David Lee",
                  role: "HR Director, TechWorld Inc.",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  text: "Great service and reliable support. Highly recommended for international hiring.",
                  name: "Michael Chen",
                  role: "CEO, StartUp Hub",
                  image: "https://randomuser.me/api/portraits/men/45.jpg",
                },
                {
                  text: "The best decision we made for our offshore expansion.",
                  name: "Emily Davis",
                  role: "Director, Creative Solutions",
                  image: "https://randomuser.me/api/portraits/women/68.jpg",
                },
                // Set 4
                {
                  text: "Fantastic platform for global reach. Simplified our recruitment process significantly.",
                  name: "Sarah Jenkins",
                  role: "Talent Acquisition, GlobalTech",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  text: "Aludiah, under the umbrella of Zanalat Pro, has completely transformed our approach to learning and development. Their tailored solutions have not only improved employee engagement but have also driven tangible business results.",
                  name: "David Lee",
                  role: "HR Director, TechWorld Inc.",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  text: "Great service and reliable support. Highly recommended for international hiring.",
                  name: "Michael Chen",
                  role: "CEO, StartUp Hub",
                  image: "https://randomuser.me/api/portraits/men/45.jpg",
                },
                {
                  text: "The best decision we made for our offshore expansion.",
                  name: "Emily Davis",
                  role: "Director, Creative Solutions",
                  image: "https://randomuser.me/api/portraits/women/68.jpg",
                },
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    <div className="testimonial-text-content">
                      <span className="quote-icon">❝</span>
                      <p className="mb-4">{testimonial.text}</p>
                      <h6 className="mb-0">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                    <div
                      className="testimonial-image"
                      style={{
                        backgroundImage: `url("${testimonial.image}")`,
                      }}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* PROMO & CTA - Reusing existing components */}
        <div
          style={{ padding: "0 15px", maxWidth: "1280px", margin: "0 auto" }}
        >
          <AssessmentPromo />
          <CareerCTA />
          <div className="mb-5"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
