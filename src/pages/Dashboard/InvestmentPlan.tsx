import React, { useState } from "react";
import { Check, X } from 'lucide-react';

const InvestmentPlan: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  // Calculate yearly prices (20% discount)
  const getPrice = (monthlyPrice: number) => {
    if (billingCycle === "yearly") {
      return (monthlyPrice * 12 * 0.8).toFixed(0);
    }
    return monthlyPrice;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Investment Plans</h1>
        <p className="text-gray-600">Choose the right investment plan for your financial goals.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Upgrade Plan</h2>
            <button className="text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center p-6">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                billingCycle === "monthly" 
                  ? "bg-white shadow-sm text-gray-900" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                billingCycle === "yearly" 
                  ? "bg-white shadow-sm text-gray-900" 
                  : "text-gray-600 hover:text-gray-900"
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
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Free</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Access basic features with limited usage.
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$0</span>
                </div>
                <button className="mt-6 w-full py-2.5 px-4 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-colors">
                  Current Plan
                </button>
              </div>
              <div className="border-t p-6 space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3" />
                  <span className="text-gray-700">10 conversions</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3" />
                  <span className="text-gray-700">
                    4,000 characters in input code / conversion
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3" />
                  <span className="text-gray-700">Email Support</span>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="border rounded-lg overflow-hidden bg-white relative">
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <svg className="mr-1 h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Most Popular
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Unlock advanced tools for enhanced productivity.
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">${getPrice(10)}</span>
                  {billingCycle === "monthly" && (
                    <span className="ml-2 text-gray-500 text-sm">
                      per month<br />billed monthly
                    </span>
                  )}
                  {billingCycle === "yearly" && (
                    <span className="ml-2 text-gray-500 text-sm">
                      per year<br />billed annually
                    </span>
                  )}
                </div>
                <button className="mt-6 w-full py-2.5 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                  Choose Pro
                </button>
              </div>
              <div className="border-t p-6 space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3" />
                  <span className="text-gray-700">Unlimited conversions</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3" />
                  <span className="text-gray-700">
                    20,000 characters in input code / conversion
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3" />
                  <span className="text-gray-700">Priority Email Support</span>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Premium</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Get full access to all features for maximum flexibility.
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">${getPrice(20)}</span>
                  {billingCycle === "monthly" && (
                    <span className="ml-2 text-gray-500 text-sm">
                      per month<br />billed monthly
                    </span>
                  )}
                  {billingCycle === "yearly" && (
                    <span className="ml-2 text-gray-500 text-sm">
                      per year<br />billed annually
                    </span>
                  )}
                </div>
                <button className="mt-6 w-full py-2.5 px-4 bg-white border border-gray-300 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors">
                  Choose Premium
                </button>
              </div>
              <div className="border-t p-6 space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3" />
                  <span className="text-gray-700">Unlimited conversions</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3" />
                  <span className="text-gray-700">
                    50,000 characters in input code / conversion
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3" />
                  <span className="text-gray-700">Priority Email Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All premium plans include */}
        <div className="px-6 pb-6">
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              All premium plans include:
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                Faster Conversions with Streamed Responses
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                Code Generation Tool
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                Code Explanation Tool
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                14-day Money Back Guarantee
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                Cancel Anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlan;
