"use client"
import { Search, Bell } from "lucide-react"

import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"


const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between bg-gray-50 px-6">
      {/* Left section - Search Input */}
      <div className="flex items-center gap-4">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search for anything" className="pl-10 bg-zinc-100/90 rounded-2xl" />
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