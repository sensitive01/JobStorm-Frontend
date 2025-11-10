import React from 'react';

const BrowseJobCatagories = () => {
  const categories = [
    {
      id: 1,
      title: 'IT & Software',
      jobs: '2024',
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" x="8" y="8" fill="#6366f1" rx="4" />
          <rect width="16" height="16" x="16" y="4" fill="#818cf8" rx="3" />
        </svg>
      ),
      color: '#6366f1'
    },
    {
      id: 2,
      title: 'Technology',
      jobs: '1250',
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15 L20 10 L30 15 L20 20 Z" fill="#8b5cf6" />
          <path d="M20 20 L20 30 L10 25 L10 15 Z" fill="#a78bfa" />
        </svg>
      ),
      color: '#8b5cf6'
    },
    {
      id: 3,
      title: 'Government',
      jobs: '802',
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="20" x="6" y="14" fill="#ec4899" rx="2" />
          <rect width="8" height="12" x="16" y="8" fill="#f472b6" rx="2" />
        </svg>
      ),
      color: '#ec4899'
    },
    {
      id: 4,
      title: 'Accounting / Finance',
      jobs: '577',
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="16" r="8" fill="#f59e0b" />
          <path d="M12 24 C12 20 16 18 20 18 C24 18 28 20 28 24 L28 30 L12 30 Z" fill="#fbbf24" />
        </svg>
      ),
      color: '#f59e0b'
    },
    {
      id: 5,
      title: 'Construction / Facilities',
      jobs: '285',
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" x="8" y="10" fill="#10b981" rx="2" />
          <rect width="4" height="8" x="14" y="16" fill="#34d399" />
          <rect width="4" height="8" x="22" y="16" fill="#34d399" />
        </svg>
      ),
      color: '#10b981'
    },
    {
      id: 6,
      title: 'Tele-communications',
      jobs: '495',
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 20 L20 8 L32 20 L28 24 L20 16 L12 24 Z" fill="#06b6d4" />
          <circle cx="20" cy="20" r="3" fill="#22d3ee" />
        </svg>
      ),
      color: '#06b6d4'
    },
    {
      id: 7,
      title: 'Design & Multimedia',
      jobs: '1045',
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="18" x="8" y="11" fill="#f43f5e" rx="2" />
          <path d="M12 23 L16 15 L22 23 Z" fill="#fb7185" />
          <circle cx="25" cy="17" r="2" fill="#fb7185" />
        </svg>
      ),
      color: '#f43f5e'
    },
    {
      id: 8,
      title: 'Human Resource',
      jobs: '1516',
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="26" x="10" y="7" fill="#14b8a6" rx="3" />
          <rect width="8" height="12" x="16" y="16" fill="#2dd4bf" rx="2" />
          <rect width="4" height="6" x="18" y="11" fill="#2dd4bf" rx="1" />
        </svg>
      ),
      color: '#14b8a6'
    }
  ];

  return (
    <div className="container">
      <style>{`
        .popu-category-box {
          padding: 30px 20px;
          background: #ffffff;
          border: 1px solid #f3f4f6;
          transition: all 0.3s ease;
          cursor: pointer;
          height: 100%;
          position: relative;
        }

        .popu-category-box:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          transform: translateY(-5px);
          border-color: #e5e7eb;
        }

        .popu-category-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          position: relative;
          transition: all 0.3s ease;
        }

        .popu-category-box:hover .popu-category-icon {
          transform: scale(1.05);
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .popu-category-content h5 {
          margin-top: 20px;
          margin-bottom: 8px;
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          transition: color 0.3s ease;
        }

        .popu-category-box:hover h5 {
          color: #6366f1;
        }

        .popu-category-content p {
          color: #9ca3af;
          font-size: 14px;
          margin: 0;
          font-weight: 500;
        }

        .stretched-link {
          text-decoration: none;
        }

        .stretched-link::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          content: "";
        }

        @media (max-width: 767px) {
          .popu-category-icon {
            width: 70px;
            height: 70px;
          }

          .popu-category-content h5 {
            font-size: 16px;
          }

          .popu-category-content p {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="row">
        {categories.map((category) => (
          <div key={category.id} className="col-lg-3 col-md-6 mt-4 pt-2">
            <div className="popu-category-box rounded text-center">
              <div
                className="popu-category-icon icons-md"
                style={{
                  backgroundColor: `${category.color}15`,
                }}
              >
                <div className="icon-wrapper">
                  {category.iconSvg}
                </div>
              </div>
              <div className="popu-category-content mt-4">
                <a href="#" className="text-dark stretched-link">
                  <h5 className="fs-18">{category.title}</h5>
                </a>
                <p className="text-muted mb-0">{category.jobs} Jobs</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseJobCatagories;

