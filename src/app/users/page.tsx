'use client';

import { DataTable } from '@/components/admin/data-table';
import { UserDetailModal } from '@/components/admin/enhanced-modals';
import { AdminHeader } from '@/components/admin/header';
import { AddUserModal } from '@/components/admin/modals';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { userFilters, users } from '@/lib/mock-data/users';
import { User } from '@/lib/types/users';
import { cn } from '@/lib/utils';
import { useState } from 'react';


export default function UsersPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      header: 'Người dùng',
      accessor: 'name' as const,
      render: (value: string, row: User) => (
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white',
              row.backgroundColor
            )}
          >
            {row.icon}
          </div>
          <div>
            <p className="font-medium text-gray-900">{value}</p>
            <p className="text-xs text-gray-500">ID: #{row.id.replace('user-', '')}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Loại',
      accessor: 'type' as const,
      render: (value: string) => (
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {value}
        </span>
      ),
    },
    {
      header: 'Địa điểm',
      accessor: 'location' as const,
    },
    {
      header: 'Diện tích',
      accessor: 'landArea' as const,
      render: (value?: number) => (
        <span>{value ? `${value} ha` : '-'}</span>
      ),
    },
    {
      header: 'Ngày tham gia',
      accessor: 'joinDate' as const,
    },
    {
      header: 'Trạng thái',
      accessor: 'status' as const,
      render: (value: string) => (
        <span
          className={cn(
            'px-2 py-1 rounded-full text-xs font-medium',
            value === 'active'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          )}
        >
          {value === 'active' ? 'Hoạt động' : 'Không hoạt động'}
        </span>
      ),
    },
    {
      header: 'Thao tác',
      accessor: 'id' as const,
      render: (value: string, row: User) => (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setSelectedUser(row);
            setIsDetailModalOpen(true);
          }}
        >
          Xem chi tiết
        </Button>
      ),
    },
  ];

  const handleAddUser = (data: any) => {
    console.log('Added user:', data);
    // Handle adding user to list
  };

  return (
    <>
      <AdminHeader
        title="Quản lý người dùng"
        description="Quản lý tất cả người dùng trên nền tảng HandGrow"
        action={{
          label: 'Thêm người dùng',
          onClick: () => setIsAddUserModalOpen(true),
        }}
      />

      <AddUserModal
        isOpen={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
        onSubmit={handleAddUser}
      />

      {selectedUser && (
        <UserDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => {
            setIsDetailModalOpen(false);
            setSelectedUser(null);
          }}
          user={selectedUser}
        />
      )}

      <div className="p-8">
        {/* Filter Tabs */}
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex gap-2 flex-wrap">
            {userFilters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                variant={selectedFilter === filter.id ? 'default' : 'outline'}
                className={selectedFilter === filter.id ? 'bg-emerald-600' : ''}
              >
                {filter.label} ({filter.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <Input
            placeholder="Tìm kiếm theo tên, địa điểm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Data Table */}
        <DataTable columns={columns} data={filteredUsers} />
      </div>
    </>
  );
}
