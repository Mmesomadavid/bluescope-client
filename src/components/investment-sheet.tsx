"use client"

import type React from "react"
import { CalendarDays, TrendingUp, FileText, MapPin, User,  Copy, Check, BarChart3, Target } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../components/ui/sheet"
import { Badge } from "../components/ui/badge"
import { Button } from "..//components/ui/button"
import { Separator } from "../components/ui/separator"
import { Card, CardContent } from "../components/ui/card"
import { Progress } from "../components/ui/progress"

interface Investment {
  id: string
  transactionNumber: string
  date: string
  walletType: string
  type: "Deposit" | "Withdrawal" | "Investment" | "Return"
  amount: number
  status: "Completed" | "Pending" | "Failed"
  remark: string
  // Investment-specific fields
  investmentPlan?: string
  duration?: string
  expectedReturn?: number
  currentReturn?: number
  maturityDate?: string
  riskLevel?: "Low" | "Medium" | "High"
  roi?: number
}

interface InvestmentSheetProps {
  investment: Investment | null
  isOpen: boolean
  onClose: () => void
}

const InvestmentSheet: React.FC<InvestmentSheetProps> = ({ investment, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)

  if (!investment) return null

  // Mock investment-specific data
  const investmentData = {
    investmentPlan: "Real Estate Growth Fund",
    duration: "12 months",
    expectedReturn: investment.amount * 0.15,
    currentReturn: investment.amount * 0.08,
    maturityDate: "Feb 24th, 2024",
    riskLevel: "Medium" as const,
    roi: 15.2,
    progress: 65,
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getStatusBadge = (status: Investment["status"]) => {
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

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "Low":
        return (
          <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900">
            Low Risk
          </Badge>
        )
      case "Medium":
        return (
          <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-100 dark:hover:bg-yellow-900">
            Medium Risk
          </Badge>
        )
      case "High":
        return (
          <Badge className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-900">
            High Risk
          </Badge>
        )
      default:
        return <Badge variant="secondary">{risk}</Badge>
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-background border-border overflow-y-auto">
        <div className="h-full flex flex-col">
          <SheetHeader className="space-y-4 flex-shrink-0">
            <div className="flex items-center justify-between">
            </div>
            <SheetDescription className="text-muted-foreground">
              Complete information about this investment
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto">
            <div className="mt-6 space-y-6 pb-6">
              {/* Investment Header */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <div>
                        <h3 className="font-semibold text-lg text-card-foreground">{investmentData.investmentPlan}</h3>
                        <p className="text-sm text-muted-foreground">Investment Plan</p>
                      </div>
                    </div>
                    {getStatusBadge(investment.status)}
                  </div>

                  <div className="text-center py-4">
                    <p className="text-3xl font-bold text-card-foreground">${investment.amount.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground mt-1">Investment Amount</p>
                  </div>

                  {/* Investment Progress */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Investment Progress</span>
                      <span className="font-medium text-foreground">{investmentData.progress}%</span>
                    </div>
                    <Progress value={investmentData.progress} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Started: {investment.date.split(",")[0]}</span>
                      <span>Maturity: {investmentData.maturityDate.split(",")[0]}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Investment Performance */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium text-foreground">Current Return</span>
                    </div>
                    <p className="text-xl font-bold text-green-600 dark:text-green-400">
                      ${investmentData.currentReturn.toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      +{((investmentData.currentReturn / investment.amount) * 100).toFixed(1)}%
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-foreground">Expected Return</span>
                    </div>
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      ${investmentData.expectedReturn.toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground">ROI: {investmentData.roi}%</p>
                  </CardContent>
                </Card>
              </div>

              {/* Investment Information */}
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Investment Information</h4>

                <div className="space-y-4">
                  {/* Transaction Number */}
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Transaction Number</p>
                        <p className="text-sm text-muted-foreground">{investment.transactionNumber}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(investment.transactionNumber)}
                      className="h-8 w-8"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>

                  {/* Investment Plan */}
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Investment Plan</p>
                      <p className="text-sm text-muted-foreground">{investmentData.investmentPlan}</p>
                    </div>
                  </div>

                  {/* Duration & Risk */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <CalendarDays className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Duration</p>
                        <p className="text-sm text-muted-foreground">{investmentData.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Risk Level</p>
                        </div>
                      </div>
                      {getRiskBadge(investmentData.riskLevel)}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <CalendarDays className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Investment Date</p>
                      <p className="text-sm text-muted-foreground">{investment.date}</p>
                    </div>
                  </div>

                  {/* Maturity Date */}
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <CalendarDays className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Maturity Date</p>
                      <p className="text-sm text-muted-foreground">{investmentData.maturityDate}</p>
                    </div>
                  </div>

                  {/* Wallet Type */}
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Wallet Type</p>
                      <p className="text-sm text-muted-foreground">{investment.walletType}</p>
                    </div>
                  </div>

                  {/* Remark */}
                  <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Investment Notes</p>
                      <p className="text-sm text-muted-foreground">{investment.remark}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Investment Analytics */}
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Investment Analytics</h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Days Invested</p>
                    <p className="text-sm font-medium text-foreground mt-1">
                      {Math.floor((Date.now() - new Date(investment.date).getTime()) / (1000 * 60 * 60 * 24))} days
                    </p>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Daily Return</p>
                    <p className="text-sm font-medium text-foreground mt-1">
                      $
                      {(
                        investmentData.currentReturn /
                        Math.max(
                          1,
                          Math.floor((Date.now() - new Date(investment.date).getTime()) / (1000 * 60 * 60 * 24)),
                        )
                      ).toFixed(2)}
                    </p>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Reference ID</p>
                    <p className="text-sm font-medium text-foreground mt-1">INV{investment.id.padStart(6, "0")}</p>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Management Fee</p>
                    <p className="text-sm font-medium text-foreground mt-1">2.5%</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1">
                  Download Statement
                </Button>
                <Button className="flex-1">Reinvest Returns</Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default InvestmentSheet
