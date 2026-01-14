import React, { Fragment } from "react";
import "./AboutUs.css";
// Importing the same components used in Homepage for consistency
import AssessmentPromo from "../Home/AssessmentPromo";
import CareerCTA from "../Home/CareerCTA";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


import missionImage from "../../../assets/images/26.png"
import visionImage from "../../../assets/images/27.jpg"

const About = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll(
      ".vision-section, .mission-section, .timeline-item"
    );
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <Fragment>
      <div className="about-us-page">
        {/* HERO SECTION */}
        <section className="about-hero">
          <div className="container-medium">
            <div className="row align-items-center">
              <div className="col-lg-7">
                {/* Removed Stars Section to match design */}

                <div className="d-flex align-items-center mb-3">
                  <div className="me-2 text-warning">
                    <i className="mdi mdi-star"></i>
                    <i className="mdi mdi-star"></i>
                    <i className="mdi mdi-star"></i>
                    <i className="mdi mdi-star"></i>
                    <i className="mdi mdi-star"></i>
                  </div>
                  <span
                    className="text-white-50"
                    style={{ fontSize: "0.9rem" }}
                  >
                    5.0 (from 200+ reviews)
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
                  <div className="d-flex align-items-center">
                    <button className="btn-purple-glow">
                      Create Account For Free
                    </button>
                    <div className="btn-arrow-circle me-4">
                      <i className="mdi mdi-arrow-right"></i>
                    </div>
                  </div>

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
                  <div className="stat-item">
                    <h3>15 +</h3>
                    <p>Years</p>
                  </div>
                  <div className="stat-item">
                    <h3>2000 +</h3>
                    <p>Candidates</p>
                  </div>
                </div>
              </div>

              {/* Removed col-lg-5 as map is now absolute background of section */}
            </div>

            {/* Removed Mission Bar, now a dedicated section */}
          </div>

          {/* World Map Background */}
          <div className="world-map-bg"></div>
        </section>

        {/* NEW IDENTITY SECTION: VISION & MISSION */}
        <section className="vision-mission-wrapper">
          <div className="container-medium">
            {/* VISION ROW */}
            <div className="vision-section" id="vision-row">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="section-label-pill">
                    <div className="section-icon-circle">
                      <i className="mdi mdi-account-group-outline"></i>
                    </div>
                    OUR VISION
                  </div>

                  <h2 className="vision-heading text-white">
                    Enable Global Careers
                  </h2>
                  <span className="vision-subheading">
                    Through Process & Integrity
                  </span>

                  <p className="text-desc">
                    Build a trusted ecosystem where international career access
                    is structured and outcome-driven — not driven by shortcuts
                    or false promise.
                  </p>

                  <ul className="feature-list">
                    <li>
                      <div className="number-badge">1</div>
                      <span>Enable structured access to global careers</span>
                    </li>
                    <li>
                      <div className="number-badge">2</div>
                      <span>
                        Make international hiring transparent & trustworthy
                      </span>
                    </li>
                    <li>
                      <div className="number-badge">3</div>
                      <span>
                        Build long-term career impact, not short-term promises
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6">
                  {/* Image Card */}
                  <div className="visual-card">
                    <img
                      src={missionImage}
                      alt="Vision Binoculars"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SPACER REMOVED FOR OPTIMIZATION */}

            {/* MISSION ROW */}
            <div className="mission-section" id="mission-row">
              <div className="row align-items-center">
                {/* Fixed: Removed flex-row-reverse to keep Text Left, Image Right consistent for both sections */}

                <div className="col-lg-6">
                  <div className="section-label-pill">
                    <div className="section-icon-circle">
                      <i className="mdi mdi-trending-up"></i>
                    </div>
                    OUR MISSION
                  </div>

                  <h2 className="vision-heading text-white">
                    Create Real International Opportunities
                  </h2>
                  <span className="mission-subheading">
                    Through Verified Processes
                  </span>

                  <p className="text-desc">
                    Support professionals with compliant career services,
                    employer facilitation, and guided execution.
                  </p>

                  <ul className="feature-list">
                    <li>
                      <div className="number-badge">1</div>
                      <span>
                        Provide process-driven overseas career support
                      </span>
                    </li>
                    <li>
                      <div className="number-badge">2</div>
                      <span>
                        Connect candidates with verified global employers
                      </span>
                    </li>
                    <li>
                      <div className="number-badge">3</div>
                      <span>
                        Deliver clarity, compliance & real outcomes at every
                        stage
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6">
                  {/* Image Card for Mission */}
                  <div className="visual-card mission-visual">
                    <img
                      src={visionImage}
                      alt="Mission Target"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE ACHIEVEMENTS SECTION */}
        <section className="achievements-section timeline-wrapper">
          <div className="container-medium">
            <div className="mb-5">
              <h2 className="vision-heading text-white">
                Our Achievements Over The Years!
              </h2>
              <p className="lead text-muted" style={{ maxWidth: "600px" }}>
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </p>
            </div>

            <div className="timeline-container">
              {/* Horizontal Line Connector */}
              <div className="timeline-line"></div>

              <div className="row">
                {/* Item 1 */}
                <div className="col-lg-3 col-md-6 mb-4 timeline-item fade-in-up delay-0">
                  <div className="timeline-tag">Meetings</div>
                  <div className="timeline-dot"></div>
                  <div className="visual-card-small"></div>
                  <h5 className="mt-4 text-white">
                    Notes with an AI assistant
                  </h5>
                  <p className="text-small text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="col-lg-3 col-md-6 mb-4 timeline-item fade-in-up delay-200">
                  <div className="timeline-tag">Meetings</div>
                  <div className="timeline-dot"></div>
                  <div className="visual-card-small"></div>
                  <h5 className="mt-4 text-white">
                    Notes with an AI assistant
                  </h5>
                  <p className="text-small text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="col-lg-3 col-md-6 mb-4 timeline-item fade-in-up delay-400">
                  <div className="timeline-tag">Meetings</div>
                  <div className="timeline-dot"></div>
                  <div className="visual-card-small"></div>
                  <h5 className="mt-4 text-white">
                    Notes with an AI assistant
                  </h5>
                  <p className="text-small text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="col-lg-3 col-md-6 mb-4 timeline-item fade-in-up delay-600">
                  <div className="timeline-tag">Meetings</div>
                  <div className="timeline-dot"></div>
                  <div className="visual-card-small"></div>
                  <h5 className="mt-4 text-white">
                    Notes with an AI assistant
                  </h5>
                  <p className="text-small text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="testimonials-section">
          <div className="container-medium">
            <h2 className="vision-heading text-white text-center mb-5">
              Listen to What Our Client Says!
            </h2>

            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={40} /* Physical gap for arrows */
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="testimonial-swiper"
            >
              {[
                {
                  text: "Abodah, under the umbrella of Zennial Pro, has completely transformed our approach to learning and development. Their tailored solutions have not only improved employee engagement but also boosted productivity.",
                  name: "David Lee",
                  role: "HR Director, Tech Innovations Inc.",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  text: "The strategic insights provided by the team helped us navigate complex international markets with ease. A truly invaluable partner for global expansion.",
                  name: "Sarah Jenkins",
                  role: "VP of Operations, GlobalReach",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  text: "Exceptional service and a platform that delivers real results. Hiring international talent has never been this streamlined and secure.",
                  name: "Michael Chen",
                  role: "CEO, StartUp Hub",
                  image: "https://randomuser.me/api/portraits/men/45.jpg",
                },
                // Duplicates for Loop Stability
                {
                  text: "Abodah, under the umbrella of Zennial Pro, has completely transformed our approach to learning and development. Their tailored solutions have not only improved employee engagement but also boosted productivity.",
                  name: "David Lee",
                  role: "HR Director, Tech Innovations Inc.",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  text: "The strategic insights provided by the team helped us navigate complex international markets with ease. A truly invaluable partner for global expansion.",
                  name: "Sarah Jenkins",
                  role: "VP of Operations, GlobalReach",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  text: "Exceptional service and a platform that delivers real results. Hiring international talent has never been this streamlined and secure.",
                  name: "Michael Chen",
                  role: "CEO, StartUp Hub",
                  image: "https://randomuser.me/api/portraits/men/45.jpg",
                },
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card-split">
                    <div className="card-left-content">
                      <i className="mdi mdi-format-quote-open quote-icon-large"></i>
                      <p className="testimonial-body">{testimonial.text}</p>
                      <div className="testimonial-author">
                        <h5>{testimonial.name}</h5>
                        <small>{testimonial.role}</small>
                      </div>
                    </div>
                    <div
                      className="card-right-image"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
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
