import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import { PiggyBank, Clock, ArrowDownCircle, ArrowDownRight, Users, Gift, Copy } from "lucide-react";

const Dashboard = () => {
  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText('REF123456');
  };

  return (
    <div className="space-y-6">
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
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full p-2 flex items-center justify-center w-10 h-10">
              <Gift className="w-6 h-6" />
            </span>
            <div>
              <CardTitle className="text-xl font-bold text-foreground">Refer a Friend</CardTitle>
              <CardDescription className="text-muted-foreground">Earn rewards when your friends join and make their first deposit</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Referral Stats */}
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
              <Users className="w-8 h-8 text-blue-500 dark:text-blue-400" />
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Friends Referred</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
              <Gift className="w-8 h-8 text-green-500 dark:text-green-400" />
              <div>
                <p className="text-2xl font-bold text-foreground">$180</p>
                <p className="text-sm text-muted-foreground">Total Earned</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
              <PiggyBank className="w-8 h-8 text-purple-500 dark:text-purple-400" />
              <div>
                <p className="text-2xl font-bold text-foreground">$15</p>
                <p className="text-sm text-muted-foreground">Per Referral</p>
              </div>
            </div>
          </div>

          {/* Referral Code */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-foreground">Your Referral Code</h3>
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
              <code className="flex-1 font-mono text-blue-700 dark:text-blue-300 font-semibold break-all">REF123456</code>
              <button 
                onClick={handleCopyReferralCode}
                className="flex items-center gap-1 px-3 py-1 bg-blue-500 dark:bg-blue-700 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors text-sm"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
          </div>

          {/* How it Works */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-foreground">How it Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  1
                </div>
                <h4 className="font-medium mb-2 text-foreground">Share Your Code</h4>
                <p className="text-sm text-muted-foreground">Send your referral code to friends and family</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  2
                </div>
                <h4 className="font-medium mb-2 text-foreground">Friend Signs Up</h4>
                <p className="text-sm text-muted-foreground">They create an account using your code</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  3
                </div>
                <h4 className="font-medium mb-2 text-foreground">You Both Earn</h4>
                <p className="text-sm text-muted-foreground">Get $15 when they make their first deposit</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button className="flex-1 bg-blue-500 dark:bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors font-medium">
              Share with Friends
            </button>
            <button className="flex-1 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-200 py-3 px-6 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors font-medium">
              View Referral History
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;