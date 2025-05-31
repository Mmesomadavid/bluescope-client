"use client"

import type React from "react"
import { Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Popover, PopoverTrigger, PopoverContent } from "../../../components/ui/popover"

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void
  sidebarCollapsed: boolean
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 flex items-center justify-between lg:justify-end">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Page title for mobile */}
      <h1 className="lg:hidden text-lg font-semibold text-gray-900">Dashboard</h1>

      {/* Right side - Profile with popover */}
      <div className="flex items-center">
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center space-x-3 focus:outline-none bg-transparent border-0 p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="relative">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src="https://ui-avatars.com/api/?name=John+Galt&background=3b82f6&color=fff"
                    alt="User avatar"
                  />
                  <AvatarFallback className="bg-blue-600 text-white text-sm">JG</AvatarFallback>
                </Avatar>
                {/* Active green dot */}
                <span className="absolute -bottom-0.5 -right-0.5 block w-3 h-3 rounded-full ring-2 ring-white bg-green-500" />
              </div>
              <div className="hidden md:flex flex-col items-start">
                <span className="text-sm font-medium text-gray-900">John Galt</span>
                <span className="text-xs text-gray-500">john.galt@email.com</span>
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-4" align="end">
            <div className="flex flex-col space-y-3">
              {/* User info */}
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src="https://ui-avatars.com/api/?name=John+Galt&background=3b82f6&color=fff"
                    alt="User avatar"
                  />
                  <AvatarFallback className="bg-blue-600 text-white">JG</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">John Galt</span>
                  <span className="text-xs text-gray-500">john.galt@email.com</span>
                </div>
              </div>

              {/* Status indicator */}
              <div className="flex items-center space-x-2 px-2 py-1 bg-green-50 rounded-md">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-green-700 font-medium">Online</span>
              </div>

              {/* Menu items */}
              <div className="border-t pt-3 space-y-1">
                <button className="w-full text-left px-2 py-1.5 rounded text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  My Account
                </button>
                <button className="w-full text-left px-2 py-1.5 rounded text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Settings
                </button>
                <button className="w-full text-left px-2 py-1.5 rounded text-sm text-red-600 hover:bg-red-50 transition-colors">
                  Sign Out
                </button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

export default Header
