"use client"

import type React from "react"
import { useState } from "react"
import {
  ChevronLeft,
  Edit,
  MoreHorizontal,
  Plus,
  Calendar,
  Satellite,
  ChevronDown,
  User,
  CreditCard,
  CalendarDays,
  LocationEdit,
} from "lucide-react"
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
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case "completed":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div>
            <span className="text-sm text-gray-500">Operations engineer</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Account</h1>
        <p className="text-gray-600">
          Your mission critical interface for fleet management, telemetry control, and orbital resource deployment.
        </p>
      </div>

      {/* Profile Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://ui-avatars.com/api/?name=Mickey+Vazquez&background=3b82f6&color=fff" />
                <AvatarFallback className="bg-blue-600 text-white text-lg">MV</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Victor Tochukwu</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-500">Offline</span>
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
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <detail.icon className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{detail.label}:</p>
                  <p className="text-sm text-gray-600">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Missions Assigned */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Transactions</CardTitle>
              <p className="text-gray-600 mt-1">List of all past and recently made transactions by you.</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Currently Assigned Section */}
          <div>
            <button
              onClick={() => setIsAssignedExpanded(!isAssignedExpanded)}
              className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
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
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Satellite className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{transaction.title}</h4>
                          <p className="text-sm text-gray-600">{transaction.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500">{transaction.date}</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit transaction</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Remove Assignment</DropdownMenuItem>
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
            className="w-full justify-start text-orange-600 border-orange-200 hover:bg-orange-50"
          >
            <Plus className="w-4 h-4 mr-2" />
            Assign a new transaction
          </Button>

          {/* All transactions */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wider">ALL transactionS</h4>
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Satellite className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{transaction.title}</h4>
                    <p className="text-sm text-gray-600">{transaction.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {getStatusBadge(transaction.status)}
                  <span className="text-sm text-gray-500">{transaction.date}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit transaction</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Remove Assignment</DropdownMenuItem>
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
