import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const DashboardLayout: React.FC = () => (
   <div className="dashboard-layout">
    <Header />
    <div className="admin-layout-content">
      <Sidebar />
      <main className="admin-main-content">
        <Outlet />
      </main>
    </div>
  </div>
);

export default DashboardLayout;