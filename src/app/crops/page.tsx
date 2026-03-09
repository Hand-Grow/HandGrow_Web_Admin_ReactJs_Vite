'use client';


import { CropCard } from '@/components/admin/crop-card';
import { CropDetailModal } from '@/components/admin/enhanced-modals';
import { AdminHeader } from '@/components/admin/header';
import { MetricCard } from '@/components/admin/metric-card';
import { AddCropModal } from '@/components/admin/modals';
import { Button } from '@/components/ui/button';
import { cropCategories, crops } from '@/lib/mock-data/crops';
import { Crop } from '@/lib/types/crops';
import { DashboardMetric } from '@/lib/types/dashboard';
import { useState } from 'react';


export default function CropsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAddCropModalOpen, setIsAddCropModalOpen] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const metricsData: DashboardMetric[] = [
    {
      id: 'area',
      title: 'Tổng diện tích',
      value: '45.7',
      unit: 'ha',
      change: 0,
      changeDirection: 'neutral',
      icon: 'leaf',
      backgroundColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      id: 'cost',
      title: 'Tổng chi phí',
      value: '₫513M',
      change: 0,
      changeDirection: 'neutral',
      icon: 'dollar',
      backgroundColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      id: 'yield',
      title: 'Sản lượng dự kiến',
      value: '298',
      unit: 'tấn',
      change: 0,
      changeDirection: 'neutral',
      icon: 'box',
      backgroundColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
    },
    {
      id: 'location',
      title: 'Vùng miền',
      value: '5',
      change: 0,
      changeDirection: 'neutral',
      icon: 'leaf',
      backgroundColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
  ];

  const handleAddCrop = (data: any) => {
    console.log('Added crop:', data);
    // Handle adding crop to list
  };

  return (
    <>
      <AdminHeader
        title="Quản lý mùa vụ"
        description="Theo dõi và quản lý tất cả mùa vụ trên hệ thống"
        action={{
          label: 'Thêm mùa vụ',
          onClick: () => setIsAddCropModalOpen(true),
        }}
      />

      <AddCropModal
        isOpen={isAddCropModalOpen}
        onClose={() => setIsAddCropModalOpen(false)}
        onSubmit={handleAddCrop}
      />

      {selectedCrop && (
        <CropDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => {
            setIsDetailModalOpen(false);
            setSelectedCrop(null);
          }}
          crop={selectedCrop}
        />
      )}

      <div className="p-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metricsData.map((metric) => (
            <MetricCard key={metric.id} {...metric} />
          ))}
        </div>

        {/* Category Tabs */}
        <div className="bg-white rounded-lg p-4 mb-8 border border-gray-200">
          <div className="flex gap-2 flex-wrap">
            {cropCategories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                className={selectedCategory === cat.id ? 'bg-emerald-600' : ''}
              >
                {cat.name} ({cat.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop) => (
            <div key={crop.id} onClick={() => {
              setSelectedCrop(crop);
              setIsDetailModalOpen(true);
            }}>
              <CropCard
                crop={crop}
                onAction={() => {
                  setSelectedCrop(crop);
                  setIsDetailModalOpen(true);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
