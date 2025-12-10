import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("processing");
  const [details, setDetails] = useState({});

  useEffect(() => {
    // PayU sends data via POST usually, but for local testing sometimes it comes as query params
    // depending on integration. However, standard PayU POSTs to the URL.
    // If it's a POST response, React Router won't catch the body directly on client-side navigation
    // unless the backend redirects with query params.

    // IF your backend 'furl'/'surl' redirects to frontend with query params:
    const txnid = searchParams.get("txnid");
    const amount = searchParams.get("amount");
    const statusParam = searchParams.get("status");
    const error = searchParams.get("error"); // Custom param if your backend adds it

    if (statusParam === "success") {
      setStatus("success");
    } else if (statusParam === "failure") {
      setStatus("failure");
    } else {
      // If no params, it might be a direct POST to this URL from PayU (which 404s in pure React dev server usually)
      // OR the backend redirected without params.
      setStatus("unknown");
    }

    setDetails({ txnid, amount, error });
  }, [searchParams]);

  return (
    <div className="container mt-5 pt-5 text-center">
      <div className="card shadow p-5 mx-auto" style={{ maxWidth: "600px" }}>
        {status === "success" && (
          <>
            <i
              className="uil uil-check-circle text-success"
              style={{ fontSize: "5rem" }}
            ></i>
            <h2 className="mt-3 text-success">Payment Successful!</h2>
            <p className="text-muted">Thank you for your subscription.</p>
            {details.txnid && (
              <p>
                Transaction ID: <strong>{details.txnid}</strong>
              </p>
            )}
            <button
              className="btn btn-primary mt-4"
              onClick={() => navigate("/my-profile")}
            >
              Go to Dashboard
            </button>
          </>
        )}

        {status === "failure" && (
          <>
            <i
              className="uil uil-times-circle text-danger"
              style={{ fontSize: "5rem" }}
            ></i>
            <h2 className="mt-3 text-danger">Payment Failed</h2>
            <p className="text-muted">
              Unfortunately, your transaction could not be processed.
            </p>
            {details.error && <p className="text-danger">{details.error}</p>}
            {details.txnid && (
              <p>
                Transaction ID: <strong>{details.txnid}</strong>
              </p>
            )}
            <button
              className="btn btn-secondary mt-4"
              onClick={() => navigate("/price-page")}
            >
              Try Again
            </button>
          </>
        )}

        {status === "unknown" && (
          <>
            <i
              className="uil uil-question-circle text-warning"
              style={{ fontSize: "5rem" }}
            ></i>
            <h2 className="mt-3">Payment Status Unknown</h2>
            <p>
              We received a callback but couldn't determine the status. Please
              check your dashboard.
            </p>
            <button
              className="btn btn-primary mt-4"
              onClick={() => navigate("/my-profile")}
            >
              Check Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentStatus;
