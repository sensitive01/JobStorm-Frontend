import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ChevronDown,
  ChevronUp,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle,
  Download,
} from "lucide-react";
import styles from "./CandidateOverview.module.css";

const CandidateOverview = ({ data, loading }) => {
  const [showDocuments, setShowDocuments] = useState(true);
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);

  const getFileUrl = (url) => {
    if (!url) return "#";
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    const baseUrl =
      import.meta.env.VITE_BASE_ROUTE_JOBSTORM || "http://localhost:4000";
    return `${baseUrl}${url}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const formatFullDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatDateRange = (startDate, endDate) => {
    const start = formatDate(startDate);
    const end = formatDate(endDate);
    return `${start} - ${end}`;
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (!data) {
    return <div className={styles.noDataAlert}>No data found</div>;
  }

  const documents = [
    { name: "Passport", file: data.passport, size: "2.4 MB" },
    { name: "Police Clearance", file: data.policeClearance, size: "1.1 MB" },
    {
      name: "Degree Certificate",
      file: data.educationCertificate,
      size: "3.5 MB",
    },
    { name: "Resume", file: data.resume, size: "1.8 MB" },
    { name: "Cover Letter", file: data.coverLetterFile, size: "0.9 MB" },
    { name: "MOFA Attestation", file: data.mofaAttestation, size: "2.1 MB" },
  ].filter((doc) => doc.file);

  return (
    <div className={styles.candidateOverviewContainer}>
      {/* Profile Summary Section */}
      {data.profilesummary && (
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeaderNoCollapse}>
            <div className={styles.sectionHeaderLeft}>
              <span className={styles.sectionTitle}>Profile Summary</span>
            </div>
          </div>
          <div className={styles.sectionContentFull}>
            <p
              className="text-muted fs-14 mb-0"
              style={{ lineHeight: "1.6", textAlign: "justify" }}
            >
              {data.profilesummary}
            </p>
          </div>
        </div>
      )}

      {/* Header Actions */}
      <div className={styles.headerActions}>
        {data.resume?.url && (
          <a
            href={getFileUrl(data.resume.url)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            <Download className={styles.iconSmall} />
            Download Resume
          </a>
        )}
      </div>

      {/* Contact Information Grid */}
      <div className={styles.contactGrid}>
        {/* Location */}
        {(data.currentCity || data.city) && (
          <div className={styles.contactItem}>
            <div className={`${styles.iconCircle} ${styles.iconCircleBlue}`}>
              <MapPin className={styles.iconSmall} />
            </div>
            <div>
              <div className={styles.contactLabel}>LOCATION</div>
              <div className={styles.contactValue}>
                {data.currentCity || data.city}, {data.state}
              </div>
            </div>
          </div>
        )}

        {/* Email */}
        {data.userEmail && (
          <div className={styles.contactItem}>
            <div className={`${styles.iconCircle} ${styles.iconCirclePurple}`}>
              <Mail className={styles.iconSmall} />
            </div>
            <div>
              <div className={styles.contactLabel}>EMAIL</div>
              <div className={styles.contactValue}>{data.userEmail}</div>
            </div>
          </div>
        )}

        {/* Phone */}
        {data.userMobile && (
          <div className={styles.contactItem}>
            <div className={`${styles.iconCircle} ${styles.iconCircleBlue}`}>
              <Phone className={styles.iconSmall} />
            </div>
            <div>
              <div className={styles.contactLabel}>PHONE</div>
              <div className={styles.contactValue}>+91 {data.userMobile}</div>
            </div>
          </div>
        )}

        {/* Website/Portfolio */}
        {data.portfolio && (
          <div className={styles.contactItem}>
            <div className={`${styles.iconCircle} ${styles.iconCircleGreen}`}>
              <Globe className={styles.iconSmall} />
            </div>
            <div>
              <div className={styles.contactLabel}>WEBSITE</div>
              <a
                href={data.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                {data.portfolio.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Verified Documents Section */}
      {documents.length > 0 && (
        <div className={styles.sectionCard}>
          <button
            onClick={() => setShowDocuments(!showDocuments)}
            className={styles.sectionHeader}
          >
            <div className={styles.sectionHeaderLeft}>
              <CheckCircle
                className={styles.iconSmall}
                style={{ color: "#10b981" }}
              />
              <span className={styles.sectionTitle}>Verified Documents</span>
            </div>
            {showDocuments ? (
              <ChevronUp className={styles.chevronIcon} />
            ) : (
              <ChevronDown className={styles.chevronIcon} />
            )}
          </button>
          {showDocuments && (
            <div className={styles.sectionContent}>
              <div className={styles.documentsGrid}>
                {documents.map((doc, index) => (
                  <a
                    key={index}
                    href={getFileUrl(doc.file?.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.documentCard}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className={styles.documentCardTop}>
                      <CheckCircle className={styles.documentCheckIcon} />
                    </div>
                    <div className={styles.documentCardContent}>
                      <Download className={styles.documentDownloadIcon} />
                      <div className={styles.documentCardTitle}>{doc.name}</div>
                      <div className={styles.documentCardInfo}>
                        PDF • {doc.size}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Passport Expiry Date */}
              {data.passportExpiryDate && (
                <div className={styles.passportExpiryInfo}>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Passport Number:</span>{" "}
                    {data.passportNumber || "N/A"}
                  </div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>
                      Passport Expiry Date:
                    </span>{" "}
                    {formatFullDate(data.passportExpiryDate)}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Experience Section */}
      {data.workExperience && data.workExperience.length > 0 && (
        <div className={styles.sectionCard}>
          <button
            onClick={() => setShowExperience(!showExperience)}
            className={styles.sectionHeader}
          >
            <div className={styles.sectionHeaderLeft}>
              <Briefcase
                className={styles.iconSmall}
                style={{ color: "#3b82f6" }}
              />
              <span className={styles.sectionTitle}>Experience</span>
            </div>
            {showExperience ? (
              <ChevronUp className={styles.chevronIcon} />
            ) : (
              <ChevronDown className={styles.chevronIcon} />
            )}
          </button>
          {showExperience && (
            <div className={styles.sectionContentFull}>
              <div className={styles.experienceTimeline}>
                {data.workExperience.map((exp, index) => (
                  <div key={exp._id || index} className={styles.experienceItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.experienceItemHeader}>
                      <h4 className={styles.experiencePosition}>
                        {exp.position}
                      </h4>
                      <span className={styles.experienceDuration}>
                        {formatDateRange(exp.startDate, exp.endDate)}
                      </span>
                    </div>
                    <div className={styles.experienceCompany}>
                      {exp.company}
                    </div>
                    {exp.description && (
                      <p className={styles.experienceDescription}>
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Education Section */}
      {data.education && data.education.length > 0 && (
        <div className={styles.sectionCard}>
          <button
            onClick={() => setShowEducation(!showEducation)}
            className={styles.sectionHeader}
          >
            <div className={styles.sectionHeaderLeft}>
              <GraduationCap
                className={styles.iconSmall}
                style={{ color: "#8b5cf6" }}
              />
              <span className={styles.sectionTitle}>Education</span>
            </div>
            {showEducation ? (
              <ChevronUp className={styles.chevronIcon} />
            ) : (
              <ChevronDown className={styles.chevronIcon} />
            )}
          </button>
          {showEducation && (
            <div className={styles.sectionContentFull}>
              <div className={styles.educationList}>
                {data.education.map((edu, index) => (
                  <div key={edu._id || index} className={styles.educationItem}>
                    <div className={styles.educationItemHeader}>
                      <h4 className={styles.educationInstitution}>
                        {edu.institution}
                      </h4>
                      <span className={styles.educationDuration}>
                        {formatDateRange(edu.startDate, edu.endDate)}
                      </span>
                    </div>
                    <div className={styles.educationType}>{edu.type}</div>
                    <div className={styles.educationDegree}>{edu.degree}</div>
                    {edu.description && (
                      <p className={styles.educationDescription}>
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Additional Details & Skills */}
      <div className={styles.sectionCard}>
        <button
          onClick={() => setShowCertifications(!showCertifications)}
          className={styles.sectionHeader}
        >
          <div className={styles.sectionHeaderLeft}>
            <Award className={styles.iconSmall} style={{ color: "#8b5cf6" }} />
            <span className={styles.sectionTitle}>Additional Details</span>
          </div>
          {showCertifications ? (
            <ChevronUp className={styles.chevronIcon} />
          ) : (
            <ChevronDown className={styles.chevronIcon} />
          )}
        </button>
        {showCertifications && (
          <div className={styles.sectionContentFull}>
            <div className={styles.additionalInfoSection}>
              {/* Languages */}
              {data.languages && data.languages.length > 0 && (
                <div className={styles.languagesContainer}>
                  <h5 className={styles.languagesLabel}>Languages</h5>
                  <div className={styles.languagesList}>
                    {data.languages.map((language, index) => (
                      <span key={index} className={styles.languageBadge}>
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Information */}
              {data.expectedSalary && (
                <div className={styles.infoItem}>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Expected Salary:</span> ₹
                    {data.expectedSalary.toLocaleString()} per annum
                  </div>
                </div>
              )}

              {data.preferredLocation && (
                <div className={styles.infoItem}>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>
                      Preferred Location:
                    </span>{" "}
                    {data.preferredLocation}
                  </div>
                </div>
              )}

              {data.totalExperience && (
                <div className={styles.infoItem}>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Total Experience:</span>{" "}
                    {data.totalExperience} year(s)
                  </div>
                </div>
              )}

              {data.nationality && (
                <div className={styles.infoItem}>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Nationality:</span>{" "}
                    {data.nationality}
                  </div>
                </div>
              )}

              {data.maritalStatus && (
                <div className={styles.infoItem}>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Marital Status:</span>{" "}
                    {data.maritalStatus}
                  </div>
                </div>
              )}

              {data.gender && (
                <div className={styles.infoItem}>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Gender:</span>{" "}
                    {data.gender}
                  </div>
                </div>
              )}

              {data.specialization && (
                <div className={styles.infoItem}>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Specialization:</span>{" "}
                    {data.specialization}
                  </div>
                </div>
              )}

              {data.dob && (
                <div className={styles.infoItem}>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Date of Birth:</span>{" "}
                    {formatFullDate(data.dob)}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateOverview;
