import React, { useEffect, useState } from 'react';
import styles from './DashboardOverview.module.css';
import { getDasboardData } from '../../../api/service/axiosService';
import SubscriptionCard from './SubscriptionCard';
import RecomendedJobs from './tabs/RecomendedJobs';

const DashboardOverview = () => {
  const candidateId = localStorage.getItem("userId")
  const [dashboardData, setDashboardData] = useState({
    savedJobCount: 0,
    appliedJobCount: 0,
    interviewScheduledCount: 0,
    profileViews: 0
  });
  const [loading, setLoading] = useState(true);
  const [recentApplications, setRecentApplication] = useState([])
  const stats = [
    {
      id: 1,
      title: 'Jobs Applied',
      count: dashboardData.appliedJobCount,
      icon: '💼',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Interviews',
      count: dashboardData.interviewScheduledCount,
      icon: '📅',
      color: 'green'
    },
    {
      id: 3,
      title: 'Saved Jobs',
      count: dashboardData.savedJobCount,
      icon: '🔖',
      color: 'purple'
    },
    {
      id: 4,
      title: 'Profile Views',
      count: dashboardData.profileViews,
      icon: '👁️',
      color: 'orange'
    }
  ];

  // Helper function to format time ago
  const formatTimeAgo = (dateString) => {
    if (!dateString) return 'Recently';

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Recently';

    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;

    if (diffInSeconds < minute) return 'Just now';
    if (diffInSeconds < hour) return `${Math.floor(diffInSeconds / minute)}m ago`;
    if (diffInSeconds < day) return `${Math.floor(diffInSeconds / hour)}h ago`;
    if (diffInSeconds < week) return `${Math.floor(diffInSeconds / day)}d ago`;
    if (diffInSeconds < month) return `${Math.floor(diffInSeconds / week)}w ago`;
    if (diffInSeconds < year) return `${Math.floor(diffInSeconds / month)}mo ago`;
    return `${Math.floor(diffInSeconds / year)}y ago`;
  };

  // Helper function to get company initials
  const getCompanyInitials = (companyName) => {
    if (!companyName) return 'NA';
    return companyName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Generate a light color for the company logo
  const getRandomLightColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 80%, 90%)`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getDasboardData(candidateId);
        console.log("----->", response)

        if (response?.status === 200) {
          setDashboardData({
            savedJobCount: response.data.data.savedJobCount || 0,
            appliedJobCount: response.data.data.appliedJobCount || 0,
            interviewScheduledCount: response.data.data.interviewScheduledCount || 0,
            profileViews: response.data.data.profileViews || 0
          });

          // Transform and set recent applications data
          if (response.data.data.recentAppliedJobs) {
            const formattedApplications = response.data.data.recentAppliedJobs
              .map(app => ({
                id: app._id,
                position: app.jobTitle || 'No Title',
                company: app.companyName || 'Unknown Company',
                location: app.location || 'Location not specified',
                status: app.status || 'Applied',
                time: formatTimeAgo(app.appliedDate || app.createdAt),
                logo: getCompanyInitials(app.companyName),
                logoColor: getRandomLightColor()
              }));
            setRecentApplication(formattedApplications);
          }
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [candidateId]);

  //     position: 'Senior Frontend Developer',
  //     company: 'TechCorp Inc.',
  //     location: 'San Francisco, CA (Remote)',
  //     status: 'Interviewing',
  //     time: '2 days ago',
  //     logo: 'TE',
  //     logoColor: '#FFE5E5'
  //   },
  //   {
  //     id: 2,
  //     position: 'Product Designer',
  //     company: 'Creative Studio',
  //     location: 'New York, NY',
  //     status: 'Applied',
  //     time: '5 days ago',
  //     logo: 'CS',
  //     logoColor: '#FFA500'
  //   },
  //   {
  //     id: 3,
  //     position: 'Full Stack Engineer',
  //     company: 'StartupX',
  //     location: 'Remote',
  //     status: 'Rejected',
  //     time: '1 week ago',
  //     logo: 'ST',
  //     logoColor: '#F0F0F0'
  //   }
  // ];

  const recommendedJobs = [
    {
      id: 1,
      position: 'UX Researcher',
      company: 'Global Systems',
      location: 'London, UK',
      type: 'Full-time',
      salary: '$80k - $110k',
      logo: 'GS',
      logoColor: '#FFA500'
    },
    {
      id: 2,
      position: 'React Native Developer',
      company: 'AppWorks',
      location: 'Remote',
      type: 'Contract',
      salary: '$120k - $150k',
      logo: 'AP',
      logoColor: '#FFA500'
    }
  ];
  if (loading) {
    return (
      <div className={styles.dashboardOverview}>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p>Loading dashboard data...</p>
        </div>
      </div>
    );
  }




  return (
    <div className={styles.dashboardOverview}>



      {/* Top Section - Stats and Subscription Card */}
      <div className={styles.topSection}>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.statCard}>
              <div className={styles.statContent}>
                <p className={styles.statTitle}>{stat.title}</p>
                <h2 className={styles.statCount}>{stat.count}</h2>
              </div>
              <div className={`${styles.statIcon} ${styles[stat.color]}`}>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Subscription  Card - Spacious Dark Navy Layout */}
        <SubscriptionCard styles={styles} />
      </div>

      {/* Bottom Section - Recent Applications and Recommendations */}
      <div className={styles.bottomSection}>
        {/* Recent Applications */}
        <div className={styles.recentApplications}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Recent Applications</h3>
            <a href="/my-applied-jobs" className={styles.viewAllLink}>View All</a>
          </div>

          <div className={styles.applicationsList}>
            {recentApplications.map((app) => (
              <div key={app.id} className={styles.applicationCard}>
                <div className={styles.applicationContent}>
                  <div
                    className={styles.companyLogo}
                    style={{ backgroundColor: app.logoColor }}
                  >
                    {app.logo}
                  </div>
                  <div className={styles.applicationInfo}>
                    <h4 className={styles.positionTitle}>{app.position}</h4>
                    <div className={styles.companyDetails}>
                      <span className={styles.companyName}>
                        🏢 {app.company}
                      </span>
                      <span className={styles.location}>
                        📍 {app.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.applicationMeta}>
                  <span
                    className={`${styles.statusBadge} ${styles[app.status.toLowerCase()]}`}
                  >
                    {app.status}
                  </span>
                  <span className={styles.timeAgo}>🕐 {app.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Jobs */}
        <RecomendedJobs styles={styles} recommendedJobs={recommendedJobs} />
      </div>
    </div>
  );
};

export default DashboardOverview;