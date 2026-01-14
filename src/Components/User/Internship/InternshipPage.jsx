import React, { useState } from "react";
import "./InternshipPage.css";
/* ... imports ... */
import bannerImage from "../../../assets/images/bannerImage.png";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Gallery Images
import buildingImg from "../../../assets/images/buildingImage.jpeg";
import profileImg from "../../../assets/images/profileImage.png";
import courseImg1 from "../../../assets/images/courseimage.jpg";
import courseImg2 from "../../../assets/images/couseImage2.jpg";
import courseImg3 from "../../../assets/images/courseImage3.jpg";
import bannerImg from "../../../assets/images/onebannerimg.jpg";

import image20 from "../../../assets/images/20.jpg";
import image21 from "../../../assets/images/21.jpg";
import image22 from "../../../assets/images/22.png";
import image23 from "../../../assets/images/23.jpg";
import image24 from "../../../assets/images/24.jpg";
import image25 from "../../../assets/images/25.jpg";

const InternshipPage = () => {
  const [activeTab, setActiveTab] = useState("Domestic");
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "James Olson",
      role: "Developer",
      quote:
        "JobsStorm didn’t treat this as just an internship—they focused on career readiness. From communication training to interview coordination, every step was clear. The internship experience helped me gain confidence.",
      image: image24, // Using image24 (Man?)
    },
    {
      id: 2,
      name: "Sudhakar",
      role: "HR Manager",
      quote:
        "As a fresher, I was unsure about overseas opportunities. JobsStorm helped me start with an internship, understand industry expectations, and prepare professionally. The process was genuine and service-based.",
      image: image22, // Using image22 (Man?)
    },
    {
      id: 3,
      name: "Akshayan",
      role: "Project Manager",
      quote:
        "The internship through JobsStorm was practical and industry-aligned. More than training, they focused on how to present ourselves to international employers. The structured follow-ups made a big difference.",
      image: image25, // Using image25 (Tall?)
    },
    {
      id: 4,
      name: "Sarah Jen",
      role: "Designer",
      quote:
        "I loved how hands-on the experience was. The mentorship I received was top-notch, and the real-world projects gave me a portfolio I'm proud of. Highly recommended for anyone starting out.",
      image: image21, // Using image21 (Woman)
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="internship-page">
      {/* 1. Hero Section */}
      <section className="internship-hero-carousel">
        <div className="container-fluid text-center">
          {/* Header Content */}
          <div className="hero-header mb-5">
            <div className="d-inline-block">
              <span className="badge-pill-purple">
                ✨ #Learn by Working on with top giants
              </span>
            </div>
            <h1
              className="display-4 fw-bold mt-4 mb-3"
              style={{ color: "#4c1d95" }}
            >
              Internships That Lead to{" "}
              <span style={{ color: "#7c3aed" }}>Real Careers</span>
            </h1>
            <p className="subtitle text-muted fs-5">
              Never Miss a Opportunity, Go Global with Jobsstorm
            </p>
          </div>

          {/* Carousel */}
          <div className="carousel-container position-relative">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="internship-swiper"
            >
              {/* Placeholder Images for Carousel */}
              {[1, 2, 3, 4, 5].map((item) => (
                <SwiperSlide key={item} className="internship-slide">
                  <img
                    src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop`}
                    alt={`Internship ${item}`}
                    className="slide-image"
                  />
                  {/* Using a generic office image for demo, user can replace */}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Decorative Background Elements if needed */}
            <div className="bg-decoration-circle"></div>
          </div>
        </div>
      </section>

      {/* 2. Positions / Process Section */}
      <section className="open-positions-section">
        <div className="container">
          {/* Tab Navigation */}
          <div className="positions-header text-center">
            <div className="tabs">
              <button
                className={activeTab === "Domestic" ? "active" : ""}
                onClick={() => setActiveTab("Domestic")}
              >
                Domestic Internship
              </button>
              <button
                className={activeTab === "International" ? "active" : ""}
                onClick={() => setActiveTab("International")}
              >
                International Internship
              </button>
              <button
                className={activeTab === "Process" ? "active" : ""}
                onClick={() => setActiveTab("Process")}
              >
                Our Internship Process
              </button>
            </div>

            {activeTab !== "Process" ? (
              <h2 className="mt-5 fw-bold">We have 17 open positions now!</h2>
            ) : null}
          </div>

          {/* Conditional Rendering Content */}

          {/* A. JOB LIST VIEW (Domestic / International) */}
          {(activeTab === "Domestic" || activeTab === "International") && (
            <div className="row mt-5">
              {/* Sidebar Filter */}
              <div className="col-lg-3 d-none d-lg-block">
                <div className="sticky-top" style={{ top: "100px" }}>
                  <div className="sidebar-title">All positions (17)</div>
                  <ul className="position-filter-list">
                    <li className="active">Engineering (7)</li>
                    <li>Product (3)</li>
                    <li>Design (1)</li>
                    <li>Operation (4)</li>
                    <li>Marketing (2)</li>
                  </ul>
                  <div className="mt-5">
                    <p
                      className="text-secondary mb-2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      We are always seeking talented people. In case you cannot
                      find your desired position here, please send us your
                      LinkedIn profile.
                    </p>
                    <a
                      href="#"
                      className="text-decoration-none fw-bold"
                      style={{ color: "#2563eb" }}
                    >
                      Share your LinkedIn profile →
                    </a>
                  </div>
                </div>
              </div>

              {/* Job List */}
              <div className="col-lg-9 ps-lg-5">
                <div className="job-item">
                  <h3>Full-Stack Developers</h3>
                  <div className="tags mb-4">
                    <span className="badge-outline-rounded">Tartu</span>
                    <span className="badge-outline-rounded">Full-time</span>
                  </div>
                  <p className="job-desc mb-4">
                    Due to growing workload, we are looking for experienced and
                    talented Full-Stack Developers to join our fast-paced
                    Engineering team. You will work closely with Product, Design
                    and Marketing to analyze, develop, debug, test, roll-out and
                    support new and existing product features.
                  </p>
                  <div className="text-end">
                    <button className="btn-black-pill">
                      See positions <i className="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
                {/* Job Item 2 */}
                <div className="job-item">
                  <h3>Application developer (react native)</h3>
                  <div className="tags mb-4">
                    <span className="badge-outline-rounded">Tartu</span>
                    <span className="badge-outline-rounded">Full-time</span>
                  </div>
                  <p className="job-desc mb-4">
                    Due to growing workload, we are looking for experienced and
                    talented Full-Stack Developers to join our fast-paced
                    Engineering team. You will work closely with Product, Design
                    and Marketing to analyze, develop, debug, test, roll-out and
                    support new and existing product features.
                  </p>
                  <div className="text-end">
                    <button className="btn-black-pill">
                      See positions <i className="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* B. PROCESS TIMELINE VIEW */}
          {activeTab === "Process" && (
            <div className="process-timeline-section mt-5">
              <div className="process-header">
                <h2>How to get the internship?</h2>
                <p>
                  Joining us couldn't be easier! Check out our application
                  process down below. If you have the talent we need, then we'll
                  be meeting you soon!
                </p>
              </div>

              <div className="timeline-vertical">
                {/* Step 1 (Right) */}
                <div className="timeline-row right-align">
                  <div className="timeline-content"></div> {/* Spacer Left */}
                  <div className="timeline-number">01</div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">
                      Find a role that suits you
                    </h4>
                    <p className="timeline-desc">
                      Discover open positions and find your desired one in the
                      Visioncraft website, job listings or social media.
                    </p>
                  </div>
                </div>

                {/* Step 2 (Left) */}
                <div className="timeline-row left-align">
                  <div className="timeline-content">
                    <h4 className="timeline-title">Send your application</h4>
                    <p className="timeline-desc">
                      Some simple questions should be answered and your contact
                      information is required.
                    </p>
                  </div>
                  <div className="timeline-number">02</div>
                  <div className="timeline-content"></div> {/* Spacer Right */}
                </div>

                {/* Step 3 (Right) */}
                <div className="timeline-row right-align">
                  <div className="timeline-content"></div>
                  <div className="timeline-number">03</div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">
                      Receive your interview invite
                    </h4>
                    <p className="timeline-desc">
                      We review all applications within 3 working days and send
                      invitation to candidates.
                    </p>
                  </div>
                </div>

                {/* Step 4 (Left) */}
                <div className="timeline-row left-align">
                  <div className="timeline-content">
                    <h4 className="timeline-title">Choose an interview slot</h4>
                    <p className="timeline-desc">
                      You will have a friendly discution with the CEO and your
                      supervisor to talk about the work, life and etc.
                    </p>
                  </div>
                  <div className="timeline-number">04</div>
                  <div className="timeline-content"></div>
                </div>

                {/* Step 5 (Right) */}
                <div className="timeline-row right-align">
                  <div className="timeline-content"></div>
                  <div className="timeline-number">05</div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">Preliminary Interview</h4>
                    <p className="timeline-desc">
                      Sometimes, we ask candidates to participate in some
                      technical challenge that is designated to demonstrate
                      candidates' proficiency.
                    </p>
                  </div>
                </div>

                {/* Step 6 (Left) */}
                <div className="timeline-row left-align">
                  <div className="timeline-content">
                    <h4 className="timeline-title">Meet the your teammates</h4>
                    <p className="timeline-desc">
                      To us is crucial to make sure all team members feel
                      comfortable. It is why we do try to have diverse but
                      culturally fitted team members.
                    </p>
                  </div>
                  <div className="timeline-number">06</div>
                  <div className="timeline-content"></div>
                </div>

                {/* Step 7 (Right) */}
                <div className="timeline-row right-align">
                  <div className="timeline-content"></div>
                  <div className="timeline-number">07</div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">Interview with our CEO</h4>
                    <p className="timeline-desc">
                      Your colleagues are waiting for you to say a warm welcome.
                    </p>
                  </div>
                </div>

                {/* Final Handshake */}
                <div
                  className="timeline-row left-align mt-5 pt-3"
                  style={{ minHeight: "80px" }}
                >
                  <div className="timeline-content text-end d-flex align-items-center justify-content-end h-100">
                    <h4
                      className="mb-0 fw-bold me-5"
                      style={{ fontSize: "1.5rem", color: "#111827" }}
                    >
                      Start a new journey!
                    </h4>
                  </div>
                  {/* Central Node */}
                  <div
                    className="timeline-number"
                    style={{
                      fontSize: "2rem",
                      width: "70px",
                      height: "70px",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    🤝
                  </div>
                  <div className="timeline-content"></div> {/* Spacer Right */}
                </div>
              </div>

              {/* 4. Top Companies Section */}
              <div className="internship-companies-section">
                <h4>Get Internship in Top Companies!</h4>

                <div className="company-marquee-container">
                  <div className="company-marquee-track">
                    {/* Define Items Logic (Duplicated for infinite scroll) */}
                    {/* SET 1 */}
                    <div className="company-logo-item">
                      <i className="mdi mdi-google-plus"></i>{" "}
                      <span className="text-lowercase">google+</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-microsoft"></i>{" "}
                      <span>Microsoft</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-alpha-m-circle-outline"></i>{" "}
                      <span>MetalLB</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-linkedin"></i> <span>LinkedIn</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-instagram"></i>{" "}
                      <span>Instagram</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-apple"></i> <span>Pay</span>
                    </div>

                    {/* SET 2 (Duplicate) */}
                    <div className="company-logo-item">
                      <i className="mdi mdi-google-plus"></i>{" "}
                      <span className="text-lowercase">google+</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-microsoft"></i>{" "}
                      <span>Microsoft</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-alpha-m-circle-outline"></i>{" "}
                      <span>MetalLB</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-linkedin"></i> <span>LinkedIn</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-instagram"></i>{" "}
                      <span>Instagram</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-apple"></i> <span>Pay</span>
                    </div>

                    {/* SET 3 (Triplicate for wide screens just to be safe) */}
                    <div className="company-logo-item">
                      <i className="mdi mdi-google-plus"></i>{" "}
                      <span className="text-lowercase">google+</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-microsoft"></i>{" "}
                      <span>Microsoft</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-alpha-m-circle-outline"></i>{" "}
                      <span>MetalLB</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-linkedin"></i> <span>LinkedIn</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-instagram"></i>{" "}
                      <span>Instagram</span>
                    </div>
                    <div className="company-logo-item">
                      <i className="mdi mdi-apple"></i> <span>Pay</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2>Take a peep at what goes on at Jobsstorm!</h2>

          <div className="gallery-grid-bento">
            {/* LEFT COLUMN (40%) */}
            <div className="gallery-col-left">
              {/* Top: Big Desk */}
              <div className="gallery-item h-auto">
                <img src={image20} alt="Office Culture 1" />
              </div>
              {/* Bottom: Split Row */}
              <div className="gallery-split-row">
                <div className="gallery-item">
                  <img src={image23} alt="Office Culture 4a" />
                </div>
                <div className="gallery-item">
                  <img src={image24} alt="Office Culture 4b" />
                </div>
              </div>
            </div>

            {/* MIDDLE COLUMN (30%) */}
            <div className="gallery-col-mid">
              {/* Top: Woman */}
              <div className="gallery-item">
                <img src={image21} alt="Office Culture 2" />
              </div>
              {/* Bottom: Tall Chairs */}
              <div className="gallery-item h-tall">
                <img
                  src={image25}
                  alt="Office Culture 5"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* RIGHT COLUMN (30%) */}
            <div className="gallery-col-right">
              {/* Top: Two Men */}
              <div className="gallery-item h-tall">
                <img
                  src={image22}
                  alt="Office Culture 3"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Bottom: Explore Card */}
              <div className="explore-card">
                <div className="explore-text">Explore more</div>
                <i className="mdi mdi-arrow-right explore-arrow"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Don't just take our word for it!</h2>
          <p className="testimonials-subtext">See the feedback from your teammates.</p>

          <div className="testimonials-container">
            {/* Left: Main Card */}
            <div className="testimonial-main-card">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name} 
                className="testimonial-main-img" 
              />
              <div className="testimonial-content">
                <i className="mdi mdi-format-quote-open quote-icon"></i>
                <p className="testimonial-text">
                  {testimonials[activeIndex].quote}
                </p>
                <div className="testimonial-author-box">
                  <h5>{testimonials[activeIndex].name}</h5>
                  <p>{testimonials[activeIndex].role}</p>
                  <a href="#" className="linkedin-badge">
                    <i className="mdi mdi-linkedin"></i> LinkedIn profile
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Preview Strip (Shows next 3 items) */}
            <div className="testimonial-preview-strip">
              {[1, 2, 3].map((offset) => {
                 const index = (activeIndex + offset) % testimonials.length;
                 const item = testimonials[index];
                 return (
                   <div 
                    key={item.id} 
                    className="preview-slice"
                    onClick={() => setActiveIndex(index)}
                   >
                      <img src={item.image} alt={item.name} />
                   </div>
                 );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="testimonial-controls">
             <div className="progress-indicator">
                <div className="progress-text">
                    {activeIndex + 1}/{testimonials.length} Testimonials
                </div>
                <div className="progress-bar-bg">
                    <div 
                        className="progress-bar-fill" 
                        style={{width: `${((activeIndex + 1) / testimonials.length) * 100}%`}}
                    ></div>
                </div>
             </div>
             <button className="next-btn" onClick={handleNext}>
                 Next <i className="mdi mdi-arrow-right"></i>
             </button>
          </div>

        </div>
      </section>

      {/* 5. Banner Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="d-block w-100">
            {/* The banner from Learning page */}
            <img
              src={bannerImage}
              alt="App Banner"
              className="w-100 rounded-4"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipPage;
