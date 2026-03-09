import { BarChartComponent, LineChartComponent, PieChartComponent, RevenueChart } from "../components/admin/charts";
import { AdminHeader } from "../components/admin/header";
import { MetricCard } from "../components/admin/metric-card";
import { chartData, dashboardMetrics, pieData } from "../lib/mock-data/dashboard";

export const metadata = {
  title: 'Dashboard - HandGrow Admin',
  description: 'Quản lý nông nghiệp thông minh',
};

const userGrowthData = [
  { month: 'Tháng 1', users: 1200, active: 900 },
  { month: 'Tháng 2', users: 1500, active: 1100 },
  { month: 'Tháng 3', users: 1800, active: 1350 },
  { month: 'Tháng 4', users: 2200, active: 1650 },
  { month: 'Tháng 5', users: 2600, active: 1950 },
  { month: 'Tháng 6', users: 3100, active: 2350 },
];

const cropYieldData = [
  { crop: 'Lúa', yield: 450 },
  { crop: 'Ngô', yield: 380 },
  { crop: 'Sắn', yield: 320 },
  { crop: 'Dâu tây', yield: 280 },
  { crop: 'Cà phê', yield: 220 },
];

export default function AdminDashboard() {
  return (
    <>
      <AdminHeader
        title="Tổng quan hệ thống"
        description="Thống kê và hoạt động của nền tảng HandGrow"
      />

      <div className="p-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardMetrics.map((metric) => (
            <MetricCard key={metric.id} {...metric} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <RevenueChart data={chartData} />
          </div>
          <div>
            <PieChartComponent data={pieData} />
          </div>
        </div>

        {/* Additional Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChartComponent
            data={userGrowthData}
            title="Tăng trưởng người dùng"
            xKey="month"
            lines={[
              { key: 'users', color: '#10b981', name: 'Tổng người dùng' },
              { key: 'active', color: '#3b82f6', name: 'Người dùng hoạt động' },
            ]}
          />
          <BarChartComponent
            data={cropYieldData}
            title="Sản lượng cây trồng (tấn/ha)"
            xKey="crop"
            yKey="yield"
          />
        </div>
      </div>
    </>
  );
}
