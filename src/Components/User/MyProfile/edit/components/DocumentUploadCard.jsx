import React, { useState, useRef } from "react";
import "./DocumentUploadCard.css";

const DocumentUploadCard = ({
  title = "",
  required = false,
  acceptedFormats = "",
  documentType = "",
  document = { file: null, expiryDate: "" },
  onChange = () => { },
  currentFile = "",
  hasExpiryDate = false,
  userData = {},
  loading = false
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileChange(files[0]);
    }
  };

  const handleFileChange = (file) => {
    onChange(documentType, file);
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileChange(file);
    }
  };

  const handleExpiryDateChange = (e) => {
    onChange(documentType, document.file, { expiryDate: e.target.value });
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const getFileIcon = () => {
    if (document.file || currentFile) {
      return "uil uil-check-circle";
    }
    return "uil uil-cloud-upload";
  };

  const getDocumentUrl = () => {
    if (document.file) {
      return URL.createObjectURL(document.file);
    }
    return userData?.[documentType]?.url || null;
  };



  const getStatusText = () => {
    // Handle case when document is undefined
    if (!document) {
      return "Not Uploaded";
    }

    // Handle newly uploaded file
    if (document.file) {
      return (
        <>
          {document.file.name}
          <i
            className="uil uil-eye view-icon"
            onClick={(e) => {
              e.stopPropagation();
              window.open(URL.createObjectURL(document.file), '_blank');
            }}
            title="View document"
          />
        </>
      );
    }

    // Handle existing file from server
    if (currentFile) {
      const docUrl = getDocumentUrl();
      return (
        <>
          {currentFile}
          {docUrl && (
            <i
              className="uil uil-eye view-icon"
              onClick={(e) => {
                e.stopPropagation();
                window.open(docUrl, '_blank');
              }}
              title="View document"
            />
          )}
        </>
      );
    }

    return "Not Uploaded";
  };

  const getStatusClass = () => {
    if ((document?.file || currentFile) && !loading) {
      return "uploaded";
    }
    return "not-uploaded";
  };

  return (
    <div className="document-upload-card">
      <div className="document-header">
        <h5 className="document-title">
          {title}
          {required && <span className="required-star">*</span>}
        </h5>
        <span className={`document-status ${getStatusClass()}`}>
          {getStatusText()}
        </span>
      </div>

      <p className="document-formats">{acceptedFormats}</p>

      {hasExpiryDate && (
        <div className="expiry-date-group">
          <label htmlFor={`${documentType}-expiry`} className="expiry-label">
            Expiry Date
          </label>
          <input
            type="date"
            id={`${documentType}-expiry`}
            className="expiry-input"
            value={document.expiryDate || ""}
            onChange={handleExpiryDateChange}
            placeholder="dd-mm-yyyy"
          />
        </div>
      )}

      <div
        className={`upload-zone ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="file-input-hidden"
          onChange={handleInputChange}
          accept={acceptedFormats.includes("PDF") ? ".pdf,.jpg,.jpeg,.png,.doc,.docx" : ".jpg,.jpeg,.png,.pdf"}
        />

        <i className={`upload-icon ${getFileIcon()}`}></i>
        <p className="upload-text">Click to upload</p>

        {document.file && (
          <p className="uploaded-file-name">{document.file.name}</p>
        )}
        {!document.file && currentFile && (
          <p className="uploaded-file-name">{currentFile}</p>
        )}
      </div>
    </div>
  );
};

export default DocumentUploadCard;
