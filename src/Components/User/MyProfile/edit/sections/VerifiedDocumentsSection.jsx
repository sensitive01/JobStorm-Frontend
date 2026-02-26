import React from "react";
import DocumentUploadCard from "../components/DocumentUploadCard";
import "./VerifiedDocumentsSection.css";

const VerifiedDocumentsSection = ({
  documents,
  handleDocumentChange,
  userData,
}) => {
  return (
    <div className="section-card">
      <div className="section-header">
        <i className="uil uil-shield-check"></i>
        <h3>Verified Documents</h3>
      </div>

      <div className="section-content">
        <div className="documents-grid">
          {/* Passport */}
          <DocumentUploadCard
            title="Passport"
            required
            acceptedFormats="Max 8MB, JPG, PNG, PDF"
            documentType="passport"
            document={documents.passport}
            onChange={handleDocumentChange}
            currentFile={userData?.passport?.name}
            hasExpiryDate
            userData={userData}
          />

          {/* Education Certificate */}
          <DocumentUploadCard
            title="Education Certificate"
            required
            acceptedFormats="Max 8MB, PDF, JPG, PNG"
            documentType="educationCertificate"
            document={documents.educationCertificate}
            onChange={handleDocumentChange}
            currentFile={userData?.educationCertificate?.name}
            userData={userData}
          />

          {/* Police Clearance */}
          <DocumentUploadCard
            title="Police Clearance"
            acceptedFormats="Max 8MB, PDF, JPG, PNG"
            documentType="policeClearance"
            document={documents.policeClearance}
            onChange={handleDocumentChange}
            currentFile={userData?.policeClearance?.name}
            userData={userData}
          />

          {/* MOFA Attestation */}
          <DocumentUploadCard
            title="MOFA Attestation"
            acceptedFormats="Max 8MB, PDF, JPG, PNG"
            documentType="mofaAttestation"
            document={documents.mofaAttestation}
            onChange={handleDocumentChange}
            currentFile={userData?.mofaAttestation?.name}
            userData={userData}
          />

          {/* Resume */}
          <DocumentUploadCard
            title="Resume / CV"
            acceptedFormats="Max 8MB, PDF, DOC, DOCX"
            documentType="resume"
            document={documents.resume}
            onChange={handleDocumentChange}
            currentFile={userData?.resume?.name}
            userData={userData}
          />

          {/* Cover Letter */}
          <DocumentUploadCard
            title="Cover Letter"
            acceptedFormats="Max 8MB, PDF, DOC, DOCX"
            documentType="coverLetterFile"
            document={documents.coverLetterFile}
            onChange={handleDocumentChange}
            currentFile={userData?.coverLetterFile?.name}
            userData={userData}
          />
        </div>
      </div>
    </div>
  );
};

export default VerifiedDocumentsSection;
