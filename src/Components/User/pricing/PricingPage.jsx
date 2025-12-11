import React, { useState, useEffect } from "react";
import "./IntegratedPricing.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  bookSubscription,
  getAllCandidatePlans,
} from "../../../api/service/axiosService"; // <-- Removed verifyPayment

const getAuthToken = () => {
  return localStorage.getItem("userId") || localStorage.getItem("token");
};

const getUserDetails = () => {
  return {
    firstName: localStorage.getItem("firstName") || "User",
    email: localStorage.getItem("email") || "user@example.com",
    phone: localStorage.getItem("phone") || "9999999999",
    id: localStorage.getItem("userId"),
  };
};

const PricingPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [currentPlanId, setCurrentPlanId] = useState(null);

  const [usage] = useState({
    applications: { current: 5, total: 20, resetDays: 10 },
    profileViews: { current: 15, total: 50, status: "Active" },
    resumeReviews: { current: 1, total: 3, remaining: 2 },
  });

  /* ======================================================
      🚀 Detect PayU Return (Backend → Frontend redirect)
  ====================================================== */
  useEffect(() => {
    const status = searchParams.get("status");
    const txnid = searchParams.get("txnid");

    if (status && txnid) {
      console.log("PayU Payment Return:", { status, txnid });

      if (status === "success") {
        alert("Payment Successful! Subscription Activated.");
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        alert("Payment failed or cancelled");
      }

      setTimeout(() => {
        navigate("/price-page", { replace: true });
      }, 2500);

      return;
    }

    fetchPricingPlans();
  }, [searchParams]);

  /* ======================================================
      🚀 Fetch Plans
  ====================================================== */
  const fetchPricingPlans = async () => {
    try {
      const response = await getAllCandidatePlans();
      if (response.status === 200) {
        setPlans(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching pricing plans:", error);
      alert("Error loading pricing plans");
    }
    setLoading(false);
  };

  /* ======================================================
      ❌ REMOVE handlePaymentReturn — NOT USED ANYMORE
  ====================================================== */
  // (function removed completely – unused & causing confusion)

  /* ======================================================
      🚀 Start PayU Payment
  ====================================================== */
  const handlePayment = async (plan) => {
    const user = getUserDetails();

    if (!getAuthToken()) {
      return alert("Please login to continue");
    }

    setPaymentLoading(true);
    setCurrentPlanId(plan.id);

    try {
      const response = await bookSubscription(
        user.id,
        plan.id,
        plan.price,
        plan.id,
        user.firstName,
        user.email,
        user.phone
      );

      const paymentData = response.paymentData;

      if (!paymentData?.hash || !paymentData?.txnid) {
        throw new Error("Invalid PayU order response");
      }

      submitPayUForm(paymentData);
    } catch (error) {
      console.error("Payment Start Error:", error);
      alert("Unable to start payment");
      setPaymentLoading(false);
      setCurrentPlanId(null);
    }
  };

  /* ======================================================
      🚀 Submit Form to PayU
  ====================================================== */
  const submitPayUForm = (paymentData) => {
    let payuUrl = paymentData.payuBaseUrl.replace(/\/$/, "") + "/_payment";

    // Ensure we point to the Backend API, not Frontend
    const backendBaseUrl = (
      import.meta.env.VITE_BASE_ROUTE_JOBSTORM || ""
    ).replace(/\/$/, "");

    const params = {
      key: paymentData.key,
      txnid: paymentData.txnid,
      amount: paymentData.amount,
      productinfo: paymentData.productinfo,
      firstname: paymentData.firstname,
      email: paymentData.email,
      phone: paymentData.phone,
      surl: `${backendBaseUrl}/payment/payu/success`,
      furl: `${backendBaseUrl}/payment/payu/failure`,
      hash: paymentData.hash,
      service_provider: "payu_paisa",
      udf1: paymentData.udf1, // Using value from backend response
      udf2: "",
      udf3: "",
      udf4: "",
      udf5: "",
    };

    const form = document.createElement("form");
    form.method = "POST";
    form.action = payuUrl;

    Object.keys(params).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = params[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  /* ======================================================
      UI BELOW — NO CHANGES AT ALL
  ====================================================== */

  const getProgressPercentage = (current, total) => (current / total) * 100;

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return "#ef4444";
    if (percentage >= 50) return "#f59e0b";
    return "#8b5cf6";
  };

  return (
    <>
      {/* Payment Loading Overlay */}
      {paymentLoading && (
        <div className="payment-loading-overlay">
          <div className="payment-loading-spinner">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Processing payment...</span>
            </div>
            <p className="mt-3">Redirecting to payment gateway...</p>
            {currentPlanId && (
              <p className="text-muted">Plan: {currentPlanId}</p>
            )}
          </div>
        </div>
      )}

      <div>
        <div className="main-content">
          <div className="page-content">
            {/* Page Title */}
            <section className="page-title-box">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="text-center text-white">
                      <h3 className="mb-4">Pricing & Plans</h3>
                      <div className="page-next">
                        <nav
                          className="d-inline-block"
                          aria-label="breadcrumb text-center"
                        >
                          <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item">
                              <a href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="javascript:void(0)">Company</a>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              Pricing
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Shape */}
            <div className="position-relative" style={{ zIndex: 1 }}>
              <div className="shape">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                  <path
                    fill=""
                    fillOpacity={1}
                    d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  />
                </svg>
              </div>
            </div>

            {/* Pricing Plans */}
            <section className="section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="text-center">
                      <h3>Pricing & Plans</h3>
                      <p className="text-muted">
                        With lots of unique blocks, you can easily build a page
                        without coding. Build your next consultancy website
                        within few minutes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  {loading ? (
                    <div className="col-12 text-center mt-5">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : plans.length > 0 ? (
                    plans.map((plan) => (
                      <div key={plan.id} className="col-lg-4 col-md-6 mt-4">
                        <div
                          className="pricing-box card bg-white border-0 shadow-sm h-100"
                          style={{ borderRadius: "12px" }}
                        >
                          <div className="card-body p-4">
                            <div className="pricing-name mb-3">
                              <h6 className="text-uppercase fw-bold text-primary mb-0">
                                {plan.name}
                              </h6>
                            </div>

                            <div className="pricing-price">
                              {plan.isCustom || plan.id === "special" ? (
                                <h2 className="fw-bold text-dark mb-0">
                                  Custom Price{" "}
                                  <span className="fs-16 text-muted fw-normal">
                                    / month
                                  </span>
                                </h2>
                              ) : (
                                <h2 className="fw-bold text-dark mb-0">
                                  ₹
                                  {plan.price
                                    ? plan.price.toLocaleString("en-IN")
                                    : 0}{" "}
                                  <span className="text-dark">+ GST</span>
                                  <span className="fs-16 text-muted fw-normal">
                                    {plan.validity ? ` / ${plan.validity}` : ""}
                                  </span>
                                </h2>
                              )}
                              <p className="text-muted fs-13 mb-0">
                                {plan.billingType === "monthly"
                                  ? "billed monthly"
                                  : "billed One time"}
                              </p>
                            </div>

                            <hr className="my-4" style={{ opacity: 0.1 }} />

                            <ul className="list-unstyled pricing-details text-muted">
                              {plan.features && Array.isArray(plan.features)
                                ? plan.features.map((feature, index) => (
                                    <li
                                      key={index}
                                      className="pricing-item d-flex align-items-center mb-3"
                                    >
                                      <i className="uil uil-check text-success fs-18 me-2" />
                                      <span>{feature}</span>
                                    </li>
                                  ))
                                : plan.featuresList &&
                                  Array.isArray(plan.featuresList)
                                ? plan.featuresList.map((feature, index) => (
                                    <li
                                      key={index}
                                      className="pricing-item d-flex align-items-center mb-3"
                                    >
                                      <i
                                        className={`uil ${
                                          feature.included
                                            ? "uil-check text-success"
                                            : "uil-times text-muted"
                                        } fs-18 me-2`}
                                      />
                                      <span>{feature.text}</span>
                                    </li>
                                  ))
                                : null}
                            </ul>

                            <div className="mt-auto pt-3">
                              <button
                                onClick={() => handlePayment(plan)}
                                disabled={
                                  paymentLoading && currentPlanId === plan.id
                                }
                                className={`btn w-100 ${
                                  plan.isCustom || plan.id === "special"
                                    ? "btn-soft-primary"
                                    : "btn-primary"
                                } rounded-pill py-2 fw-medium`}
                              >
                                {paymentLoading && currentPlanId === plan.id ? (
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
                                    {plan.isCustom || plan.id === "special"
                                      ? "Request Us"
                                      : "Subscribe Now"}
                                    {!(
                                      plan.isCustom || plan.id === "special"
                                    ) && (
                                      <i className="uil uil-arrow-right ms-1" />
                                    )}
                                  </>
                                )}
                              </button>
                              {(plan.isCustom || plan.id === "special") && (
                                <p className="text-center text-muted fs-12 mt-2 mb-0">
                                  No credit card required
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12 text-center mt-5">
                      <div
                        className="alert alert-warning d-inline-block"
                        role="alert"
                      >
                        <i className="uil uil-exclamation-triangle me-2"></i>
                        No pricing plans available at the moment. Please check
                        back later or contact support.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Plan Usage Section */}
            <section className="section pt-2">
              <div className="container">
                <div className="usage-card-wrapper">
                  <div className="section-header-custom">
                    <span className="usage-icon">⚡</span>
                    <h4 className="mb-0">Current Plan Usage</h4>
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
                                usage.applications.total
                              )}%`,
                              backgroundColor: getProgressColor(
                                getProgressPercentage(
                                  usage.applications.current,
                                  usage.applications.total
                                )
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
                                usage.profileViews.total
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
                                usage.resumeReviews.total
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

            {/* CTA Section */}
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
