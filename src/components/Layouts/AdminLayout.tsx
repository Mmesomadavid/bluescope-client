import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => (
  <div className="admin-layout">
    {/* ...admin sidebar/header/etc... */}
    <Outlet />
    <h1>This is the admin dashboard</h1>
  </div>
);

export default AdminLayout;