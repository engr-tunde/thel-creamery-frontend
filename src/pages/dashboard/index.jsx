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
    <div className="h-screen bg-gray p-6 overflow-y-scroll shadow-md bg-white pt-2 rounded-lg flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Header />
          <Filters />
        </div>
        <MetricsGrid />
      </div>
      <Chart />
      <BestSellerList />
      <RecentTransactionTable />
      <RecentBestSellerTogether />
      {/* <RecentTransaction /> */}
    </div>
  );
};

export default DashboardPage;
