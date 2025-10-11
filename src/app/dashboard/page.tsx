import { HoldingsCard } from "@/components/HoldingsCard";
import { InvestedAmountCard } from "@/components/InvestedAmountCard";
import { PortfolioValueCard } from "@/components/PortfolioValueCard";
import { ProfitLossCard } from "@/components/ProfitLossCard";

export default function Dashboard() {
  return (
    <div>
      <div className="flex p-4 gap-4">
        <PortfolioValueCard
          currentValue={158900}
          changeAmount={18900}
          changePercentage={13.5}
          isPositive={true}
        />
        <InvestedAmountCard />
        <ProfitLossCard />
        <HoldingsCard />
      </div>
      <div>
        pie chart and bar graph
      </div>
    </div>
  )
}