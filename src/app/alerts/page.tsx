'use client';

import { AlertCard } from "@/components/admin/alert-card";
import { AdminHeader } from "@/components/admin/header";
import { Button } from "@/components/ui/button";
import { alertCategories, alerts } from "@/lib/mock-data/alerts";
import { useState } from "react";



export default function AlertsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [alertsList, setAlertsList] = useState<AlertType[]>(alerts);

  const handleAction = (alertId: string) => {
    console.log('Action on alert:', alertId);
  };

  return (
    <>
      <AdminHeader
        title="Cảnh báo & Hỗ trợ"
        description="Quản lý cảnh báo và yêu cầu hỗ trợ từ nông dân"
      />

      <div className="p-8">
        {/* Category Tabs */}
        <div className="bg-white rounded-lg p-4 mb-8 border border-gray-200">
          <div className="flex gap-2 flex-wrap">
            {alertCategories.map((cat) => (
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

        {/* Alerts List */}
        <div className="space-y-4">
          {alertsList.map((alert) => (
            <AlertCard
              key={alert.id}
              alert={alert}
              onAction={handleAction}
            />
          ))}
        </div>
      </div>
    </>
  );
}
