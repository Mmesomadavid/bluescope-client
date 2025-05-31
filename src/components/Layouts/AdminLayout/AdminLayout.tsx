import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const AdminLayout: React.FC = () => (
  <div className="admin-layout">
    <Header />
    <div className="admin-layout-content">
      <Sidebar />
      <main className="admin-main-content">
        <Outlet />
      </main>
    </div>
  </div>
);

export default AdminLayout;