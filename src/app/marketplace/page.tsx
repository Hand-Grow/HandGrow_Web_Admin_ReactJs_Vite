'use client';

import { AdminHeader } from "@/components/admin/header";
import { MetricCard } from "@/components/admin/metric-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { marketplaceMetrics, marketplaceOrders } from "@/lib/mock-data/marketplace";
import { DashboardMetric } from "@/lib/types/dashboard";
import { OrderStatus } from "@/lib/types/marketplace";
 import { cn } from "@/lib/utils";
import { useState } from "react";


export default function MarketplacePage() {
  const [selectedStatus, setSelectedStatus] = useState(OrderStatus.ALL);
  const [searchTerm, setSearchTerm] = useState('');

  const statusFilters = [
    { label: 'Tất cả', value: OrderStatus.ALL, count: marketplaceMetrics.totalOrders },
    { label: 'Chờ xử lý', value: OrderStatus.PENDING, count: marketplaceMetrics.pendingOrders },
    {
      label: 'Đã duyệt',
      value: OrderStatus.PROCESSING,
      count: 1,
    },
    { label: 'Hoàn thành', value: OrderStatus.COMPLETED, count: marketplaceMetrics.completedOrders },
    { label: 'Đã hủy', value: OrderStatus.CANCELLED, count: 0 },
  ];

  const metricsData: DashboardMetric[] = [
    {
      id: 'orders',
      title: 'Tổng đơn hàng',
      value: marketplaceMetrics.totalOrders,
      change: 0,
      changeDirection: 'neutral',
      icon: 'box',
      backgroundColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      id: 'pending',
      title: 'Chờ xử lý',
      value: marketplaceMetrics.pendingOrders,
      change: 0,
      changeDirection: 'neutral',
      icon: 'alert',
      backgroundColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
    },
    {
      id: 'completed',
      title: 'Hoàn thành',
      value: marketplaceMetrics.completedOrders,
      change: 0,
      changeDirection: 'neutral',
      icon: 'checkmark',
      backgroundColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      id: 'revenue',
      title: 'Doanh thu',
      value: `₫${(marketplaceMetrics.totalRevenue / 1000000).toFixed(1)}M`,
      change: 0,
      changeDirection: 'neutral',
      icon: 'dollar',
      backgroundColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
  ];

  const filteredOrders = marketplaceOrders.filter((order) => {
    const matchesStatus = selectedStatus === OrderStatus.ALL || order.status === selectedStatus;
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.seller.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <>
      <AdminHeader
        title="Marketplace B2B"
        description="Quản lý giao dịch mua bán trên nền tảng"
      />

      <div className="p-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metricsData.map((metric) => (
            <MetricCard key={metric.id} {...metric} />
          ))}
        </div>

        {/* Status Tabs */}
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex gap-2 flex-wrap">
            {statusFilters.map((filter) => (
              <Button
                key={filter.value}
                onClick={() => setSelectedStatus(filter.value)}
                variant={selectedStatus === filter.value ? 'default' : 'outline'}
                className={selectedStatus === filter.value ? 'bg-emerald-600' : ''}
              >
                {filter.label} ({filter.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <Input
            placeholder="Tìm kiếm theo mã đơn, người mua, người bán..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Mã đơn hàng
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Người dùng bán
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Người dùng mua
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Sản phẩm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Số lượng
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Giá trị
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{order.seller}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{order.buyer}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{order.product.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {order.quantity} {order.unit}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      ₫{(order.totalPrice / 1000000).toFixed(1)}M
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={cn(
                          'px-3 py-1 rounded-full text-xs font-medium text-white',
                          order.statusColor === 'green'
                            ? 'bg-green-500'
                            : order.statusColor === 'yellow'
                              ? 'bg-yellow-500'
                              : order.statusColor === 'blue'
                                ? 'bg-blue-500'
                                : 'bg-gray-500'
                        )}
                      >
                        {order.status === OrderStatus.COMPLETED
                          ? 'Hoàn thành'
                          : order.status === OrderStatus.PENDING
                            ? 'Chờ xử lý'
                            : 'Đang giao'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Xem
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
