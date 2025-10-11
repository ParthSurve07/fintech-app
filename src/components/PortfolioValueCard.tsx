import { ArrowUp } from "lucide-react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" 

const chartData = [
  { day: "2025-10-01", value: 12345 },
  { day: "2025-10-02", value: 12800 },
  { day: "2025-10-03", value: 12750 },
  { day: "2025-10-04", value: 13100 },
  { day: "2025-10-05", value: 13500 },
  { day: "2025-10-06", value: 14050 },
  { day: "2025-10-07", value: 14521 },
];


export function PortfolioValueCard() {
  return (
    <Card className="w-full max-w-md bg-gray-900 border-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-gray-400 font-medium">
          Total Portfolio Value
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-end gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-4xl font-bold tracking-tight">$14,521.00</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
              <ArrowUp className="-ml-0.5 mr-0.5 h-4 w-4" />
              13.5%
            </span>
            <span className="text-sm text-gray-400">vs. last month</span>
          </div>
        </div>
        <div className="h-20 w-[40%]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>

              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-1 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Value
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {`$${payload[0].value?.toLocaleString()}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
                cursor={{ stroke: "#a1a1aa", strokeWidth: 1, strokeDasharray: "3 3" }}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#chartGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}