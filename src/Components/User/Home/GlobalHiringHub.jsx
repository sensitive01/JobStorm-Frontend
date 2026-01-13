import React from "react";
import "./GlobalHiringHub.css";
import jobsStormBuildingimage from "../../../assets/images/buildingImage.jpeg";

const GlobalHiringHub = () => {
  const links = [
    { title: "Explore Internships", href: "#" },
    { title: "Get Know About Us", href: "#" },
    { title: "Our Resources", href: "#" },
    { title: "Start Learn with us", href: "#" },
  ];

  return (
    <section className="section global-hiring-section">
      <div className="container-medium">
        <div className="row align-items-center">
          {/* Left Column: Text */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h2 className="main-heading">
              Launch Careers from <br />
              <span className="highlight-text">a Global Hiring Hub</span>
            </h2>

            <div className="mt-5">
              <h3 className="sub-heading">Operate at the</h3>
              <h3 className="sub-heading italic-serif">Heart of</h3>
              <h3 className="sub-heading italic-serif">
                International Recruitment
              </h3>
              <p className="description mt-3 text-muted">
                JobsStorm functions within a globally connected hiring
                ecosystem, enabling professionals to access overseas
                opportunities
              </p>
            </div>
          </div>

          {/* Middle Column: Image */}
          <div className="col-lg-5 mb-4 mb-lg-0 text-center">
            <div className="image-container">
              <img
                src={jobsStormBuildingimage}
                alt="JobsStorm Global Hub"
                className="img-fluid rounded-4 hub-image"
              />
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="col-lg-3">
            <div className="links-container">
              {links.map((link, index) => (
                <a key={index} href={link.href} className="hub-link-item">
                  <span className="link-text">{link.title}</span>
                  <div className="link-arrow-btn">
                    <i className="mdi mdi-arrow-top-right"></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalHiringHub;
