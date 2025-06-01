"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog"
import { Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface WithdrawDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const gateways = [
  { value: "credit-card", label: "Credit Card" },
  { value: "bank-transfer", label: "Bank Transfer" },
  { value: "paypal", label: "PayPal" },
  { value: "crypto", label: "Cryptocurrency" },
]

const WithdrawDialog: React.FC<WithdrawDialogProps> = ({ isOpen, onOpenChange }) => {
  const [method, setMethod] = useState("")
  const [gateway, setGateway] = useState("")
  const [amount, setAmount] = useState("")
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)
    // Simulate processing
    setTimeout(() => {
      setProcessing(false)
      onOpenChange(false)
      setMethod("")
      setGateway("")
      setAmount("")
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Withdraw Funds</DialogTitle>
          <DialogDescription>Withdraw to your preferred method and gateway</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <AnimatePresence>
            {processing ? (
              <motion.div
                key="processing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-8"
              >
                <Loader2 className="animate-spin w-8 h-8 text-blue-600 mb-3" />
                <span className="text-blue-700 font-medium">Processing...</span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid gap-4"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-2">
                  <label htmlFor="method" className="text-sm font-medium">
                    Method
                  </label>
                  <select
                    id="method"
                    required
                    value={method}
                    onChange={e => setMethod(e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      Select Method
                    </option>
                    <option value="withdraw">Withdraw</option>
                    <option value="deposit">Deposit</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="gateway" className="text-sm font-medium">
                    Select Gateway
                  </label>
                  <select
                    id="gateway"
                    required
                    value={gateway}
                    onChange={e => setGateway(e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      Select Gateway
                    </option>
                    {gateways.map(g => (
                      <option key={g.value} value={g.value}>
                        {g.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="amount" className="text-sm font-medium">
                    Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">USD</span>
                    <input
                      id="amount"
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                      className="w-full rounded-md border border-gray-300 py-2 pl-12 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <button
                    type="button"
                    onClick={() => onOpenChange(false)}
                    className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-zinc-900/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Withdraw
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default WithdrawDialog