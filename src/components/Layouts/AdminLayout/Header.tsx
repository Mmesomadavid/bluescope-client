"use client"
import { Search, Bell } from "lucide-react"

import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between bg-gray-50 px-4 md:px-6">
      {/* Left section - Search Input or Menu */}
      <div className="flex items-center gap-4">
        {/* Search visible on md+ */}
        <div className="relative w-52 md:w-72 hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search for anything" className="pl-10 bg-zinc-100/90 rounded-2xl" />
        </div>
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>

      {/* Right section - Actions and Profile */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Notifications - hide on mobile */}
        <Button variant="ghost" size="icon" className="relative hidden md:inline-flex">
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