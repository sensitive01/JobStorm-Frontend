import React from "react";
import { Menu, Bell, Settings, Search, ChevronDown } from "lucide-react";

const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 h-14">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left Section - Menu & Logo */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:bg-gray-100 p-2 rounded-md transition-colors"
            aria-label="Toggle Menu"
          >
            <Menu size={20} />
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-gradient-to-br from-purple-600 to-purple-700 rounded flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xs">JS</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-800">
                JobsStorm
              </span>
              <span className="text-xs text-gray-400 hidden md:inline">
                Admin
              </span>
            </div>
          </div>
        </div>

        {/* Center Section - Search Bar */}
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

        {/* Right Section - Notifications & Profile */}
        <div className="flex items-center space-x-2">
          {/* Notifications */}
          <button className="relative text-gray-600 hover:bg-gray-100 p-2 rounded-md transition-colors">
            <Bell size={18} />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-semibold">
              5
            </span>
          </button>

          {/* Settings */}
          <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-md transition-colors">
            <Settings size={18} />
          </button>

          {/* User Profile Dropdown */}
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

export default TopBar;
