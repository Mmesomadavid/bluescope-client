"use client"

import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import {
  LayoutDashboard,
  Moon,
  User,
  LogInIcon as Logs,
  PiggyBank,
  ListChecksIcon as ListCheck,
  Target,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  X,
  Sun,
} from "lucide-react"
import Logo from "../../../components/Logo"
import { ScrollArea } from "../../../components/ui/scroll-area"
import { useTheme } from "next-themes"

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  sidebarCollapsed: boolean
  setSidebarCollapsed: (collapsed: boolean) => void
}

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  to?: string
  hasAction?: boolean
  isButton?: boolean
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
  sidebarCollapsed,
  setSidebarCollapsed,
}) => {
  const { setTheme, resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const navigate = useNavigate()

  const menuItems: MenuItem[] = [
    { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard" },
    { icon: Target, label: "Investment Plan", to: "/dashboard/investment-plan" },
    { icon: Logs, label: "Investment Log", to: "/dashboard/investment-log" },
    { icon: ListCheck, label: "All Transactions", to: "/dashboard/all-transactions" },
    { icon: PiggyBank, label: "Deposit", to: "/dashboard/deposit", isButton: true },
    { icon: Logs, label: "Deposit Log", to: "/dashboard/deposit-log" },
    { icon: CreditCard, label: "Withdraw", to: "/dashboard/withdraw", isButton: true },
    { icon: User, label: "Profile", to: "/dashboard/profile" },
  ]

  const handleNavClick = () => {
    setSidebarOpen(false)
  }

  const handleButtonClick = (item: MenuItem) => {
    if (item.to) {
      navigate(item.to)
      setSidebarOpen(false)
    }
  }

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-30
        ${sidebarCollapsed ? "lg:w-20" : "lg:w-64"} 
        w-64 bg-blue-600 border-r border-blue-500 h-screen flex flex-col
        transform transition-all duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Header with logo and mobile close button */}
        <div
          className={`
          p-4 border-b border-blue-500 flex items-center justify-between
          ${sidebarCollapsed ? "lg:p-2 lg:justify-center" : ""}
        `}
        >
          <div
            className={`
            flex items-center space-x-2 
            ${sidebarCollapsed ? "lg:justify-center lg:space-x-0" : ""}
          `}
          >
            {!sidebarCollapsed && <Logo />}
          </div>

          {/* Mobile close button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-md text-white hover:bg-blue-500 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Section */}
        <ScrollArea className="flex-1 p-4">
          <div className="mb-6">
            {!sidebarCollapsed && (
              <h3 className="text-xs font-semibold text-blue-100 uppercase tracking-wider mb-3">MENU</h3>
            )}
            <nav className="space-y-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.isButton ? (
                    <button
                      onClick={() => handleButtonClick(item)}
                      className={`w-full flex items-center ${
                        sidebarCollapsed ? "lg:justify-center lg:px-2" : "px-3"
                      } py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative text-blue-100 hover:bg-blue-500 hover:text-white`}
                      title={sidebarCollapsed ? item.label : ""}
                    >
                      <div className="relative flex-shrink-0">
                        <item.icon className={sidebarCollapsed ? "w-5 h-5" : "w-4 h-4"} />
                      </div>
                      {!sidebarCollapsed && <span className="truncate ml-3">{item.label}</span>}

                    


                      {sidebarCollapsed && (
                        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 hidden lg:block pointer-events-none">
                          {item.label}
                        </div>
                      )}
                    </button>
                  ) : (
                    <NavLink
                      to={item.to!}
                      end={item.to === "/dashboard"}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        `flex items-center ${
                          sidebarCollapsed ? "lg:justify-center lg:px-2" : "space-x-3 px-3"
                        } py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
                          isActive
                            ? "bg-blue-100 text-blue-700 shadow-sm"
                            : "text-blue-100 hover:bg-blue-500 hover:text-white"
                        }`
                      }
                      title={sidebarCollapsed ? item.label : ""}
                    >
                      <item.icon className={`flex-shrink-0 ${sidebarCollapsed ? "w-5 h-5" : "w-4 h-4"}`} />
                      {!sidebarCollapsed && <span className="truncate">{item.label}</span>}

                      {sidebarCollapsed && (
                        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 hidden lg:block pointer-events-none">
                          {item.label}
                        </div>
                      )}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Theme Toggle */}
          {!sidebarCollapsed && (
            <div className="border-t border-blue-500 pt-4">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm font-medium text-blue-100">Theme</span>
                <div className="flex items-center gap-2 px-2 py-1 bg-blue-700/40 rounded-full border border-blue-500">
                  <button
                    type="button"
                    aria-label="Switch to light mode"
                    onClick={() => setTheme("light")}
                    className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors
                      ${!isDark ? "bg-white shadow text-yellow-500" : "text-blue-200 hover:bg-blue-600"}
                      focus:outline-none focus:ring-2 focus:ring-blue-300`}
                  >
                    <Sun className="w-4 h-4" />
                  </button>
                  <span className="w-px h-5 bg-blue-400 mx-1" />
                  <button
                    type="button"
                    aria-label="Switch to dark mode"
                    onClick={() => setTheme("dark")}
                    className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors
                      ${isDark ? "bg-blue-900 text-blue-100 shadow" : "text-blue-200 hover:bg-blue-600"}
                      focus:outline-none focus:ring-2 focus:ring-blue-300`}
                  >
                    <Moon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </ScrollArea>

        {/* Desktop collapse toggle button - positioned on the border */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className={`
            hidden lg:flex absolute -right-3 top-20 z-40 
            w-6 h-6 bg-white border border-gray-200 rounded-full shadow-md 
            hover:bg-gray-50 text-gray-600 hover:text-gray-900 
            transition-all duration-200 items-center justify-center
            focus:outline-none focus:ring-2 focus:ring-blue-300
          `}
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {sidebarCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
        </button>
      </aside>
    </>
  )
}

export default Sidebar