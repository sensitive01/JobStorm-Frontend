import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./PaymentStatus.css";

const PaymentFailure = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const txnid = searchParams.get("txnid");
  const error = searchParams.get("error");
  const status = searchParams.get("status");

  const getErrorMessage = () => {
    if (error) return error;
    if (status === "cancelled") return "Payment was cancelled";
    return "Payment failed. Please try again.";
  };

  return (
    <div className="payment-status-container">
      <div className="payment-status-card failure">
        <div className="status-icon failure-icon">
          <i className="uil uil-times-circle"></i>
        </div>

        <h1 className="status-title">Payment Failed</h1>

        <p className="status-message">{getErrorMessage()}</p>

        <div className="payment-details">
          {txnid && (
            <div className="detail-row">
              <span className="detail-label">Transaction ID:</span>
              <span className="detail-value">{txnid}</span>
            </div>
          )}
          {status && (
            <div className="detail-row">
              <span className="detail-label">Status:</span>
              <span className="detail-value">{status}</span>
            </div>
          )}
        </div>

        <div className="status-actions">
          <button
            onClick={() => navigate("/price-page")}
            className="btn btn-primary btn-lg"
          >
            Try Again
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="btn btn-outline-secondary btn-lg"
          >
            Go to Dashboard
          </button>
        </div>

        <div className="help-section">
          <p className="help-text">
            Need help? <a href="/contact">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
