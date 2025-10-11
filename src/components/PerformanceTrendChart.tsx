'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming shadcn/ui setup

// --- FAKE DATA FOR DEMONSTRATION ---
const performanceData = [
  { month: 'Jan', value: 10000 },
  { month: 'Feb', value: 12000 },
  { month: 'Mar', value: 15000 },
  { month: 'Apr', value: 14000 },
  { month: 'May', value: 17000 },
  { month: 'Jun', value: 19000 },
  { month: 'Jul', value: 22000 },
  { month: 'Aug', value: 21000 },
  { month: 'Sep', value: 24000 },
  { month: 'Oct', value: 27000 },
  { month: 'Nov', value: 30000 },
  { month: 'Dec', value: 32000 },
];

// Custom Tooltip for the Area Chart
const CustomAreaChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm text-sm">
        <p className="font-bold text-gray-200">{`Month: ${label}`}</p>
        <p className="text-muted-foreground">{`Value: $${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

export function PerformanceTrendChart() {
  return (
    <Card className="w-full h-96 bg-gray-900 border-gray-800 text-white transition-all duration-300 hover:scale-[1.01]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-200">
          Performance Trend
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-60px)] pb-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={performanceData}
            margin={{
              top: 10, right: 10, left: -20, bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="#4a5568" tickLine={false} axisLine={false} />
            <YAxis stroke="#4a5568" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} axisLine={false} tickLine={false} />
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#2d3748" />
            <Tooltip content={<CustomAreaChartTooltip />} />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}