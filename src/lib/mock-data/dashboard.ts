import { DashboardMetric, ChartDataPoint, PieChartData, DashboardSummary } from '@/lib/types/dashboard';

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: 'alerts',
    title: 'Cảnh báo hoạt động',
    value: 4,
    change: 0,
    changeDirection: 'neutral',
    icon: 'alert',
    backgroundColor: 'bg-red-50',
    textColor: 'text-red-600',
  },
  {
    id: 'active-orders',
    title: 'Chờ xử lý',
    value: 1,
    change: 0,
    changeDirection: 'neutral',
    icon: 'box',
    backgroundColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
  },
  {
    id: 'users',
    title: 'Người dùng bị ảnh hưởng',
    value: '3,801',
    change: 0,
    changeDirection: 'neutral',
    icon: 'users',
    backgroundColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    id: 'resolved',
    title: 'Đã xử lý hôm nay',
    value: 12,
    change: 100,
    changeDirection: 'up',
    icon: 'checkmark',
    backgroundColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
];

export const chartData: ChartDataPoint[] = [
  { date: '17/2023', revenue: 350, profit: 200 },
  { date: '18/2023', revenue: 400, profit: 250 },
  { date: '19/2023', revenue: 500, profit: 300 },
  { date: '10/2023', revenue: 700, profit: 450 },
  { date: '11/2023', revenue: 1000, profit: 700 },
  { date: '12/2023', revenue: 1200, profit: 950 },
  { date: '1/2024', revenue: 1350, profit: 1100 },
];

export const pieData: PieChartData[] = [
  { name: 'Hoàn thành', value: 45, color: '#10b981' },
  { name: 'Đang xử lý', value: 30, color: '#3b82f6' },
  { name: 'Chờ xử lý', value: 15, color: '#f59e0b' },
  { name: 'Hủy', value: 10, color: '#6b7280' },
];

export const dashboardSummary: DashboardSummary = {
  metrics: dashboardMetrics,
  chartData: chartData,
  pieData: pieData,
};
