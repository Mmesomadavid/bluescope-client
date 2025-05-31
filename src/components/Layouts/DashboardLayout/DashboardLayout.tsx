import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => (
  <div className="dashboard-layout">
    {/* ...dashboard sidebar/header/etc... */}
    <Outlet />
    <h1>This is the user's dashboard</h1>
  </div>
);

export default DashboardLayout;