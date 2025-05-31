import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const DashboardLayout: React.FC = () => (
  <div className="dashboard-layout flex h-screen overflow-hidden">
    {/* Sidebar on the left */}
    <Sidebar />
    {/* Main content area */}
    <div className="flex-1 flex flex-col min-w-0">
      {/* Header at the top of main content */}
      <Header />
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  </div>
);

export default DashboardLayout;