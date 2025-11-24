import React, { useState } from 'react';
import './TermsAndConditions.css';

const TermsAndConditionsContent = () => {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        {
            id: 1,
            title: "ACCEPTANCE OF TERMS",
            content: `These Terms and Conditions ("Terms") govern the access and use of JobsStorm, including all content, features, products, and services available at www.jobsstorm.com, our mobile applications, recruiter dashboards, freelancer modules, and B2B features (collectively, "Platform").

By accessing, registering, or using the Platform, You agree to be legally bound by these Terms. If You do not agree, You must discontinue use immediately.`
        },
        {
            id: 2,
            title: "ELIGIBILITY",
            content: `You must be:
• At least 16 years of age, and
• Capable of entering into a legally binding agreement under applicable law.

Recruiters, employers, freelancers, and businesses must be duly registered entities authorised to engage in hiring, service, or business operations.`
        },
        {
            id: 3,
            title: "ACCOUNT REGISTRATION & RESPONSIBILITIES",
            subsections: [
                {
                    subtitle: "3.1 Accuracy of Information",
                    text: "You agree to provide true, accurate, current, and complete information during registration and usage."
                },
                {
                    subtitle: "3.2 Confidential Login Credentials",
                    text: `You are responsible for maintaining the confidentiality of:
• Username
• Password
• OTPs
• Access tokens

We are not liable for loss arising from unauthorized access caused by Your negligence.`
                },
                {
                    subtitle: "3.3 One Account Per User",
                    text: `You agree not to:
• Create multiple accounts for fraudulent purposes
• Impersonate another person or entity
• Misrepresent Your identity, skills, or company information`
                }
            ]
        },
        {
            id: 4,
            title: "USE OF THE PLATFORM",
            content: "Users agree to use the Platform only for lawful purposes, including:",
            subsections: [
                {
                    subtitle: "4.1 For Job Seekers & Freelancers",
                    text: `• Searching and applying for jobs
• Uploading resumes/portfolios
• Connecting with verified recruiters
• Submitting proposals for freelance projects`
                },
                {
                    subtitle: "4.2 For Recruiters, Employers & Businesses",
                    text: `• Posting genuine jobs, projects, and B2B leads
• Contacting candidates for valid hiring or business purposes
• Conducting lawful recruitment, sourcing, or project activities`
                },
                {
                    subtitle: "4.3 Prohibited Activities",
                    text: `Users shall NOT:
• Share fake or misleading job postings
• Post sexually explicit, discriminatory, or harmful content
• Engage in harassment, spam, fraud, or data scraping
• Attempt to hack, disrupt, or overload the Platform
• Sell, resell, or reproduce Platform content
• Collect information for competitive analysis

Violation may lead to immediate account suspension and legal action.`
                }
            ]
        },
        {
            id: 5,
            title: "JOB POSTINGS, PROJECTS & B2B LEADS",
            content: `By posting a listing, You confirm:
• The information is accurate and not misleading
• The job/project/business lead is genuine
• You have authority to post on behalf of the organisation
• You will comply with employment and commercial laws applicable in Your region

JobsStorm reserves the right to edit, refuse, or remove any posting that violates our policies or law.`
        },
        {
            id: 6,
            title: "COMMUNICATION & MESSAGING",
            content: `The Platform may allow:
• Recruiter-to-candidate communication
• Freelancer-client messaging
• B2B interactions

You agree not to use communication tools for:
• Spam
• Unsolicited promotions
• Offensive messages
• Illegal activities

All communication may be monitored for safety and compliance.`
        },
        {
            id: 7,
            title: "SUBSCRIPTIONS, PAYMENTS & FEES",
            content: `(If subscriptions are active)
• Certain services may require paid plans.
• Fees are non-refundable unless otherwise stated.
• Payments are processed via secure, third-party gateways.
• We do not store full credit/debit card details.
• JobsStorm reserves the right to modify pricing, features, or subscription terms with advance notice.`
        },
        {
            id: 8,
            title: "USER CONTENT & LICENSE",
            content: `You retain ownership of the content you upload, including:
• Resumes
• Job descriptions
• Business listings
• Messages
• Projects
• Company information

By uploading, you grant JobsStorm a worldwide, royalty-free license to:
• Use
• Display
• Store
• Reproduce
• Process

Such content solely for the purpose of delivering Platform services.`
        },
        {
            id: 9,
            title: "DATA PROTECTION & PRIVACY",
            content: `Your data is processed in accordance with our Privacy Policy, which forms an integral part of these Terms.

By using the Platform, You consent to:
• Collection
• Storage
• Processing
• Sharing

of Your Personal Data as outlined in the Privacy Policy.`
        },
        {
            id: 10,
            title: "INTELLECTUAL PROPERTY RIGHTS",
            content: `All content owned by JobsStorm including:
• Logos
• Branding
• Designs
• Software
• Code
• Databases
• Algorithms
• Text, graphics, UI/UX

is protected by copyright and intellectual property laws.

Users may not copy, modify, distribute, or reverse-engineer the Platform.`
        },
        {
            id: 11,
            title: "THIRD-PARTY LINKS & SERVICES",
            content: `• JobsStorm may include links to third-party websites.
• We do not control or endorse their content or practices.
• You access such links at your own risk.`
        },
        {
            id: 12,
            title: "SUSPENSION & TERMINATION",
            content: `We may suspend or terminate Your account without notice if:
• You breach these Terms
• You post fraudulent or harmful content
• You misuse the Platform
• You violate security protocols
• There is suspicious or illegal activity

Termination does not require explanation if deemed necessary for Platform safety.`
        },
        {
            id: 13,
            title: "DISCLAIMER OF WARRANTIES",
            content: `JobsStorm is provided "as is" and "as available", without warranties of any kind.

We do NOT guarantee:
• Job placement
• Candidate availability
• Accuracy of user-generated content
• Performance of third-party recruiters or clients
• Uninterrupted or error-free service

Users engage at their own responsibility and discretion.`
        },
        {
            id: 14,
            title: "LIMITATION OF LIABILITY",
            content: `To the maximum extent permitted by law, JobsStorm and S2K Cloud Technologies (OPC) Private Limited are not liable for:
• Loss of data
• Financial loss
• Loss of employment opportunity
• Fraudulent activities by users
• Damages arising from misuse of the Platform
• Business losses
• Downtime or technical issues

Our total liability shall not exceed the amount paid by the user, if any, for the service.`
        },
        {
            id: 15,
            title: "INDEMNIFICATION",
            content: `You agree to indemnify and hold harmless JobsStorm and S2K Cloud Technologies (OPC) Private Limited from any claims, damages, liabilities, and expenses arising out of:
• Your use of the Platform
• Violations of these Terms
• Posting false or illegal content
• Breach of any law or third-party rights`
        },
        {
            id: 16,
            title: "GOVERNING LAW & JURISDICTION",
            content: `These Terms shall be governed by and interpreted in accordance with the laws of:
India, specifically courts located in Tamil Nadu (or specify your preferred jurisdiction).

International users waive rights to dispute jurisdiction.`
        },
        {
            id: 17,
            title: "CHANGES TO TERMS",
            content: `• JobsStorm may update these Terms periodically.
• Revised Terms become effective upon posting.
• Continued use after changes signifies acceptance.`
        },
        {
            id: 18,
            title: "CONTACT INFORMATION",
            content: `For inquiries, complaints, or legal notices, contact:

S2K Cloud Technologies (OPC) Private Limited
Email: support@jobsstorm.com
Website: www.jobsstorm.com`
        }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(`tc-section-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    return (
        <div className="tc-content-wrapper">
            {/* Main Content Container */}
            <div className="tc-main-container">
                {/* Sidebar Navigation */}
                <aside className="tc-content-sidebar">
                    <div className="tc-sidebar-inner">
                        <h3 className="tc-sidebar-header">📑 Quick Navigation</h3>
                        <ul className="tc-nav-list">
                            {sections.map((section) => (
                                <li
                                    key={section.id}
                                    className={activeSection === section.id ? 'tc-nav-item tc-nav-active' : 'tc-nav-item'}
                                    onClick={() => scrollToSection(section.id)}
                                >
                                    <span className="tc-nav-number">{section.id}.</span>
                                    <span className="tc-nav-text">{section.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Content Area */}
                <main className="tc-content-main">
                    <div className="tc-content-intro">
                        <h2 className="tc-main-title">TERMS AND CONDITIONS (T&C)</h2>
                        <p className="tc-company-details">
                            <strong>Last Updated:</strong> 15 November 2025<br />
                            <strong>Issued By:</strong> S2K Cloud Technologies (OPC) Private Limited<br />
                            <strong>Owner and Operator of JobsStorm</strong>
                        </p>
                    </div>

                    {sections.map((section) => (
                        <div
                            key={section.id}
                            id={`tc-section-${section.id}`}
                            className="tc-content-section"
                        >
                            <div className="tc-section-top">
                                <span className="tc-num">{section.id}.</span>
                                <h3 className="tc-sec-title">{section.title}</h3>
                            </div>

                            {section.content && (
                                <div className="tc-sec-content">
                                    <p>{section.content.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            {index < section.content.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}</p>
                                </div>
                            )}

                            {section.subsections && (
                                <div className="tc-subsec-wrapper">
                                    {section.subsections.map((subsection, index) => (
                                        <div key={index} className="tc-subsec-item">
                                            <h4 className="tc-subsec-heading">{subsection.subtitle}</h4>
                                            <p className="tc-subsec-para">
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

export default TermsAndConditionsContent;