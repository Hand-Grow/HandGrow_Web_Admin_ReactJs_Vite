'use client';

import { useState } from 'react';
import { Button } from '../ui/button';

interface AdminHeaderProps {
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function AdminHeader({ title, description, action }: AdminHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {description && (
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          )}
        </div>
        {action && (
          <Button
            onClick={action.onClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            {action.label}
          </Button>
        )}
      </div>
    </div>
  );
}
