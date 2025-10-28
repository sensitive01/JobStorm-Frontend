import React, { useState, useEffect } from 'react';
import { getUserDetails } from '../../../api/service/axiosService';

const CandidateOverview = () => {
  const userId = localStorage.getItem("userId");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserDetails(userId);
        console.log("response", response);
        
        if (response.status === 200) {
          const rawData = response.data.data;
          
          // Parse JSON strings to arrays
          const parsedData = {
            ...rawData,
            languages: typeof rawData.languages === 'string' ? JSON.parse(rawData.languages) : rawData.languages,
            gradeLevels: typeof rawData.gradeLevels === 'string' ? JSON.parse(rawData.gradeLevels) : rawData.gradeLevels,
            skills: typeof rawData.skills === 'string' ? JSON.parse(rawData.skills) : rawData.skills,
            education: typeof rawData.education === 'string' ? JSON.parse(rawData.education) : rawData.education,
            workExperience: typeof rawData.workExperience === 'string' ? JSON.parse(rawData.workExperience) : rawData.workExperience,
          };
          
          setData(parsedData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (userId) {
      fetchData();
    }
  }, [userId]);

  if (loading) return <div className="text-center py-5"><div className="spinner-border"></div></div>;
  if (!data) return <div className="alert alert-warning">No data found</div>;

  return (
    <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
      <div>
        <h5 className="fs-18 fw-bold">About</h5>
        <p className="text-muted mt-4">{data.profilesummary}</p>
        <p className="text-muted">
          Currently working as <b>{data.currentrole}</b>. Total experience: {data.totalExperience} year(s).
        </p>
      </div>

      <div className="candidate-education-details mt-4">
        <h6 className="fs-18 fw-bold mb-0">Education</h6>
        {data.gradeLevels?.map((grade, index) => (
          <div key={index} className="candidate-education-content mt-4 d-flex">
            <div className="circle flex-shrink-0 primary-bg-subtle">
              {grade.charAt(0)}
            </div>
            <div className="ms-4">
              <h6 className="fs-16 mb-1">{grade}</h6>
              <p className="mb-2 text-muted">International University</p>
              <p className="text-muted">Completed {grade} degree.</p>
            </div>
          </div>
        ))}
      </div>

      <div className="candidate-education-details mt-4">
        <h6 className="fs-18 fw-bold mb-0">Experiences</h6>
        {data.workExperience?.map((exp, index) => (
          <div key={index} className="candidate-education-content mt-4 d-flex">
            <div className="circle flex-shrink-0 primary-bg-subtle">
              {exp.position.charAt(0).toUpperCase()}
            </div>
            <div className="ms-4">
              <h6 className="fs-16 mb-1">{exp.position}</h6>
              <p className="mb-2 text-muted">
                {exp.company} - ({new Date(exp.startDate).getFullYear()} - {exp.endDate ? new Date(exp.endDate).getFullYear() : 'Present'})
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h5 className="fs-18 fw-bold">Skills</h5>
        {data.skills?.map((skill, index) => (
          <span key={index} className="badge fs-13 bg-primary-subtle text-primary mt-2 me-2">
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <h5 className="fs-18 fw-bold">Spoken languages</h5>
        {data.languages?.map((language, index) => (
          <span key={index} className="badge fs-13 bg-success-subtle text-success mt-2 me-2">
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CandidateOverview;