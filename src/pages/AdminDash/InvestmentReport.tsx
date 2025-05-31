"use client"
import { TrendingUp, DollarSign } from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Pie,
  PieChart as RechartsPieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../../components/ui/chart"
import { Badge } from "../../components/ui/badge"

// Sample data based on the provided information
const monthlyInvestmentData = [
  { month: "Jan", totalInvest: 45000, interest: 1200, profit: 2100 },
  { month: "Feb", totalInvest: 52000, interest: 1450, profit: 2400 },
  { month: "Mar", totalInvest: 48000, interest: 1350, profit: 2200 },
  { month: "Apr", totalInvest: 65000, interest: 1800, profit: 3100 },
  { month: "May", totalInvest: 58000, interest: 1600, profit: 2800 },
  { month: "Jun", totalInvest: 72000, interest: 2000, profit: 3500 },
  { month: "Jul", totalInvest: 68000, interest: 1900, profit: 3200 },
  { month: "Aug", totalInvest: 75000, interest: 2100, profit: 3600 },
  { month: "Sep", totalInvest: 82000, interest: 2300, profit: 3900 },
  { month: "Oct", totalInvest: 88000, interest: 2450, profit: 4200 },
  { month: "Nov", totalInvest: 95000, interest: 2650, profit: 4500 },
  { month: "Dec", totalInvest: 150200, interest: 4200, profit: 7800 },
]

const investmentByPlanData = [
  { name: "REAL ESTATE", value: 64.65, amount: 170789, color: "#0088FE" },
  { name: "Agro Farming", value: 29.62, amount: 78254, color: "#00C49F" },
  { name: "AGROEDGE BSP", value: 5.73, amount: 15178, color: "#FFBB28" },
]

const interestByPlanData = [
  { name: "Agro Farming", value: 67.63, amount: 179456, color: "#00C49F" },
  { name: "REAL ESTATE", value: 31.56, amount: 83742, color: "#0088FE" },
  { name: "AGROEDGE BSP", value: 0.8, amount: 2173, color: "#FFBB28" },
]

const weeklyData = [
  { day: "Monday", investment: 12000, interest: 340 },
  { day: "Tuesday", investment: 8500, interest: 240 },
  { day: "Wednesday", investment: 15000, interest: 420 },
  { day: "Thursday", investment: 18000, interest: 510 },
  { day: "Friday", investment: 6000, interest: 170 },
  { day: "Saturday", investment: 22000, interest: 620 },
  { day: "Sunday", investment: 25000, interest: 700 },
]

const recentInvestments = [
  {
    plan: "REAL ESTATE",
    description: "Every Days 3.50% for 14 Days",
    invested: 50000,
    startDate: "20 Apr, 25 05:29 AM",
    endDate: "20 Apr, 25 05:29 AM",
    netProfit: 24500,
  },
  {
    plan: "AGROEDGE BSP",
    description: "Every Days 2.00% for 7 Days",
    invested: 1000,
    startDate: "10 Apr, 25 10:26 AM",
    endDate: "10 Apr, 25 10:26 AM",
    netProfit: 140,
  },
  {
    plan: "AGROEDGE BSP",
    description: "Every Days 2.00% for 7 Days",
    invested: 1800,
    startDate: "04 Apr, 25 06:30 AM",
    endDate: "04 Apr, 25 06:30 AM",
    netProfit: 252,
  },
]

const chartConfig = {
  totalInvest: {
    label: "Total Investment",
    color: "hsl(var(--chart-1))",
  },
  interest: {
    label: "Interest",
    color: "hsl(var(--chart-2))",
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

const InvestmentReport = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invests</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$150,200.00</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-green-600">
                +31.73%
              </Badge>{" "}
              from last year
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investments</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$264,221.00</div>
            <p className="text-xs text-muted-foreground">All time investments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deposit Wallet</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$264,121.00</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-blue-600">
                99.96%
              </Badge>{" "}
              of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interest Wallet</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$100.00</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-orange-600">
                0.04%
              </Badge>{" "}
              of total
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Investment Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Investment Trend</CardTitle>
            <CardDescription>Monthly investment performance over the year</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={monthlyInvestmentData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <defs>
                  <linearGradient id="fillTotalInvest" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-totalInvest)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--color-totalInvest)" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="fillInterest" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-interest)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--color-interest)" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="interest"
                  type="natural"
                  fill="url(#fillInterest)"
                  fillOpacity={0.4}
                  stroke="var(--color-interest)"
                  stackId="a"
                />
                <Area
                  dataKey="totalInvest"
                  type="natural"
                  fill="url(#fillTotalInvest)"
                  fillOpacity={0.4}
                  stroke="var(--color-totalInvest)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Investment by Plan Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Investment Statistics by Plan</CardTitle>
            <CardDescription>Distribution of investments across different plans</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                realEstate: {
                  label: "REAL ESTATE",
                  color: "#0088FE",
                },
                agroFarming: {
                  label: "Agro Farming",
                  color: "#00C49F",
                },
                agroedgeBsp: {
                  label: "AGROEDGE BSP",
                  color: "#FFBB28",
                },
              }}
            >
              <RechartsPieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={investmentByPlanData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {investmentByPlanData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </RechartsPieChart>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {investmentByPlanData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Investment Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Investment by Day of Week</CardTitle>
            <CardDescription>Daily investment patterns throughout the week</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={weeklyData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="investment" fill="var(--color-totalInvest)" radius={8} />
                <Bar dataKey="interest" fill="var(--color-interest)" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Interest Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Interest Statistics by Plan</CardTitle>
            <CardDescription>Interest distribution across investment plans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {interestByPlanData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-muted-foreground">{item.value}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${item.value}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Investments */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Investments</CardTitle>
          <CardDescription>Latest investment activities and their performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInvestments.map((investment, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg bg-card"
              >
                <div className="space-y-1">
                  <h4 className="font-semibold text-lg">
                    {investment.plan} - {investment.description}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Invested: <span className="font-medium">${investment.invested.toLocaleString()}.00 USD</span>
                  </p>
                  <div className="flex flex-col sm:flex-row sm:gap-4 text-xs text-muted-foreground">
                    <span>Start Date: {investment.startDate}</span>
                    <span>End Date: {investment.endDate}</span>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-sm text-muted-foreground">Net Profit</p>
                  <p className="text-lg font-bold text-green-600">${investment.netProfit.toLocaleString()}.00 USD</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Running Invest</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0.00</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Closed Invest</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$264,221.00</div>
            <p className="text-xs text-muted-foreground">Completed investments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Interest</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$265,371.44</div>
            <p className="text-xs text-muted-foreground">All time earnings</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default InvestmentReport
