import React, { useState } from 'react';
import './IntegratedPricing.css';

const PricingPage = () => {
  const [currentPlan] = useState({
    name: 'Gold Plan',
    id: 'SUB-8839-2825',
    type: 'gold',
    validity: '6 months'
  });

  const [usage] = useState({
    applications: { current: 12, total: 50, resetDays: 14 },
    profileViews: { current: 45, total: 100, status: 'Good visibility!' },
    resumeReviews: { current: 1, total: 3, remaining: 2 }
  });

  const plans = [
    {
      id: 'gold',
      name: 'Gold',
      price: 15000,
      period: '+GST',
      description: 'Perfect for serious job seekers',
      icon: 'uim-award',
      features: [
        'Apply to jobs',
        'Medium priority to recruiters',
        'Profile boosted in listings',
        '1 resume review & optimization',
        'Email & SMS confirmation',
        'Valid for 6 months'
      ],
      disabledFeatures: [
        'Immediate interview call',
        'Dedicated account manager',
        'Subscription card'
      ],
      isCurrent: true
    },
    {
      id: 'platinum',
      name: 'Platinum',
      price: 30000,
      period: '+GST',
      description: 'Maximum visibility & priority',
      icon: 'uim-trophy',
      popular: true,
      features: [
        'Apply to jobs',
        'Highest priority to recruiters',
        'Top profile boosted in listings',
        'Immediate interview call (priority pass)',
        'Dedicated account manager',
        '2 resume reviews & optimization',
        'Email & SMS + subscription card',
        'Valid for 1 year'
      ],
      disabledFeatures: []
    }
  ];

  const getProgressPercentage = (current, total) => {
    return (current / total) * 100;
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return '#ef4444';
    if (percentage >= 50) return '#f59e0b';
    return '#8b5cf6';
  };

  return (
    <>
      <div>
        <div className="main-content">
          <div className="page-content">
            {/* Start home */}
            <section className="page-title-box">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="text-center text-white">
                      <h3 className="mb-4">Pricing & Subscription</h3>
                      <div className="page-next">
                        <nav
                          className="d-inline-block"
                          aria-label="breadcrumb text-center"
                        >
                          <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item">
                              <a href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="javascript:void(0)">Company</a>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              Pricing
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end home */}

            {/* START SHAPE */}
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
            {/* END SHAPE */}

            {/* CURRENT PLAN HEADER */}
            <section className="section pt-4">
              <div className="container">
                <div className="current-plan-header">
                  <div className="plan-header-content">
                    <div className="plan-info-badges">
                      <span className="badge bg-primary">Current Plan</span>
                      <span className="plan-id-badge">ID: {currentPlan.id}</span>
                    </div>
                    <h2 className="plan-title-main">{currentPlan.name}</h2>
                    <p className="plan-description-text">
                      You are currently on the {currentPlan.name}. Valid for {currentPlan.validity}. Upgrade to Platinum for highest priority and dedicated account manager.
                    </p>
                  </div>
                  <div className="plan-header-actions">
                    <button className="btn btn-primary btn-lg">
                      Upgrade to Platinum
                    </button>
                    <button className="btn btn-primary btn-lg" >
                      Manage Subscription
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* START PRICING - MOVED UP */}
            <section className="section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="text-center">
                      <span className="badge warning-bg-subtle fs-15 mb-2">
                        Choose Your Plan
                      </span>
                      <h3>Get Premium Access to Top Recruiters</h3>
                      <p className="text-muted">
                        Boost your profile visibility and get priority access to recruiters.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row mt-4 justify-content-center">
                  {plans.map((plan) => (
                    <div key={plan.id} className="col-lg-5 col-md-6 mt-4">
                      <div className={`pricing-box card bg-light ${plan.popular ? 'popular-plan' : ''} ${plan.isCurrent ? 'current-plan-card' : ''}`}>
                        {plan.popular && (
                          <div className="popular-ribbon">
                            <span>MOST POPULAR</span>
                          </div>
                        )}

                        <div className="card-body p-4 px-lg-5">
                          <div className="pricing-icon bg-light rounded-circle icons-md">
                            <i className={`uim ${plan.icon}`} />
                          </div>

                          <div className="pricing-name text-center mt-4 pt-2">
                            <h4 className="fs-18">{plan.name}</h4>
                            <p className="text-muted fs-14 mb-0">{plan.description}</p>
                          </div>

                          <div className="pricing-price text-center mt-4">
                            <h2 className="fw-semibold">
                              ₹{plan.price.toLocaleString('en-IN')}
                              <small className="fs-16"> {plan.period}</small>
                            </h2>
                          </div>

                          <ul className="list-unstyled pricing-details text-muted mt-4">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="pricing-item">
                                <i className="mdi mdi-check-bold success-bg-subtle me-2" />
                                {feature}
                              </li>
                            ))}
                            {plan.disabledFeatures && plan.disabledFeatures.map((feature, index) => (
                              <li key={`disabled-${index}`} className="pricing-item text-decoration-line-through">
                                <i className="mdi mdi-close-thick bg-soft-muted me-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <div className="text-center mt-4 mb-2">
                            {plan.isCurrent ? (
                              <button className="btn btn-soft-secondary rounded-pill" disabled>
                                Current Plan <i className="uil uil-check" />
                              </button>
                            ) : (
                              <a
                                href="javascript:void(0)"
                                className={`btn ${plan.popular ? 'btn-primary' : 'btn-soft-primary'} rounded-pill`}
                              >
                                Upgrade Now <i className="uil uil-arrow-right" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* END PRICING */}

            {/* PLAN USAGE SECTION - MOVED DOWN */}
            <section className="section pt-2">
              <div className="container">
                <div className="usage-card-wrapper">
                  <div className="section-header-custom">
                    <span className="usage-icon">⚡</span>
                    <h4 className="mb-0">Current Plan Usage</h4>
                  </div>

                  <div className="row mt-4">
                    {/* Monthly Applications */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="usage-card">
                        <div className="usage-card-header">
                          <span className="usage-label">Monthly Applications</span>
                          <span className="usage-value">{usage.applications.current} / {usage.applications.total}</span>
                        </div>
                        <div className="custom-progress-bar">
                          <div
                            className="custom-progress-fill"
                            style={{
                              width: `${getProgressPercentage(usage.applications.current, usage.applications.total)}%`,
                              backgroundColor: getProgressColor(getProgressPercentage(usage.applications.current, usage.applications.total))
                            }}
                          ></div>
                        </div>
                        <span className="usage-info-text">Resets in {usage.applications.resetDays} days</span>
                      </div>
                    </div>

                    {/* Profile Views */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="usage-card">
                        <div className="usage-card-header">
                          <span className="usage-label">Profile Views</span>
                          <span className="usage-value">{usage.profileViews.current} / {usage.profileViews.total}</span>
                        </div>
                        <div className="custom-progress-bar">
                          <div
                            className="custom-progress-fill"
                            style={{
                              width: `${getProgressPercentage(usage.profileViews.current, usage.profileViews.total)}%`,
                              backgroundColor: '#10b981'
                            }}
                          ></div>
                        </div>
                        <span className="usage-info-text">{usage.profileViews.status}</span>
                      </div>
                    </div>

                    {/* Resume Reviews */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="usage-card">
                        <div className="usage-card-header">
                          <span className="usage-label">Resume Reviews</span>
                          <span className="usage-value">{usage.resumeReviews.current} / {usage.resumeReviews.total}</span>
                        </div>
                        <div className="custom-progress-bar">
                          <div
                            className="custom-progress-fill"
                            style={{
                              width: `${getProgressPercentage(usage.resumeReviews.current, usage.resumeReviews.total)}%`,
                              backgroundColor: '#8b5cf6'
                            }}
                          ></div>
                        </div>
                        <span className="usage-info-text">{usage.resumeReviews.remaining} credits remaining</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/*START CTA*/}
            <section className="section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="section-title text-center">
                    <h3 className="title mb-4 pb-2">
                      See everything about your employee at one place.
                    </h3>
                    <p className="para-desc text-muted mx-auto">
                      Start working with JobsStorm that can provide everything
                      you need to generate awareness, drive traffic, connect.
                    </p>
                    <div className="mt-4">
                      <a
                        href="/contact-us"
                        className="btn btn-primary btn-hover mt-2"
                      >
                        <i className="uil uil-phone me-1" /> Contact
                      </a>
                      <a
                        href="/faq-pages"
                        className="btn btn-outline-primary btn-hover ms-sm-1 mt-2"
                      >
                        <i className="uil uil-file-question me-1" /> Faq's
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*END CTA*/}

            {/* START CTA */}
            <section className="section bg-light">
              <div className="container">
                <div className="pricing-counter text-white">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="counter-box mt-3">
                        <div className="counters text-center">
                          <h5 className="counter mb-0">15,000+</h5>
                          <h6 className="fs-16 mt-3">Available Jobs</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="counter-box mt-3">
                        <div className="counters text-center">
                          <h5 className="counter mb-0">7500+</h5>
                          <h6 className="fs-16 mt-3">Applications</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="counter-box mt-3">
                        <div className="counters text-center">
                          <h5 className="counter mb-0">8.85K</h5>
                          <h6 className="fs-16 mt-3">Positive Feedback</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="counter-box mt-3">
                        <div className="counters text-center">
                          <h5 className="counter mb-0">9875</h5>
                          <h6 className="fs-16 mt-3">Members</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* END CTA */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;