import React, { useState, useEffect } from "react";
import "./IntegratedPricing.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  bookSubscription,
  getAllCandidatePlans,
  verifyPayment,
} from "../../../api/service/axiosService";

// Helper functions (remain unchanged)
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
  const [currentTxnId, setCurrentTxnId] = useState(null);

  const [usage] = useState({
    applications: { current: 12, total: 50, resetDays: 14 },
    profileViews: { current: 45, total: 100, status: "Good visibility!" },
    resumeReviews: { current: 1, total: 3, remaining: 2 },
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // --- Core Logic for PayU Return ---
  useEffect(() => {
    fetchPricingPlans();

    // Check if returning from PayU
    const status = searchParams.get("status");
    const txnid = searchParams.get("txnid");
    const hash = searchParams.get("hash");
    const amount = searchParams.get("amount");

    // CRITICAL CHECK: Only trigger payment return if we have enough data to verify
    if (status && txnid && hash && amount) {
      handlePaymentReturn();
    } 
    // Handle failure status, cancellation, or internal error without full payload
    else if (status === 'failure' || status === 'cancelled' || searchParams.get("error")) {
        console.log("Payment failure or cancellation detected with minimal parameters.");
        // We clean the URL to prevent subsequent unnecessary checks
        navigate("/price-page", { replace: true }); 
    }
  }, [searchParams]);

  const fetchPricingPlans = async () => {
    try {
      const response = await getAllCandidatePlans();
      if (response.status === 200 && response.data?.data) {
        setPlans(response.data.data);
      } else {
        // Handle scenario where API succeeds but returns no data
        setPlans([]); 
      }
    } catch (error) {
      console.error("Error fetching pricing plans:", error);
      setPlans([]); // Set to empty array on fetch error
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentReturn = async () => {
    console.log("🔙 Payment return detected. Starting Verification...");
    setPaymentLoading(true);

    const params = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    const storedPlanId = localStorage.getItem("pending_payment_plan");
    const status = params.status;

    try {
        if (!storedPlanId) {
             throw new Error("Missing plan data in local storage. Cannot verify subscription.");
        }

        if (status === "success") {
            await verifyAndActivateSubscription(params, storedPlanId);
        } else if (status === "failure" || status === "cancelled") {
            const errorMessage = params.errorMessage || `Payment ${status}. Please try again.`;
            showNotification(errorMessage, "error");
        } 

    } catch (error) {
      console.error("❌ Error handling payment return:", error);
      showNotification(`Payment process error: ${error.message}`, "error");
    } finally {
      setPaymentLoading(false);
      // Always clean the URL parameters to prevent re-triggering
      navigate("/price-page", { replace: true });
    }
  };

  const verifyAndActivateSubscription = async (paymentResponse, storedPlanId) => {
    try {
      console.log("🔍 Verifying payment with backend...");
      const user = getUserDetails();

      const verifyData = {
        txnid: paymentResponse.txnid,
        status: paymentResponse.status,
        hash: paymentResponse.hash, 
        amount: paymentResponse.amount, 
        productinfo: paymentResponse.productinfo || "",
        firstname: paymentResponse.firstname || "",
        email: paymentResponse.email || "",
        employeeId: user.id, 
        planType: storedPlanId, 
        // Forward UDFs for backend hash verification consistency
        udf1: paymentResponse.udf1 || "", 
        udf2: paymentResponse.udf2 || "", 
        udf3: paymentResponse.udf3 || "", 
        udf4: paymentResponse.udf4 || "", 
        udf5: paymentResponse.udf5 || "", 
      };

      // CRITICAL DATA CHECK
      if (!verifyData.txnid || !verifyData.hash || !verifyData.employeeId || !verifyData.planType) {
           throw new Error("Critical payment details missing for server verification.");
      }

      console.log("📤 Verification request:", verifyData);

      const response = await verifyPayment(verifyData);

      console.log("📥 Verification response:", response);

      if (response.success) {
        localStorage.removeItem("pending_payment_plan");
        localStorage.removeItem("pending_payment_txn");

        showNotification(
          `${paymentResponse.productinfo || "Plan"} activated successfully!`,
          "success"
        );

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        throw new Error(response.error || "Verification failed on the server.");
      }
    } catch (error) {
      console.error("❌ Verification API Error:", error);
      // Re-throw the error so handlePaymentReturn can catch and notify/cleanup
      throw error; 
    }
  };

  const handlePayment = async (plan) => {
    const user = getUserDetails();
    const token = getAuthToken();

    if (!token) {
      showNotification("Please login to purchase a plan", "error");
      return;
    }

    if (plan.isCustom || plan.id === "special") {
      navigate("/contact-us");
      return;
    }

    setPaymentLoading(true);
    setCurrentPlanId(plan.id);

    try {
      console.log("🛒 Starting payment for plan:", plan.id);

      const orderResponse = await bookSubscription(
        user.id || user._id,
        plan.id,
        plan.totalAmount || plan.price,
        plan.id,
        user.firstName,
        user.email,
        user.phone
      );

      console.log("📦 Order response:", orderResponse);
      const { paymentData, order } = orderResponse;

      if (
        !paymentData ||
        !paymentData.key ||
        !paymentData.hash ||
        !paymentData.txnid
      ) {
        throw new Error("Missing payment parameters from backend");
      }

      // Store for verification later
      localStorage.setItem("pending_payment_plan", plan.id);
      localStorage.setItem("pending_payment_txn", paymentData.txnid);
      setCurrentTxnId(paymentData.txnid);

      // SURL/FURL are provided by the backend, which PayU POSTs to
      const successUrl = paymentData.surl; 
      const failureUrl = paymentData.furl; 

      console.log("Using Backend SURL:", successUrl);
      console.log("Using Backend FURL:", failureUrl);

      // Submit form to PayU
      submitPayUForm(paymentData, successUrl, failureUrl);
    } catch (error) {
      console.error("❌ Payment initiation error:", error);
      showNotification(`Payment failed: ${error.message}`, "error");
      setPaymentLoading(false);
    }
  };

  const submitPayUForm = (paymentData, successUrl, failureUrl) => {
    let payuUrl = paymentData.payuBaseUrl || "https://test.payu.in";

    if (!payuUrl.endsWith("/_payment")) {
      payuUrl = payuUrl.replace(/\/$/, "") + "/_payment";
    }

    console.log("🚀 Submitting form to PayU:", payuUrl);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = payuUrl;

    const params = {
      key: paymentData.key,
      txnid: paymentData.txnid,
      amount: paymentData.amount,
      productinfo: paymentData.productinfo,
      firstname: paymentData.firstname,
      email: paymentData.email,
      phone: paymentData.phone || "",
      surl: successUrl,
      furl: failureUrl,
      hash: paymentData.hash,
      service_provider: paymentData.service_provider || "payu_paisa",
      // Include optional UDF fields as empty strings for consistent hash matching
      udf1: paymentData.udf1 || "",
      udf2: paymentData.udf2 || "",
      udf3: paymentData.udf3 || "",
      udf4: paymentData.udf4 || "",
      udf5: paymentData.udf5 || "",
    };

    console.log("📋 Form params:", params);

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

  const showNotification = (message, type = "info") => {
    console.log(`[Notification ${type.toUpperCase()}]: ${message}`);
    alert(message);
  };

  const getProgressPercentage = (current, total) => {
    return (current / total) * 100;
  };

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
            <p className="mt-3">Processing your payment...</p>
          </div>
        </div>
      )}

      {/* Main Content JSX */}
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
                              {/* Consolidated feature rendering logic */}
                              {(plan.features || plan.featuresList)?.map((feature, index) => (
                                    <li
                                      key={index}
                                      className="pricing-item d-flex align-items-center mb-3"
                                    >
                                      <i
                                        className={`uil ${
                                          (feature.included === false)
                                            ? "uil-times text-muted"
                                            : "uil-check text-success"
                                        } fs-18 me-2`}
                                      />
                                      <span>{feature.text || feature}</span>
                                    </li>
                                  ))}
                            </ul>

                            <div className="mt-auto pt-3">
                              <button
                                onClick={() => handlePayment(plan)}
                                disabled={paymentLoading}
                                className={`btn w-100 ${
                                  plan.isCustom || plan.id === "special"
                                    ? "btn-soft-primary"
                                    : "btn-primary"
                                } rounded-pill py-2 fw-medium`}
                              >
                                {paymentLoading ? (
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
                    <div className="col-12 text-center mt-5">No plans available at this time.</div>
                  )}
                </div>
              </div>
            </section>

            {/* Plan Usage Section - Remaing JSX as provided */}
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