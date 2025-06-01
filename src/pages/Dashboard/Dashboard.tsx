"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import {
  PiggyBank,
  Clock,
  ArrowDownCircle,
  ArrowDownRight,
  Share2,
  DollarSign,
  TrendingUp,
  Users,
  CreditCard,
  RotateCcw,
} from "lucide-react"

const Dashboard = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText("horizon-ui.com/?ref=947385")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Get current date in a readable format
  const today = new Date()
  const dateString = today.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="mb-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold flex items-center gap-2 text-foreground">
          Welcome back John Galt!
          <span className="text-4xl">😊</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-1">{dateString}</p>
      </div>

      {/* Cards Row */}
      <div className="flex flex-col gap-4 pb-2 sm:flex-row sm:overflow-x-auto">
        {/* Balance */}
        <Card className="w-full min-w-0 sm:w-64 sm:min-w-50 relative">
          <CardHeader className="flex flex-row items-center gap-3">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full p-2 font-semibold text-2xl flex items-center justify-center w-10 h-10">
              $
            </span>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">304.00 USD</CardTitle>
              <div className="flex items-center gap-1 mt-1">
                <span className="h-4 w-1 rounded-full bg-blue-500" />
                <CardDescription className="text-muted-foreground">Balance</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Deposit Balance */}
        <Card className="w-full min-w-0 sm:w-64 sm:min-w-50 relative">
          <CardHeader className="flex flex-row items-center gap-3">
            <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full p-2 flex items-center justify-center w-10 h-10">
              <PiggyBank className="w-6 h-6" />
            </span>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">12.00 USD</CardTitle>
              <div className="flex items-center gap-1 mt-1">
                <span className="h-4 w-1 rounded-full bg-green-500" />
                <CardDescription className="text-muted-foreground">Deposit Balance</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Pending Deposit */}
        <Card className="w-full min-w-0 sm:w-64 sm:min-w-50 relative">
          <CardHeader className="flex flex-row items-center gap-3">
            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-full p-2 flex items-center justify-center w-10 h-10">
              <Clock className="w-6 h-6" />
            </span>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">$849.00</CardTitle>
              <div className="flex items-center gap-1 mt-1">
                <span className="h-4 w-1 rounded-full bg-yellow-400" />
                <CardDescription className="text-muted-foreground">Pending Deposit</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <button className="absolute bottom-3 right-3 flex items-center gap-1 text-blue-500 dark:text-blue-400 hover:underline text-sm font-medium bg-transparent">
              View Details
              <ArrowDownRight className="w-4 h-4" />
            </button>
          </CardContent>
        </Card>

        {/* Pending Withdrawal */}
        <Card className="w-full min-w-0 sm:w-64 sm:min-w-50 relative">
          <CardHeader className="flex flex-row items-center gap-3">
            <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full p-2 flex items-center justify-center w-10 h-10">
              <ArrowDownCircle className="w-6 h-6" />
            </span>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">$233.00</CardTitle>
              <div className="flex items-center gap-1 mt-1">
                <span className="h-4 w-1 rounded-full bg-red-500" />
                <CardDescription className="text-muted-foreground">Pending Withdrawal</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <button className="absolute bottom-3 right-3 flex items-center gap-1 text-blue-500 dark:text-blue-400 hover:underline text-sm font-medium bg-transparent">
              View Details
              <ArrowDownRight className="w-4 h-4" />
            </button>
          </CardContent>
        </Card>
      </div>

      {/* Refer a Friend Section */}
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Earn with Horizon UI */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Earn with Horizon UI</h2>
                <p className="text-muted-foreground text-sm">
                  Invite your friends to Horizon, if they sign up, you and your friend will get 2 premium features for
                  free!
                </p>
              </div>

              {/* Process Steps */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Send Invitation</h3>
                    <p className="text-sm text-muted-foreground">
                      Send your referral link to friends and tell them how useful a Horizon is!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Registration</h3>
                    <p className="text-sm text-muted-foreground">
                      Let your friends register to our services using your personal referral code!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Use Horizon for Free!</h3>
                    <p className="text-sm text-muted-foreground">
                      You and your friends get 2 premium Horizon features for free!
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Invite your friends */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Invite your friends!</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Add your friends' email addresses and send them invitations to join!
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Email addresses..." className="flex-1 bg-background border-border" />
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 rounded-lg">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Share the referral link */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Share the referral link</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  You can also share your referral link by copying and sending it to your friends or sharing it on
                  social media.
                </p>

                <div className="flex gap-2 mb-4">
                  <div className="flex-1 p-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg">
                    <code className="text-sm text-foreground break-all">horizon-ui.com/?ref=947385</code>
                  </div>
                  <Button
                    onClick={handleCopyReferralCode}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-lg"
                  >
                    {copied ? "Copied!" : "Copy link"}
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-lg w-10 h-10">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-lg w-10 h-10">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard
