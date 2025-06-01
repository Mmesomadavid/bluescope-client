"use client"

import type React from "react"
import { useState } from "react"
import { Search, Plus, MoreHorizontal, Eye, Edit, Trash2, Filter } from "lucide-react"
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
        return (
          <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900">
            Completed
          </Badge>
        )
      case "Pending":
        return (
          <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-100 dark:hover:bg-yellow-900">
            Pending
          </Badge>
        )
      case "Failed":
        return (
          <Badge className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-900">
            Failed
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getTypeBadge = (type: Transaction["type"]) => {
    switch (type) {
      case "Deposit":
        return (
          <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900">
            Deposit
          </Badge>
        )
      case "Withdrawal":
        return (
          <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900">
            Withdrawal
          </Badge>
        )
      case "Investment":
        return (
          <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900">
            Investment
          </Badge>
        )
      case "Return":
        return (
          <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900">
            Return
          </Badge>
        )
      default:
        return <Badge variant="secondary">{type}</Badge>
    }
  }

  return (
    <div className="space-y-6 bg-background">
      <div>
        <h1 className="text-2xl font-bold text-foreground">All Deposits</h1>
        <p className="text-muted-foreground">View and manage all your transaction history.</p>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="text-card-foreground">Deposits</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search deposits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background border-border"
                />
              </div>
              <div className="flex gap-2">
                <Select value={rowsPerPage.toString()} onValueChange={(value) => setRowsPerPage(Number(value))}>
                  <SelectTrigger className="w-[110px] bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">Show 5</SelectItem>
                    <SelectItem value="10">Show 10</SelectItem>
                    <SelectItem value="20">Show 20</SelectItem>
                    <SelectItem value="50">Show 50</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="shrink-0">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Filter Tabs - Collapsible on mobile */}
            <details className="md:hidden border border-border rounded-lg p-3">
              <summary className="font-medium text-foreground cursor-pointer">Show Filters</summary>
              <div className="mt-3 space-y-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Wallet Type</label>
                  <Select value={walletTypeFilter} onValueChange={setWalletTypeFilter}>
                    <SelectTrigger className="bg-background border-border">
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
                  <label className="text-sm font-medium text-foreground mb-1 block">Type</label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="bg-background border-border">
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
                  <label className="text-sm font-medium text-foreground mb-1 block">Remark</label>
                  <Select value={remarkFilter} onValueChange={setRemarkFilter}>
                    <SelectTrigger className="bg-background border-border">
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
                  <label className="text-sm font-medium text-foreground mb-1 block">Transaction Number</label>
                  <Input placeholder="Enter transaction number..." className="bg-background border-border" />
                </div>
              </div>
            </details>

            {/* Desktop filter grid */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Wallet Type</label>
                <Select value={walletTypeFilter} onValueChange={setWalletTypeFilter}>
                  <SelectTrigger className="bg-background border-border">
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
                <label className="text-sm font-medium text-foreground mb-1 block">Type</label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="bg-background border-border">
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
                <label className="text-sm font-medium text-foreground mb-1 block">Remark</label>
                <Select value={remarkFilter} onValueChange={setRemarkFilter}>
                  <SelectTrigger className="bg-background border-border">
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
                <label className="text-sm font-medium text-foreground mb-1 block">Transaction Number</label>
                <Input placeholder="Enter transaction number..." className="bg-background border-border" />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedDeposits.length === paginatedDeposits.length && paginatedDeposits.length > 0}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead className="text-foreground">Transaction Number</TableHead>
                    <TableHead className="text-foreground hidden md:table-cell">Date Created</TableHead>
                    <TableHead className="text-foreground hidden lg:table-cell">Wallet Type</TableHead>
                    <TableHead className="text-foreground">Type</TableHead>
                    <TableHead className="text-foreground">Amount</TableHead>
                    <TableHead className="text-foreground">Status</TableHead>
                    <TableHead className="text-foreground hidden md:table-cell">Remark</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedDeposits.map((transaction) => (
                    <TableRow key={transaction.id} className="border-border hover:bg-muted/50">
                      <TableCell>
                        <Checkbox
                          checked={selectedDeposits.includes(transaction.id)}
                          onCheckedChange={(checked) => handleSelectTransaction(transaction.id, checked as boolean)}
                        />
                      </TableCell>
                      <TableCell className="font-medium text-foreground">
                        <span className="md:hidden">{transaction.transactionNumber.substring(0, 6)}...</span>
                        <span className="hidden md:inline">{transaction.transactionNumber}</span>
                      </TableCell>
                      <TableCell className="text-muted-foreground hidden md:table-cell">{transaction.date}</TableCell>
                      <TableCell className="text-foreground hidden lg:table-cell">{transaction.walletType}</TableCell>
                      <TableCell>{getTypeBadge(transaction.type)}</TableCell>
                      <TableCell className="font-medium text-foreground">${transaction.amount.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                      <TableCell className="text-muted-foreground hidden md:table-cell">
                        <span className="truncate max-w-[150px] block" title={transaction.remark}>
                          {transaction.remark}
                        </span>
                      </TableCell>
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
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Mobile card view */}
          <div className="md:hidden mt-4 space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Mobile View</h3>
            {paginatedDeposits.map((transaction) => (
              <div key={transaction.id} className="border border-border rounded-lg p-4 space-y-3 bg-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedDeposits.includes(transaction.id)}
                      onCheckedChange={(checked) => handleSelectTransaction(transaction.id, checked as boolean)}
                    />
                    <span
                      className="font-medium text-foreground truncate max-w-[180px]"
                      title={transaction.transactionNumber}
                    >
                      {transaction.transactionNumber}
                    </span>
                  </div>
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
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Amount:</p>
                    <p className="font-medium text-foreground">${transaction.amount.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Status:</p>
                    <div>{getStatusBadge(transaction.status)}</div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Type:</p>
                    <div>{getTypeBadge(transaction.type)}</div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Date:</p>
                    <p className="text-foreground">{transaction.date.split(",")[0]}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Remark:</p>
                    <p className="text-foreground truncate" title={transaction.remark}>
                      {transaction.remark}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="text-sm text-muted-foreground">
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
