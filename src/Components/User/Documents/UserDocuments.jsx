import React, { useState } from "react";
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

const MOCK_DOCS = [
  {
    id: 1,
    name: "John_Doe_Resume_2025.pdf",
    type: "PDF",
    category: "Resume",
    size: "2.4 MB",
    date: "Oct 24, 2025",
  },
  {
    id: 2,
    name: "John_Doe_CV_Creative.pdf",
    type: "PDF",
    category: "Resume",
    size: "3.1 MB",
    date: "Jul 12, 2025",
  },
];

const UserDocuments = () => {
  const [activeTab, setActiveTab] = useState("Resume");

  const TABS = ["All", "Resume", "Cover Letter", "Certificate", "Other"];

  return (
    <div className="docs-page-container">
      {/* Header */}
      <div className="docs-header-wrapper">
        <div className="docs-title-section">
          <h2>My Documents</h2>
          <p>Manage your resumes, cover letters, and certificates.</p>
        </div>
        <button className="docs-upload-btn">
          <Upload size={16} /> Upload New
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="docs-metrics-layout">
        <div className="doc-metric-card storage-card-bg">
          <div className="storage-icon-box">
            <HardDrive size={22} color="white" />
          </div>
          <div className="storage-data-stack">
            <span className="storage-lbl">Storage Used</span>
            <span className="storage-val">
              26.6 MB <span className="storage-total">/ 500 MB</span>
            </span>
          </div>
          <div className="storage-track">
            <div className="storage-fill" style={{ width: "5.32%" }}></div>
            <div className="storage-knob" style={{ left: "5.32%" }}></div>
          </div>
        </div>

        <div className="doc-metric-card standard-card">
          <div className="metric-icon-box total-files-icon">
            <FileText size={22} color="#10b981" />
          </div>
          <div className="metric-data-stack">
            <span className="metric-lbl">Total Files</span>
            <span className="metric-val">5</span>
          </div>
        </div>

        <div className="doc-metric-card standard-card">
          <div className="metric-icon-box most-recent-icon">
            <File size={22} color="#f59e0b" />
          </div>
          <div className="metric-data-stack">
            <span className="metric-lbl">Most Recent</span>
            <span className="metric-val text-truncate">John_Doe_Resu...</span>
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
            <input type="text" placeholder="Search files..." />
          </div>
        </div>

        <div className="docs-table-responsive">
          <table className="docs-data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Size</th>
                <th>Date Added</th>
                <th className="docs-act-th">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DOCS.map((doc) => (
                <tr key={doc.id}>
                  <td>
                    <div className="docs-name-cell">
                      <div className="docs-pdf-icon-box">
                        <FileText size={20} color="#ef4444" />
                      </div>
                      <div className="docs-name-meta">
                        <span className="doc-filename">{doc.name}</span>
                        <span className="doc-fileext">{doc.type}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="doc-type-badge">{doc.category}</span>
                  </td>
                  <td className="doc-cell-text">{doc.size}</td>
                  <td className="doc-cell-text">{doc.date}</td>
                  <td className="docs-act-td">
                    <button className="doc-act-btn" title="View">
                      <Eye size={16} />
                    </button>
                    <button className="doc-act-btn" title="Download">
                      <Download size={16} />
                    </button>
                    <button className="doc-act-btn" title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDocuments;
