"use client"

import type React from "react"
import { CalendarDays, CreditCard, FileText, MapPin, User,  Copy, Check, Building, Shield } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../components/ui/sheet"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Card, CardContent } from "../components/ui/card"

interface Deposit {
  id: string
  transactionNumber: string
  date: string
  walletType: string
  type: "Deposit" | "Withdrawal" | "Investment" | "Return"
  amount: number
  status: "Completed" | "Pending" | "Failed"
  remark: string
  // Deposit-specific fields
  paymentMethod?: string
  bankName?: string
  accountNumber?: string
  confirmationCode?: string
  processingTime?: string
  fees?: number
}

interface DepositSheetProps {
  deposit: Deposit | null
  isOpen: boolean
  onClose: () => void
}

const DepositSheet: React.FC<DepositSheetProps> = ({ deposit, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)

  if (!deposit) return null

  // Mock deposit-specific data
  const depositData = {
    paymentMethod: "Bank Transfer",
    bankName: "Chase Bank",
    accountNumber: "****1234",
    confirmationCode: "CHB" + deposit.id.padStart(8, "0"),
    processingTime: "2-3 business days",
    fees: 0,
    exchangeRate: 1.0,
    currency: "USD",
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getStatusBadge = (status: Deposit["status"]) => {
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

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case "Bank Transfer":
        return <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      case "Credit Card":
        return <CreditCard className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      default:
        return <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-background border-border overflow-y-auto">
        <div className="h-full flex flex-col">
          <SheetHeader className="space-y-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-semibold text-foreground">Deposit Details</SheetTitle>
            </div>
            <SheetDescription className="text-muted-foreground">
              Complete information about this deposit transaction
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto">
            <div className="mt-6 space-y-6 pb-6">
              {/* Deposit Header */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getPaymentMethodIcon(depositData.paymentMethod)}
                      <div>
                        <h3 className="font-semibold text-lg text-card-foreground">{depositData.paymentMethod}</h3>
                        <p className="text-sm text-muted-foreground">Deposit via {depositData.bankName}</p>
                      </div>
                    </div>
                    {getStatusBadge(deposit.status)}
                  </div>

                  <div className="text-center py-4">
                    <p className="text-3xl font-bold text-card-foreground">${deposit.amount.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground mt-1">Deposit Amount</p>
                    {depositData.fees > 0 && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Processing fee: ${depositData.fees.toFixed(2)}
                      </p>
                    )}
                  </div>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center space-x-2 p-2 bg-green-50 dark:bg-green-950 rounded-lg">
                    <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm text-green-700 dark:text-green-300 font-medium">Secured Transaction</span>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Payment Information</h4>

                <div className="space-y-4">
                  {/* Transaction Number */}
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Transaction Number</p>
                        <p className="text-sm text-muted-foreground">{deposit.transactionNumber}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(deposit.transactionNumber)}
                      className="h-8 w-8"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>

                  {/* Confirmation Code */}
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Confirmation Code</p>
                        <p className="text-sm text-muted-foreground">{depositData.confirmationCode}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(depositData.confirmationCode)}
                      className="h-8 w-8"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>

                  {/* Payment Method & Bank */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <CreditCard className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Payment Method</p>
                        <p className="text-sm text-muted-foreground">{depositData.paymentMethod}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Bank</p>
                        <p className="text-sm text-muted-foreground">{depositData.bankName}</p>
                      </div>
                    </div>
                  </div>

                  {/* Account Number */}
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Account Number</p>
                      <p className="text-sm text-muted-foreground">{depositData.accountNumber}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <CalendarDays className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Transaction Date</p>
                      <p className="text-sm text-muted-foreground">{deposit.date}</p>
                    </div>
                  </div>

                  {/* Processing Time */}
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <CalendarDays className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Processing Time</p>
                      <p className="text-sm text-muted-foreground">{depositData.processingTime}</p>
                    </div>
                  </div>

                  {/* Wallet Type */}
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Destination Wallet</p>
                      <p className="text-sm text-muted-foreground">{deposit.walletType}</p>
                    </div>
                  </div>

                  {/* Remark */}
                  <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Transaction Notes</p>
                      <p className="text-sm text-muted-foreground">{deposit.remark}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Transaction Summary */}
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Transaction Summary</h4>

                <div className="space-y-3 p-4 bg-muted/30 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Deposit Amount:</span>
                    <span className="font-medium text-foreground">${deposit.amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Processing Fee:</span>
                    <span className="font-medium text-foreground">${depositData.fees.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Exchange Rate:</span>
                    <span className="font-medium text-foreground">
                      {depositData.exchangeRate} {depositData.currency}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-base font-semibold">
                    <span className="text-foreground">Total Credited:</span>
                    <span className="text-foreground">${(deposit.amount - depositData.fees).toFixed(2)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Reference ID</p>
                    <p className="text-sm font-medium text-foreground mt-1">DEP{deposit.id.padStart(6, "0")}</p>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Currency</p>
                    <p className="text-sm font-medium text-foreground mt-1">{depositData.currency}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1">
                  Download Receipt
                </Button>
                <Button className="flex-1">Make Another Deposit</Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default DepositSheet
