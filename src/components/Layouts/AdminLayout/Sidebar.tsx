"use client"

import * as React from "react"
import {
  BarChart3,
  Users,
  TrendingUp,
  TrendingDown,
  FileText,
  ChevronDown,
  Plus,
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../../components/ui/collapsible"
import { Button } from "../../../components/ui/button"

// Logo component placeholder
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="h-8 w-8 rounded bg-white/20" />
    <span className="font-semibold">Admin Panel</span>
  </div>
)

const Sidebar = () => {
  const [activeItem, setActiveItem] = React.useState("Dashboard")
  const [openDeposits, setOpenDeposits] = React.useState(false)
  const [openWithdrawals, setOpenWithdrawals] = React.useState(false)
  const [openUsers, setOpenUsers] = React.useState(false)
  const { open, toggleSidebar } = useSidebar()

  return (
    <UISidebar className="border-r !bg-blue-600 text-white">
      <SidebarHeader className="flex items-start justify-center py-4 !bg-blue-700">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-blue-600">
        <ScrollArea className="h-full">
          <div className="pr-4">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="gap-1">
                  {/* Dashboard */}
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={activeItem === "Dashboard"}
                      className={cn(
                        "w-full justify-start gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-blue-500",
                        activeItem === "Dashboard" && "bg-blue-500 text-white",
                      )}
                    >
                      <button
                        className="flex items-center gap-3"
                        type="button"
                        onClick={() => setActiveItem("Dashboard")}
                      >
                        <BarChart3 className="h-4 w-4" />
                        <span>Dashboard</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* Investment Report */}
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={activeItem === "Investment Report"}
                      className={cn(
                        "w-full justify-start gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-blue-500",
                        activeItem === "Investment Report" && "bg-blue-500 text-white",
                      )}
                    >
                      <button
                        className="flex items-center gap-3"
                        type="button"
                        onClick={() => setActiveItem("Investment Report")}
                      >
                        <FileText className="h-4 w-4" />
                        <span>Investment Report</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* Deposits Collapsible */}
                  <SidebarMenuItem>
                    <Collapsible open={openDeposits} onOpenChange={setOpenDeposits}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          asChild
                          isActive={
                            activeItem.startsWith("Pending Deposits") ||
                            activeItem.startsWith("Approved Deposits") ||
                            activeItem.startsWith("Successful Deposits") ||
                            activeItem.startsWith("Rejected Deposits") ||
                            activeItem.startsWith("Initiated Deposits") ||
                            activeItem.startsWith("All Deposits")
                          }
                          className={cn(
                            "w-full justify-start gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-blue-500",
                            openDeposits && "bg-blue-500 text-white",
                          )}
                        >
                          <button className="flex items-center gap-3 w-full" type="button">
                            <TrendingUp className="h-4 w-4" />
                            <span>Deposits</span>
                            <ChevronDown
                              className={cn("ml-auto h-4 w-4 transition-transform", openDeposits && "rotate-180")}
                            />
                          </button>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="ml-8 flex flex-col gap-1 py-1">
                          {[
                            "Pending Deposits",
                            "Approved Deposits",
                            "Successful Deposits",
                            "Rejected Deposits",
                            "Initiated Deposits",
                            "All Deposits",
                          ].map((label) => (
                            <button
                              key={label}
                              className={cn(
                                "flex items-center gap-2 rounded px-2 py-1 text-left text-sm transition-all hover:bg-blue-500",
                                activeItem === label && "bg-blue-500 text-white",
                              )}
                              onClick={() => setActiveItem(label)}
                              type="button"
                            >
                              <Plus className="h-3 w-3" />
                              {label}
                            </button>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  {/* Withdrawals Collapsible */}
                  <SidebarMenuItem>
                    <Collapsible open={openWithdrawals} onOpenChange={setOpenWithdrawals}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          asChild
                          isActive={
                            activeItem.startsWith("Withdrawal Methods") ||
                            activeItem.startsWith("Pending Withdrawals") ||
                            activeItem.startsWith("Approved Withdrawals") ||
                            activeItem.startsWith("Rejected Withdrawals") ||
                            activeItem.startsWith("All Withdrawals")
                          }
                          className={cn(
                            "w-full justify-start gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-blue-500",
                            openWithdrawals && "bg-blue-500 text-white",
                          )}
                        >
                          <button className="flex items-center gap-3 w-full" type="button">
                            <TrendingDown className="h-4 w-4" />
                            <span>Withdrawals</span>
                            <ChevronDown
                              className={cn("ml-auto h-4 w-4 transition-transform", openWithdrawals && "rotate-180")}
                            />
                          </button>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="ml-8 flex flex-col gap-1 py-1">
                          {[
                            "Withdrawal Methods",
                            "Pending Withdrawals",
                            "Approved Withdrawals",
                            "Rejected Withdrawals",
                            "All Withdrawals",
                          ].map((label) => (
                            <button
                              key={label}
                              className={cn(
                                "flex items-center gap-2 rounded px-2 py-1 text-left text-sm transition-all hover:bg-blue-500",
                                activeItem === label && "bg-blue-500 text-white",
                              )}
                              onClick={() => setActiveItem(label)}
                              type="button"
                            >
                              <Plus className="h-3 w-3" />
                              {label}
                            </button>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  {/* Manage Users Collapsible */}
                  <SidebarMenuItem>
                    <Collapsible open={openUsers} onOpenChange={setOpenUsers}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          asChild
                          isActive={
                            activeItem.startsWith("Active Users") ||
                            activeItem.startsWith("Banned Users") ||
                            activeItem.startsWith("Email Unverified") ||
                            activeItem.startsWith("Mobile Unverified") ||
                            activeItem.startsWith("KYC Unverified") ||
                            activeItem.startsWith("KYC Pending") ||
                            activeItem.startsWith("With Balance") ||
                            activeItem.startsWith("All Users") ||
                            activeItem.startsWith("Notification to All")
                          }
                          className={cn(
                            "w-full justify-start gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-blue-500",
                            openUsers && "bg-blue-500 text-white",
                          )}
                        >
                          <button className="flex items-center gap-3 w-full" type="button">
                            <Users className="h-4 w-4" />
                            <span>Manage Users</span>
                            <ChevronDown
                              className={cn("ml-auto h-4 w-4 transition-transform", openUsers && "rotate-180")}
                            />
                          </button>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="ml-8 flex flex-col gap-1 py-1">
                          {[
                            "Active Users",
                            "Banned Users",
                            "Email Unverified",
                            "Mobile Unverified",
                            "KYC Unverified",
                            "KYC Pending",
                            "With Balance",
                            "All Users",
                            "Notification to All",
                          ].map((label) => (
                            <button
                              key={label}
                              className={cn(
                                "flex items-center gap-2 rounded px-2 py-1 text-left text-sm transition-all hover:bg-blue-500",
                                activeItem === label && "bg-blue-500 text-white",
                              )}
                              onClick={() => setActiveItem(label)}
                              type="button"
                            >
                              <Plus className="h-3 w-3" />
                              {label}
                              {label === "KYC Unverified" && (
                                <span className="ml-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-white text-xs font-medium text-blue-700">
                                  17
                                </span>
                              )}
                              {label === "Banned Users" && (
                                <span className="ml-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-white text-xs font-medium text-blue-700">
                                  1
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
        </ScrollArea>
      </SidebarContent>

      {/* Custom Rail with Toggle Arrow - positioned relative to full sidebar */}
      <SidebarRail />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className={cn(
          "fixed top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:text-white border-2 border-white transition-all duration-200 z-50",
          open ? "left-[calc(16rem-1rem)]" : "left-[calc(16rem-1rem)]",
        )}
        aria-label={open ? "Close sidebar" : "Open sidebar"}
      >
        {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </Button>
    </UISidebar>
  )
}

export default Sidebar
