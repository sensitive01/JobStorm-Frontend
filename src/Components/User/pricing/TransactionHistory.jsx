import React, { useEffect, useState } from "react";
import { getMyTransactionHistory } from "../../../api/service/axiosService";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  const userId = localStorage.getItem("userId");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyTransactionHistory(userId);
        console.log("Transaction History Response:", response);
        if (response.status === 200) {
          // Handle various response structures: response.data.data or just response.data
          const data = response.data.data || response.data || [];
          setTransactions(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  /*
  const handleClearAll = async () => {
    if (
      window.confirm(
        "Are you sure you want to clear your transaction history view?",
      )
    ) {
      const response = await clearAllTransactions(userId);
    }
  };
*/

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "success":
      case "active":
        return "badge bg-success";
      case "failure":
      case "failed":
        return "badge bg-danger";
      case "pending":
      case "created":
        return "badge bg-warning text-dark";
      default:
        return "badge bg-secondary";
    }
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="card shadow-sm border-0 rounded-3 transaction-history-card">
      <div className="card-body p-3 p-lg-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="card-title mb-0">My Transactions</h5>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : transactions.length > 0 ? (
          <>
            {/* Desktop Table View */}
            <div className="table-responsive d-none d-md-block">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Order ID</th>
                    <th scope="col">Plan</th>
                    <th scope="col">Date & Time</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTransactions.map((txn, index) => (
                    <tr key={txn._id}>
                      <td>{indexOfFirstItem + index + 1}</td>
                      <td className="fw-medium text-primary">
                        {txn.orderId || "N/A"}
                      </td>
                      <td className="text-uppercase">
                        {txn.planType || "N/A"}
                      </td>
                      <td>{formatDate(txn.createdAt)}</td>
                      <td className="fw-bold">
                        {txn.amount
                          ? `₹${txn.amount.toLocaleString("en-IN")}`
                          : "0"}
                      </td>
                      <td>
                        <span className={getStatusBadge(txn.status)}>
                          {txn.status || "Unknown"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="d-block d-md-none mobile-transaction-list">
              {currentTransactions.map((txn, index) => (
                <div
                  key={txn._id}
                  className="transaction-mobile-card mb-3 p-3 border rounded-3 shadow-sm bg-white"
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-muted small">
                      #{indexOfFirstItem + index + 1}
                    </span>
                    <span className={getStatusBadge(txn.status)}>
                      {txn.status || "Unknown"}
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className="text-muted small mb-1">Order ID</div>
                    <div className="fw-medium text-primary text-break">
                      {txn.orderId || "N/A"}
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="text-muted small mb-1">Plan</div>
                      <div className="text-uppercase fw-semibold">
                        {txn.planType || "N/A"}
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <div className="text-muted small mb-1">Amount</div>
                      <div className="fw-bold h6 mb-0">
                        {txn.amount
                          ? `₹${txn.amount.toLocaleString("en-IN")}`
                          : "0"}
                      </div>
                    </div>
                  </div>
                  <hr className="my-2 opacity-10" />
                  <div className="text-muted small">
                    <i className="mdi mdi-calendar-clock me-1"></i>
                    {formatDate(txn.createdAt)}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="row align-items-center justify-content-between mt-4">
                <div className="col-auto">
                  <p className="mb-0 text-muted fs-14">
                    Showing {indexOfFirstItem + 1} to{" "}
                    {Math.min(indexOfLastItem, transactions.length)} of{" "}
                    {transactions.length} entries
                  </p>
                </div>
                <div className="col-auto">
                  <nav aria-label="Page navigation">
                    <ul className="pagination mb-0">
                      <li
                        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                      >
                        <button
                          className="page-link"
                          onClick={() => paginate(currentPage - 1)}
                        >
                          <i className="mdi mdi-chevron-left" />
                        </button>
                      </li>

                      {(() => {
                        const pageNumbers = [];
                        const maxVisiblePages = 5;

                        if (totalPages <= maxVisiblePages) {
                          for (let i = 1; i <= totalPages; i++) {
                            pageNumbers.push(i);
                          }
                        } else {
                          // Always include first page, last page, current page, and neighbors
                          const startPage = Math.max(2, currentPage - 1);
                          const endPage = Math.min(
                            totalPages - 1,
                            currentPage + 1,
                          );

                          pageNumbers.push(1);
                          if (startPage > 2) pageNumbers.push("...");

                          for (let i = startPage; i <= endPage; i++) {
                            pageNumbers.push(i);
                          }

                          if (endPage < totalPages - 1) pageNumbers.push("...");
                          pageNumbers.push(totalPages);
                        }

                        return pageNumbers.map((number, index) => (
                          <li
                            key={index}
                            className={`page-item ${
                              number === currentPage ? "active" : ""
                            } ${number === "..." ? "disabled" : ""}`}
                          >
                            <button
                              className="page-link"
                              onClick={() =>
                                number !== "..." && paginate(number)
                              }
                              style={{
                                pointerEvents:
                                  number === "..." ? "none" : "auto",
                              }}
                            >
                              {number}
                            </button>
                          </li>
                        ));
                      })()}
                      <li
                        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                      >
                        <button
                          className="page-link"
                          onClick={() => paginate(currentPage + 1)}
                        >
                          <i className="mdi mdi-chevron-right" />
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-5 text-muted">
            <i className="uil uil-receipt fs-1 d-block mb-3"></i>
            <p>No transactions found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
