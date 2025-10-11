import React, { useState } from "react";
import {
  Menu,
  Bell,
  Settings,
  Search,
  ChevronDown,
  LayoutDashboard,
  Users,
  Building2,
  LogOut,
} from "lucide-react";

// TopBar Component
const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 h-14">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:bg-gray-100 p-2 rounded-md transition-colors"
          >
            <Menu size={20} />
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-gradient-to-br from-purple-600 to-purple-700 rounded flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xs">JS</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">
              JobsStorm
            </span>
            <span className="text-xs text-gray-400 hidden md:inline">
              Admin
            </span>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-8 hidden md:block">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="relative text-gray-600 hover:bg-gray-100 p-2 rounded-md transition-colors">
            <Bell size={18} />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-semibold">
              5
            </span>
          </button>

          <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-md transition-colors">
            <Settings size={18} />
          </button>

          <div className="flex items-center space-x-2 ml-2 pl-2 border-l border-gray-200 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded-md transition-colors">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">JD</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-700">Jansh</p>
            </div>
            <ChevronDown size={16} className="text-gray-400 hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ isOpen, activeMenu, setActiveMenu }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "candidates", label: "Candidates", icon: Users },
    { id: "employers", label: "Employers", icon: Building2 },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-56" : "w-0"
      } bg-gray-50 border-r border-gray-200 h-screen fixed left-0 top-14 transition-all duration-300 overflow-hidden shadow-sm z-40`}
    >
      <nav className="py-4 h-full flex flex-col">
        <div className="px-3 mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3">
            Main Menu
          </p>
        </div>

        <div className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-purple-50 text-purple-700 shadow-sm border border-purple-100"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <Icon
                  size={18}
                  className={isActive ? "text-purple-700" : "text-gray-500"}
                />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex-1"></div>

        <div className="px-3 mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-4">
            Account
          </p>
          <div className="space-y-1 px-2">
            <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-all">
              <Settings size={18} className="text-gray-500" />
              <span className="text-sm font-medium">Settings</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-all">
              <LogOut size={18} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>

        <div className="mx-4 mb-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">
                Jansh
              </p>
              <p className="text-xs text-gray-500 truncate">Admin User</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

// MainLayout Component
const MainLayoutAdmin = ({ children, activeMenu, setActiveMenu }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar
        isOpen={sidebarOpen}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <div
        className={`pt-14 ${
          sidebarOpen ? "ml-56" : "ml-0"
        } transition-all duration-300`}
      >
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default MainLayoutAdmin;
