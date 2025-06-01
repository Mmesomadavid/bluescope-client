"use client"

import type React from "react"
import { Menu, Sun, Moon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Popover, PopoverTrigger, PopoverContent } from "../../../components/ui/popover"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void
  sidebarCollapsed: boolean
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === "dark"

  return (
    <header className="bg-background  px-4 md:px-6 py-3 flex items-center justify-between lg:justify-end transition-colors duration-300">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden p-2 rounded-md text-foreground hover:text-foreground hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Page title for mobile */}
      <h1 className="lg:hidden text-lg font-semibold text-foreground">Dashboard</h1>

      {/* Right side - Theme toggle and Profile with popover */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle Styled as Radio Button */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/60 border border-border shadow-inner">
          <button
            type="button"
            aria-label="Switch to light mode"
            onClick={() => setTheme("light")}
            className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors
              ${!isDark ? "bg-white shadow text-yellow-500" : "text-muted-foreground hover:bg-muted"}
              focus:outline-none focus:ring-2 focus:ring-ring`}
          >
            <Sun className="w-4 h-4" />
          </button>
          <span className="w-px h-5 bg-border mx-1" />
          <button
            type="button"
            aria-label="Switch to dark mode"
            onClick={() => setTheme("dark")}
            className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors
              ${isDark ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:bg-muted"}
              focus:outline-none focus:ring-2 focus:ring-ring`}
          >
            <Moon className="w-4 h-4" />
          </button>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center space-x-3 focus:outline-none bg-transparent border-0 p-2 rounded-lg hover:bg-accent transition-colors">
              <div className="relative">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src="https://ui-avatars.com/api/?name=John+Galt&background=3b82f6&color=fff"
                    alt="User avatar"
                  />
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm">JG</AvatarFallback>
                </Avatar>
                {/* Active green dot */}
                <span className="absolute -bottom-0.5 -right-0.5 block w-3 h-3 rounded-full ring-2 ring-background bg-green-500" />
              </div>
              <div className="hidden md:flex flex-col items-start">
                <span className="text-sm font-medium text-foreground">John Galt</span>
                <span className="text-xs text-muted-foreground">john.galt@email.com</span>
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
                  <AvatarFallback className="bg-primary text-primary-foreground">JG</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">John Galt</span>
                  <span className="text-xs text-muted-foreground">john.galt@email.com</span>
                </div>
              </div>

              {/* Status indicator */}
              <div className="flex items-center space-x-2 px-2 py-1 bg-green-50 dark:bg-green-950 rounded-md">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-green-700 dark:text-green-300 font-medium">Online</span>
              </div>

              {/* Menu items */}
              <div className="border-t border-border pt-3 space-y-1">
                <button className="w-full text-left px-2 py-1.5 rounded text-sm text-foreground hover:bg-accent transition-colors">
                  My Account
                </button>
                <button className="w-full text-left px-2 py-1.5 rounded text-sm text-foreground hover:bg-accent transition-colors">
                  Settings
                </button>
                <button className="w-full text-left px-2 py-1.5 rounded text-sm text-red-500 hover:bg-destructive/10 transition-colors">
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