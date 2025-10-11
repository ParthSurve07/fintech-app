import { TrendingUp, TrendingDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; 

export function ProfitLossCard({ isProfit = true }) {
  const amount = isProfit ? "+$18,900" : "-$2,345";
  const percentage = isProfit ? "+13.5%" : "-2.1%";
  const textColor = isProfit ? "text-emerald-400" : "text-red-500";
  const Icon = isProfit ? TrendingUp : TrendingDown;

  return (
    <Card className="w-full max-w-md bg-gray-900 border-gray-800 text-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-400">
          Profit / Loss
        </CardTitle>
        <Icon className={`h-5 w-5 ${textColor}`} />
      </CardHeader>
      <CardContent>
        <div className={`text-4xl font-bold ${textColor}`}>{amount}</div>
        <p className={`text-sm ${textColor} pt-1`}>
          {percentage} all time
        </p>
      </CardContent>
    </Card>
  );
}