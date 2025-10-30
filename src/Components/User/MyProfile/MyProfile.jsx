import React, { useEffect, useState } from "react";
import EditFormDataPage from "./EditFormDataPage";
import CandidateOverview from "./CandidateOverview";
import MyProfileSideView from "./MyProfileSideView";
import { getUserDetails } from "../../../api/service/axiosService";
import profileImage from "../../../assets/images/profileImage.png"

const MyProfile = () => {
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

          // Helper function to safely parse arrays
          const parseArray = (field) => {
            if (!field) return [];
            if (Array.isArray(field)) return field;
            if (typeof field === "string") {
              try {
                return JSON.parse(field);
              } catch (e) {
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
    <div>
      <div className="main-content">
        <div className="page-content">
          {/* Start home */}
          <section className="page-title-box">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="text-center text-white">
                    <h3 className="mb-4">My Profile</h3>
                    <div className="page-next">
                      <nav
                        className="d-inline-block"
                        aria-label="breadcrumb text-center"
                      >
                        <ol className="breadcrumb justify-content-center">
                          <li className="breadcrumb-item">
                            <a href="index-2.html">Home</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="javascript:void(0)">My Profile</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            {" "}
                            My Profile{" "}
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
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
          {/* START PROFILE */}
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card profile-sidebar me-lg-4">
                    <div className="card-body p-4">
                      <MyProfileSideView data={data} profileImage={profileImage} />

                      {/*end contact-details*/}
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end profile-sidebar*/}
                </div>
                {/*end col*/}
                <div className="col-lg-8">
                  <div className="card profile-content-page mt-4 mt-lg-0">
                    <ul
                      className="profile-content-nav nav nav-pills border-bottom mb-4"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="overview-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#overview"
                          type="button"
                          role="tab"
                          aria-controls="overview"
                          aria-selected="true"
                        >
                          Overview
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#settings"
                          type="button"
                          role="tab"
                          aria-controls="settings"
                          aria-selected="false"
                        >
                          My Jobs
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#settings"
                          type="button"
                          role="tab"
                          aria-controls="settings"
                          aria-selected="false"
                        >
                          Edit Profile
                        </button>
                      </li>
                    </ul>
                    {/*end profile-content-nav*/}
                    <div className="card-body p-4">
                      <div className="tab-content" id="pills-tabContent">
                        <CandidateOverview data={data} loading={loading} />
                        <EditFormDataPage profileImages={profileImage} />
                        {/*end tab-pane*/}
                      </div>
                      {/*end tab-content*/}
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end profile-content-page*/}
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </section>
          {/* END PROFILE */}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
