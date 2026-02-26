import React, { useState, useEffect } from "react";
import "./IntegratedPricing.css";
import {
  bookSubscription,
  getAllCandidatePlans,
} from "../../../api/service/axiosService";

const API_BASE_URL = import.meta.env.VITE_BASE_ROUTE_JOBSTORM;

const PricingPage = () => {
  const userId = localStorage.getItem("userId");
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [currentPlanId, setCurrentPlanId] = useState(null);

  const [usage] = useState({
    applications: { current: 5, total: 20, resetDays: 10 },
    profileViews: { current: 15, total: 50, status: "Active" },
    resumeReviews: { current: 1, total: 3, remaining: 2 },
  });

  useEffect(() => {
    fetchPricingPlans();
  }, []);

  const fetchPricingPlans = async () => {
    try {
      const response = await getAllCandidatePlans();
      if (response.status === 200) {
        // ✅ Normalize the data: convert _id to id for consistency
        const normalizedPlans = response.data.data.map((plan) => ({
          ...plan,
          id: plan._id || plan.id, // Use _id as id
        }));
        setPlans(normalizedPlans);
      }
    } catch (error) {
      console.error("Error fetching pricing plans:", error);
      alert("Error loading pricing plans");
    } finally {
      setLoading(false);
    }
  };

  const initiatePayment = async (plan, paymentData) => {
    console.log("paymentData", paymentData);
    setPaymentLoading(true);
    setCurrentPlanId(plan._id); // ✅ Use _id consistently

    try {
      const txnid = paymentData.txnId;
      const productinfo = plan.name;
      const firstname = paymentData.firstname;
      const email = paymentData.email;
      const phone = paymentData.phone;
      const amount = plan.totalAmount;

      const surl = `${API_BASE_URL}/payment/success?`;
      const furl = `${API_BASE_URL}/payment/failure`;

      const response = await fetch(`${API_BASE_URL}/api/generate-hash`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          txnid,
          amount: String(amount),
          productinfo,
          firstname,
          email,
          phone,
          surl,
          furl,
        }),
      });

      const data = await response.json();

      if (data.error) {
        alert("Error generating hash: " + data.error);
        setPaymentLoading(false);
        setCurrentPlanId(null);
        return;
      }

      const { hash, key } = data;

      const form = document.createElement("form");
      form.action = "https://secure.payu.in/_payment";
      form.method = "POST";

      const params = {
        key: key,
        txnid: txnid,
        amount: amount,
        productinfo: productinfo,
        firstname: firstname,
        email: email,
        phone: phone,
        surl: surl,
        furl: furl,
        hash: hash,
      };

      console.log("🚀 Submitting to PayU:", params);

      for (const key in params) {
        const hiddenField = document.createElement("input");
        hiddenField.type = "hidden";
        hiddenField.name = key;
        hiddenField.value = params[key];
        form.appendChild(hiddenField);
      }

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Something went wrong! Please try again.");
      setPaymentLoading(false);
      setCurrentPlanId(null);
    }
  };

  const handleSubscribe = async (plan) => {
    console.log("Selected plan:", plan);
    console.log("Plan ID (_id):", plan.id); // ✅ Debug log

    if (!userId) {
      alert("Please login to continue");
      return;
    }

    // ✅ Check using _id instead of id
    if (plan.isCustom || plan._id === "special") {
      alert("Please contact support for custom pricing");
      return;
    }

    if (!plan.price || plan.price <= 0) {
      alert("Invalid plan price");
      return;
    }

    // ✅ Use _id consistently
    const data = {
      planId: plan.id,
      userId,
      txnid: `TXN${Date.now()}${userId.substring(0, 5)}`,
      productinfo: plan.name,
      amount: plan.totalAmount,
      surl: `${API_BASE_URL}/payment/success`,
      furl: `${API_BASE_URL}/payment/failure`,
    };

    console.log("Booking subscription with data:", data); // ✅ Debug log

    try {
      const response = await bookSubscription(data);
      console.log("Subscription booking response:", response); // ✅ Debug log

      if (response.status === 200) {
        const { paymentData } = response.data;
        initiatePayment(plan, paymentData);
      } else {
        alert("Failed to book subscription. Please try again.");
        setPaymentLoading(false);
        setCurrentPlanId(null);
      }
    } catch (error) {
      console.error("Error booking subscription:", error);
      alert(
        "Error booking subscription: " + (error.message || "Please try again"),
      );
      setPaymentLoading(false);
      setCurrentPlanId(null);
    }
  };

  const getProgressPercentage = (current, total) => (current / total) * 100;

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return "#ef4444";
    if (percentage >= 50) return "#f59e0b";
    return "#8b5cf6";
  };

  return (
    <>
      {paymentLoading && (
        <div className="payment-loading-overlay">
          <div className="payment-loading-spinner">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Processing payment...</span>
            </div>
            <p className="mt-3">Redirecting to payment gateway...</p>
            {currentPlanId && (
              <p className="text-muted">Processing plan: {currentPlanId}</p>
            )}
          </div>
        </div>
      )}

      <div>
        <div className="main-content">
          <div className="page-content">
            <section
              className="section"
              style={{ padding: "140px 0 80px 0", backgroundColor: "#f8f9fc" }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="text-center mb-5">
                      <h3 className="fw-bold mb-3" style={{ color: "#1e293b" }}>
                        Pricing & Plans
                      </h3>
                      <p
                        className="text-muted"
                        style={{
                          fontSize: "16px",
                          maxWidth: "600px",
                          margin: "0 auto",
                        }}
                      >
                        With lots of unique blocks, you can easily build a page
                        without coding. Build your next consultancy website
                        within few minutes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center justify-content-center">
                  {loading ? (
                    <div className="col-12 text-center mt-5">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="mt-3 text-muted">
                        Loading pricing plans...
                      </p>
                    </div>
                  ) : plans.length > 0 ? (
                    plans.map((plan, index) => {
                      const isPopular = index === 1; // Assuming 2nd plan is popular
                      const isSpecial = plan.isCustom || plan._id === "special";

                      // Card accent colors
                      let accentColor = "#3b82f6"; // Default Blue
                      if (isPopular) accentColor = "#764ba2"; // Purple for Popular
                      if (isSpecial) accentColor = "#10b981"; // Green for custom
                      if (index === 2) accentColor = "#f59e0b"; // Orange/Gold for premium

                      return (
                        <div
                          key={plan._id || plan.id || index}
                          className={`col-lg-4 col-md-6 mb-4 ${
                            isPopular ? "z-index-1" : ""
                          }`}
                        >
                          <div
                            className={`pricing-box card bg-white h-100 ${
                              isPopular ? "popular-plan" : ""
                            }`}
                            style={{
                              borderRadius: "20px",
                              transform: isPopular ? "scale(1.05)" : "none",
                              zIndex: isPopular ? 2 : 1,
                              transition: "all 0.3s ease",
                              border: "none",
                              boxShadow: isPopular
                                ? "0 20px 40px rgba(0,0,0,0.12)"
                                : "0 5px 20px rgba(0,0,0,0.05)",
                              overflow: "hidden",
                            }}
                          >
                            {/* Colored Top Bar */}
                            <div
                              style={{
                                height: "6px",
                                background: accentColor,
                                width: "100%",
                              }}
                            ></div>

                            {isPopular && (
                              <div
                                className="popular-ribbon"
                                style={{ background: accentColor }}
                              >
                                POPULAR
                              </div>
                            )}

                            <div className="card-body p-0 d-flex flex-column">
                              {/* Header Section */}
                              <div
                                className="p-4 text-center"
                                style={{
                                  backgroundColor: isPopular
                                    ? "rgba(118, 75, 162, 0.03)"
                                    : "rgba(248, 249, 252, 0.5)",
                                  borderBottom: "1px solid rgba(0,0,0,0.03)",
                                }}
                              >
                                <div
                                  className="d-inline-block px-3 py-1 rounded-pill mb-3"
                                  style={{
                                    backgroundColor: `${accentColor}15`,
                                    color: accentColor,
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    letterSpacing: "0.5px",
                                    textTransform: "uppercase",
                                  }}
                                >
                                  {plan.name}
                                </div>

                                <div className="pricing-price">
                                  {isSpecial ? (
                                    <div>
                                      <h2
                                        className="fw-bold text-dark mb-0"
                                        style={{ fontSize: "28px" }}
                                      >
                                        Custom Price
                                      </h2>
                                      <p className="text-muted fs-13 mt-2 mb-0">
                                        Tailored for you
                                      </p>
                                    </div>
                                  ) : (
                                    <div>
                                      <div className="d-flex justify-content-center align-items-baseline">
                                        <span
                                          className="fw-bold text-dark"
                                          style={{
                                            fontSize: "36px",
                                            lineHeight: 1,
                                          }}
                                        >
                                          ₹
                                          {plan.price
                                            ? plan.price.toLocaleString("en-IN")
                                            : 0}
                                        </span>
                                        <span
                                          className="text-muted fw-medium ms-1"
                                          style={{ fontSize: "15px" }}
                                        >
                                          {" "}
                                          + GST
                                        </span>
                                      </div>
                                      <p className="text-muted fs-13 mt-2 mb-0">
                                        {plan.validity
                                          ? `Valid for ${plan.validity}`
                                          : ""}{" "}
                                        •{" "}
                                        {plan.billingType === "monthly"
                                          ? "Billed monthly"
                                          : "One time"}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Features Section */}
                              <div className="p-4 flex-grow-1">
                                <ul className="list-unstyled pricing-details mb-0">
                                  {plan.features &&
                                  Array.isArray(plan.features) ? (
                                    plan.features.map((feature, idx) => (
                                      <li
                                        key={idx}
                                        className="pricing-item d-flex align-items-start mb-3"
                                      >
                                        <div
                                          className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                                          style={{
                                            width: "20px",
                                            height: "20px",
                                            backgroundColor: `${accentColor}20`,
                                            marginTop: "2px",
                                          }}
                                        >
                                          <i
                                            className="uil uil-check"
                                            style={{
                                              fontSize: "10px",
                                              color: accentColor,
                                            }}
                                          />
                                        </div>
                                        <span
                                          style={{
                                            fontSize: "14px",
                                            color: "#475569",
                                            lineHeight: "1.5",
                                          }}
                                        >
                                          {feature}
                                        </span>
                                      </li>
                                    ))
                                  ) : plan.featuresList &&
                                    Array.isArray(plan.featuresList) ? (
                                    plan.featuresList.map((feature, idx) => (
                                      <li
                                        key={idx}
                                        className="pricing-item d-flex align-items-start mb-3"
                                      >
                                        <div
                                          className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                                          style={{
                                            width: "20px",
                                            height: "20px",
                                            backgroundColor: feature.included
                                              ? `${accentColor}20`
                                              : "#f1f5f9",
                                            marginTop: "2px",
                                          }}
                                        >
                                          <i
                                            className={`uil ${
                                              feature.included
                                                ? "uil-check"
                                                : "uil-times"
                                            }`}
                                            style={{
                                              fontSize: "10px",
                                              color: feature.included
                                                ? accentColor
                                                : "#cbd5e1",
                                            }}
                                          />
                                        </div>
                                        <span
                                          style={{
                                            fontSize: "14px",
                                            color: feature.included
                                              ? "#475569"
                                              : "#94a3b8",
                                            lineHeight: "1.5",
                                          }}
                                        >
                                          {feature.text}
                                        </span>
                                      </li>
                                    ))
                                  ) : (
                                    <li className="pricing-item text-muted">
                                      No features available
                                    </li>
                                  )}
                                </ul>
                              </div>

                              {/* Action Button Section */}
                              <div className="p-4 pt-0 mt-auto">
                                <button
                                  onClick={() => handleSubscribe(plan)}
                                  disabled={
                                    paymentLoading && currentPlanId === plan._id
                                  }
                                  className="btn w-100 rounded-pill py-3 fw-bold btn-hover"
                                  style={{
                                    background: isSpecial
                                      ? "transparent"
                                      : isPopular
                                        ? `linear-gradient(135deg, ${accentColor}, #5b21b6)`
                                        : "white",
                                    color: isSpecial
                                      ? accentColor
                                      : isPopular
                                        ? "white"
                                        : accentColor,
                                    border: isSpecial
                                      ? `1px dashed ${accentColor}`
                                      : isPopular
                                        ? "none"
                                        : `2px solid ${accentColor}`,
                                    boxShadow: isPopular
                                      ? "0 10px 20px rgba(118, 75, 162, 0.25)"
                                      : "none",
                                    fontSize: "14px",
                                    letterSpacing: "0.5px",
                                    transition: "all 0.3s ease",
                                  }}
                                  onMouseOver={(e) => {
                                    if (!isPopular && !isSpecial) {
                                      e.currentTarget.style.background =
                                        accentColor;
                                      e.currentTarget.style.color = "white";
                                    }
                                  }}
                                  onMouseOut={(e) => {
                                    if (!isPopular && !isSpecial) {
                                      e.currentTarget.style.background =
                                        "white";
                                      e.currentTarget.style.color = accentColor;
                                    }
                                  }}
                                >
                                  {paymentLoading &&
                                  currentPlanId === plan._id ? (
                                    <>
                                      <span
                                        className="spinner-border spinner-border-sm me-2"
                                        role="status"
                                        aria-hidden="true"
                                      ></span>
                                      Processing...
                                    </>
                                  ) : (
                                    <>
                                      {isSpecial
                                        ? "Request Pricing"
                                        : "Subscribe Now"}
                                      {!isSpecial && (
                                        <i className="uil uil-arrow-right ms-2" />
                                      )}
                                    </>
                                  )}
                                </button>
                                {isSpecial && (
                                  <p className="text-center text-muted fs-12 mt-2 mb-0">
                                    No credit card required
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-12 text-center mt-5">
                      <div
                        className="alert alert-warning d-inline-block"
                        role="alert"
                      >
                        <i className="uil uil-exclamation-triangle me-2"></i>
                        No pricing plans available at the moment.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Plan Usage Section - Keep as is */}
            <section
              className="section"
              style={{ padding: "60px 0", backgroundColor: "#ffffff" }}
            >
              <div className="container" style={{ maxWidth: "1400px" }}>
                <div className="usage-card-wrapper">
                  <div className="section-header-custom">
                    <span className="usage-icon">⚡</span>
                    <h3 className="mb-0 fw-bold" style={{ color: "#1e293b" }}>
                      Current Plan Usage
                    </h3>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="usage-card">
                        <div className="usage-card-header">
                          <span className="usage-label">
                            Monthly Applications
                          </span>
                          <span className="usage-value">
                            {usage.applications.current} /{" "}
                            {usage.applications.total}
                          </span>
                        </div>
                        <div className="custom-progress-bar">
                          <div
                            className="custom-progress-fill"
                            style={{
                              width: `${getProgressPercentage(
                                usage.applications.current,
                                usage.applications.total,
                              )}%`,
                              backgroundColor: getProgressColor(
                                getProgressPercentage(
                                  usage.applications.current,
                                  usage.applications.total,
                                ),
                              ),
                            }}
                          ></div>
                        </div>
                        <span className="usage-info-text">
                          Resets in {usage.applications.resetDays} days
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="usage-card">
                        <div className="usage-card-header">
                          <span className="usage-label">Profile Views</span>
                          <span className="usage-value">
                            {usage.profileViews.current} /{" "}
                            {usage.profileViews.total}
                          </span>
                        </div>
                        <div className="custom-progress-bar">
                          <div
                            className="custom-progress-fill"
                            style={{
                              width: `${getProgressPercentage(
                                usage.profileViews.current,
                                usage.profileViews.total,
                              )}%`,
                              backgroundColor: "#10b981",
                            }}
                          ></div>
                        </div>
                        <span className="usage-info-text">
                          {usage.profileViews.status}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="usage-card">
                        <div className="usage-card-header">
                          <span className="usage-label">Resume Reviews</span>
                          <span className="usage-value">
                            {usage.resumeReviews.current} /{" "}
                            {usage.resumeReviews.total}
                          </span>
                        </div>
                        <div className="custom-progress-bar">
                          <div
                            className="custom-progress-fill"
                            style={{
                              width: `${getProgressPercentage(
                                usage.resumeReviews.current,
                                usage.resumeReviews.total,
                              )}%`,
                              backgroundColor: "#8b5cf6",
                            }}
                          ></div>
                        </div>
                        <span className="usage-info-text">
                          {usage.resumeReviews.remaining} credits remaining
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section bg-light">
              <div className="container">
                <div className="pricing-counter text-white">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="counter-box mt-3">
                        <div className="counters text-center">
                          <h5 className="counter mb-0">15,000+</h5>
                          <h6 className="fs-16 mt-3">Available Jobs</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="counter-box mt-3">
                        <div className="counters text-center">
                          <h5 className="counter mb-0">7500+</h5>
                          <h6 className="fs-16 mt-3">Applications</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="counter-box mt-3">
                        <div className="counters text-center">
                          <h5 className="counter mb-0">8.85K</h5>
                          <h6 className="fs-16 mt-3">Positive Feedback</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="counter-box mt-3">
                        <div className="counters text-center">
                          <h5 className="counter mb-0">9875</h5>
                          <h6 className="fs-16 mt-3">Members</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
