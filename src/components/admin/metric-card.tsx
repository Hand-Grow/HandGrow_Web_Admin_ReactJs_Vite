'use client';

import { DashboardMetric } from "@/lib/types/dashboard";
 import { cn } from "@/lib/utils";


interface MetricCardProps extends DashboardMetric {}

const iconMap: Record<string, string> = {
  users: '👥',
  alert: '⚠️',
  checkmark: '✅',
  water: '💧',
  leaf: '🌿',
  box: '📦',
  trending: '📈',
  dollar: '💵',
};

export function MetricCard({
  title,
  value,
  unit,
  change,
  changeDirection,
  icon,
  backgroundColor,
  textColor,
}: MetricCardProps) {
  const displayIcon = iconMap[icon] || '📊';
  const isPositive = changeDirection === 'up';

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600">{title}</p>
          <div className="mt-2">
            <p className={cn('text-2xl font-bold', textColor)}>
              {value}
              {unit && <span className="text-lg ml-1">{unit}</span>}
            </p>
          </div>
          {change !== 0 && (
            <p
              className={cn(
                'text-xs mt-2 font-medium',
                isPositive ? 'text-green-600' : 'text-red-600'
              )}
            >
              {isPositive ? '↑' : '↓'} {Math.abs(change)}% so với tháng trước
            </p>
          )}
        </div>
        <div className={cn('rounded-lg p-3 text-xl', backgroundColor)}>
          {displayIcon}
        </div>
      </div>
    </div>
  );
}
