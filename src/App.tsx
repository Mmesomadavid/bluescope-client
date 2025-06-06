/* App.tsx */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Support from './pages/Support';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import About from './pages/About';
import Projects from './pages/Projects';
import AnnualReport from './pages/AnnualReport';
import Events from './pages/Events';

// Dashboard Pages
import AdminDash from './pages/AdminDash/AdminDash';
import AdminSettings from './pages/AdminDash/AdminSettings';
import Dashboard from './pages/Dashboard/Dashboard';

// Layout Components
import AdminLayout from './components/Layouts/AdminLayout/AdminLayout';
import DashboardLayout from './components/Layouts/DashboardLayout/DashboardLayout';
import InvestmentPlan from './pages/Dashboard/InvestmentPlan';
import InvestmentLog from './pages/Dashboard/InvestmentLog';
import AllTransactions from './pages/Dashboard/AllTransactions';
import Deposit from './pages/Dashboard/Deposit';
import DepositLog from './pages/Dashboard/DepositLog';
import Withdraw from './pages/Dashboard/Withdraw';
import WithdrawLogs from './pages/Dashboard/WithdrawLogs';
import Profile from './pages/Dashboard/Profile';
import InvestmentReport from './pages/AdminDash/InvestmentReport';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const noNavFooterPaths = ['/login', '/signup'];
  const hideNavFooter = noNavFooterPaths.includes(location.pathname);

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <main>{children}</main>
      {!hideNavFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* User Dashboard (no Navbar/Footer) */}
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="investment-plan" element={<InvestmentPlan/>} />
          <Route path="investment-log" element={<InvestmentLog/>} />
          <Route path="all-transactions" element={<AllTransactions/>} />
          <Route path="deposit" element={<Deposit/>} />
          <Route path="deposit-log" element={<DepositLog/>} />
          <Route path="withdraw" element={<Withdraw/>} />
          <Route path="withdraw-logs" element={<WithdrawLogs/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>

        {/* Admin Dashboard (no Navbar/Footer) */}
        <Route path="/admin-dashboard/*" element={<AdminLayout />}>
          <Route index element={<AdminDash />} />
          <Route path="investment-report" element={<InvestmentReport />} />
          <Route path="settings" element={<AdminSettings />} />
          {/* more admin-dashboard routes */}
        </Route>

        {/* Main layout for public pages */}
        <Route path="/*" element={<Layout><AppRoutes /></Layout>} />
      </Routes>
    </Router>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/reports" element={<AnnualReport />} />
      <Route path="/support" element={<Support />} />
      <Route path="/events" element={<Events />} />
      {/* dashboard and admin-dashboard routes are now outside */}
    </Routes>
  );
}

export default App;