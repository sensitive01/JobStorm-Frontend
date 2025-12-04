import React, { useState, useEffect } from 'react';
import './CandidateProfile.css';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../../../api/service/axiosService';

const ShareProfile = () => {
    const { candidateId } = useParams()
    const [candidateData, setCandidateData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showDocuments, setShowDocuments] = useState(false);
    const [showExperience, setShowExperience] = useState(true);
    const [showEducation, setShowEducation] = useState(true);
    const [showCertifications, setShowCertifications] = useState(false);
    const [notes, setNotes] = useState('');
    const [shareModalOpen, setShareModalOpen] = useState(false);

    // Fetch candidate data
    useEffect(() => {
        fetchCandidateData();
    }, [candidateId]);

    const fetchCandidateData = async () => {
        try {
            setLoading(true);
            const response = await getUserDetails(candidateId)


            if (response.status === 200) {
                setCandidateData(response.data.data);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching candidate data:', error);
            setLoading(false);
        }
    };

    // Generate shareable link
    const generateShareLink = () => {
        const baseUrl = window.location.origin;
        return `${baseUrl}/company-share-profile/${candidateId}`;
    };

    // Copy share link to clipboard
    const handleShareProfile = () => {
        const shareLink = generateShareLink();
        navigator.clipboard.writeText(shareLink).then(() => {
            alert('Profile link copied to clipboard!');
        });
    };

    // Open share modal
    const openShareModal = () => {
        setShareModalOpen(true);
    };

    // Download file
    const handleDownloadFile = (url, fileName) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Download resume
    const handleDownloadResume = () => {
        if (candidateData?.resume?.url) {
            handleDownloadFile(candidateData.resume.url, candidateData.resume.name);
        }
    };

    // Send email
    const handleSendEmail = () => {
        if (candidateData?.userEmail) {
            window.location.href = `mailto:${candidateData.userEmail}`;
        }
    };

    // Get initials from name
    const getInitials = (name) => {
        if (!name) return 'NA';
        const parts = name.split(' ');
        return parts.length > 1
            ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
            : name.substring(0, 2).toUpperCase();
    };

    // Format date
    const formatDate = (dateString) => {
        if (!dateString) return 'Present';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    };

    // Get file size from URL or return default
    const getFileSize = (fileName) => {
        // This is a placeholder - in real implementation, you'd get actual file size
        return '2.4 MB';
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading candidate profile...</p>
            </div>
        );
    }

    if (!candidateData) {
        return (
            <div className="error-container">
                <p>Candidate not found</p>
            </div>
        );
    }

    return (
        <div className="candidate-profile-wrapper">
            <div className="candidate-profile-page">
                {/* Left Sidebar */}
                <aside className="profile-sidebar">
                    <div className="profile-header">
                        <div className="profile-avatar">
                            {candidateData.userProfilePic?.url ? (
                                <img src={candidateData.userProfilePic.url} alt={candidateData.userName} />
                            ) : (
                                <div className="avatar-initials">
                                    {getInitials(candidateData.userName)}
                                </div>
                            )}
                            {candidateData.emailverifedstatus && (
                                <span className="verified-badge">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                            )}
                        </div>

                        <h1 className="profile-name">{candidateData.userName}</h1>
                        <p className="profile-title">{candidateData.currentrole || 'Professional'}</p>

                        <div className="social-links">
                            {candidateData.linkedin && (
                                <a href={candidateData.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            )}
                            {candidateData.github && (
                                <a href={candidateData.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <i className="fab fa-github"></i>
                                </a>
                            )}
                            {candidateData.portfolio && (
                                <a href={candidateData.portfolio} target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <i className="fas fa-globe"></i>
                                </a>
                            )}
                            <a href={`mailto:${candidateData.userEmail}`} className="social-icon">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>

                        <button className="btn-share-profile" onClick={openShareModal}>
                            <i className="fas fa-share-alt"></i> Share Profile
                        </button>
                    </div>

                    {/* About Section */}
                    <div className="sidebar-section">
                        <h3 className="section-title">ABOUT</h3>
                        <p className="about-text">
                            {candidateData.profilesummary || 'No profile summary available.'}
                        </p>
                    </div>

                    {/* Skills Section */}
                    {candidateData.skills && candidateData.skills.length > 0 && (
                        <div className="sidebar-section">
                            <h3 className="section-title">SKILLS</h3>
                            <div className="skills-container">
                                {candidateData.skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Languages Section */}
                    {candidateData.languages && candidateData.languages.length > 0 && (
                        <div className="sidebar-section">
                            <h3 className="section-title">LANGUAGES</h3>
                            <div className="skills-container">
                                {candidateData.languages.map((language, index) => (
                                    <span key={index} className="skill-tag">{language}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Notes Section */}
                    <div className="sidebar-section">
                        <h3 className="section-title">NOTES</h3>
                        <textarea
                            className="notes-textarea"
                            placeholder="Add private notes about this candidate..."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                </aside>

                {/* Main Content */}
                <main className="profile-content">
                    {/* Top Action Buttons */}
                    <div className="content-header">
                        <button className="btn-action btn-download" onClick={handleDownloadResume}>
                            <i className="fas fa-download"></i> Download Resume
                        </button>
                        <button className="btn-action btn-email" onClick={handleSendEmail}>
                            <i className="fas fa-envelope"></i> Send Email
                        </button>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info-grid">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-details">
                                <span className="contact-label">LOCATION</span>
                                <span className="contact-value">
                                    {candidateData.currentCity || candidateData.city}, {candidateData.state}
                                </span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon email-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <span className="contact-label">EMAIL</span>
                                <span className="contact-value">{candidateData.userEmail}</span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon phone-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-details">
                                <span className="contact-label">PHONE</span>
                                <span className="contact-value">+91 {candidateData.userMobile}</span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon website-icon">
                                <i className="fas fa-globe"></i>
                            </div>
                            <div className="contact-details">
                                <span className="contact-label">WEBSITE</span>
                                <span className="contact-value">
                                    {candidateData.portfolio ? (
                                        <a href={candidateData.portfolio} target="_blank" rel="noopener noreferrer">
                                            {new URL(candidateData.portfolio).hostname}
                                        </a>
                                    ) : (
                                        'Not provided'
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Verified Documents Section */}
                    <div className="content-section">
                        <div
                            className="section-header-toggle"
                            onClick={() => setShowDocuments(!showDocuments)}
                        >
                            <div className="section-header-left">
                                <i className="fas fa-shield-alt section-icon verified-icon"></i>
                                <h2 className="section-heading">Verified Documents</h2>
                            </div>
                            <i className={`fas fa-chevron-${showDocuments ? 'up' : 'down'} toggle-icon`}></i>
                        </div>

                        {showDocuments && (
                            <div className="documents-grid">
                                {candidateData.passport && (
                                    <div className="document-card">
                                        <div className="document-header">
                                            <i className="fas fa-check-circle verified-check"></i>
                                        </div>
                                        <button
                                            className="document-download-icon"
                                            onClick={() => handleDownloadFile(candidateData.passport.url, candidateData.passport.name)}
                                        >
                                            <i className="fas fa-download"></i>
                                        </button>
                                        <h4 className="document-title">Passport</h4>
                                        <p className="document-info">PDF • {getFileSize(candidateData.passport.name)}</p>
                                    </div>
                                )}

                                {candidateData.policeClearance && (
                                    <div className="document-card">
                                        <div className="document-header">
                                            <i className="fas fa-check-circle verified-check"></i>
                                        </div>
                                        <button
                                            className="document-download-icon"
                                            onClick={() => handleDownloadFile(candidateData.policeClearance.url, candidateData.policeClearance.name)}
                                        >
                                            <i className="fas fa-download"></i>
                                        </button>
                                        <h4 className="document-title">Police Clearance</h4>
                                        <p className="document-info">PDF • {getFileSize(candidateData.policeClearance.name)}</p>
                                    </div>
                                )}

                                {candidateData.educationCertificate && (
                                    <div className="document-card">
                                        <div className="document-header">
                                            <i className="fas fa-check-circle verified-check"></i>
                                        </div>
                                        <button
                                            className="document-download-icon"
                                            onClick={() => handleDownloadFile(candidateData.educationCertificate.url, candidateData.educationCertificate.name)}
                                        >
                                            <i className="fas fa-download"></i>
                                        </button>
                                        <h4 className="document-title">Degree Certificate</h4>
                                        <p className="document-info">
                                            {candidateData.educationCertificate.name.includes('.pdf') ? 'PDF' : 'Image'} • {getFileSize(candidateData.educationCertificate.name)}
                                        </p>
                                    </div>
                                )}

                                {candidateData.mofaAttestation && (
                                    <div className="document-card">
                                        <div className="document-header">
                                            <i className="fas fa-check-circle verified-check"></i>
                                        </div>
                                        <button
                                            className="document-download-icon"
                                            onClick={() => handleDownloadFile(candidateData.mofaAttestation.url, candidateData.mofaAttestation.name)}
                                        >
                                            <i className="fas fa-download"></i>
                                        </button>
                                        <h4 className="document-title">MOFA Attestation</h4>
                                        <p className="document-info">PDF • {getFileSize(candidateData.mofaAttestation.name)}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Experience Section */}
                    <div className="content-section">
                        <div
                            className="section-header-toggle"
                            onClick={() => setShowExperience(!showExperience)}
                        >
                            <div className="section-header-left">
                                <i className="fas fa-briefcase section-icon experience-icon"></i>
                                <h2 className="section-heading">Experience</h2>
                            </div>
                            <i className={`fas fa-chevron-${showExperience ? 'up' : 'down'} toggle-icon`}></i>
                        </div>

                        {showExperience && candidateData.workExperience && (
                            <div className="timeline">
                                {candidateData.workExperience.map((exp, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-content">
                                            <div className="timeline-header">
                                                <h3 className="timeline-title">{exp.position}</h3>
                                                <span className="timeline-date">
                                                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                                                </span>
                                            </div>
                                            <p className="timeline-company">{exp.company}</p>
                                            <p className="timeline-description">
                                                {exp.description || 'Working as ' + exp.position + ' at ' + exp.company}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Education Section */}
                    <div className="content-section">
                        <div
                            className="section-header-toggle"
                            onClick={() => setShowEducation(!showEducation)}
                        >
                            <div className="section-header-left">
                                <i className="fas fa-graduation-cap section-icon education-icon"></i>
                                <h2 className="section-heading">Education</h2>
                            </div>
                            <i className={`fas fa-chevron-${showEducation ? 'up' : 'down'} toggle-icon`}></i>
                        </div>

                        {showEducation && candidateData.education && (
                            <div className="education-list">
                                {candidateData.education.map((edu, index) => (
                                    <div key={index} className="education-item">
                                        <div className="education-header">
                                            <h3 className="education-institution">{edu.institution}</h3>
                                            <span className="education-date">
                                                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                                            </span>
                                        </div>
                                        <p className="education-degree">{edu.type} • {edu.degree}</p>
                                        {edu.description && (
                                            <p className="education-description">{edu.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Certifications Section */}
                    <div className="content-section">
                        <div
                            className="section-header-toggle"
                            onClick={() => setShowCertifications(!showCertifications)}
                        >
                            <div className="section-header-left">
                                <i className="fas fa-certificate section-icon certification-icon"></i>
                                <h2 className="section-heading">Certifications</h2>
                            </div>
                            <i className={`fas fa-chevron-${showCertifications ? 'up' : 'down'} toggle-icon`}></i>
                        </div>

                        {showCertifications && (
                            <div className="certifications-list">
                                {/* Add certifications if available in data */}
                                <p className="no-data-message">No certifications added yet.</p>
                            </div>
                        )}
                    </div>
                </main>

                {/* Share Modal */}
                {shareModalOpen && (
                    <div className="modal-overlay" onClick={() => setShareModalOpen(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <h3>Share Profile</h3>
                                <button className="modal-close" onClick={() => setShareModalOpen(false)}>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className="modal-description">Share this candidate's profile with others</p>
                                <div className="share-link-container">
                                    <input
                                        type="text"
                                        className="share-link-input"
                                        value={generateShareLink()}
                                        readOnly
                                    />
                                    <button className="btn-copy-link" onClick={handleShareProfile}>
                                        <i className="fas fa-copy"></i> Copy
                                    </button>
                                </div>
                                <div className="share-options">
                                    <button className="share-option-btn email-share">
                                        <i className="fas fa-envelope"></i>
                                        Email
                                    </button>
                                    <button className="share-option-btn whatsapp-share">
                                        <i className="fab fa-whatsapp"></i>
                                        WhatsApp
                                    </button>
                                    <button className="share-option-btn linkedin-share">
                                        <i className="fab fa-linkedin"></i>
                                        LinkedIn
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShareProfile;