import React from 'react';
import { LayoutDashboard, Users, Building2, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ isOpen, activeMenu, setActiveMenu }) => {
  const menuItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: LayoutDashboard
    },
    { 
      id: 'candidates', 
      label: 'Candidates', 
      icon: Users
    },
    { 
      id: 'employers', 
      label: 'Employers', 
      icon: Building2
    },
  ];

  return (
    <div 
      className={`${
        isOpen ? 'w-56' : 'w-0'
      } bg-gray-50 border-r border-gray-200 h-screen fixed left-0 top-14 transition-all duration-300 overflow-hidden shadow-sm z-40`}
    >
      <nav className="py-4 h-full flex flex-col">
        {/* Main Menu Section */}
        <div className="px-3 mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3">
            Main Menu
          </p>
        </div>
        
        {/* Menu Items */}
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
                    ? 'bg-purple-50 text-purple-700 shadow-sm border border-purple-100'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Icon 
                  size={18} 
                  className={isActive ? 'text-purple-700' : 'text-gray-500'} 
                />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
        
        {/* Spacer to push account section to bottom */}
        <div className="flex-1"></div>
        
        {/* Account Section */}
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
        
        {/* User Info Card */}
        <div className="mx-4 mb-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">Jansh</p>
              <p className="text-xs text-gray-500 truncate">Admin User</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;