"use client"

import type React from "react"
import { useState } from "react"
import { Check } from "lucide-react"

const InvestmentPlan: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  // Calculate yearly prices (20% discount)
  const getPrice = (monthlyPrice: number) => {
    if (billingCycle === "yearly") {
      return (monthlyPrice * 12 * 0.8).toFixed(0)
    }
    return monthlyPrice
  }

  return (
    <div className="space-y-6 bg-background">
      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-card-foreground">Upgrade Plan</h2>
          </div>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center p-6">
          <div className="inline-flex items-center bg-muted rounded-full p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                billingCycle === "monthly"
                  ? "bg-background shadow-sm text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                billingCycle === "yearly"
                  ? "bg-background shadow-sm text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Plan */}
            <div className="border border-border rounded-lg overflow-hidden bg-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground">Free</h3>
                <p className="text-muted-foreground mt-2 text-sm">Access basic features with limited usage.</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-card-foreground">$0</span>
                </div>
                <button className="mt-6 w-full py-2.5 px-4 bg-muted text-muted-foreground font-medium rounded-md hover:bg-muted/80 transition-colors">
                  Current Plan
                </button>
              </div>
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3" />
                  <span className="text-card-foreground">10 conversions</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3" />
                  <span className="text-card-foreground">4,000 characters in input code / conversion</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3" />
                  <span className="text-card-foreground">Email Support</span>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="border border-border rounded-lg overflow-hidden bg-card relative">
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  <svg className="mr-1 h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Most Popular
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground">Pro</h3>
                <p className="text-muted-foreground mt-2 text-sm">Unlock advanced tools for enhanced productivity.</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-card-foreground">${getPrice(10)}</span>
                  {billingCycle === "monthly" && (
                    <span className="ml-2 text-muted-foreground text-sm">
                      per month
                      <br />
                      billed monthly
                    </span>
                  )}
                  {billingCycle === "yearly" && (
                    <span className="ml-2 text-muted-foreground text-sm">
                      per year
                      <br />
                      billed annually
                    </span>
                  )}
                </div>
                <button className="mt-6 w-full py-2.5 px-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
                  Choose Pro
                </button>
              </div>
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3" />
                  <span className="text-card-foreground">Unlimited conversions</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3" />
                  <span className="text-card-foreground">20,000 characters in input code / conversion</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3" />
                  <span className="text-card-foreground">Priority Email Support</span>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="border border-border rounded-lg overflow-hidden bg-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground">Premium</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  Get full access to all features for maximum flexibility.
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-card-foreground">${getPrice(20)}</span>
                  {billingCycle === "monthly" && (
                    <span className="ml-2 text-muted-foreground text-sm">
                      per month
                      <br />
                      billed monthly
                    </span>
                  )}
                  {billingCycle === "yearly" && (
                    <span className="ml-2 text-muted-foreground text-sm">
                      per year
                      <br />
                      billed annually
                    </span>
                  )}
                </div>
                <button className="mt-6 w-full py-2.5 px-4 bg-background border border-border text-foreground font-medium rounded-md hover:bg-muted transition-colors">
                  Choose Premium
                </button>
              </div>
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3" />
                  <span className="text-card-foreground">Unlimited conversions</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3" />
                  <span className="text-card-foreground">50,000 characters in input code / conversion</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3" />
                  <span className="text-card-foreground">Priority Email Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All premium plans include */}
        <div className="px-6 pb-6">
          <div className="text-center">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              All premium plans include:
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                Faster Conversions with Streamed Responses
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                Code Generation Tool
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                Code Explanation Tool
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                14-day Money Back Guarantee
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                Cancel Anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestmentPlan
