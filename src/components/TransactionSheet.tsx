"use client"

import type React from "react"
import { CalendarDays, CreditCard, FileText, MapPin, User, Copy, Check } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../components/ui/sheet"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Card, CardContent } from "../components/ui/card"

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

interface TransactionSheetProps {
  transaction: Transaction | null
  isOpen: boolean
  onClose: () => void
}

const TransactionSheet: React.FC<TransactionSheetProps> = ({ transaction, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)

  if (!transaction) return null

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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

  const getTypeIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "Deposit":
        return <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      case "Withdrawal":
        return <CreditCard className="w-5 h-5 text-orange-600 dark:text-orange-400" />
      case "Investment":
        return <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      case "Return":
        return <CreditCard className="w-5 h-5 text-green-600 dark:text-green-400" />
      default:
        return <FileText className="w-5 h-5 text-muted-foreground" />
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-background border-border overflow-y-auto">
        <div className="h-full flex flex-col">
          <SheetHeader className="space-y-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-semibold text-foreground">Transaction Details</SheetTitle>
            </div>
            <SheetDescription className="text-muted-foreground">
              Complete information about this transaction
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto">
            <div className="mt-6 space-y-6 pb-6">
              {/* Transaction Header */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getTypeIcon(transaction.type)}
                      <div>
                        <h3 className="font-semibold text-lg text-card-foreground">{transaction.type}</h3>
                        <p className="text-sm text-muted-foreground">Transaction</p>
                      </div>
                    </div>
                    {getStatusBadge(transaction.status)}
                  </div>

                  <div className="text-center py-4">
                    <p className="text-3xl font-bold text-card-foreground">${transaction.amount.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground mt-1">Transaction Amount</p>
                  </div>
                </CardContent>
              </Card>

              {/* Transaction Information */}
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Transaction Information</h4>

                <div className="space-y-4">
                  {/* Transaction Number */}
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Transaction Number</p>
                        <p className="text-sm text-muted-foreground">{transaction.transactionNumber}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(transaction.transactionNumber)}
                      className="h-8 w-8"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>

                  {/* Date */}
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <CalendarDays className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Date & Time</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>

                  {/* Wallet Type */}
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Wallet Type</p>
                      <p className="text-sm text-muted-foreground">{transaction.walletType}</p>
                    </div>
                  </div>

                  {/* Type */}
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Transaction Type</p>
                        <p className="text-sm text-muted-foreground">{transaction.type}</p>
                      </div>
                    </div>
                    {getTypeBadge(transaction.type)}
                  </div>

                  {/* Remark */}
                  <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Remark</p>
                      <p className="text-sm text-muted-foreground">{transaction.remark}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Additional Details */}
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Additional Details</h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Reference ID</p>
                    <p className="text-sm font-medium text-foreground mt-1">REF{transaction.id.padStart(6, "0")}</p>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Processing Fee</p>
                    <p className="text-sm font-medium text-foreground mt-1">$0.00</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1">
                  Download Receipt
                </Button>
                <Button className="flex-1">Contact Support</Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default TransactionSheet
