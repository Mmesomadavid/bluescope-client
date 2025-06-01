"use client"

import type React from "react"
import { useState } from "react"
import { ChevronLeft, Edit, MoreHorizontal, Plus, Calendar, Satellite, ChevronDown, User, CreditCard, CalendarDays, LocateIcon as LocationEdit } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu"
import { Separator } from "../../components/ui/separator"

interface Transaction {
  id: string
  amount: number
  currency: string
  description: string
  title: string
  role: string
  date: string
  status: "active" | "completed" | "pending"
}

interface ProfileDetail {
  label: string
  value: string
  icon: React.ComponentType<{ className?: string }>
}

const Profile: React.FC = () => {
  const [isAssignedExpanded, setIsAssignedExpanded] = useState(true)

  const profileDetails: ProfileDetail[] = [
    { label: "My ID", value: "826ynma8901", icon: User},
    { label: "Balance", value: "138 Mhz - 240 Mhz", icon: CreditCard },
    { label: "Gender", value: "Principal Engineer", icon: User },
    { label: "Age", value: "Principal Engineer", icon: CalendarDays },
    { label: "Date Joined", value: "10 May 2020", icon: Calendar },
    { label: "Location", value: "Delta", icon: LocationEdit },
  ]

  const transactions: Transaction[] = [
  {
    id: "txn_1001",
    amount: 1250.0,
    currency: "USD",
    date: "2023-09-19",
    description: "Monthly subscription payment",
    status: "completed",
    title: "BTC INVESTMNET",
    role: "User",
  },
  {
    id: "txn_1002",
    amount: 430.75,
    currency: "USD",
    date: "2023-09-15",
    description: "One-time consulting fee",
    status: "completed",
    title: "CASH INVESTMENT",
    role: "Consultant",
  },
  {
    id: "txn_1003",
    amount: 89.99,
    currency: "USD",
    date: "2023-09-12",
    description: "Equipment rental deposit",
    status: "pending",
    title: "cAPITAL INVESTMENT",
    role: "User",
  },
];

  const getStatusBadge = (status: Transaction["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900">Active</Badge>
      case "completed":
        return <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-100 dark:hover:bg-yellow-900">Pending</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6 bg-background">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div>
            <span className="text-4xl font-semibold text-muted-foreground">Profile</span>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://ui-avatars.com/api/?name=Mickey+Vazquez&background=3b82f6&color=fff" />
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">MV</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-card-foreground">Victor Tochukwu</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  <span className="text-muted-foreground">Offline</span>
                </div>
              </div>
            </div>
            <Button variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileDetails.map((detail, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <detail.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">{detail.label}:</p>
                  <p className="text-sm text-muted-foreground">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transactions */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-card-foreground">Transactions</CardTitle>
              <p className="text-muted-foreground mt-1">List of all past and recently made transactions by you.</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Currently Assigned Section */}
          <div>
            <button
              onClick={() => setIsAssignedExpanded(!isAssignedExpanded)}
              className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform ${isAssignedExpanded ? "rotate-0" : "-rotate-90"}`}
              />
              <span>CURRENTLY ASSIGNED</span>
            </button>

            {isAssignedExpanded && (
              <div className="mt-4 space-y-3">
                {transactions
                  .filter((transaction) => transaction.status === "active")
                  .map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Satellite className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-card-foreground">{transaction.title}</h4>
                          <p className="text-sm text-muted-foreground">{transaction.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-muted-foreground">{transaction.date}</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit transaction</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Remove Assignment</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Add New transaction Button */}
          <Button
            variant="outline"
            className="w-full justify-start text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950"
          >
            <Plus className="w-4 h-4 mr-2" />
            Assign a new transaction
          </Button>

          {/* All transactions */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">ALL TRANSACTIONS</h4>
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                    <Satellite className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">{transaction.title}</h4>
                    <p className="text-sm text-muted-foreground">{transaction.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {getStatusBadge(transaction.status)}
                  <span className="text-sm text-muted-foreground">{transaction.date}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit transaction</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Remove Assignment</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
