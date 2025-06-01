"use client"

import React, { useState } from "react"
import { Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const gateways = [
  { value: "bitcoin", label: "Bitcoin" },
  { value: "ethereum", label: "Ethereum" },
  { value: "usdc", label: "USDC" },
  { value: "usdterc20", label: "USDT ERC20" },
  { value: "usdt-trc20", label: "USDT-TRC20" },
]

const Deposit: React.FC = () => {
  const [gateway, setGateway] = useState("")
  const [amount, setAmount] = useState("")
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)
    // Simulate processing
    setTimeout(() => {
      setProcessing(false)
      setGateway("")
      setAmount("")
    }, 2000)
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-card border border-border rounded-xl shadow p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Quick Deposit</h1>
        <p className="text-muted-foreground">Add funds to your account instantly</p>
      </div>
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
              <span className="text-blue-700 dark:text-blue-300 font-medium">Processing...</span>
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
                <label htmlFor="gateway" className="text-sm font-medium text-foreground">
                  Select Gateway
                </label>
                <select
                  id="gateway"
                  required
                  value={gateway}
                  onChange={e => setGateway(e.target.value)}
                  className="w-full rounded-md border border-input bg-background py-2 px-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-foreground"
                >
                  <option value="" disabled>
                    Select One
                  </option>
                  {gateways.map(g => (
                    <option key={g.value} value={g.value}>
                      {g.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="amount" className="text-sm font-medium text-foreground">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">USD</span>
                  <input
                    id="amount"
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    className="w-full rounded-md border border-input bg-background py-2 pl-12 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-foreground"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="reset"
                  onClick={() => {
                    setGateway("")
                    setAmount("")
                  }}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-zinc-900/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Deposit Now
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Deposit