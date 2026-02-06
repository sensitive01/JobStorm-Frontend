import React from "react";
import { useNavigate } from "react-router-dom";
import "./InternshipPromo.css";

const InternshipPromo = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <section className="internship-promo-section">
      <div className="container-fluid px-lg-5 px-md-4">
        <h2 className="section-header-title text-center mb-5">
          Our 9 Months Internship Program
        </h2>
        <div className="internship-card">
          <img
            src="/assets/images/internship/internship.jpeg"
            alt="Internship Program"
            className="internship-bg w-100 h-100"
          />
          <div className="internship-overlay">
            <div className="row h-100 align-items-center m-0">
              <div className="col-lg-5 offset-lg-7 col-md-12 text-start p-4 ps-lg-4 pe-lg-2">
                <div className="internship-content-box">
                  <h2 className="internship-title">Paid Internship</h2>
                  <p className="internship-desc">
                    We’re offering a 9-Month Internship Program designed to help
                    graduates and final-year students transition confidently for
                    Global Work.
                  </p>
                  {!isLoggedIn && (
                    <button
                      className="btn-register-promo"
                      onClick={() => navigate("/candidate-signup")}
                    >
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipPromo;
