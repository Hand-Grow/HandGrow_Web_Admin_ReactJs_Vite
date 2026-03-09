import { StatusType } from './common';

export interface DashboardMetric {
  id: string;
  title: string;
  value: number | string;
  unit?: string;
  change: number;
  changeDirection: 'up' | 'down' | 'neutral';
  icon: 'users' | 'alert' | 'checkmark' | 'water' | 'leaf' | 'box' | 'trending' | 'dollar';
  backgroundColor: string;
  textColor: string;
}

export interface ChartDataPoint {
  date: string;
  revenue?: number;
  profit?: number;
  orders?: number;
  users?: number;
  completed?: number;
  pending?: number;
  cancelled?: number;
}

export interface PieChartData {
  name: string;
  value: number;
  color: string;
}

export interface DashboardSummary {
  metrics: DashboardMetric[];
  chartData: ChartDataPoint[];
  pieData: PieChartData[];
}
