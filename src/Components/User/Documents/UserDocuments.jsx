import React, { useState, useEffect, useCallback } from "react";
import {
  Upload,
  HardDrive,
  FileText,
  File,
  Search,
  Eye,
  Download,
  Trash2,
} from "lucide-react";
import "./userdocuments.css";
import { getUserDetails } from "../../../api/service/axiosService";

const UserDocuments = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const userId = localStorage.getItem("userId");

  const fetchUserData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getUserDetails(userId);
      if (res.status === 200) {
        setUserData(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching user docs:", error);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) fetchUserData();
  }, [userId, fetchUserData]);

  const getFileUrl = (url) => {
    if (!url) return "#";
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    const baseUrl =
      import.meta.env.VITE_BASE_ROUTE_JOBSTORM || "http://localhost:4000";
    return `${baseUrl}${url}`;
  };

  const documents = userData
    ? [
        {
          id: "pass",
          name: "Passport",
          file: userData.passport,
          category: "Other",
          type: "PDF",
          size: "2.4 MB",
          date: userData.updatedAt,
        },
        {
          id: "pcc",
          name: "Police Clearance",
          file: userData.policeClearance,
          category: "Other",
          type: "PDF",
          size: "1.1 MB",
          date: userData.updatedAt,
        },
        {
          id: "edu",
          name: "Degree Certificate",
          file: userData.educationCertificate,
          category: "Certificate",
          type: "PDF",
          size: "3.5 MB",
          date: userData.updatedAt,
        },
        {
          id: "res",
          name: "Resume",
          file: userData.resume,
          category: "Resume",
          type: "PDF",
          size: "1.8 MB",
          date: userData.updatedAt,
        },
        {
          id: "cov",
          name: "Cover Letter",
          file: userData.coverLetterFile,
          category: "Cover Letter",
          type: "PDF",
          size: "0.9 MB",
          date: userData.updatedAt,
        },
        {
          id: "mofa",
          name: "MOFA Attestation",
          file: userData.mofaAttestation,
          category: "Other",
          type: "PDF",
          size: "2.1 MB",
          date: userData.updatedAt,
        },
      ].filter((doc) => doc.file && doc.file.url)
    : [];

  const filteredDocs = documents.filter((doc) => {
    const matchesTab = activeTab === "All" || doc.category === activeTab;
    const matchesSearch = doc.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const TABS = ["All", "Resume", "Cover Letter", "Certificate", "Other"];

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="docs-page-container">
      {/* Header */}
      <div className="docs-header-wrapper">
        <div className="docs-title-section">
          <h2>My Documents</h2>
          <p>Manage your resumes, cover letters, and certificates.</p>
        </div>
        <button
          className="docs-upload-btn"
          onClick={() => (window.location.href = "/user-dashboard/my-profile")}
        >
          <Upload size={16} /> Update Profile
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="docs-metrics-layout">
        <div className="doc-metric-card storage-card-bg">
          <div className="storage-icon-box">
            <HardDrive size={22} color="white" />
          </div>
          <div className="storage-data-stack">
            <span className="storage-lbl">Profile Readiness</span>
            <span className="storage-val">
              {Math.round((documents.length / 6) * 100)}%{" "}
              <span className="storage-total">Completed</span>
            </span>
          </div>
          <div className="storage-track">
            <div
              className="storage-fill"
              style={{ width: `${(documents.length / 6) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="doc-metric-card standard-card">
          <div className="metric-icon-box total-files-icon">
            <FileText size={22} color="#10b981" />
          </div>
          <div className="metric-data-stack">
            <span className="metric-lbl">Total Files</span>
            <span className="metric-val">{documents.length}</span>
          </div>
        </div>

        <div className="doc-metric-card standard-card">
          <div className="metric-icon-box most-recent-icon">
            <File size={22} color="#f59e0b" />
          </div>
          <div className="metric-data-stack">
            <span className="metric-lbl">Most Recent</span>
            <span className="metric-val text-truncate">
              {documents.length > 0 ? documents[0].name : "None"}
            </span>
          </div>
        </div>
      </div>

      {/* Document List View */}
      <div className="docs-list-card">
        <div className="docs-list-header">
          <div className="docs-tabs-group">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`docs-tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="docs-search-wrapper">
            <Search size={16} className="docs-search-icon" />
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-indigo" role="status"></div>
            <p className="mt-2 text-muted">Fetching your documents...</p>
          </div>
        ) : filteredDocs.length === 0 ? (
          <div className="text-center py-5">
            <FileText size={48} color="#cbd5e1" className="mb-3" />
            <p className="text-muted">
              No documents found matching your criteria.
            </p>
          </div>
        ) : (
          <>
            {/* Document List - Table View (Hidden on mobile) */}
            <div className="docs-table-responsive d-none d-md-block">
              <table className="docs-data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Size</th>
                    <th>Last Updated</th>
                    <th className="docs-act-th">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDocs.map((doc) => (
                    <tr key={doc.id}>
                      <td>
                        <div className="docs-name-cell">
                          <div className="docs-pdf-icon-box">
                            <FileText size={20} color="#ef4444" />
                          </div>
                          <div className="docs-name-meta">
                            <span
                              className="doc-filename"
                              onClick={() =>
                                window.open(getFileUrl(doc.file?.url), "_blank")
                              }
                            >
                              {doc.name}
                            </span>
                            <span className="doc-fileext">{doc.type}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="doc-type-badge">{doc.category}</span>
                      </td>
                      <td className="doc-cell-text">{doc.size}</td>
                      <td className="doc-cell-text">{formatDate(doc.date)}</td>
                      <td className="docs-act-td">
                        <button
                          className="doc-act-btn"
                          title="View"
                          onClick={() =>
                            window.open(getFileUrl(doc.file?.url), "_blank")
                          }
                        >
                          <Eye size={16} />
                        </button>
                        <a
                          href={getFileUrl(doc.file?.url)}
                          download
                          className="doc-act-btn"
                          title="Download"
                        >
                          <Download size={16} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Document List - Mobile Card View */}
            <div className="mobile-doc-list d-block d-md-none">
              {filteredDocs.map((doc) => (
                <div key={doc.id} className="doc-mobile-card">
                  <div className="doc-mobile-top">
                    <div className="doc-mobile-info">
                      <div
                        className="docs-pdf-icon-box"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <FileText size={20} color="#ef4444" />
                      </div>
                      <div className="docs-name-meta">
                        <span
                          className="doc-filename text-break"
                          onClick={() =>
                            window.open(getFileUrl(doc.file?.url), "_blank")
                          }
                        >
                          {doc.name}
                        </span>
                        <span className="doc-fileext">{doc.type}</span>
                      </div>
                    </div>
                    <span className="doc-type-badge">{doc.category}</span>
                  </div>

                  <div className="doc-mobile-meta">
                    <div className="doc-mobile-meta-item">
                      <span className="m-lbl">Size</span>
                      <span className="m-val">{doc.size}</span>
                    </div>
                    <div className="doc-mobile-meta-item text-end">
                      <span className="m-lbl">Updated</span>
                      <span className="m-val">{formatDate(doc.date)}</span>
                    </div>
                  </div>

                  <div className="doc-mobile-actions">
                    <button
                      className="mobile-act-btn"
                      onClick={() =>
                        window.open(getFileUrl(doc.file?.url), "_blank")
                      }
                    >
                      <Eye size={18} />
                    </button>
                    <a
                      href={getFileUrl(doc.file?.url)}
                      download
                      className="mobile-act-btn"
                    >
                      <Download size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDocuments;
