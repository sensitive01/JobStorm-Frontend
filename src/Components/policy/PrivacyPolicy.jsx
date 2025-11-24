import React, { useState } from 'react';
import './css/privacypolicy.css';

const PrivacyPolicyContent = () => {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        {
            id: 1,
            title: "DEFINITIONS",
            content: `For the purposes of this Privacy Policy:

"Company", "We", "Us", "Our" refers to S2K Cloud Technologies (OPC) Private Limited, the owner and operator of the JobsStorm platform.

"Platform" or "JobsStorm" refers to the website www.jobsstorm.com, mobile applications, recruiter dashboard, and all related services.

"User", "You", "Your" refers to job-seekers, freelancers, recruiters, employers, businesses, and any individual or entity accessing or using the Platform.

"Personal Data" refers to any information relating to an identified or identifiable individual.

"Processing" means any operation performed on Personal Data, including collection, storage, use, transmission, disclosure, or deletion.

"Applicable Laws" includes the Digital Personal Data Protection Act (India), GDPR, UAE PDPL, and any other data protection regulations relevant to our operations.`
        },
        {
            id: 2,
            title: "SCOPE AND APPLICABILITY",
            content: `This Privacy Policy governs all Personal Data collected by the Company through:
• Account creation
• Job applications
• Recruiter activities
• Freelancer-client interactions
• B2B interaction modules
• Communication services
• Data collected automatically through usage

By visiting, accessing, or using the Platform, You expressly consent to the terms of this Privacy Policy.`
        },
        {
            id: 3,
            title: "CATEGORIES OF PERSONAL DATA COLLECTED",
            content: "The Company may collect, store, and process the following categories of Personal Data:",
            subsections: [
                {
                    subtitle: "3.1 Data Provided Directly by Users",
                    text: `• Name, email address, phone number
• Address, gender, date of birth (optional)
• Resume, CV, cover letters, portfolios
• Employment history, qualifications, skills, certifications
• Business name, GST/Tax details, registration documents (for companies)
• Identity verification documents as required`
                },
                {
                    subtitle: "3.2 Data Collected Automatically",
                    text: `• IP address, device identifiers
• Browser type, operating system
• Access times, pages visited, session duration
• Cookies and web tracking technologies
• Geo-location based on IP`
                },
                {
                    subtitle: "3.3 Payment Information",
                    text: `(If subscription plans apply)
• Payment transaction metadata
• Invoice data
• Billing information

Note: We do not store full card numbers, CVV, or banking passwords.`
                },
                {
                    subtitle: "3.4 Communication Data",
                    text: `• Messages exchanged between job seekers and recruiters
• Freelancer-client communication
• Support queries and call logs
• Notifications and email correspondence`
                }
            ]
        },
        {
            id: 4,
            title: "PURPOSE OF PROCESSING PERSONAL DATA",
            content: "The Company processes Personal Data strictly for lawful and legitimate purposes, including:",
            subsections: [
                {
                    subtitle: "4.1 Service Delivery",
                    text: `• Creating and maintaining user accounts
• Matching job seekers with job openings
• Connecting freelancers with clients
• Facilitating B2B interactions
• Managing recruiter dashboards and postings`
                },
                {
                    subtitle: "4.2 Operational & Security Purposes",
                    text: `• User identity verification
• Fraud detection and prevention
• Monitoring misuse, illegal activity, or violations
• Ensuring platform integrity and security`
                },
                {
                    subtitle: "4.3 Communication Purposes",
                    text: `• Sending job alerts, project alerts, system updates
• Responding to support queries
• Transactional notifications such as application confirmation
• Legal notices and compliance communications`
                },
                {
                    subtitle: "4.4 Analytics & Improvement",
                    text: `• Analysing usage patterns
• Improving service experience
• Developing new features
• Platform performance optimisation

Processing is always done in accordance with applicable laws.`
                }
            ]
        },
        {
            id: 5,
            title: "LEGAL BASIS FOR PROCESSING",
            content: `Depending on jurisdiction, our legal basis may include:
• Consent (explicit consent for account creation or email communication)
• Contractual necessity (to provide you the Platform services)
• Compliance with legal obligations
• Legitimate interest (fraud prevention, platform improvement, security)`
        },
        {
            id: 6,
            title: "DISCLOSURE OF PERSONAL DATA",
            content: "Your Personal Data may be shared under the following circumstances:",
            subsections: [
                {
                    subtitle: "6.1 Disclosure to Recruiters and Employers",
                    text: "When you apply for jobs or make your profile visible, your information may be shared with verified recruiters, employers, and hiring partners."
                },
                {
                    subtitle: "6.2 Disclosure to Freelancers or Clients",
                    text: "For freelance projects, your profile and submitted proposals may be visible to clients posting projects."
                },
                {
                    subtitle: "6.3 Disclosure to B2B Partners",
                    text: "Business leads and company details may be shared among verified businesses within the B2B ecosystem."
                },
                {
                    subtitle: "6.4 Disclosure to Service Providers",
                    text: `We may engage third-party vendors for:
• Cloud hosting
• SMS/Email/WhatsApp communication
• Payment processing
• Data analytics
• Customer support tools
• Verification services

Each provider is contractually bound to confidentiality and data protection standards.`
                },
                {
                    subtitle: "6.5 Legal & Regulatory Disclosure",
                    text: `We may disclose Personal Data:
• To comply with legal obligations
• In response to lawful government requests
• To protect the rights, property, or safety of the Company or users`
                }
            ]
        },
        {
            id: 7,
            title: "INTERNATIONAL DATA TRANSFER",
            content: `Personal Data may be stored or processed in:
• India
• United Arab Emirates
• United States of America

Such transfers are done in compliance with recognised international safeguards.`
        },
        {
            id: 8,
            title: "DATA SECURITY MEASURES",
            content: `The Company implements industry-standard technical and organisational measures, including:
• SSL encryption
• Firewalls and intrusion detection systems
• Role-based access control
• Multi-factor authentication
• Regular security audits
• Encrypted data storage (where applicable)

Despite robust measures, no system is completely secure; users understand the associated risks.`
        },
        {
            id: 9,
            title: "DATA RETENTION",
            content: `Personal Data is retained only for as long as necessary to fulfil the purposes outlined in this Policy, including:
• Active user accounts: retained while in use
• Inactive accounts: retained for up to 36 months
• Legal, audit, or compliance data: retained as required by law

Users may request deletion earlier, subject to legal exceptions.`
        },
        {
            id: 10,
            title: "USER RIGHTS",
            content: `Depending on applicable laws, You may have the right to:
• Access Your Personal Data
• Request correction or updates
• Request deletion of Your data
• Withdraw consent at any time
• Request data portability
• Restrict or object to processing
• Opt-out of marketing communication

Requests may be submitted to: support@jobsstorm.com`
        },
        {
            id: 11,
            title: "COOKIES AND TRACKING TECHNOLOGIES",
            content: `We use cookies strictly for:
• Authentication
• Session management
• Analytics
• Personalisation

Users may disable cookies through browser settings but some features may become unavailable.`
        },
        {
            id: 12,
            title: "CHILDREN'S PRIVACY",
            content: `The Platform is not intended for individuals under 16 years of age.

We do not knowingly collect Personal Data from minors.`
        },
        {
            id: 13,
            title: "CHANGES TO THIS PRIVACY POLICY",
            content: `The Company reserves the right to amend this Policy at any time.

Revisions will be posted with the updated date. Continued use of the Platform after changes constitutes acceptance of such changes.`
        },
        {
            id: 14,
            title: "CONTACT INFORMATION",
            content: `For questions, concerns, or rights requests, contact:

S2K Cloud Technologies (OPC) Private Limited
Email: support@jobsstorm.com
Website: www.jobsstorm.com`
        }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(`pp-section-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    return (
        <div className="pp-content-wrapper">
            {/* Main Content Container */}
            <div className="pp-main-container">
                {/* Sidebar Navigation */}
                <aside className="pp-content-sidebar">
                    <div className="pp-sidebar-inner">
                        <h3 className="pp-sidebar-header">🔒 Quick Navigation</h3>
                        <ul className="pp-nav-list">
                            {sections.map((section) => (
                                <li
                                    key={section.id}
                                    className={activeSection === section.id ? 'pp-nav-item pp-nav-active' : 'pp-nav-item'}
                                    onClick={() => scrollToSection(section.id)}
                                >
                                    <span className="pp-nav-number">{section.id}.</span>
                                    <span className="pp-nav-text">{section.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Content Area */}
                <main className="pp-content-main">
                    <div className="pp-content-intro">
                        <h2 className="pp-main-title">PRIVACY POLICY</h2>
                        <p className="pp-company-details">
                            <strong>Last Updated:</strong> 15 November 2025<br />
                            <strong>Issued By:</strong> S2K Cloud Technologies (OPC) Private Limited<br />
                            <strong>Owner and Operator of JobsStorm</strong>
                        </p>
                    </div>

                    {sections.map((section) => (
                        <div
                            key={section.id}
                            id={`pp-section-${section.id}`}
                            className="pp-content-section"
                        >
                            <div className="pp-section-top">
                                <span className="pp-num">{section.id}.</span>
                                <h3 className="pp-sec-title">{section.title}</h3>
                            </div>

                            {section.content && (
                                <div className="pp-sec-content">
                                    <p>{section.content.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            {index < section.content.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}</p>
                                </div>
                            )}

                            {section.subsections && (
                                <div className="pp-subsec-wrapper">
                                    {section.subsections.map((subsection, index) => (
                                        <div key={index} className="pp-subsec-item">
                                            <h4 className="pp-subsec-heading">{subsection.subtitle}</h4>
                                            <p className="pp-subsec-para">
                                                {subsection.text.split('\n').map((line, idx) => (
                                                    <React.Fragment key={idx}>
                                                        {line}
                                                        {idx < subsection.text.split('\n').length - 1 && <br />}
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    
                </main>
            </div>
        </div>
    );
};

export default PrivacyPolicyContent;