import { AdminHeader } from '@/components/admin/header';
import { RevenueChart, PieChartComponent, BarChartComponent, LineChartComponent } from '@/components/admin/charts';
import { chartData, pieData, dashboardMetrics } from '@/lib/mock-data/dashboard';
import { MetricCard } from '@/components/admin/metric-card';

export const metadata = {
  title: 'Thống kê - HandGrow Admin',
  description: 'Phân tích dữ liệu chi tiết của hệ thống',
};

const marketplaceData = [
  { month: 'T1', orders: 150, revenue: 450, profit: 280 },
  { month: 'T2', orders: 200, revenue: 580, profit: 380 },
  { month: 'T3', orders: 280, revenue: 720, profit: 490 },
  { month: 'T4', orders: 350, revenue: 890, profit: 620 },
  { month: 'T5', orders: 420, revenue: 1050, profit: 750 },
  { month: 'T6', orders: 510, revenue: 1200, profit: 890 },
];

const categoryPerformance = [
  { category: 'Nông sản chính', orders: 450 },
  { category: 'Rau quả', orders: 380 },
  { category: 'Thực phẩm chế biến', orders: 320 },
  { category: 'Nông cụ', orders: 280 },
  { category: 'Phân bón', orders: 240 },
];

export default function AnalyticsPage() {
  return (
    <>
      <AdminHeader
        title="Thống kê & Báo cáo"
        description="Phân tích hiệu suất và xu hướng của nền tảng"
      />

      <div className="p-8">
        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardMetrics.map((metric) => (
            <MetricCard key={metric.id} {...metric} />
          ))}
        </div>

        {/* Primary Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <RevenueChart data={chartData} />
          </div>
          <div>
            <PieChartComponent data={pieData} />
          </div>
        </div>

        {/* Analytics Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <LineChartComponent
            data={marketplaceData}
            title="Hiệu suất Marketplace (6 tháng)"
            xKey="month"
            lines={[
              { key: 'orders', color: '#10b981', name: 'Số đơn hàng' },
              { key: 'revenue', color: '#3b82f6', name: 'Doanh thu (M)' },
            ]}
          />
          <BarChartComponent
            data={categoryPerformance}
            title="Hiệu suất theo danh mục"
            xKey="category"
            yKey="orders"
          />
        </div>
      </div>
    </>
  );
}
