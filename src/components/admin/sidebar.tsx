'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItem {
  label: string;
  href: string;
  icon: string;
}

const sidebarItems: SidebarItem[] = [
  { label: 'Trang chủ', href: '/', icon: '🏠' },
  { label: 'Người dùng', href: '/users', icon: '👥' },
  { label: 'Quản lý mùa vụ', href: '/crops', icon: '🌾' },
  { label: 'Marketplace', href: '/marketplace', icon: '🛒' },
  { label: 'Thống kê', href: '/analytics', icon: '📊' },
  { label: 'Cảnh báo', href: '/alerts', icon: '🔔' },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-48 bg-linear-to-b from-emerald-50 to-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100">
          <span className="text-xl font-bold text-emerald-600">HG</span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-emerald-100 text-emerald-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              )}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          © HandGrow 2024
        </div>
      </div>
    </aside>
  );
}
