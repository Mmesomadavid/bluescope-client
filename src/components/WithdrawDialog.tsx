"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog"

interface WithdrawDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const WithdrawDialog: React.FC<WithdrawDialogProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Quick Withdraw</DialogTitle>
          <DialogDescription>Add funds to your account instantly</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {/* Add your Withdraw form or content here */}
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="amount" className="text-sm font-medium">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 ">$</span>
                <input
                  id="amount"
                  type="number"
                  className="w-full rounded-md border border-gray-300 py-2 pl-8 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="0.00"
                  min="0"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="payment-method" className="text-sm font-medium">
                Payment Method
              </label>
              <select
                id="payment-method"
                className="w-full rounded-md border border-gray-300 py-2 px-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="credit-card">Credit Card</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="paypal">PayPal</option>
                <option value="crypto">Cryptocurrency</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="button"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Withdraw Now
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default WithdrawDialog
