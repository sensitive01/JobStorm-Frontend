import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const UserDashboardLayout = () => {
  return (
    <div className="main-content">
      <div className="page-content">
        {/* Dashboard Content */}
        <section
          className="section"
          style={{
            backgroundColor: "#f8f9fa",
            minHeight: "60vh",
            marginTop: "40px",
          }}
        >
          <div className="container-fluid px-4">
            <div className="row gx-4">
              {/* Sidebar - hidden on mobile */}
              <div className="col-lg-2 d-none d-lg-block">
                <DashboardSidebar />
              </div>

              {/* Main Content Area */}
              <div className="col-12 col-lg-10 mt-4 mt-lg-0">
                <Outlet />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
