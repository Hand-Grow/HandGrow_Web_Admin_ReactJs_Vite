'use client';

import { Crop } from "@/lib/types/crops";
 import { cn } from "@/lib/utils";
import { Button } from "../ui/button";


interface CropCardProps {
  crop: Crop;
  onAction?: (cropId: string) => void;
}

const statusColors = {
  active: 'bg-green-50 border-green-200',
  archived: 'bg-gray-50 border-gray-200',
  planning: 'bg-blue-50 border-blue-200',
};

const statusLabels = {
  active: 'Hoạt động',
  archived: 'Lưu trữ',
  planning: 'Lập kế hoạch',
};

export function CropCard({ crop, onAction }: CropCardProps) {
  const progressColor =
    crop.progress < 33 ? 'bg-red-500' : crop.progress < 66 ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <div
      className={cn(
        'rounded-lg border p-6 bg-white transition-shadow hover:shadow-lg',
        statusColors[crop.status]
      )}
    >
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{crop.name}</h3>
            <p className="text-sm text-gray-600">{crop.owner}</p>
          </div>
          <span
            className={cn(
              'px-3 py-1 rounded-full text-xs font-medium text-white',
              crop.status === 'active'
                ? 'bg-green-500'
                : crop.status === 'planning'
                  ? 'bg-blue-500'
                  : 'bg-gray-500'
            )}
          >
            {statusLabels[crop.status]}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="text-gray-600">Diện tích</p>
          <p className="font-semibold text-gray-900">{crop.area} ha</p>
        </div>
        <div>
          <p className="text-gray-600">Địa điểm</p>
          <p className="font-semibold text-gray-900">{crop.location}</p>
        </div>
        <div>
          <p className="text-gray-600">Chi phí</p>
          <p className="font-semibold text-gray-900">
            ₫{(crop.costTotal / 1000000).toFixed(1)}M
          </p>
        </div>
        <div>
          <p className="text-gray-600">Sản lượng dự kiến</p>
          <p className="font-semibold text-gray-900">{crop.expectedYield} tấn</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-gray-600">Tiến độ</p>
          <p className="text-xs font-semibold text-gray-900">{crop.progress}%</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={cn('h-full rounded-full transition-all', progressColor)}
            style={{ width: `${crop.progress}%` }}
          />
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          Xem chi tiết
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          Nhật ký
        </Button>
      </div>
    </div>
  );
}
