import Chart from "../../component/dashboard/Chart";
import Filters from "../../component/dashboard/Filters";
import Header from "../../component/dashboard/Header";
import MetricsGrid from "../../component/dashboard/MetricGrid";
import RecentBestSellerTogether from "../../component/dashboard/RecentBestSellerTogether";
import RecentTransaction from "../../component/dashboard/RecentTransaction";
import RecentTransactionTable from "../../component/dashboard/RecentTransactionTable";
import BestSellerList from "../../component/dashboard/BestSellerList";

 const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray p-6">
      <Header />
      <Filters />
      <MetricsGrid />
      <Chart />
      <BestSellerList />
      <RecentTransactionTable />
      <RecentBestSellerTogether />
      <RecentTransaction />
    </div>
  );
}

export default DashboardPage
