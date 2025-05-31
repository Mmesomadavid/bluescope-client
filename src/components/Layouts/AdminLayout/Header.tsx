"use client"

import * as React from "react"
import { Search, Bell} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { cn } from "../../../lib/utils"

const navigationTabs = [
  { id: "overview", label: "Overview", active: true },
  { id: "ppc", label: "PPC", active: false },
  { id: "year-to-year", label: "Year to year", active: false },
  { id: "customize", label: "Customize", active: false },
]

const Header = () => {
  const [activeTab, setActiveTab] = React.useState("overview")

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      {/* Left section - Logo and Navigation */}
      <div className="flex items-center gap-8">
        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1">
          {navigationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg",
                "hover:bg-blue-50 hover:text-blue-700",
                activeTab === tab.id ? "text-blue-700 bg-blue-50" : "text-gray-600 hover:text-blue-700",
              )}
            >
              <span className="relative z-10">{tab.label}</span>
              {/* Blue underline */}
              <motion.div
                className="absolute bottom-0 left-1/2 h-0.5 bg-blue-700 rounded-full"
                initial={false}
                animate={{
                  width: activeTab === tab.id ? "80%" : "0%",
                  x: "-50%",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
              {/* Hover underline */}
              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-400 rounded-full transition-all duration-200 group-hover:w-3/4 -translate-x-1/2 opacity-0 hover:opacity-100" />
            </button>
          ))}
        </nav>
      </div>

      {/* Center section - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search for anything" className="pl-10 bg-muted/50 rounded-2xl" />
        </div>
      </div>

      {/* Right section - Actions and Profile */}
      <div className="flex items-center gap-4">

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
        </Button>


        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="bg-primary text-primary-foreground">N</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}


export default Header