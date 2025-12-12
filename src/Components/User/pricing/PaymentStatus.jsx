// cspell:ignore txnid
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./PaymentStatus.css";
import { postPaymentStatus } from "../../../api/service/axiosService";

const PaymentSuccess = () => {
  const userId = localStorage.getItem("userId");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  const txnid = searchParams.get("txnid");
  const amount = searchParams.get("amount");
  const planType = searchParams.get("planType") || searchParams.get("planId");
  const status = searchParams.get("status") || "success";
  const employeeId = searchParams.get("employeeId") || userId;

  useEffect(() => {
    // only run once when component mounts and when txnid exists
    const postData = async () => {
      try {
        // post a single well-formed payload
        await postPaymentStatus(
          txnid,
          amount,
          planType,
          status,
          employeeId,
        );
      } catch (e) {
        console.error("postPaymentStatus error:", e);
      }
    };
    postData();
  }, [txnid, employeeId, planType, amount, status, navigate]);

  return (
    <div className="payment-status-container">
      <div className="payment-status-card success">
        <div className="status-icon success-icon">
          <i className="uil uil-check-circle"></i>
        </div>

        <h1 className="status-title">Payment Successful!</h1>

        <p className="status-message">
          Your subscription has been activated successfully.
        </p>

        <div className="payment-details">
          {txnid && (
            <div className="detail-row">
              <span className="detail-label">Transaction ID:</span>
              <span className="detail-value">{txnid}</span>
            </div>
          )}
          {amount && (
            <div className="detail-row">
              <span className="detail-label">Amount Paid:</span>
              <span className="detail-value">₹{amount}</span>
            </div>
          )}
          {planType && (
            <div className="detail-row">
              <span className="detail-label">Plan:</span>
              <span className="detail-value">{planType}</span>
            </div>
          )}
        </div>

        <div className="status-actions">
          <button
            onClick={() => navigate("/my-profile")}
            className="btn btn-primary btn-lg"
          >
            Go to Dashboard
          </button>
          <button
            onClick={() => navigate("/transaction-history")}
            className="btn btn-outline-secondary btn-lg"
          >
            View Transaction History
          </button>
        </div>

        <p className="redirect-info">
          Redirecting to dashboard in {countdown} seconds...
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
