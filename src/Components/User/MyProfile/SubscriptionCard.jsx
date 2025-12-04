import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from "../../../../public/assets/images/favicon.ico"
import { generateSubscription, getSubscriptionCardData } from '../../../api/service/axiosService';

const SubscriptionCard = () => {
    const navigate = useNavigate();
    const candidateId = localStorage.getItem("userId");
    const [isGenerating, setIsGenerating] = useState(false);
    const [showFullNumber, setShowFullNumber] = useState(false);
    const [cardData, setCardData] = useState(null);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        const fetchCardData = async () => {
            try {
                const response = await getSubscriptionCardData(candidateId);
                if (response?.data?.success) {
                    setCardData(response.data.data);
                    // Set isSubscribed based on API response
                    // setIsSubscribed(response.data.data.isSubscribed || false);
                }
            } catch (err) {
                console.error('Error fetching card data:', err);
                setError('Failed to load card details');
            }
        };

        if (candidateId) {
            fetchCardData();
        }
    }, [candidateId]);

    const handleGenerateSubscription = async () => {
        // Check if user is subscribed
        if (!isSubscribed) {
            setError('Payment integration coming soon!');
            setTimeout(() => setError(null), 3000);
            return;
        }

        try {
            setIsGenerating(true);
            setError(null);
            setSuccessMessage('');

            const response = await generateSubscription(candidateId);

            if (response?.data?.success) {
                setCardData(response.data.data);
                setSuccessMessage('Card generated successfully!');
                setTimeout(() => setSuccessMessage(''), 3000);
            } else {
                throw new Error(response?.data?.message || 'Failed to generate card');
            }
        } catch (err) {
            console.error('Error generating subscription:', err);
            setError(err.message || 'Failed to generate card. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    const handleViewProfile = () => {
        navigate(`/company-share-profile/${candidateId}`);
    };

    const toggleCardNumber = () => {
        setShowFullNumber(!showFullNumber);
    };

    const formatCardNumber = (number, showFull = false) => {
        if (!number) return '•••• •••• •••• ••••';
        if (showFull) return number.replace(/(\d{4})(?=\d)/g, '$1 ');
        return '•••• •••• •••• ' + number.slice(-4);
    };

    // Show blurred card if no data OR if user is not subscribed
    if (!cardData || !isSubscribed) {
        return (
            <div style={styles.noDataContainer}>
                <div style={styles.blurredCard}>
                    <div style={styles.blurredContent}>
                        <div style={styles.cardHeader}>
                            <span style={styles.sparkle}>✨</span>
                            <span style={styles.brandName}>JOBSSTORM</span>
                        </div>
                        <p style={styles.cardSubtitle}>GLOBAL IDENTITY ACCESS</p>

                        <div style={styles.compactFolderIcon}>📁</div>

                        <div style={styles.subscriptionSection}>
                            <span style={styles.sectionLabel}>SUBSCRIPTION ID</span>
                            <div style={styles.subscriptionId}>SUB-TEST-123</div>
                        </div>

                        <div style={styles.candidateSection}>
                            <span style={styles.candidateLabel}>CANDIDATE NAME</span>
                            <h3 style={styles.candidateName}>JOHN DOE</h3>
                        </div>
                    </div>
                </div>

                <div style={styles.generateOverlay}>
                    <button
                        style={{
                            ...styles.generateBtnLarge,
                            ...(isGenerating ? styles.generateBtnDisabled : {})
                        }}
                        onClick={handleGenerateSubscription}
                        disabled={isGenerating}
                    >
                        {isGenerating ? (
                            <>
                                <span style={styles.spinner}></span>
                                GENERATING...
                            </>
                        ) : (
                            'GENERATE SUBSCRIPTION'
                        )}
                    </button>
                    {error && <p style={styles.errorMessage}>{error}</p>}
                </div>
            </div>
        );
    }

    return (
        <div style={styles.subscriptionCardWithData}>
            <div style={styles.cardInnerWithData}>
                <div style={styles.topSection}>
                    <div style={styles.cardHeaderWithData}>
                        <div style={styles.brandInfo}>
                            <img
                                src={logoImg}
                                alt="Logo"
                                style={styles.logoImage}
                            />
                            <span style={styles.brandName}>JOBSSTORM</span>
                        </div>
                        <div style={styles.statusIndicator}>
                            <span style={{
                                ...styles.statusDot,
                                ...(cardData.status === 'active' ? styles.statusDotActive : styles.statusDotInactive)
                            }}></span>
                            <span style={styles.statusText}>
                                {cardData.status === 'active' ? 'ACTIVE' : 'INACTIVE'}
                            </span>
                        </div>
                    </div>
                    <p style={styles.cardSubtitleWithData}>GLOBAL IDENTITY ACCESS</p>
                </div>

                {successMessage && (
                    <div style={styles.successMessage}>
                        ✓ {successMessage}
                    </div>
                )}

                <div style={styles.cardDetailsGrid}>
                    <div style={styles.detailItem}>
                        <span style={styles.detailLabel}>Card Number</span>
                        <div style={styles.cardNumberRow}>
                            <span style={styles.cardNumber}>
                                {formatCardNumber(cardData.fullCardNumber, showFullNumber)}
                            </span>
                            <button
                                style={styles.viewButton}
                                onClick={toggleCardNumber}
                            >
                                {showFullNumber ? 'HIDE' : 'SHOW'}
                            </button>
                        </div>
                    </div>

                    <div style={styles.detailItem}>
                        <span style={styles.detailLabel}>Cardholder Name</span>
                        <span style={styles.detailValue}>{cardData.cardHolderName}</span>
                    </div>

                    <div style={styles.detailRowWithButton}>
                        <div style={styles.detailItemSmall}>
                            <span style={styles.detailLabel}>Expires</span>
                            <span style={styles.detailValue}>
                                {cardData.expiryMonth}/{cardData.expiryYear.slice(-2)}
                            </span>
                        </div>

                        <div style={styles.detailItemSmall}>
                            <span style={styles.detailLabel}>Issued On</span>
                            <span style={styles.detailValue}>
                                {new Date(cardData.issuedAt).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </span>
                        </div>

                        <button
                            style={styles.viewProfileButton}
                            onClick={handleViewProfile}
                        >
                            <span style={styles.viewProfileIcon}>👤</span>
                            VIEW PROFILE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    // No data state - compact and blurred
    noDataContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
    },
    blurredCard: {
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
        borderRadius: '16px',
        padding: '0',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        filter: 'blur(4px)',
        opacity: 0.6,
        height: '280px',
    },
    blurredContent: {
        padding: '24px',
        position: 'relative',
        zIndex: 1,
        pointerEvents: 'none',
    },
    compactFolderIcon: {
        fontSize: '40px',
        opacity: 0.15,
        color: '#94a3b8',
        textAlign: 'center',
        margin: '16px 0',
    },
    generateOverlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        width: '100%',
        padding: '0 24px',
    },
    generateBtnLarge: {
        background: 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)',
        color: '#1e293b',
        border: 'none',
        padding: '16px 32px',
        borderRadius: '12px',
        fontWeight: '800',
        fontSize: '13px',
        cursor: 'pointer',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        boxShadow: '0 6px 20px rgba(245, 158, 11, 0.35)',
        whiteSpace: 'nowrap',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        minWidth: '220px',
        justifyContent: 'center',
    },
    generateBtnDisabled: {
        opacity: 0.6,
        cursor: 'not-allowed',
    },
    spinner: {
        width: '14px',
        height: '14px',
        border: '2px solid #1e293b',
        borderTop: '2px solid transparent',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
        display: 'inline-block',
    },
    errorMessage: {
        color: '#f59e0b',
        fontSize: '13px',
        textAlign: 'center',
        background: 'rgba(245, 158, 11, 0.15)',
        padding: '10px 20px',
        borderRadius: '10px',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        margin: 0,
        fontWeight: '600',
        letterSpacing: '0.5px',
    },
    // Original styles (when data is present)
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '6px',
    },
    sparkle: {
        fontSize: '20px',
        lineHeight: 1,
        color: '#f59e0b',
    },
    brandName: {
        fontSize: '20px',
        fontWeight: '800',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: 'white',
        margin: 0,
        lineHeight: 1,
    },
    cardSubtitle: {
        fontSize: '10px',
        color: '#94a3b8',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        fontWeight: '600',
        margin: '0 0 16px 0',
    },
    subscriptionSection: {
        marginBottom: '20px',
    },
    sectionLabel: {
        fontSize: '9px',
        color: '#94a3b8',
        margin: '0 0 8px 0',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        fontWeight: '700',
        display: 'block',
    },
    subscriptionId: {
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '12px 16px',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: '700',
        letterSpacing: '2px',
        fontFamily: "'Courier New', monospace",
        border: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#e2e8f0',
        textAlign: 'center',
    },
    candidateSection: {
        marginTop: '20px',
    },
    candidateLabel: {
        fontSize: '9px',
        color: '#94a3b8',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        fontWeight: '700',
        display: 'block',
        marginBottom: '6px',
    },
    candidateName: {
        fontSize: '18px',
        fontWeight: '800',
        color: '#ffffff',
        margin: 0,
        lineHeight: 1.2,
        letterSpacing: '1px',
    },
    subscriptionCardWithData: {
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
        borderRadius: '16px',
        padding: '0',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
    },
    cardInnerWithData: {
        padding: '24px',
        position: 'relative',
        zIndex: 2,
    },
    topSection: {
        marginBottom: '20px',
    },
    cardHeaderWithData: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '6px',
    },
    brandInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    logoImage: {
        width: '28px',
        height: '28px',
        borderRadius: '6px',
        objectFit: 'cover',
    },
    cardSubtitleWithData: {
        fontSize: '10px',
        color: '#94a3b8',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        fontWeight: '600',
        margin: 0,
    },
    successMessage: {
        background: 'rgba(16, 185, 129, 0.15)',
        color: '#10b981',
        padding: '8px 14px',
        borderRadius: '8px',
        marginBottom: '16px',
        fontSize: '12px',
        textAlign: 'center',
        fontWeight: '600',
        border: '1px solid rgba(16, 185, 129, 0.2)',
    },
    cardDetailsGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
    },
    detailItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    },
    detailRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
    },
    detailRowWithButton: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr auto',
        gap: '16px',
        alignItems: 'end',
    },
    detailItemSmall: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    detailLabel: {
        fontSize: '10px',
        color: '#94a3b8',
        textTransform: 'uppercase',
        letterSpacing: '1.2px',
        fontWeight: '600',
    },
    detailValue: {
        fontSize: '15px',
        color: '#ffffff',
        fontWeight: '600',
        letterSpacing: '0.5px',
    },
    cardNumberRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '10px 14px',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
    },
    cardNumber: {
        fontSize: '15px',
        fontWeight: '700',
        letterSpacing: '2px',
        fontFamily: "'Courier New', monospace",
        color: '#e2e8f0',
    },
    viewButton: {
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'white',
        borderRadius: '6px',
        padding: '6px 12px',
        fontSize: '10px',
        cursor: 'pointer',
        fontWeight: '700',
        letterSpacing: '1px',
        transition: 'all 0.2s ease',
    },
    statusIndicator: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
    },
    statusDot: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
    },
    statusDotActive: {
        background: '#10b981',
        boxShadow: '0 0 8px rgba(16, 185, 129, 0.4)',
    },
    statusDotInactive: {
        background: '#ef4444',
        boxShadow: '0 0 8px rgba(239, 68, 68, 0.4)',
    },
    statusText: {
        fontSize: '10px',
        color: '#94a3b8',
        fontWeight: '700',
        letterSpacing: '1px',
    },
    // New styles for View Profile button
    viewProfileButton: {
        background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
        border: 'none',
        color: 'white',
        borderRadius: '8px',
        padding: '10px 16px',
        fontSize: '10px',
        cursor: 'pointer',
        fontWeight: '800',
        letterSpacing: '1.2px',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
        whiteSpace: 'nowrap',
        height: 'fit-content',
    },
    viewProfileIcon: {
        fontSize: '12px',
        lineHeight: 1,
    },
};

// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    /* Hover effect for view profile button */
    button[style*="viewProfileButton"]:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4) !important;
    }
    
    /* Hover effect for view button */
    button[style*="viewButton"]:hover {
        background: rgba(255, 255, 255, 0.15) !important;
        border-color: rgba(255, 255, 255, 0.3) !important;
    }
    
    /* Hover effect for generate button */
    button[style*="generateBtnLarge"]:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(245, 158, 11, 0.45) !important;
    }
    
    /* Responsive layout for mobile */
    @media (max-width: 480px) {
        div[style*="detailRowWithButton"] {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
        }
    }
`;
document.head.appendChild(styleSheet);

export default SubscriptionCard;