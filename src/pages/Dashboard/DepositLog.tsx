"use client"

import type React from "react"
import { useState } from "react"
import { Search,  Plus, MoreHorizontal, Eye, Edit, Trash2, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Badge } from "../../components/ui/badge"
import { Checkbox } from "../../components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination"

interface Transaction {
  id: string
  transactionNumber: string
  date: string
  walletType: string
  type: "Deposit" | "Withdrawal" | "Investment" | "Return"
  amount: number
  status: "Completed" | "Pending" | "Failed"
  remark: string
}

const DepositLog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [walletTypeFilter, setWalletTypeFilter] = useState("All")
  const [typeFilter, setTypeFilter] = useState("All")
  const [remarkFilter, setRemarkFilter] = useState("Any")
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [selectedDeposits, setSelectedDeposits] = useState<string[]>([])

  // Mock data
  const mockDeposits: Transaction[] = [
    {
      id: "1",
      transactionNumber: "TXN001234567",
      date: "Feb 24th, 2023, 08:53 AM",
      walletType: "Main Wallet",
      type: "Deposit",
      amount: 1000.0,
      status: "Completed",
      remark: "Bank Transfer Deposit",
    },
    {
      id: "2",
      transactionNumber: "TXN001234568",
      date: "Feb 24th, 2023, 09:15 AM",
      walletType: "Investment Wallet",
      type: "Investment",
      amount: 500.0,
      status: "Completed",
      remark: "Tech Fund Investment",
    },
    {
      id: "3",
      transactionNumber: "TXN001234569",
      date: "Feb 24th, 2023, 10:30 AM",
      walletType: "Main Wallet",
      type: "Withdrawal",
      amount: 200.0,
      status: "Pending",
      remark: "ATM Withdrawal",
    },
    {
      id: "4",
      transactionNumber: "TXN001234570",
      date: "Feb 24th, 2023, 11:45 AM",
      walletType: "Investment Wallet",
      type: "Return",
      amount: 50.0,
      status: "Completed",
      remark: "Monthly Return",
    },
    {
      id: "5",
      transactionNumber: "TXN001234571",
      date: "Feb 24th, 2023, 02:20 PM",
      walletType: "Savings Wallet",
      type: "Deposit",
      amount: 750.0,
      status: "Failed",
      remark: "Failed Transfer",
    },
    {
      id: "6",
      transactionNumber: "TXN001234572",
      date: "Feb 25th, 2023, 08:00 AM",
      walletType: "Main Wallet",
      type: "Investment",
      amount: 300.0,
      status: "Completed",
      remark: "Real Estate Fund",
    },
    {
      id: "7",
      transactionNumber: "TXN001234573",
      date: "Feb 25th, 2023, 10:15 AM",
      walletType: "Investment Wallet",
      type: "Return",
      amount: 25.0,
      status: "Completed",
      remark: "Dividend Payment",
    },
    {
      id: "8",
      transactionNumber: "TXN001234574",
      date: "Feb 25th, 2023, 03:30 PM",
      walletType: "Main Wallet",
      type: "Withdrawal",
      amount: 150.0,
      status: "Pending",
      remark: "Online Purchase",
    },
  ]

  // Filter Deposits
  const filteredDeposits = mockDeposits.filter((transaction) => {
    const matchesSearch =
      transaction.transactionNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.remark.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesWalletType = walletTypeFilter === "All" || transaction.walletType === walletTypeFilter
    const matchesType = typeFilter === "All" || transaction.type === typeFilter
    const matchesRemark =
      remarkFilter === "Any" || transaction.remark.toLowerCase().includes(remarkFilter.toLowerCase())

    return matchesSearch && matchesWalletType && matchesType && matchesRemark
  })

  // Pagination
  const totalPages = Math.ceil(filteredDeposits.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const paginatedDeposits = filteredDeposits.slice(startIndex, startIndex + rowsPerPage)

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedDeposits(paginatedDeposits.map((t) => t.id))
    } else {
      setSelectedDeposits([])
    }
  }

  const handleSelectTransaction = (transactionId: string, checked: boolean) => {
    if (checked) {
      setSelectedDeposits([...selectedDeposits, transactionId])
    } else {
      setSelectedDeposits(selectedDeposits.filter((id) => id !== transactionId))
    }
  }

  const getStatusBadge = (status: Transaction["status"]) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "Failed":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Failed</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getTypeBadge = (type: Transaction["type"]) => {
    switch (type) {
      case "Deposit":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Deposit</Badge>
      case "Withdrawal":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Withdrawal</Badge>
      case "Investment":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Investment</Badge>
      case "Return":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Return</Badge>
      default:
        return <Badge variant="secondary">{type}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">All Deposits</h1>
        <p className="text-gray-600">View and manage all your transaction history.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle>Deposits</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-500">
                <Plus className="w-4 h-4 mr-2" />
                Make new Deposit
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="space-y-4 mb-6">
            {/* Search and Date Range */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search Deposits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select value={rowsPerPage.toString()} onValueChange={(value) => setRowsPerPage(Number(value))}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">Show 5</SelectItem>
                    <SelectItem value="10">Show 10</SelectItem>
                    <SelectItem value="20">Show 20</SelectItem>
                    <SelectItem value="50">Show 50</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Wallet Type</label>
                <Select value={walletTypeFilter} onValueChange={setWalletTypeFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Main Wallet">Main Wallet</SelectItem>
                    <SelectItem value="Investment Wallet">Investment Wallet</SelectItem>
                    <SelectItem value="Savings Wallet">Savings Wallet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Type</label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Deposit">Deposit</SelectItem>
                    <SelectItem value="Withdrawal">Withdrawal</SelectItem>
                    <SelectItem value="Investment">Investment</SelectItem>
                    <SelectItem value="Return">Return</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Remark</label>
                <Select value={remarkFilter} onValueChange={setRemarkFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Any">Any</SelectItem>
                    <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                    <SelectItem value="Investment">Investment</SelectItem>
                    <SelectItem value="Withdrawal">Withdrawal</SelectItem>
                    <SelectItem value="Return">Return</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Transaction Number</label>
                <Input placeholder="Enter transaction number..." />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={
                        selectedDeposits.length === paginatedDeposits.length && paginatedDeposits.length > 0
                      }
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Transaction Number</TableHead>
                  <TableHead>Date Created</TableHead>
                  <TableHead>Wallet Type</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Remark</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedDeposits.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedDeposits.includes(transaction.id)}
                        onCheckedChange={(checked) => handleSelectTransaction(transaction.id, checked as boolean)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{transaction.transactionNumber}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.walletType}</TableCell>
                    <TableCell>{getTypeBadge(transaction.type)}</TableCell>
                    <TableCell className="font-medium">${transaction.amount.toFixed(2)}</TableCell>
                    <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                    <TableCell>{transaction.remark}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(startIndex + rowsPerPage, filteredDeposits.length)} of{" "}
              {filteredDeposits.length} Deposits
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                {[...Array(Math.min(5, totalPages))].map((_, i) => {
                  const pageNumber = i + 1
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        onClick={() => setCurrentPage(pageNumber)}
                        isActive={currentPage === pageNumber}
                        className="cursor-pointer"
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  )
                })}
                {totalPages > 5 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default DepositLog
