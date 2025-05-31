import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Settings, Moon, User, BookCheck, CreditCard, Logs, PiggyBank, ListCheck, Target } from 'lucide-react';
import Logo from '../../../components/Logo';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
  { icon: Target, label: 'Investment Plan', to: '/dashboard/investment-plan' },
  { icon: Logs, label: 'Investment Log', to: '/dashboard/investment-log' },
  { icon: ListCheck, label: 'All Transactions', to: '/dashboard/all-transactions' },
  { icon: PiggyBank, label: 'Deposit', to: '/dashboard/deposit' },
  { icon: Logs, label: 'Deposit Log', to: '/dashboard/deposit-log' },
  { icon: CreditCard, label: 'Withdraw', to: '/dashboard/withdraw' },
  { icon: BookCheck, label: 'Withdraw Logs', to: '/dashboard/withdraw-logs' },
  { icon: Settings, label: 'Settings', to: '/dashboard/settings' },
  { icon: User, label: 'Profile', to: '/dashboard/profile' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-600 border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Logo/>
        </div>
      </div>

      {/* Menu Section */}
      <div className="flex-1 p-4">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-100 uppercase tracking-wider mb-3">MENU</h3>
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                end={item.to === '/dashboard'}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                      : 'text-gray-100 hover:bg-white hover:text-gray-900'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center justify-between px-3 py-2">
          <span className="text-sm font-medium text-gray-100">Theme</span>
          <button
            type="button"
            aria-label="Toggle theme"
            className="w-10 h-6 bg-white rounded-full relative transition-colors hover:bg-gray-300 flex items-center"
          >
            <span className="absolute left-1 top-1 w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center shadow-sm transition-transform">
              <Moon className="w-3 h-3 text-white" />
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;