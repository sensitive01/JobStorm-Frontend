import React, { useEffect, useState } from "react";
import { clearAllTransactions, getMyTransactionHistory } from "../../../api/service/axiosService";
// import "./TransactionHistory.css";

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

    const handleClearAll = async () => {
        if (window.confirm("Are you sure you want to clear your transaction history view?")) {
            const response = await clearAllTransactions(userId);
        }
    };

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
    const currentTransactions = transactions.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(transactions.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="main-content">
            <div className="page-content">
                <section className="page-title-box">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="text-center text-white">
                                    <h3 className="mb-4">Transaction History</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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

                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card shadow-sm border-0 rounded-3">
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <h5 className="card-title mb-0">My Transactions</h5>
                                            {/* {transactions.length > 0 && (
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={handleClearAll}
                                                >
                                                    <i className="uil uil-trash-alt me-1"></i> Clear All
                                                </button>
                                            )} */}
                                        </div>

                                        {loading ? (
                                            <div className="text-center py-5">
                                                <div className="spinner-border text-primary" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        ) : transactions.length > 0 ? (
                                            <>
                                                <div className="table-responsive">
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
                                                                    <td>
                                                                        {indexOfFirstItem + index + 1}
                                                                    </td>
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

                                                {/* Pagination Controls */}
                                                {totalPages > 1 && (
                                                    <div className="row align-items-center justify-content-between mt-4">
                                                        <div className="col-auto">
                                                            <p className="mb-0 text-muted fs-14">
                                                                Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, transactions.length)} of {transactions.length} entries
                                                            </p>
                                                        </div>
                                                        <div className="col-auto">
                                                            <nav aria-label="Page navigation">
                                                                <ul className="pagination mb-0">
                                                                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
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
                                                                            const endPage = Math.min(totalPages - 1, currentPage + 1);

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
                                                                                className={`page-item ${number === currentPage ? "active" : ""
                                                                                    } ${number === "..." ? "disabled" : ""}`}
                                                                            >
                                                                                <button
                                                                                    className="page-link"
                                                                                    onClick={() =>
                                                                                        number !== "..." && paginate(number)
                                                                                    }
                                                                                    style={{
                                                                                        pointerEvents: number === "..." ? "none" : "auto",
                                                                                    }}
                                                                                >
                                                                                    {number}
                                                                                </button>
                                                                            </li>
                                                                        ));
                                                                    })()}
                                                                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
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
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TransactionHistory;