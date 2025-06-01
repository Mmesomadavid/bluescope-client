"use client"

import type React from "react"
import {
  CalendarDays,
  CreditCard,
  FileText,
  MapPin,
  X,
  Copy,
  Check,
  ArrowDown,
  ArrowUp,
  Receipt,
  Clock,
} from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../components/ui/sheet"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

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

interface DepositSheetProps {
  transaction: Transaction | null
  isOpen: boolean
  onClose: () => void
}

const DepositSheet: React.FC<DepositSheetProps> = ({ transaction, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)

  if (!transaction) return null

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Generate random processing time (1-5 minutes)
  const processingTime = Math.floor(Math.random() * 4) + 1

  // Generate random payment method based on remark
  const getPaymentMethod = () => {
    if (transaction.remark.includes("Bank")) return "Bank Transfer"
    if (transaction.remark.includes("ATM")) return "ATM Deposit"
    if (transaction.remark.includes("Tech")) return "Credit Card"
    return "E-Wallet"
  }

  const paymentMethod = getPaymentMethod()

  // Generate random payment details
  const paymentDetails = {
    "Bank Transfer": {
      accountName: "John Smith",
      accountNumber: "****" + Math.floor(Math.random() * 10000),
      bankName: "First National Bank",
    },
    "ATM Deposit": {
      cardNumber: "****" + Math.floor(Math.random() * 10000),
      location: "Main Street Branch",
    },
    "Credit Card": {
      cardNumber: "****" + Math.floor(Math.random() * 10000),
      cardType: "Visa",
    },
    "E-Wallet": {
      provider: "PayPal",
      email: "j***@example.com",
    },
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
        return <ArrowDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      case "Withdrawal":
        return <ArrowUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />
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
              <SheetTitle className="text-xl font-semibold text-foreground">Deposit Details</SheetTitle>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <SheetDescription className="text-muted-foreground">
              Complete information about this deposit
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto">
            <div className="mt-6 space-y-6 pb-6">
              {/* Deposit Header */}
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
                    <p className="text-sm text-muted-foreground mt-1">Deposit Amount</p>
                  </div>
                </CardContent>
              </Card>

              {/* Tabs for different information sections */}
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="payment">Payment</TabsTrigger>
                  <TabsTrigger value="receipt">Receipt</TabsTrigger>
                </TabsList>

                {/* Details Tab */}
                <TabsContent value="details" className="space-y-4">
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

                    {/* Processing Time */}
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Processing Time</p>
                        <p className="text-sm text-muted-foreground">
                          {processingTime} minute{processingTime > 1 ? "s" : ""}
                        </p>
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

                    {/* Remark */}
                    <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Remark</p>
                        <p className="text-sm text-muted-foreground">{transaction.remark}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Payment Tab */}
                <TabsContent value="payment" className="space-y-4">
                  <Card>
                    <CardContent className="p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <h4 className="font-medium">Payment Method</h4>
                        </div>
                        <Badge variant="outline">{paymentMethod}</Badge>
                      </div>

                      <Separator />

                      {/* Payment Details - Dynamic based on payment method */}
                      <div className="space-y-3">
                        {paymentMethod === "Bank Transfer" && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Account Name</span>
                              <span className="text-sm font-medium">{paymentDetails["Bank Transfer"].accountName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Account Number</span>
                              <span className="text-sm font-medium">
                                {paymentDetails["Bank Transfer"].accountNumber}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Bank Name</span>
                              <span className="text-sm font-medium">{paymentDetails["Bank Transfer"].bankName}</span>
                            </div>
                          </>
                        )}

                        {paymentMethod === "ATM Deposit" && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Card Number</span>
                              <span className="text-sm font-medium">{paymentDetails["ATM Deposit"].cardNumber}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Location</span>
                              <span className="text-sm font-medium">{paymentDetails["ATM Deposit"].location}</span>
                            </div>
                          </>
                        )}

                        {paymentMethod === "Credit Card" && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Card Number</span>
                              <span className="text-sm font-medium">{paymentDetails["Credit Card"].cardNumber}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Card Type</span>
                              <span className="text-sm font-medium">{paymentDetails["Credit Card"].cardType}</span>
                            </div>
                          </>
                        )}

                        {paymentMethod === "E-Wallet" && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Provider</span>
                              <span className="text-sm font-medium">{paymentDetails["E-Wallet"].provider}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Email</span>
                              <span className="text-sm font-medium">{paymentDetails["E-Wallet"].email}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Receipt className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm font-medium text-foreground">Transaction Fee</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {transaction.amount > 500 ? "$0.00 (Waived)" : "$2.50"}
                    </p>
                  </div>
                </TabsContent>

                {/* Receipt Tab */}
                <TabsContent value="receipt" className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-lg font-bold mb-1">DEPOSIT RECEIPT</h3>
                        <p className="text-sm text-muted-foreground">Transaction #{transaction.transactionNumber}</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="text-sm text-muted-foreground">Date</span>
                          <span className="text-sm font-medium">{transaction.date}</span>
                        </div>

                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="text-sm text-muted-foreground">Amount</span>
                          <span className="text-sm font-medium">${transaction.amount.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="text-sm text-muted-foreground">Payment Method</span>
                          <span className="text-sm font-medium">{paymentMethod}</span>
                        </div>

                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="text-sm text-muted-foreground">Status</span>
                          <span className="text-sm font-medium">{transaction.status}</span>
                        </div>

                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="text-sm text-muted-foreground">Wallet</span>
                          <span className="text-sm font-medium">{transaction.walletType}</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Reference</span>
                          <span className="text-sm font-medium">REF{transaction.id.padStart(6, "0")}</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border text-center">
                        <p className="text-xs text-muted-foreground">Thank you for your deposit</p>
                        <p className="text-xs text-muted-foreground">
                          This receipt was generated on {new Date().toLocaleString()}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

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

export default DepositSheet
