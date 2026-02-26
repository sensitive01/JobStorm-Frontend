import React, { useState, useRef } from "react";
import "./LearningPage.css";
import CareerCTA from "../Home/CareerCTA";
import { submitContactForm } from "../../../api/service/axiosService";
import image1 from "../../../assets/images/12.png";
import image2 from "../../../assets/images/10.png";
import image3 from "../../../assets/images/11.png";
import image4 from "../../../assets/images/14.png";
import image5 from "../../../assets/images/15.jpg";
import image6 from "../../../assets/images/16.png";
import image7 from "../../../assets/images/17.png";
import image8 from "../../../assets/images/18.png";
import image9 from "../../../assets/images/19.png";
import image10 from "../../../assets/images/bannerImage.png";

const LearningPage = () => {
  const [activeTab, setActiveTab] = useState("Technology");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeModule, setActiveModule] = useState(0);
  const scrollRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Mapping fields as requested: Phone -> Subject, Course -> Message/Description
    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.phone,
      message: `Course Interest: ${formData.course}`,
    };

    try {
      const response = await submitContactForm(payload);
      if (response && response.data && response.data.success) {
        alert("Thank you for your interest! We will get back to you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
        });
      } else {
        // Fallback or specific error handling
        alert("Something went wrong. Please try again later.");
        console.error("Submission failed:", response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please check your connection.");
    }
  };

  const moduleDetails = [
    {
      desc: "Security Operations Center (SOC) Analysts are the first line of defense against cyber threats. They monitor networks, detect potential security incidents, and ensure timely response to mitigate risks.",
      points: [
        "Monitor, analyze, and interpret security alerts using industry-standard tools",
        "Investigate incidents, understand attack patterns, and follow structured response workflows",
        "Communicate findings clearly to stakeholders to support timely, informed security decisions",
      ],
    },
    {
      desc: "As organizations increasingly depend on cloud infrastructure, securing cloud environments has become a critical business requirement. Effective cloud security ensures stability, compliance, and operational trust.",
      points: [
        "Identify security risks across cloud infrastructure, identities, and configurations",
        "Analyze access controls, permissions, and security policies to prevent misconfigurations",
        "Align cloud security controls with organizational and compliance needs",
      ],
    },
    {
      desc: "With artificial intelligence becoming central to modern cybersecurity, safeguarding data, models, and systems is increasingly important. AI-enabled security allows teams to anticipate threats and respond proactively.",
      points: [
        "Understand how AI and machine learning are applied to threat detection and risk analysis",
        "Analyze behavioral and security data to identify anomalies and emerging threats",
        "Translate AI-driven insights into actionable decisions that strengthen security outcomes",
      ],
    },
    // Default for others
    ...Array(7).fill({
      desc: "This module provides comprehensive training on essential cybersecurity concepts, tools, and methodologies, tailored to industry standards and practical application.",
      points: [
        "Gain in-depth knowledge of core concepts and tools",
        "Apply theoretical learning to practical, real-world scenarios",
        "Develop industry-relevant skills for career advancement",
      ],
    }),
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll amount approx equal to card width + gap
      const scrollAmount = 600;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const differentSteps = [
    {
      id: "01",
      prefix: "Self-Curated",
      highlight: "Curriculum",
      desc: "Learners build a personalized learning path aligned to their chosen career role, focusing only on what truly matters.",
      image: image1,
      bgClass: "purple-bg",
      isHighlightLast: true,
    },
    {
      id: "02",
      prefix: "Role-Specific",
      highlight: "Certification",
      desc: "Every certification clearly reflects the learner's specialization, backed by role-mapped projects and assessments.",
      image: image2,
      bgClass: "pink-bg",
      isHighlightLast: true,
    },
    {
      id: "03",
      prefix: "Industry-Aligned",
      highlight: "Learning",
      desc: "Curriculum and tasks are designed around real industry workflows, tools, and expectations to make you as professional",
      image: image4,
      bgClass: "purple-bg",
      isHighlightLast: true,
    },
    {
      id: "04",
      highlight: "JobStorm",
      prefix: "Career Alignment",
      desc: "Learning outcomes are directly connected to career visibility and opportunity through the JobStorm ecosystem.",
      image: image3,
      bgClass: "pink-bg",
      isHighlightLast: false, // Highlight first: "JobStorm Career Alignment"
    },
  ];

  const faqData = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
      link: "Enrollment Process for Different Courses",
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer:
        "We provide 24/7 mentor support, weekly live Q&A sessions, and a dedicated community forum for peer interaction.",
      link: "",
    },
    {
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
      answer:
        "Most of our courses are self-paced, allowing you to learn at your own speed. However, some bootcamp-style programs have fixed schedules.",
      link: "",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Prerequisites vary by course. Our beginner programs require no prior experience, while advanced certifications may require basic knowledge.",
      link: "",
    },
  ];

  const programmes = {
    Technology: [
      {
        title: "AI in Cyber Security",
        desc: "A 4-year, practitioner-led programme to learn business by running one. Includes internship and domestic + global immersions.",
        format: "Online (Some Residential)",
        eligibility: "Class 12th Students & Pass-outs",
        duration: "8 Months (Excluding the 2 months Internship)",
        deadline: "Round 2: 23 Feb '26",
        image: image3,
      },
      {
        title: "Data Science",
        desc: "Master the art of turning data into actionable business insights using statistics, machine learning, and visualization. The course focuses on real-world data analysis, predictive modeling, and decision-driven analytics.",
        format: "Online (Some Residential)",
        eligibility: "Class 12th Students & Pass-outs",
        duration: "8 Months (Excluding the 2 months Internship)",
        deadline: "Round 2: 23 Feb '26",
        image: image4, // Reusing image4 or consider a new one if available
      },
    ],
    "Human Resources": [
      {
        title: "Success Factor",
        desc: "A 4-year, practitioner-led programme to learn business by running one. Includes internship and domestic + global immersions.",
        format: "Online (Some Residential)",
        eligibility: "Class 12th Students & Pass-outs",
        duration: "8 Months (Excluding the 2 months Internship)",
        deadline: "Round 2: 23 Feb '26",
        image: image4,
      },
    ],
    Marketing: [],
    Design: [],
  };

  const modules = [
    "SOC Analyst",
    "Cloud Security Engineer",
    "AI Security Specialist",
    "Network Security Engineer",
    "Cyber Security Analyst",
    "Ethical Hacker / Penetration Tester",
    "Digital Forensics Analyst",
    "Threat Intelligence Analyst",
    "Identity & Access (IAM) Specialist",
    "Incident Response Specialist",
  ];

  return (
    <div className="learning-page">
      {/* Hero Section */}
      <section className="learning-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 hero-content">
              <span className="badge-pill-custom">
                ✨ #Build Your Own Path!
              </span>
              <h1>
                Build Your Own Curriculum <br />
                <span className="text-purple">For The Career You Want.</span>
              </h1>
              <p className="lead">
                A role-first learning platform where learners complete core
                foundations & self-curate their learning path
              </p>

              <div className="hero-buttons">
                <button className="btn btn-primary btn-lg custom-btn-primary">
                  Get Started
                </button>
                <button className="btn btn-light btn-lg custom-btn-light">
                  Get free trial
                </button>
              </div>

              <div className="hero-features">
                <span>
                  <i
                    className="mdi mdi-account-voice"
                    style={{ color: "#f59e0b", fontSize: "1.2rem" }}
                  ></i>{" "}
                  Public Speaking
                </span>
                <span>
                  <i
                    className="mdi mdi-briefcase-outline"
                    style={{ color: "#ea580c", fontSize: "1.2rem" }}
                  ></i>{" "}
                  Career-Oriented
                </span>
                <span>
                  <i
                    className="mdi mdi-lightbulb-on-outline"
                    style={{ color: "#ec4899", fontSize: "1.2rem" }}
                  ></i>{" "}
                  Creative Thinking
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="consultation-form-card" id="consultation-form">
                <h3>Get Free Career Advice</h3>
                <p>Please contact us in case of any query.</p>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <select
                      className="form-control"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Course</option>
                      <option value="AI in Cyber Security">
                        AI in Cyber Security
                      </option>
                      <option value="Data Science">Data Science</option>
                      <option value="Cloud Security">Cloud Security</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-purple btn-block w-100"
                  >
                    Get in Touch →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="logos-section">
        <div className="container">
          <div className="row align-items-center text-center text-md-start w-100 mx-0">
            <div className="col-md-3 col-12 mb-4 mb-md-0 px-0">
              <h4 className="mb-0">
                250+ <br />
                <span>Collaboration</span>
              </h4>
            </div>
            <div className="col-md-9 col-12 logo-grid justify-content-center justify-content-md-between px-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Duolingo_logo_2019.svg/2560px-Duolingo_logo_2019.svg.png"
                alt="Duolingo"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                alt="Codecov"
              />
              {/* Using placeholders relevant to the image implies generic tech logos */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
                alt="UserTesting"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt="Magic Leap"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="why-different-section">
        <div className="container">
          <div className="row w-100 mx-0">
            <div className="col-12 px-0">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-4 gap-3 w-100">
                <h2 className="section-title mb-0">
                  Why This Learning Model Is{" "}
                  <span className="text-purple">Different</span>
                </h2>
                <div className="scroll-arrows d-flex gap-2">
                  <button
                    className="btn btn-light rounded-circle shadow-sm border"
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => scroll("left")}
                  >
                    <i className="mdi mdi-arrow-left text-dark"></i>
                  </button>
                  <button
                    className="btn btn-light rounded-circle shadow-sm border"
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => scroll("right")}
                  >
                    <i className="mdi mdi-arrow-right text-dark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row w-100 mx-0">
            <div className="col-12 px-0">
              <div
                className="diff-cards-container d-flex gap-4 pb-4"
                ref={scrollRef}
                style={{
                  width: "100%",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                }}
              >
                {differentSteps.map((step, index) => (
                  <div
                    className="col-10 col-md-6 flex-shrink-0"
                    key={index}
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className={`diff-card ${step.bgClass} h-100`}>
                      <img
                        src={step.image}
                        alt={step.title}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h3>
                          {step.id}{" "}
                          <span className="subtitle ms-2">
                            {step.isHighlightLast ? (
                              <>
                                {step.prefix}{" "}
                                <span className="text-purple">
                                  {step.highlight}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="text-purple">
                                  {step.highlight}
                                </span>{" "}
                                {step.prefix}
                              </>
                            )}
                          </span>
                        </h3>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="programmes-section">
        <div className="container">
          <h2 className="section-title mb-4">
            Our <span className="text-italic text-purple">Programmes</span>
          </h2>
          <div className="programme-tabs mb-4">
            {Object.keys(programmes).map((tab) => (
              <button
                key={tab}
                className={`btn btn-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="row">
            {programmes[activeTab] &&
              programmes[activeTab].map((prog, idx) => (
                <div className="col-lg-6 mb-4" key={idx}>
                  <div className="programme-card">
                    <div className="prog-img-container">
                      <img src={prog.image} alt={prog.title} />
                      <div className="play-icon">▶</div>
                    </div>
                    <div className="prog-content">
                      <h3>{prog.title}</h3>
                      <p>{prog.desc}</p>
                      <div className="prog-details-grid">
                        <div className="detail-item">
                          <i className="mdi mdi-school"></i>
                          <div>
                            <strong>Format</strong>
                            <span>{prog.format}</span>
                          </div>
                        </div>
                        <div className="detail-item">
                          <i className="mdi mdi-account-group"></i>
                          <div>
                            <strong>Eligibility</strong>
                            <span>{prog.eligibility}</span>
                          </div>
                        </div>
                        <div className="detail-item">
                          <i className="mdi mdi-clock-outline"></i>
                          <div>
                            <strong>Duration</strong>
                            <span>{prog.duration}</span>
                          </div>
                        </div>
                        <div className="detail-item">
                          <i className="mdi mdi-calendar-check"></i>
                          <div>
                            <strong>Deadline</strong>
                            <span>{prog.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn btn-dark mt-3"
                        onClick={() => setShowModal(true)}
                      >
                        Explore Programme ↗
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            {programmes[activeTab].length === 0 && (
              <p>No programmes available for this category yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* Core Foundations Section */}
      <section className="core-foundations-section">
        <div className="container">
          <div className="row align-items-stretch">
            {/* Left Column - Heading, Description, and Numbered List */}
            <div className="col-lg-5 d-flex flex-column mb-4 mb-lg-0">
              <h2 className="core-heading">
                The Core Cyber Security <br />
                <span className="text-purple">Foundations</span>
              </h2>
              <p className="core-description">
                This is the common module for every learners to make the learns
                to be strong in the foundation of cyber security
              </p>
              <p className="core-description mb-5">
                Here students will learn about Introduction to Cyber Security,
                Cyber Security Awareness, Threats and Attacks
              </p>

              {/* Purple Box with Numbered List */}
              <div className="module-list flex-grow-1">
                {modules.map((mod, i) => (
                  <div
                    className={`module-item ${
                      i === activeModule ? "active" : ""
                    }`}
                    key={i}
                    onClick={() => setActiveModule(i)}
                    style={{
                      cursor: "pointer",
                      transition: "all 0.3s",
                      backgroundColor:
                        i === activeModule ? "rgba(0,0,0,0.2)" : "transparent",
                      color: i === activeModule ? "#fde047" : "white", // Yellow text for active
                      fontWeight: i === activeModule ? "700" : "500",
                    }}
                  >
                    <span
                      className="mod-num"
                      style={{
                        color:
                          i === activeModule
                            ? "#fde047"
                            : "rgba(255,255,255,0.7)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Illustration, Text, and Two Images */}
            <div className="col-lg-7 d-flex flex-column">
              {/* Top Illustration Image */}
              <div className="core-illustration mb-4">
                <img
                  src={image5}
                  alt="Cyber Security Network"
                  className="img-fluid"
                />
              </div>

              {/* Text Content */}
              <div className="core-text-content mb-4 ps-lg-4">
                <p>
                  {moduleDetails[activeModule]
                    ? moduleDetails[activeModule].desc
                    : moduleDetails[0].desc}
                </p>
                <p className="highlight-text">
                  At <span className="text-purple">JobsStorm</span>, by the end
                  of the program, you will:
                </p>
                <ul className="core-benefits-list">
                  {(moduleDetails[activeModule]
                    ? moduleDetails[activeModule].points
                    : moduleDetails[0].points
                  ).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Two Bottom Images - Pushed to bottom */}
              <div className="row mt-auto ps-lg-4">
                <div className="col-md-6 mb-3 mb-lg-0">
                  <div className="core-image-card">
                    <img src={image6} alt="Work on datasets" />
                    <div className="card-overlay">
                      <p>
                        Work on 25+ real-world startup datasets and get your
                        hands dirty
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3 mb-lg-0">
                  <div className="core-image-card">
                    <img src={image7} alt="Mentorship" />
                    <div className="card-overlay">
                      <p>Get regular 1:1 mentorship, support and practice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="flow-model-section my-5">
        <div className="container bg-light-purple p-5 rounded-4 position-relative">
          <h2 className="section-title mb-5">
            Why This Learning Model Is{" "}
            <span className="text-purple">Different</span>
          </h2>

          <div className="flow-wrapper position-relative py-4">
            {/* SVG Connecting Line */}
            <svg
              className="flow-line-svg d-none d-lg-block"
              viewBox="0 0 1000 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <path
                d="M150 60 H850 V200 H150"
                stroke="#A855F7"
                strokeWidth="2"
                fill="none"
              />
              {/* Start Dot */}
              <circle cx="150" cy="60" r="6" fill="#A855F7" />
              {/* Arrows */}
              <polygon points="500,55 510,60 500,65" fill="#A855F7" />{" "}
              {/* Top Line Arrow */}
              <polygon points="845,130 850,140 855,130" fill="#A855F7" />{" "}
              {/* Down Line Arrow */}
              <polygon points="650,195 640,200 650,205" fill="#A855F7" />{" "}
              {/* Bottom Line Arrow 1 */}
              <polygon points="350,195 340,200 350,205" fill="#A855F7" />{" "}
              {/* Bottom Line Arrow 2 */}
            </svg>

            {/* Top Row Cards */}
            <div className="row mb-5 justify-content-between position-relative z-1">
              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <div className="flow-card card-teal">
                  <div className="card-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div>
                    <h5>Self-Curated Curriculum</h5>
                    <p>
                      Learners design their learning path based on career goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="flow-card card-blue">
                  <div className="card-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h5>Structured Training</h5>
                    <p>
                      Expert-led sessions build strong role-specific
                      foundations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row Cards */}
            <div className="row flex-lg-row-reverse position-relative z-1">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="flow-card card-cyan">
                  <div className="card-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="10 8 16 12 10 16 10 8" />
                    </svg>
                  </div>
                  <div>
                    <h5>Hands-On Projects</h5>
                    <p>
                      Real-world tasks simulate actual job responsibilities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="flow-card card-indigo">
                  <div className="card-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                  <div>
                    <h5>Mentor Guidance</h5>
                    <p>Ongoing feedback refines skills and decision-making.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="flow-card card-red">
                  <div className="card-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <div>
                    <h5>Career Readiness</h5>
                    <p>
                      Role-based certification and JobStorm alignment support
                      job outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Highlights & Fees Section */}
        <div className="container mt-5">
          <div className="row">
            {/* Highlights Card */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="highlights-card h-100 p-4 border rounded-4 bg-white shadow-sm">
                <h4 className="text-purple fw-bold mb-4">Course Highlights</h4>
                <ul className="highlights-list list-unstyled">
                  <li className="mb-4 d-flex align-items-center gap-3">
                    <div className="highlight-icon">
                      {/* TV Icon with Play */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <rect
                          x="2"
                          y="7"
                          width="20"
                          height="15"
                          rx="2"
                          ry="2"
                        />
                        <polyline points="17 2 12 7 7 2" />
                        <polygon
                          points="10 11 15 14.5 10 18"
                          fill="currentColor"
                          fillOpacity="0.2"
                        />
                      </svg>
                    </div>
                    <span className="text-secondary fw-medium">
                      350+ Live sessions
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center gap-3">
                    <div className="highlight-icon">
                      {/* Presentation Chart Icon */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        <path
                          d="M8 13l4-3 4 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-secondary fw-medium">
                      15+ Industry Projects
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center gap-3">
                    <div className="highlight-icon">
                      {/* Clock Icon */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                        <path
                          d="M12 2v4M12 22v-4M2 12h4M22 12h-4"
                          opacity="0.3"
                        />
                      </svg>
                    </div>
                    <span className="text-secondary fw-medium">
                      Life time accessibility
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <div className="highlight-icon">
                      {/* Laptop Icon */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        />
                        <line x1="2" y1="20" x2="22" y2="20" />
                      </svg>
                    </div>
                    <span className="text-secondary fw-medium">
                      Live project experience
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Course Fees Card */}
            <div className="col-lg-8">
              <div className="fees-card h-100 p-5 border rounded-4 bg-white shadow-sm position-relative">
                <h2
                  className="fw-bold mb-3 text-dark"
                  style={{ fontSize: "2.5rem" }}
                >
                  Course Fees
                </h2>
                <p
                  className="text-secondary mb-5 w-75"
                  style={{ fontSize: "1.05rem", lineHeight: "1.6" }}
                >
                  We are driven by the idea of program affordability. So, we
                  give you several financial options to manage and budget the
                  expenses of your course.
                </p>

                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between mt-auto gap-4">
                  <div className="w-100 w-md-auto">
                    <h3
                      className="mb-2 fw-bold text-dark"
                      style={{ fontSize: "2rem" }}
                    >
                      Starting at ₹ 120,000 + GST
                    </h3>
                    <p className="text-secondary mb-0 fw-medium">
                      EMI starting from: ₹ 5,900/month
                    </p>
                  </div>
                  <button
                    className="btn btn-purple px-5 py-2 fw-bold w-100 w-md-auto"
                    style={{ borderRadius: "8px" }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info Section - Cohort Details Ticket Style */}
      <section className="info-footer-section">
        <div className="container">
          <h2
            className="text-center fw-bold mb-5"
            style={{ fontSize: "2.5rem" }}
          >
            Next Cohort Details
          </h2>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="cohort-ticket">
                {/* Top Section */}
                <div className="ticket-top flex-column flex-md-row gap-4 px-3 px-md-5">
                  <div className="ticket-date text-center text-md-start w-100 w-md-auto">
                    <h2>
                      19<span>MAR</span>
                    </h2>
                  </div>
                  <div className="ticket-title text-center text-md-start w-100 w-md-auto">
                    <h3>Weekend Batch [Sat - Sun]</h3>
                  </div>
                  <div className="w-100 w-md-auto text-center text-md-end">
                    <button className="btn btn-purple px-4 py-2 w-100 w-md-auto">
                      Enroll Now
                    </button>
                  </div>
                </div>

                {/* Divider with Notches */}
                <div className="ticket-divider-container">
                  <div className="ticket-divider"></div>
                  <div className="ticket-notch-l"></div>
                  <div className="ticket-notch-r"></div>
                </div>

                {/* Bottom Section */}
                <div className="ticket-bottom px-3 px-md-5">
                  <div className="ticket-info-grid">
                    <div>
                      <span className="ticket-label">Batch</span>
                      <span className="ticket-value">Morning</span>
                    </div>
                    <div>
                      <span className="ticket-label">Time</span>
                      <span className="ticket-value">09:00 am-12:00 pm</span>
                    </div>
                    <div>
                      <span className="ticket-label">Seat</span>
                      <span className="ticket-value">Available</span>
                    </div>
                    <div>
                      <span className="ticket-label">Venue</span>
                      <span className="ticket-value">Virtual Hall</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="internship-collage-section py-5">
        <div className="container">
          <div className="row g-4 overflow-visible">
            {/* Left Card */}
            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
              <div className="internship-card h-100 p-4 p-md-5">
                <h2 className="mb-2" style={{ opacity: 0.9 }}>
                  Start your <br />
                  Internship <br />
                  Career
                </h2>
                <h3 className="mb-4">
                  In <span className="text-purple-light">Abroad</span>
                </h3>
                <div className="mt-auto">
                  <button className="btn btn-outline-custom w-100 w-md-auto">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="col-lg-8">
              <div className="collage-grid">
                <div className="country-card">
                  <img src={image8} alt="Dubai" />
                  <div className="country-overlay">Dubai</div>
                </div>
                <div className="country-card">
                  <img
                    src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Singapore"
                  />
                  <div className="country-overlay">Singapore</div>
                </div>
                <div className="country-card">
                  <img src={image9} alt="Kuala Lumpur" />
                  <div className="country-overlay">Kuala Lumpur</div>
                </div>
                <div className="country-card">
                  <img
                    src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="London"
                  />
                  <div className="country-overlay">London</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">Frequently Asked Questions</h2>
              <p className="text-secondary mb-4">
                Still you have any questions? Contact our Team via
                support@skillbridge.com
              </p>
              <button
                className="btn btn-outline-dark px-4 py-2"
                style={{ borderRadius: "8px" }}
              >
                See All FAQ's
              </button>
            </div>
            <div className="col-lg-7">
              <div className="faq-list">
                {faqData.map((faq, index) => (
                  <div key={index} className="faq-item-wrapper mb-3">
                    <div
                      className={`faq-item border p-3 rounded d-flex justify-content-between align-items-center ${
                        openFaqIndex === index
                          ? "border-purple shadow-sm"
                          : "border-light"
                      }`}
                      onClick={() =>
                        setOpenFaqIndex(openFaqIndex === index ? -1 : index)
                      }
                      style={{ cursor: "pointer", transition: "all 0.2s" }}
                    >
                      <span
                        className={`fw-medium ${
                          openFaqIndex === index ? "text-purple" : "text-dark"
                        }`}
                        style={{ fontSize: "1rem" }}
                      >
                        {faq.question}
                      </span>
                      <button
                        className="btn btn-sm btn-light rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "32px",
                          height: "32px",
                          fontSize: "1.2rem",
                          lineHeight: 1,
                        }}
                      >
                        {openFaqIndex === index ? "×" : "+"}
                      </button>
                    </div>

                    {openFaqIndex === index && (
                      <div className="faq-answer p-4 bg-light rounded-bottom mt-0 border-top-0">
                        <p
                          className="text-secondary mb-2"
                          style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
                        >
                          {faq.answer}
                        </p>
                        {faq.link && (
                          <button className="btn btn-link p-0 text-decoration-none text-purple fw-medium mt-2">
                            {faq.link} →
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Banner */}
      <section className="assessment-banner-section mt-5 mb-5">
        <div className="container">
          <div className="w-100">
            <img
              src={image10}
              alt="Launching assessments on the app"
              className="w-100 rounded-4"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* Final CTA */}
      <CareerCTA />
      {/* Explore Popup Modal */}
      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Program Enquiry</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Please fill the form and our team will contact you shortly.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-purple"
                  onClick={() => {
                    setShowModal(false);
                    document
                      .getElementById("consultation-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Go to Form
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningPage;
