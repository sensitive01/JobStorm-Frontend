import React, { useEffect, useState } from "react";
import CandidateOverview from "./CandidateOverview";

import { getUserDetails } from "../../../api/service/axiosService";
import profileImage from "../../../assets/images/profileImage.png";
import MyJobs from "./MyJobs";
import EditProfilePage from "./edit/EditProfilePage";

const MyProfile = () => {
  const userId = localStorage.getItem("userId");
  const [activeTab, setActiveTab] = useState("about");

  // Debug: Log tab changes
  useEffect(() => {
    console.log("Active tab changed to:", activeTab);
  }, [activeTab]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserDetails(userId);
        console.log("response", response);

        if (response.status === 200) {
          const rawData = response.data.data;

          // Helper function to safely parse arrays
          const parseArray = (field) => {
            if (!field) return [];
            if (Array.isArray(field)) return field;
            if (typeof field === "string") {
              try {
                return JSON.parse(field);
              } catch {
                return [];
              }
            }
            return [];
          };

          const parsedData = {
            ...rawData,
            languages: parseArray(rawData.languages),
            gradeLevels: parseArray(rawData.gradeLevels),
            skills: parseArray(rawData.skills),
            education: parseArray(rawData.education),
            workExperience: parseArray(rawData.workExperience),
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

  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="row">
        <div className="col-12">
          <div className="card profile-content-page mt-2 mt-lg-0">
            <ul
              className="profile-content-nav nav nav-pills border-bottom mb-4"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "about" ? "active" : ""}`}
                  onClick={() => setActiveTab("about")}
                  type="button"
                  role="tab"
                >
                  About Me
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "settings" ? "active" : ""}`}
                  onClick={() => {
                    console.log("Edit Profile button clicked");
                    setActiveTab("settings");
                  }}
                  type="button"
                  role="tab"
                >
                  Edit Profile
                </button>
              </li>
            </ul>
            <div className="card-body p-0 p-md-4">
              <div className="tab-content" id="pills-tabContent">
                {activeTab === "about" && (
                  <div className="tab-pane fade show active">
                    <CandidateOverview data={data} loading={loading} />
                  </div>
                )}
                {activeTab === "jobs" && (
                  <div className="tab-pane fade show active">
                    <MyJobs />
                  </div>
                )}
                {activeTab === "settings" && (
                  <div className="tab-pane fade show active">
                    <EditProfilePage
                      formData={data}
                      profileImages={profileImage}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
