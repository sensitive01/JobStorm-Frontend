import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import { Menu, X, LayoutDashboard } from "lucide-react";

const UserDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="main-content dashboard-layout">
      {/* Floating Mobile Toggle Button (iPhone Shortcut style) */}
      <div
        className="d-lg-none position-fixed z-3 shadow-lg floating-menu-btn"
        onClick={() => setIsSidebarOpen(true)}
        style={{
          bottom: "30px",
          right: "20px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#7c3aed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          cursor: "pointer",
          border: "4px solid rgba(255,255,255,0.3)",
          boxShadow: "0 8px 24px rgba(124, 58, 237, 0.4)",
        }}
      >
        <LayoutDashboard size={28} strokeWidth={2.5} />
      </div>

      <div className="page-content">
        <section
          className="section"
          style={{
            backgroundColor: "#f8f9fa",
            minHeight: "80vh",
            marginTop: "5px",
          }}
        >
          <div className="container-fluid px-2 px-lg-4">
            <div className="row gx-2 gx-lg-4">
              {/* Sidebar - Desktop Layout */}
              <div className="col-lg-3 col-xl-2 d-none d-lg-block">
                <DashboardSidebar />
              </div>

              {/* Mobile Sidebar (Drawer Style) */}
              {isSidebarOpen && (
                <div
                  className="d-lg-none position-fixed top-0 start-0 w-100 h-100 z-3"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(4px)",
                  }}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div
                    className="bg-white h-100 w-75 p-0 shadow-lg position-relative"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      animation:
                        "slideInLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      overflowY: "auto",
                    }}
                  >
                    <div className="p-3 d-flex justify-content-between align-items-center border-bottom bg-light">
                      <div className="d-flex align-items-center gap-2">
                        <LayoutDashboard size={20} className="text-purple" />
                        <h5 className="mb-0 fw-bold">Dashboard</h5>
                      </div>
                      <button
                        className="btn btn-sm btn-light rounded-circle"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <X size={24} />
                      </button>
                    </div>
                    <div
                      className="p-2"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <DashboardSidebar />
                    </div>
                  </div>
                </div>
              )}

              {/* Main Content Area */}
              <div className="col-12 col-lg-9 col-xl-10 mt-2 mt-lg-0">
                <Outlet />
              </div>
            </div>
          </div>
        </section>
      </div>
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .floating-menu-btn {
            transition: transform 0.2s active, scale 0.2s;
        }
        .floating-menu-btn:active {
            transform: scale(0.9);
        }
        .text-purple {
            color: #7c3aed;
        }
      `}</style>
    </div>
  );
};

export default UserDashboardLayout;
