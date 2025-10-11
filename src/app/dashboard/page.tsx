import { HoldingsCard } from "@/components/HoldingsCard";
import { InvestedAmountCard } from "@/components/InvestedAmountCard";
import { InvestmentDistributionChart } from "@/components/InvestmentDistributionChart";
import { PerformanceTrendChart } from "@/components/PerformanceTrendChart";
import { PortfolioValueCard } from "@/components/PortfolioValueCard";
import { ProfitLossCard } from "@/components/ProfitLossCard";
import { RecentTransactionsTable } from "@/components/RecentTransactionsTable";

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
      <div className="flex px-4 gap-4">
        <InvestmentDistributionChart />
        <PerformanceTrendChart />
      </div>
      <div className="p-4">
        <RecentTransactionsTable />
      </div>
    </div>
  )
}