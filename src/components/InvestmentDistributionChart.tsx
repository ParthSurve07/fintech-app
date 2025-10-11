"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const data = [
  { name: "Tech", value: 4500, percentage: "45%" },
  { name: "Healthcare", value: 2000, percentage: "20%" },
  { name: "Energy", value: 1000, percentage: "10%" },
  { name: "Others", value: 1000, percentage: "10%" },
  { name: "Finance", value: 1500, percentage: "15%" },
];

const COLORS = ["#70a1ff", "#2ed573", "#ffa502", "#ff6348", "#1e90ff"];

type TooltipProps = {
  active?: boolean;
  payload?: { payload: { name: string; value: number; percentage: string } }[];
};

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, percentage } = payload[0].payload;
    return (
      <div className="rounded-lg border border-gray-800 bg-gray-800/80 shadow-lg p-3 min-w-[160px] backdrop-blur text-blue-200">
        <div className="font-semibold">{name}</div>
        <div className="text-gray-200">
          Value: <span className="font-bold">${value.toLocaleString()}</span>
        </div>
        <div className="text-gray-400">Share: {percentage}</div>
      </div>
    );
  }
  return null;
};

export function InvestmentDistributionChart() {
  return (
    <Card className="w-full h-96 bg-gray-900 border border-gray-800 text-white shadow-2xl py-4 flex flex-col gap-3 transition-all duration-300 hover:scale-[1.01]">
      <CardHeader className="pb-2 flex-shrink-0">
        <CardTitle className="text-xl font-bold text-sky-200 drop-shadow-md tracking-wide">
          Investment Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex items-center justify-center pt-2 pb-2">
        <ResponsiveContainer width="92%" height="92%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={95}
              fill="#70a1ff"
              paddingAngle={3}
              stroke="none"
              dataKey="value"
              labelLine={false}
              label={({ name, percentage }) => (
                <tspan
                  fill="#EFF6FF"
                  fontSize="13"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {`${name} (${percentage})`}
                </tspan>
              )}
              isAnimationActive={true}
              animationDuration={900}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  className="transition duration-300 hover:opacity-90"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              align="center"
              verticalAlign="bottom"
              iconType="circle"
              iconSize={14}
              wrapperStyle={{
                color: "#d1d5db",
                fontSize: "1rem",
                marginBottom: "-10px",
                marginTop: "16px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
