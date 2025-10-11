import { ArrowUp, ArrowDown, Wallet } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming shadcn/ui setup

// PROPS for the component to make it dynamic
interface PortfolioValueCardProps {
  currentValue: number;
  changeAmount: number;
  changePercentage: number;
  isPositive: boolean;
}

export function PortfolioValueCard({
  currentValue,
  changeAmount,
  changePercentage,
  isPositive,
}: PortfolioValueCardProps) {
  // Determine styles and icons based on performance
  const statusColor = isPositive ? "text-emerald-400" : "text-red-500";
  const Icon = isPositive ? ArrowUp : ArrowDown;
  const sign = isPositive ? "+" : "-";

  // Format numbers for display
  const formattedValue = currentValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedChangeAmount = changeAmount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Card className="w-full max-w-md bg-gray-900 border-gray-800 text-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-400">
          Total Portfolio Value
        </CardTitle>
        <Wallet className="h-5 w-5 text-violet-400" />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">{formattedValue}</div>
        <p className={`text-xs flex items-center gap-1 pt-1 ${statusColor}`}>
          <Icon className="h-3 w-3" />
          <span>
            {sign}
            {formattedChangeAmount} ({sign}
            {changePercentage}%) vs. last month
          </span>
        </p>
      </CardContent>
    </Card>
  );
}

// --- EXAMPLE USAGE in another component ---
/*
<PortfolioValueCard
  currentValue={158900}
  changeAmount={18900}
  changePercentage={13.5}
  isPositive={true}
/>
*/