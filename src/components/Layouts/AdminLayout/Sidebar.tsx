"use client"

import * as React from "react"
import {
  BarChart3,
  Users,
  TrendingUp,
  TrendingDown,
  Settings,
  FileText,
  Calendar,
  Bell,
  BellRing,
  UserCheck,
  UserX,
  Mail,
  Smartphone,
  FileX,
  FileClock,
  Wallet,
  UsersRound,
  TicketCheck,
  BarChart,
  Layers,
  Share2,
  Trophy,
  Megaphone,
  CreditCard,
  Sliders,
  Cpu,
  Clock,
  Image,
  Puzzle,
  Globe,
  Search,
  FileCheck,
  Layout,
  Plus,
  PenToolIcon as Tool,
  Cookie,
  Server,
  Code,
} from "lucide-react"
import { motion } from "framer-motion"

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
} from "../../../components/ui/sidebar"
import { cn } from "../../../lib/utils"
import Logo from "../../../components/Logo"

const navigationItems = [
  { title: "Dashboard", icon: BarChart3, isActive: true },
  { title: "Investment Report", icon: FileText, isActive: false },
  { title: "Deposits", icon: TrendingUp, isActive: false },
  { title: "Withdrawals", icon: TrendingDown, isActive: false },
  { title: "Manage Users", icon: Users, isActive: false, badge: "" },
  { title: "Active Users", icon: UserCheck, isActive: false },
  { title: "Banned Users", icon: UserX, isActive: false, badge: "1" },
  { title: "Email Unverified", icon: Mail, isActive: false },
  { title: "Mobile Unverified", icon: Smartphone, isActive: false },
  { title: "KYC Unverified", icon: FileX, isActive: false, badge: "17" },
  { title: "KYC Pending", icon: FileClock, isActive: false },
  { title: "With Balance", icon: Wallet, isActive: false },
  { title: "All Users", icon: UsersRound, isActive: false },
  { title: "Notification to All", icon: Bell, isActive: false },
  { title: "Support Ticket", icon: TicketCheck, isActive: false },
  { title: "Report", icon: BarChart, isActive: false },
  { title: "Plan Manage", icon: Layers, isActive: false },
  { title: "Manage Referral", icon: Share2, isActive: false },
  { title: "User Ranking", icon: Trophy, isActive: false },
  { title: "Promotional Tool", icon: Megaphone, isActive: false },
  { title: "Payment Gateways", icon: CreditCard, isActive: false },
  { title: "Subscribers", icon: Users, isActive: false },
  { title: "Settings", icon: Settings, isActive: false },
  { title: "General Setting", icon: Sliders, isActive: false },
  { title: "System Configuration", icon: Cpu, isActive: false },
  { title: "Cron Job Setting", icon: Clock, isActive: false },
  { title: "Logo & Favicon", icon: Image, isActive: false },
  { title: "Extensions", icon: Puzzle, isActive: false },
  { title: "Language", icon: Globe, isActive: false },
  { title: "SEO Manager", icon: Search, isActive: false },
  { title: "KYC Setting", icon: FileCheck, isActive: false },
  { title: "Notification Setting", icon: BellRing, isActive: false },
  { title: "Holiday Setting", icon: Calendar, isActive: false },
  { title: "Frontend Manager", icon: Layout, isActive: false },
  { title: "Manage Section", icon: Layers, isActive: false },
  { title: "Extra", icon: Plus, isActive: false },
  { title: "Maintenance Mode", icon: Tool, isActive: false },
  { title: "GDPR Cookie", icon: Cookie, isActive: false },
  { title: "System", icon: Server, isActive: false },
  { title: "Custom CSS", icon: Code, isActive: false },
  { title: "Report & Request", icon: FileText, isActive: false },
  { title: "TundeBlog Script V4.0", icon: Code, isActive: false },
]

const Sidebar = () => {
  const [activeItem, setActiveItem] = React.useState("Dashboard")

  return (
    <UISidebar className="border-r !bg-blue-700 text-white">
      <SidebarHeader className="flex items-start justify-center py-4 !bg-blue-700">
        <div className="flex items-center gap-2">
          <Logo/>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-blue-700">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {navigationItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <SidebarMenuButton
                      asChild
                      isActive={activeItem === item.title}
                      className={cn(
                        "w-full justify-start gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-blue-600",
                        activeItem === item.title && "bg-blue-600 text-white",
                      )}
                      onClick={() => setActiveItem(item.title)}
                    >
                      <button className="flex items-center gap-3" type="button">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-white text-xs font-medium text-blue-700">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    </SidebarMenuButton>
                  </motion.div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </UISidebar>
  )
}

export default Sidebar