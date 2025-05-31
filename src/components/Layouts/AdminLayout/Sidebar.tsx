"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import {
  BarChart3,
  Users,
  TrendingUp,
  TrendingDown,
  FileText,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import {
  Sidebar as UISidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "../../../components/ui/sidebar"
import { ScrollArea } from "../../../components/ui/scroll-area"
import { cn } from "../../../lib/utils"
import { Button } from "../../../components/ui/button"

// Logo component with variants
const Logo = ({ variant = "default" }: { variant?: "default" | "compact" }) => (
  <div className="flex items-center gap-2">
    <div className="h-8 w-8 rounded bg-white/20 flex items-center justify-center">
      <span className="text-white font-bold text-sm">L</span>
    </div>
    {variant === "default" && <span className="font-semibold">Your Logo</span>}
  </div>
)

const Sidebar = () => {
  const [activeItem, setActiveItem] = React.useState("Dashboard")
  const { open, toggleSidebar } = useSidebar()

  const menuItems = [
    {
      title: "Dashboard",
      icon: BarChart3,
      to: "/dashboard",
    },
    {
      title: "Investment Report",
      icon: FileText,
      to: "/investment-report",
    },
    {
      title: "Deposits",
      icon: TrendingUp,
      to: "/deposits",
      children: [
        { title: "Pending Deposits", to: "/deposits/pending" },
        { title: "Approved Deposits", to: "/deposits/approved" },
        { title: "Successful Deposits", to: "/deposits/successful" },
        { title: "Rejected Deposits", to: "/deposits/rejected" },
        { title: "Initiated Deposits", to: "/deposits/initiated" },
        { title: "All Deposits", to: "/deposits/all" },
      ],
    },
    {
      title: "Withdrawals",
      icon: TrendingDown,
      to: "/withdrawals",
      children: [
        { title: "Withdrawal Methods", to: "/withdrawals/methods" },
        { title: "Pending Withdrawals", to: "/withdrawals/pending" },
        { title: "Approved Withdrawals", to: "/withdrawals/approved" },
        { title: "Rejected Withdrawals", to: "/withdrawals/rejected" },
        { title: "All Withdrawals", to: "/withdrawals/all" },
      ],
    },
    {
      title: "Manage Users",
      icon: Users,
      to: "/users",
      children: [
        { title: "Active Users", to: "/users/active" },
        { title: "Banned Users", to: "/users/banned" },
        { title: "Email Unverified", to: "/users/email-unverified" },
        { title: "Mobile Unverified", to: "/users/mobile-unverified" },
        { title: "KYC Unverified", to: "/users/kyc-unverified" },
        { title: "KYC Pending", to: "/users/kyc-pending" },
        { title: "With Balance", to: "/users/with-balance" },
        { title: "All Users", to: "/users/all" },
        { title: "Notification to All", to: "/users/notifications" },
      ],
    },
  ]

  return (
    <UISidebar className="border-r !bg-blue-600 text-white">
      <SidebarHeader className="flex items-center justify-center py-4 !bg-blue-700">
        <Logo />
      </SidebarHeader>
      <SidebarContent className="bg-blue-600">
        <ScrollArea className="h-full">
          <div className="pr-4">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="gap-1">
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      {item.children ? (
                        <div className="space-y-1">
                          <SidebarMenuButton
                            asChild
                            isActive={activeItem === item.title}
                            className={cn(
                              "w-full justify-start gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-blue-500",
                              activeItem === item.title && "bg-blue-500 text-white",
                            )}
                          >
                            <button
                              className="flex items-center gap-3"
                              type="button"
                              onClick={() => setActiveItem(activeItem === item.title ? "" : item.title)}
                            >
                              <item.icon className="h-4 w-4" />
                              <span>{item.title}</span>
                              <ChevronDown
                                className={cn(
                                  "ml-auto h-4 w-4 transition-transform",
                                  activeItem === item.title && "rotate-180",
                                )}
                              />
                            </button>
                          </SidebarMenuButton>
                          {activeItem === item.title && (
                            <div className="ml-6 space-y-1">
                              {item.children.map((child) => (
                                <Link key={child.title} to={child.to}>
                                  <button
                                    className={cn(
                                      "w-full text-left rounded px-3 py-2 text-sm transition-all hover:bg-blue-500",
                                      activeItem === child.title && "bg-blue-500 text-white",
                                    )}
                                    onClick={() => setActiveItem(child.title)}
                                    type="button"
                                  >
                                    {child.title}
                                    {child.title === "KYC Unverified" && (
                                      <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white text-xs font-medium text-blue-700">
                                        17
                                      </span>
                                    )}
                                    {child.title === "Banned Users" && (
                                      <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white text-xs font-medium text-blue-700">
                                        1
                                      </span>
                                    )}
                                  </button>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <SidebarMenuButton
                          asChild
                          isActive={activeItem === item.title}
                          className={cn(
                            "w-full justify-start gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-blue-500",
                            activeItem === item.title && "bg-blue-500 text-white",
                          )}
                        >
                          <Link to={item.to}>
                            <button
                              className="flex items-center gap-3"
                              type="button"
                              onClick={() => setActiveItem(item.title)}
                            >
                              <item.icon className="h-4 w-4" />
                              <span>{item.title}</span>
                            </button>
                          </Link>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
        </ScrollArea>
      </SidebarContent>

      <SidebarRail />

      {/* Desktop toggle button - adjusts position based on sidebar state */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className={cn(
          "fixed top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:text-white border-2 border-white transition-all duration-200 z-50",
          "hidden md:flex",
          open ? "left-[calc(16rem-1rem)]" : "left-[calc(3rem-1rem)]",
        )}
        aria-label={open ? "Close sidebar" : "Open sidebar"}
      >
        {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </Button>

      {/* Mobile toggle button - only show when sidebar is closed */}
      {!open && (
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={cn(
            "fixed top-4 left-4 h-8 w-8 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:text-white border-2 border-white transition-all duration-200 z-50",
            "flex md:hidden",
          )}
          aria-label="Open sidebar"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </UISidebar>
  )
}

export default Sidebar
