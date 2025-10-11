import { PiggyBank } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; 

export function InvestedAmountCard() {
  return (
    <Card className="w-full max-w-md bg-gray-900 border-gray-800 text-white transition-all duration-300 hover:scale-[1.01]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-400">
          Total Invested Amount
        </CardTitle>
        <PiggyBank className="h-5 w-5 text-blue-400" />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">$140,000</div>
        <p className="text-xs text-gray-500 pt-1">
          Initial capital deployed
        </p>
      </CardContent>
    </Card>
  );
}