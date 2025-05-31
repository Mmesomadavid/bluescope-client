import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../../components/ui/card'
import { ArrowDownRight } from 'lucide-react'
import bannerImg from '../../assets/happy-woman.jpeg'

const subStats = [
  { value: '$355,370.00', label: 'Total Deposited', viewAll: false },
  { value: '3', label: 'Pending Deposits', viewAll: false },
  { value: '8', label: 'Rejected Deposits', viewAll: false },
  { value: '$0.00', label: 'Deposited Charge', viewAll: false },
  { value: '$541,269.00', label: 'Total Withdrawal', viewAll: false },
  { value: '1', label: 'Pending Withdrawals', viewAll: false },
  { value: '5', label: 'Rejected Withdrawals', viewAll: false },
  { value: '$0.00', label: 'Withdrawal Charge', viewAll: false },
  { value: '$264,221.00', label: 'Total Investment', viewAll: true },
  { value: '$265,371.44', label: 'Total Interest', viewAll: true },
  { value: '$0.00', label: 'Active Investments', viewAll: true },
  { value: '$264,221.00', label: '', viewAll: false },
]

const glassShade =
  "after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-1/2 after:bg-gradient-to-l after:from-white/40 after:via-white/10 after:to-transparent after:backdrop-blur-md after:rounded-lg after:pointer-events-none"

const AdminDash = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Banner Card */}
      <Card
        className="mb-6 md:mb-8 w-full relative overflow-hidden rounded-2xl shadow-lg border-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.3)), url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 55%',
          minHeight: 'h-56',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

        {/* Greeting and subtitle */}
        <CardHeader className="absolute top-4 sm:top-8 left-4 sm:left-10 z-20 p-0">
          <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold text-white drop-shadow-lg">
            Hello, Victor Toch! <span className="inline-block text-2xl sm:text-3xl">👋</span>
          </CardTitle>
        </CardHeader>

        {/* "What's New" main text */}
        <CardContent className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 z-20 p-0">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-xl leading-tight">
            What&apos;s <span className="text-blue-400">New</span>?
          </h2>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="flex flex-wrap gap-4 mb-8">
        {['Total Users', 'Active Users', 'Email Unverified', 'Mobile Unverified'].map((title, i) => (
          <Card
            key={i}
            className="flex-grow basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)] rounded-xl shadow border-0"
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-blue-400" />
                <CardTitle className="text-base font-medium">
                  {title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xl sm:text-2xl font-semibold">
                100
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sub Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subStats.map((stat, idx) => (
          <Card
            key={idx}
            className={`relative flex flex-col justify-between h-36 sm:h-40 lg:h-48 overflow-hidden rounded-xl shadow-sm border-0 ${glassShade}`}
          >
            <CardContent className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6">
              <div>
                <div className="text-xl sm:text-2xl font-bold mb-1">
                  {stat.value}
                </div>
                {stat.label && (
                  <div className="text-sm sm:text-base text-black mb-2">
                    {stat.label}
                  </div>
                )}
              </div>
              {stat.viewAll && (
                <div className="flex justify-end">
                  <button
                    className="flex items-center gap-1 text-sm sm:text-base text-blue-400 font-medium hover:underline"
                    type="button"
                  >
                    View All
                    <ArrowDownRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AdminDash
