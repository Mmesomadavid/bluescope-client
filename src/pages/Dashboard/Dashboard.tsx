import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import { PiggyBank, Clock, ArrowDownCircle, ArrowDownRight } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {/* Balance */}
      <Card className="w-64 min-w-50 relative">
        <CardHeader className="flex flex-row items-center gap-3">
          <span className="bg-blue-100 text-blue-600 rounded-full p-2 font-semibold text-2xl flex items-center justify-center w-10 h-10">
            $
          </span>
          <div>
            <CardTitle className="text-2xl font-bold">304.00 USD</CardTitle>
            <div className="flex items-center gap-1 mt-1">
              <span className="h-4 w-1 rounded-full bg-blue-500" />
              <CardDescription>Balance</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
      {/* Deposit Balance */}
      <Card className="w-64 min-w-50 relative">
        <CardHeader className="flex flex-row items-center gap-3">
          <span className="bg-green-100 text-green-600 rounded-full p-2 flex items-center justify-center w-10 h-10">
            <PiggyBank className="w-6 h-6" />
          </span>
          <div>
            <CardTitle className="text-2xl font-bold">12.00 USD</CardTitle>
            <div className="flex items-center gap-1 mt-1">
              <span className="h-4 w-1 rounded-full bg-green-500" />
              <CardDescription>Deposit Balance</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
      {/* Pending Deposit */}
      <Card className="w-64 min-w-50 relative">
        <CardHeader className="flex flex-row items-center gap-3">
          <span className="bg-yellow-100 text-yellow-600 rounded-full p-2 flex items-center justify-center w-10 h-10">
            <Clock className="w-6 h-6" />
          </span>
          <div>
            <CardTitle className="text-2xl font-bold">$849.00</CardTitle>
            <div className="flex items-center gap-1 mt-1">
              <span className="h-4 w-1 rounded-full bg-yellow-400" />
              <CardDescription>Pending Deposit</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <button className="absolute bottom-3 right-3 flex items-center gap-1 text-blue-500 hover:underline text-sm font-medium bg-transparent">
            View Details
            <ArrowDownRight className="w-4 h-4" />
          </button>
        </CardContent>
      </Card>
      {/* Pending Withdrawal */}
      <Card className="w-64 min-w-50 relative">
        <CardHeader className="flex flex-row items-center gap-3">
          <span className="bg-red-100 text-red-600 rounded-full p-2 flex items-center justify-center w-10 h-10">
            <ArrowDownCircle className="w-6 h-6" />
          </span>
          <div>
            <CardTitle className="text-2xl font-bold">$233.00</CardTitle>
            <div className="flex items-center gap-1 mt-1">
              <span className="h-4 w-1 rounded-full bg-red-500" />
              <CardDescription>Pending Withdrawal</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <button className="absolute bottom-3 right-3 flex items-center gap-1 text-blue-500 hover:underline text-sm font-medium bg-transparent">
            View Details
            <ArrowDownRight className="w-4 h-4" />
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;