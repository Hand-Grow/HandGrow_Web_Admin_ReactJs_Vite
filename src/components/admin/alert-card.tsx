'use client';

import { Alert } from '@/lib/types/alerts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AlertCardProps {
  alert: Alert;
  onAction?: (alertId: string) => void;
}

const priorityColors = {
  urgent: 'border-red-500 bg-red-50',
  high: 'border-orange-500 bg-orange-50',
  medium: 'border-yellow-500 bg-yellow-50',
  low: 'border-blue-500 bg-blue-50',
};

const priorityBadgeColors = {
  urgent: 'bg-red-100 text-red-800',
  high: 'bg-orange-100 text-orange-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-blue-100 text-blue-800',
};

const priorityLabels = {
  urgent: 'Cao',
  high: 'Cao',
  medium: 'Trung bình',
  low: 'Thấp',
};

export function AlertCard({ alert, onAction }: AlertCardProps) {
  return (
    <div
      className={cn(
        'border-l-4 rounded-lg p-6 bg-white',
        priorityColors[alert.priority]
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {alert.title}
            </h3>
            <span
              className={cn(
                'text-xs font-medium px-2 py-1 rounded',
                priorityBadgeColors[alert.priority]
              )}
            >
              {alert.priority === 'urgent' ? 'Đang hoạt động' : alert.priority}
            </span>
          </div>
          <p className="text-sm text-gray-700 mb-3">{alert.description}</p>

          <div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
            {alert.location && (
              <div>
                <span className="font-medium">Địa điểm:</span> {alert.location}
              </div>
            )}
            {alert.affectedPeople && (
              <div>
                <span className="font-medium">Người bị ảnh hưởng:</span>{' '}
                {alert.affectedPeople.toLocaleString('vi-VN')} người
              </div>
            )}
            <div>
              <span className="font-medium">Tạo lúc:</span> {alert.createdAt}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant="default"
          size="sm"
          className="bg-emerald-600 hover:bg-emerald-700"
          onClick={() => onAction?.(alert.id)}
        >
          Gửi thông báo
        </Button>
        <Button variant="outline" size="sm">
          Xem chi tiết
        </Button>
      </div>
    </div>
  );
}
