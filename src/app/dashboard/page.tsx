'use client'

import { PortfolioValueCard } from "@/components/PortfolioValueCard";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import { ArrowUp } from "lucide-react";

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts"

const chartData = [
  { day: "2025-10-01", value: 12345 },
  { day: "2025-10-02", value: 12800 },
  { day: "2025-10-03", value: 12750 },
  { day: "2025-10-04", value: 13100 },
  { day: "2025-10-05", value: 13500 },
  { day: "2025-10-06", value: 14050 },
  { day: "2025-10-07", value: 14521 },
];

export default function Dashboard() {
  return (
    <div>
      <div className="flex p-4 gap-4">
        <PortfolioValueCard />
        <PortfolioValueCard />
        <PortfolioValueCard />
        <PortfolioValueCard />
      </div>
      <div>
        pie chart and bar graph
      </div>
    </div>
  )
}